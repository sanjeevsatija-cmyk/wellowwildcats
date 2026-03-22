import Link from "next/link";

const NEWS = [
  { tag:"Match Report", date:"Saturday, 1 March 2025",  type:"match",
    title:"1sts Secure Dominant Win in Round 14 — Wildcats Move to Third on Ladder",
    excerpt:"A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at Mooroondu Road. Great team effort all round.",
    featured: true },
  { tag:"Club News",    date:"22 February 2025",         type:"event",
    title:"Season 2025/26 Registrations Now Open",
    excerpt:"Early bird registrations are now open for all grades. Returning and new players encouraged to sign on early to secure your spot.",
    featured: false },
  { tag:"Event",        date:"15 February 2025",         type:"club",
    title:"Junior Presentation Night — Save the Date",
    excerpt:"Our annual junior presentation night is set for Friday 28 March. All families welcome — a great night to celebrate our young players.",
    featured: false },
];

const TYPE_BG: Record<string, string> = {
  match: "from-green-dark to-green-deep",
  event: "from-[#1a3a6b] to-[#0d2040]",
  club:  "from-[#4a1d1d] to-[#2d1010]",
};
const TYPE_EMOJI: Record<string, string> = { match: "🏏", event: "📢", club: "🎉" };

export default function NewsGrid() {
  return (
    <section className="py-20 px-12 bg-cream">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-end mb-9">
          <div>
            <div className="section-label">Latest</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-black text-green-dark leading-[1.1]">
              News &amp; Match Reports
            </h2>
          </div>
          <Link href="/news" className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-green-dark no-underline hover:text-gold transition-colors">
            All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-6 items-start">
          {NEWS.map((n, i) => (
            <Link key={i} href="/news"
              className={`bg-white rounded-[6px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover no-underline flex flex-col`}>
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className={`w-full flex items-center justify-center bg-gradient-to-br ${TYPE_BG[n.type]} text-[${n.featured ? "52px" : "36px"}]`}
                  style={{ height: n.featured ? 220 : 140, fontSize: n.featured ? 52 : 36 }}>
                  {TYPE_EMOJI[n.type]}
                </div>
                <div className="absolute bottom-3 left-3 bg-gold text-green-deep font-condensed text-[10px] font-extrabold tracking-[0.14em] uppercase px-2.5 py-1 rounded-[3px]">
                  {n.tag}
                </div>
              </div>
              {/* Body */}
              <div className="p-[20px_22px_24px] flex flex-col flex-1">
                <div className="font-condensed text-[11px] font-semibold text-wello-grey tracking-[0.08em] uppercase mb-2">{n.date}</div>
                <div className={`font-serif font-bold text-charcoal leading-[1.3] mb-2.5 ${n.featured ? "text-[22px]" : "text-[18px]"}`}>{n.title}</div>
                <div className="text-[13.5px] text-wello-grey leading-[1.65] flex-1">{n.excerpt}</div>
                <div className="inline-flex items-center gap-1.5 font-condensed text-xs font-bold tracking-[0.1em] uppercase text-green-dark mt-4">
                  {n.featured ? "Read Report" : "Read More"} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
