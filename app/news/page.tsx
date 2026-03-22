import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Match Reports",
  description: "Latest news, match reports and club announcements from Wellington Point Cricket Club.",
};

export const revalidate = 3600;

const CATEGORY_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  matchReport:  { bg: "bg-green-dark",  text: "text-gold",       label: "Match Report" },
  clubNews:     { bg: "bg-[#1a3a6b]",   text: "text-blue-300",   label: "Club News" },
  event:        { bg: "bg-[#4a1d1d]",   text: "text-red-300",    label: "Event" },
  juniorNews:   { bg: "bg-[#1b4a2b]",   text: "text-green-300",  label: "Junior News" },
  registration: { bg: "bg-[#3a2a1b]",   text: "text-amber-300",  label: "Registration" },
};

// Static placeholder posts — will be replaced with Sanity data
const POSTS = [
  { slug: "1sts-win-round-14", category: "matchReport", date: "1 Mar 2025",
    title: "1sts Secure Dominant Win in Round 14 — Wildcats Move to Third",
    excerpt: "A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at Mooroondu Road." },
  { slug: "season-registrations-open", category: "registration", date: "22 Feb 2025",
    title: "Season 2025/26 Registrations Now Open",
    excerpt: "Early bird registrations are now open for all grades. Returning and new players encouraged to sign on early to secure your spot." },
  { slug: "junior-presentation-night", category: "event", date: "15 Feb 2025",
    title: "Junior Presentation Night — Save the Date",
    excerpt: "Our annual junior presentation night is set for Friday 28 March. All families welcome — a great night to celebrate our young players." },
  { slug: "u17-bears-representative", category: "juniorNews", date: "10 Feb 2025",
    title: "Four Wildcats Selected for BEARS Representative Squad",
    excerpt: "Congratulations to the four players selected to represent the Redlands zone in the BEARS representative squad for the 2024/25 season." },
  { slug: "new-sponsor-cricket-gurus", category: "clubNews", date: "5 Feb 2025",
    title: "Welcome New Sponsor — Cricket Gurus",
    excerpt: "We are thrilled to welcome Cricket Gurus as an official equipment partner of the Wello Wildcats for the 2024/25 season." },
  { slug: "2nds-ground-win", category: "matchReport", date: "25 Jan 2025",
    title: "2nds Grind Out Important Win at Home",
    excerpt: "The 2nd Grade side produced a disciplined performance to secure a hard-fought victory at Mooroondu Road, strengthening their finals position." },
];

export default function NewsPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="From the Club"
          title="News & Match Reports"
          subtitle="Match reports, club announcements, junior news and everything happening at Wello Wildcats."
        />

        <SectionWrapper className="bg-cream">
          {/* Featured post */}
          <div className="mb-10">
            <div className="section-label">Latest</div>
          </div>
          <Link href={`/news/${featured.slug}`}
            className="block bg-white rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] mb-12 no-underline group transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 md:grid md:grid-cols-[2fr_3fr]">
            <div className={`${CATEGORY_STYLES[featured.category].bg} flex items-center justify-center min-h-[240px]`}>
              <span className="text-7xl">🏏</span>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className={`inline-block font-condensed text-[11px] font-bold tracking-[0.15em] uppercase ${CATEGORY_STYLES[featured.category].text} mb-3`}>
                {CATEGORY_STYLES[featured.category].label}
              </span>
              <h2 className="font-serif text-[28px] font-bold text-charcoal leading-[1.25] mb-4 group-hover:text-green-dark transition-colors">
                {featured.title}
              </h2>
              <p className="text-[15px] text-wello-grey leading-[1.7] mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-condensed text-xs font-semibold tracking-[0.1em] uppercase text-wello-grey">{featured.date}</span>
                <span className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors">Read Report →</span>
              </div>
            </div>
          </Link>

          {/* Category filter pills */}
          <div className="flex gap-3 flex-wrap mb-10">
            {["All", "Match Reports", "Club News", "Events", "Junior News"].map((cat) => (
              <button key={cat} className={`font-condensed text-xs font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                cat === "All"
                  ? "bg-green-dark text-white border-green-dark"
                  : "bg-white text-wello-grey border-grey-light hover:border-green-dark hover:text-green-dark"
              }`}>{cat}</button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => {
              const style = CATEGORY_STYLES[post.category];
              const emojis: Record<string, string> = { matchReport: "🏏", clubNews: "📢", event: "🎉", juniorNews: "⭐", registration: "📝" };
              return (
                <Link key={post.slug} href={`/news/${post.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] no-underline group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col">
                  <div className={`${style.bg} h-[140px] flex items-center justify-center text-[40px]`}>
                    {emojis[post.category] || "📰"}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`font-condensed text-[10px] font-bold tracking-[0.14em] uppercase ${style.text.replace("text-","text-")} mb-2`} style={{color: post.category === "matchReport" ? "#C9A030" : undefined}}>
                      {style.label}
                    </span>
                    <h3 className="font-serif text-[18px] font-bold text-charcoal leading-[1.3] mb-3 group-hover:text-green-dark transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-wello-grey leading-[1.6] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-condensed text-[11px] text-wello-grey tracking-[0.08em] uppercase">{post.date}</span>
                      <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors">Read More →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
