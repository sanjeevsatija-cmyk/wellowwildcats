const SPONSORS = [
  { name:"Manny's Italian",       type:"Restaurant",          icon:"🍝", href:"https://www.mannysitalian.com.au/",    tier:"platinum" },
  { name:"Punjab Curry Club",     type:"Restaurant",          icon:"🍛", href:"https://punjabcurryclub.com.au/",      tier:"platinum" },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", icon:"🏠", href:"https://mortgagefinanceguru.com.au/",  tier:"platinum" },
  { name:"Cricket Gurus",         type:"Cricket Equipment",   icon:"🏏", href:"https://www.cricketgurus.com.au/",     tier:"gold" },
  { name:"LG Wealth",             type:"Financial Services",  icon:"💼", href:"https://lgwealth.com.au/",             tier:"gold" },
];

export default function SponsorsGrid() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-3">
          <div>
            <div className="section-label">Our Partners</div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-black text-green-dark leading-[1.1]">
              Proudly Supported By
            </h2>
          </div>
          <a href="/sponsors#become"
            className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-green-dark no-underline border border-green-dark px-4 py-2 rounded hover:bg-green-pale transition-all whitespace-nowrap">
            Become a Sponsor
          </a>
        </div>

        {/* Platinum row */}
        <div className="mb-4">
          <div className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-3">Platinum Sponsors</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SPONSORS.filter(s => s.tier === "platinum").map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-deep border border-gold/20 hover:border-gold rounded-lg px-5 py-4 no-underline transition-all hover:-translate-y-0.5 group">
                <div className="text-2xl flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="font-condensed text-[12px] font-bold text-white leading-tight">{s.name}</div>
                  <div className="font-condensed text-[9px] text-white/40 uppercase tracking-[0.08em]">{s.type}</div>
                </div>
                <span className="ml-auto font-condensed text-[9px] font-bold tracking-[0.08em] uppercase bg-[#E5E4E2] text-charcoal px-1.5 py-0.5 rounded flex-shrink-0">Platinum</span>
              </a>
            ))}
          </div>
        </div>

        {/* Gold row */}
        <div className="mb-6">
          <div className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-3">Gold Sponsors</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SPONSORS.filter(s => s.tier === "gold").map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-cream border border-grey-light hover:border-gold rounded-lg px-5 py-4 no-underline transition-all hover:-translate-y-0.5 group">
                <div className="text-2xl flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="font-condensed text-[12px] font-bold text-charcoal leading-tight">{s.name}</div>
                  <div className="font-condensed text-[9px] text-wello-grey uppercase tracking-[0.08em]">{s.type}</div>
                </div>
                <span className="ml-auto font-condensed text-[9px] font-bold tracking-[0.08em] uppercase bg-yellow-400 text-charcoal px-1.5 py-0.5 rounded flex-shrink-0">Gold</span>
              </a>
            ))}
            <a href="/sponsors#become"
              className="flex items-center justify-center gap-2 border border-dashed border-grey-light hover:border-gold rounded-lg px-5 py-4 no-underline transition-all group">
              <span className="text-xl text-wello-grey group-hover:text-green-dark">＋</span>
              <span className="font-condensed text-[11px] font-bold tracking-[0.06em] uppercase text-wello-grey group-hover:text-green-dark">Your Business Here</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
