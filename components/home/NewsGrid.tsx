const NEWS = [
  { cat:"Match Report", date:"9 Mar 2026",  title:"1sts Dominate in Round 14 Victory",
    excerpt:"A dominant display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic win.", href:"/news/1sts-win-round-14" },
  { cat:"Club News",    date:"1 Mar 2026",  title:"Winter 2026 Registrations Open",
    excerpt:"Warehouse Cricket winter registrations are now open. Fixtures start Saturday 2nd May.", href:"/news/junior-registrations-open" },
  { cat:"Junior News",  date:"25 Feb 2026", title:"BEARS U17 Qualify for Finals",
    excerpt:"The U17 BEARS team secured a finals berth after a strong final round performance.", href:"/news/bears-u17-finals" },
];

const CAT_COLORS: Record<string, string> = {
  "Match Report":"bg-green-dark",
  "Club News":"bg-gold text-green-deep",
  "Junior News":"bg-blue-600",
};

export default function NewsGrid() {
  const [featured, ...rest] = NEWS;
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-cream">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-3">
          <div>
            <div className="section-label">Latest</div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-black text-green-dark leading-[1.1]">
              News & Reports
            </h2>
          </div>
          <a href="/news" className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-green-dark no-underline border border-green-dark px-4 py-2 rounded hover:bg-green-pale transition-all whitespace-nowrap">
            All News & Resources →
          </a>
        </div>

        {/* Mobile: stacked | Desktop: asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-5">
          {/* Featured */}
          <a href={featured.href} className="no-underline group block rounded-lg overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200 bg-white">
            <div className="bg-green-deep h-[180px] md:h-[220px] flex items-center justify-center relative">
              <span className="text-[56px] md:text-[72px]">🏏</span>
              <div className="absolute top-3 left-3">
                <span className={`font-condensed text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded text-white ${CAT_COLORS[featured.cat] || "bg-green-dark"}`}>
                  {featured.cat}
                </span>
              </div>
            </div>
            <div className="p-5 md:p-7">
              <div className="font-condensed text-[10px] text-wello-grey tracking-[0.08em] mb-2">{featured.date}</div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-charcoal mb-2 group-hover:text-green-dark transition-colors leading-snug">{featured.title}</h3>
              <p className="text-[13px] text-wello-grey leading-[1.65]">{featured.excerpt}</p>
            </div>
          </a>

          {/* Smaller cards */}
          {rest.map(n => (
            <a key={n.title} href={n.href} className="no-underline group block rounded-lg overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200 bg-white">
              <div className="bg-green-dark h-[120px] flex items-center justify-center relative">
                <span className="text-[40px]">🏏</span>
                <div className="absolute top-3 left-3">
                  <span className={`font-condensed text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded text-white ${CAT_COLORS[n.cat] || "bg-green-dark"}`}>
                    {n.cat}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="font-condensed text-[10px] text-wello-grey tracking-[0.08em] mb-1.5">{n.date}</div>
                <h3 className="font-serif text-[16px] font-bold text-charcoal mb-2 group-hover:text-green-dark transition-colors leading-snug">{n.title}</h3>
                <p className="text-[12px] text-wello-grey leading-[1.6]">{n.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
