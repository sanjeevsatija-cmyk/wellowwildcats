const SPONSORS = [
  { name:"Manny's Italian",       type:"Restaurant",          icon:"🍝", href:"https://www.mannysitalian.com.au/",      tier:"platinum" },
  { name:"Punjab Curry Club",     type:"Restaurant",          icon:"🍛", href:"https://punjabcurryclub.com.au/",        tier:"platinum" },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", icon:"🏠", href:"https://mortgagefinanceguru.com.au/",    tier:"platinum" },
  { name:"Cricket Gurus",         type:"Cricket Equipment",   icon:"🏏", href:"https://www.cricketgurus.com.au/",       tier:"gold" },
  { name:"LG Wealth",             type:"Financial Services",  icon:"💼", href:"https://lgwealth.com.au/",               tier:"gold" },
];

export default function SponsorsGrid() {
  return (
    <section className="py-[70px] px-12 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="section-label">Our Partners</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-black text-green-dark leading-[1.1]">
              Proudly Supported By
            </h2>
          </div>
          <a href="/sponsors#become"
            className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-green-dark no-underline border border-[1.5px] border-green-dark px-4 py-2.5 rounded transition-all duration-200 hover:bg-green-pale">
            Become a Sponsor
          </a>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns:"repeat(6,1fr)" }}>
          {SPONSORS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              className={`relative flex flex-col items-center gap-3 p-6 rounded-[6px] text-center no-underline transition-all duration-200 hover:-translate-y-0.5 cursor-pointer col-span-2 ${
                s.tier === "platinum"
                  ? "bg-green-deep border border-green-dark hover:border-gold"
                  : "bg-cream border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.15)] hover:bg-white"
              }`}>
              <div className={`absolute top-0 right-0 font-condensed text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-bl ${
                s.tier === "platinum" ? "bg-[#E5E4E2] text-charcoal" : "bg-yellow-400 text-charcoal"
              }`}>
                {s.tier === "platinum" ? "Platinum" : "Gold"}
              </div>
              <div className={`w-[70px] h-[50px] rounded flex items-center justify-center text-[22px] ${
                s.tier === "platinum" ? "bg-white/12 text-gold" : "bg-green-deep/[0.08] text-green-dark"
              }`}>
                {s.icon}
              </div>
              <div className={`font-condensed text-[13px] font-bold tracking-[0.04em] leading-snug ${s.tier === "platinum" ? "text-white" : "text-charcoal"}`}>
                {s.name}
              </div>
              <div className={`font-condensed text-[10px] font-medium tracking-[0.06em] uppercase ${s.tier === "platinum" ? "text-white/45" : "text-wello-grey"}`}>
                {s.type}
              </div>
            </a>
          ))}

          <a href="/sponsors#become"
            className="col-span-1 flex flex-col items-center justify-center gap-2.5 p-6 rounded-[6px] border border-dashed border-grey-light no-underline text-center transition-all duration-200 hover:border-gold hover:bg-gold-pale cursor-pointer group">
            <div className="text-[28px] text-wello-grey group-hover:text-green-dark transition-colors">＋</div>
            <div className="font-condensed text-[11px] font-bold tracking-[0.06em] uppercase text-wello-grey group-hover:text-green-dark transition-colors">
              Your Business Here
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
