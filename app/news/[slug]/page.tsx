import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "News Article" };
export const revalidate = 3600;

// Placeholder — will be replaced with Sanity fetch
const POST = {
  title: "1sts Secure Dominant Win in Round 14 — Wildcats Move to Third on the Ladder",
  date: "Saturday, 1 March 2025",
  category: "Match Report",
  author: "Club Secretary",
  body: [
    "A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at Mooroondu Road on Saturday.",
    "Opening the batting, the top order put on a masterclass display of controlled aggression, building a platform that allowed the lower order to press hard in the final overs. The innings was built on partnerships with three batters reaching half-centuries.",
    "With the ball, the Wildcats were relentless from the first over. The opening bowlers struck early and the middle order batters of the opposition never recovered. The tail offered little resistance as the home side wrapped up the innings with 8 overs to spare.",
    "The win moves the Wildcats into third position on the QSDCA ladder with four rounds remaining in the regular season. The team will be looking to consolidate their finals position next Saturday.",
    "Coach's comment: 'It was a complete team performance today. Everybody contributed and it was exactly what we needed at this stage of the season. The boys are in good form and confidence is high.'",
  ],
  relatedPosts: [
    { slug: "season-registrations-open", title: "Season 2025/26 Registrations Now Open", date: "22 Feb 2025", category: "Registration" },
    { slug: "junior-presentation-night", title: "Junior Presentation Night — Save the Date", date: "15 Feb 2025", category: "Event" },
  ],
};

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-green-deep overflow-hidden py-16 px-12">
          <div className="absolute rounded-full border border-gold/10 animate-slow-rotate pointer-events-none"
            style={{ width: 600, height: 400, top: -180, right: -120 }} />
          <div className="grain-overlay" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <Link href="/news" className="inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[0.15em] uppercase text-gold/70 hover:text-gold no-underline mb-6 transition-colors">
              ← Back to News
            </Link>
            <div className="inline-block font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-gold border border-gold/30 px-3 py-1 rounded mb-4">
              {POST.category}
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.1] mb-6">
              {POST.title}
            </h1>
            <div className="flex items-center gap-6 font-condensed text-xs tracking-[0.1em] uppercase text-white/50">
              <span>📅 {POST.date}</span>
              <span>✍️ {POST.author}</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-12 bg-cream">
          <div className="max-w-[800px] mx-auto">
            {/* Image placeholder */}
            <div className="w-full h-[320px] rounded-lg bg-green-dark flex items-center justify-center mb-10 text-[72px]">
              🏏
            </div>

            {/* Body text */}
            <article className="prose-custom">
              {POST.body.map((para, i) => (
                <p key={i} className="text-[16px] text-charcoal leading-[1.85] mb-6 font-sans">
                  {para}
                </p>
              ))}
            </article>

            {/* Share / back */}
            <div className="border-t border-grey-light mt-12 pt-8 flex items-center justify-between">
              <Link href="/news"
                className="btn-secondary" style={{ color: "#1D4A1D", borderColor: "#1D4A1D" }}>
                ← All News
              </Link>
              <div className="flex gap-3">
                <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                  className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-wello-grey border border-grey-light px-4 py-2 rounded no-underline hover:border-gold hover:text-gold transition-all">
                  Share on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section className="py-16 px-12 bg-white">
          <div className="max-w-[800px] mx-auto">
            <div className="section-label">More from the Club</div>
            <h2 className="font-serif text-[28px] font-black text-green-dark mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {POST.relatedPosts.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`}
                  className="bg-cream rounded-lg p-6 no-underline group hover:bg-green-pale transition-colors">
                  <div className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-gold mb-2">{p.category}</div>
                  <div className="font-serif text-[18px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-[1.3] mb-3">{p.title}</div>
                  <div className="font-condensed text-[11px] text-wello-grey tracking-[0.08em] uppercase">{p.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
