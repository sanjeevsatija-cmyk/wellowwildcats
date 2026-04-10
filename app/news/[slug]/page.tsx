import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/lib/sanity.image";
import { NEWS_POST_QUERY, ALL_NEWS_QUERY, NEWS_SLUGS_QUERY } from "@/lib/sanity.queries";
import type { Metadata } from "next";

export const revalidate = 3600;

// ─── Static params for pre-rendering ─────────────────────────────────────────
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(NEWS_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await client.fetch(NEWS_POST_QUERY, { slug: params.slug });
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-AU", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(NEWS_POST_QUERY, { slug: params.slug });

  if (!post) notFound();

  // Fetch 2 other recent posts for the related section (excluding current)
  const allPosts = await client.fetch(ALL_NEWS_QUERY);
  const relatedPosts = allPosts
    .filter((p: any) => p.slug?.current !== params.slug)
    .slice(0, 2);

  // Resolve featured image URL if set
  const heroImageUrl = post.featuredImage?.asset
    ? urlForImage(post.featuredImage).width(1200).height(640).url()
    : null;

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-green-deep overflow-hidden py-16 px-6 md:px-12">
          <div className="absolute rounded-full border border-gold/10 animate-slow-rotate pointer-events-none"
            style={{ width: 600, height: 400, top: -180, right: -120 }} />
          <div className="grain-overlay" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <Link href="/news"
              className="inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[0.15em] uppercase text-gold/70 hover:text-gold no-underline mb-6 transition-colors">
              ← Back to News
            </Link>
            {post.category && (
              <div className="inline-block font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-gold border border-gold/30 px-3 py-1 rounded mb-4">
                {post.category}
              </div>
            )}
            <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 font-condensed text-xs tracking-[0.1em] uppercase text-white/50">
              {post.publishedAt && <span>📅 {formatDate(post.publishedAt)}</span>}
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="py-16 px-6 md:px-12 bg-cream">
          <div className="max-w-[800px] mx-auto">

            {/* Featured image — from Sanity if set, otherwise green placeholder */}
            {heroImageUrl ? (
              <div className="relative w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden mb-10">
                <Image
                  src={heroImageUrl}
                  alt={post.featuredImage?.alt ?? post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-[320px] rounded-lg bg-green-dark flex items-center justify-center mb-10 text-[72px]">
                🏏
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-[17px] text-charcoal leading-[1.85] mb-8 font-sans font-semibold border-l-4 border-gold pl-5">
                {post.excerpt}
              </p>
            )}

            {/* Body — Sanity portable text rendered as paragraphs */}
            <article className="prose-custom">
              {Array.isArray(post.body) ? (
                post.body.map((block: any, i: number) => {
                  // Handle standard paragraph blocks
                  if (block._type === "block" && block.style === "normal") {
                    const text = block.children?.map((c: any) => c.text).join("") ?? "";
                    if (!text.trim()) return null;
                    return (
                      <p key={i} className="text-[16px] text-charcoal leading-[1.85] mb-6 font-sans">
                        {text}
                      </p>
                    );
                  }
                  // Handle headings
                  if (block._type === "block" && block.style === "h2") {
                    const text = block.children?.map((c: any) => c.text).join("") ?? "";
                    return (
                      <h2 key={i} className="font-serif text-[24px] font-black text-green-dark mt-10 mb-4">
                        {text}
                      </h2>
                    );
                  }
                  if (block._type === "block" && block.style === "h3") {
                    const text = block.children?.map((c: any) => c.text).join("") ?? "";
                    return (
                      <h3 key={i} className="font-serif text-[20px] font-black text-green-dark mt-8 mb-3">
                        {text}
                      </h3>
                    );
                  }
                  return null;
                })
              ) : (
                // Fallback if body is plain text or not set
                <p className="text-[16px] text-charcoal leading-[1.85] mb-6 font-sans">
                  {post.body}
                </p>
              )}
            </article>

            {/* Source attribution for historical articles */}
            <div className="mt-10 p-5 bg-white border border-grey-light rounded-lg">
              <p className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">
                Source
              </p>
              <p className="text-[13px] text-wello-grey font-sans">
                National Library of Australia — Trove Newspaper Archive.
                {" "}<a href="http://nla.gov.au/nla.news-article289114621"
                  target="_blank" rel="noopener noreferrer"
                  className="text-green-dark hover:text-gold no-underline transition-colors">
                  View original article →
                </a>
              </p>
            </div>

            {/* Share / back */}
            <div className="border-t border-grey-light mt-12 pt-8 flex items-center justify-between">
              <Link href="/news" className="btn-secondary" style={{ color: "#1D4A1D", borderColor: "#1D4A1D" }}>
                ← All News
              </Link>
              <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-wello-grey border border-grey-light px-4 py-2 rounded no-underline hover:border-gold hover:text-gold transition-all">
                Share on Facebook
              </a>
            </div>
          </div>
        </section>

        {/* ── Related posts ── */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-white">
            <div className="max-w-[800px] mx-auto">
              <div className="section-label">More from the Club</div>
              <h2 className="font-serif text-[28px] font-black text-green-dark mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((p: any) => (
                  <Link key={p._id} href={`/news/${p.slug?.current}`}
                    className="bg-cream rounded-lg p-6 no-underline group hover:bg-green-pale transition-colors">
                    <div className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-gold mb-2">
                      {p.category}
                    </div>
                    <div className="font-serif text-[18px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-[1.3] mb-3">
                      {p.title}
                    </div>
                    <div className="font-condensed text-[11px] text-wello-grey tracking-[0.08em] uppercase">
                      {p.publishedAt ? formatDate(p.publishedAt) : ""}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
