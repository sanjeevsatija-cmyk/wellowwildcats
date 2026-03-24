import Image from "next/image";

const SPONSORS = [
  { name:"Manny's Italian",       type:"Restaurant",          logo:"/sponsors/mannys.png",      href:"https://www.mannysitalian.com.au/",   tier:"platinum", logoBg:"bg-black" },
  { name:"Punjab Curry Club",     type:"Restaurant",          logo:"/sponsors/punjab.png",       href:"https://punjabcurryclub.com.au/",     tier:"platinum", logoBg:"bg-black" },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", logo:"/sponsors/mortgageguru.png", href:"https://mortgagefinanceguru.com.au/", tier:"platinum", logoBg:"bg-black" },
  { name:"Cricket Gurus",         type:"Cricket Equipment",   logo:"",                           href:"https://www.cricketgurus.com.au/",    tier:"gold",     logoBg:"bg-cream", icon:"🏏" },
  { name:"LG Wealth",             type:"Financial Services",  logo:"/sponsors/lgwealth.png",     href:"https://lgwealth.com.au/",            tier:"gold",     logoBg:"bg-white" },
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

        {/* Platinum */}
        <div className="mb-4">
          <div className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-3">Platinum Sponsors</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SPONSORS.filter(s => s.tier === "platinum").map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="bg-green-deep border border-gold/20 hover:border-gold rounded-lg px-4 py-3 no-underline transition-all hover:-translate-y-0.5 group flex items-center gap-3">
                <div className={`${s.logoBg} rounded p-1.5 flex-shrink-0 w-16 h-10 flex items-center justify-center`}>
                  <Image src={s.logo} alt={s.name} width={56} height={32}
                    className="object-contain max-h-[32px] w-auto" />
                </div>
                <div className="min-w-0">
                  <div className="font-condensed text-[11px] font-bold text-white leading-tight truncate">{s.name}</div>
                  <div className="font-condensed text-[8px] text-white/40 uppercase tracking-[0.08em]">{s.type}</div>
                </div>
                <span className="ml-auto font-condensed text-[8px] font-bold tracking-[0.08em] uppercase bg-[#E5E4E2] text-charcoal px-1.5 py-0.5 rounded flex-shrink-0">Platinum</span>
              </a>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-6">
          <div className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-3">Gold Sponsors</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SPONSORS.filter(s => s.tier === "gold").map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="bg-cream border border-grey-light hover:border-gold rounded-lg px-4 py-3 no-underline transition-all hover:-translate-y-0.5 group flex items-center gap-3">
                <div className={`${s.logoBg} rounded border border-grey-light p-1.5 flex-shrink-0 w-16 h-10 flex items-center justify-center`}>
                  {s.logo ? (
                    <Image src={s.logo} alt={s.name} width={56} height={32}
                      className="object-contain max-h-[32px] w-auto" />
                  ) : (
                    <span className="text-2xl">{s.icon}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-condensed text-[11px] font-bold text-charcoal leading-tight truncate">{s.name}</div>
                  <div className="font-condensed text-[8px] text-wello-grey uppercase tracking-[0.08em]">{s.type}</div>
                </div>
                <span className="ml-auto font-condensed text-[8px] font-bold tracking-[0.08em] uppercase bg-yellow-400 text-charcoal px-1.5 py-0.5 rounded flex-shrink-0">Gold</span>
              </a>
            ))}
            <a href="/sponsors#become"
              className="flex items-center justify-center gap-2 border border-dashed border-grey-light hover:border-gold rounded-lg px-4 py-3 no-underline transition-all group">
              <span className="text-lg text-wello-grey group-hover:text-green-dark">＋</span>
              <span className="font-condensed text-[10px] font-bold tracking-[0.06em] uppercase text-wello-grey group-hover:text-green-dark">Your Business Here</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
