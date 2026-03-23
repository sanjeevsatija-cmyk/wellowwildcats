import Link from "next/link";

const PROGRAMS = [
  { num:"01", icon:"🌟", tag:"Ages 5–10",         name:"Cricket Blast",      href:"/programs/cricket-blast",      color:"bg-green-dark",
    desc:"Introductory training program for kids aged 5–10. No matches — just fun skills-based cricket." },
  { num:"02", icon:"⚡", tag:"Ages 7–12",          name:"RCI Trebles",        href:"/programs/rci-trebles",        color:"bg-green-dark",
    desc:"Modified 20-over match play where every player bats the same balls and bowls equal overs." },
  { num:"03", icon:"🏏", tag:"Divisional Cricket", name:"Junior Cricket",     href:"/programs/junior-cricket",     color:"bg-green-dark",
    desc:"Competitive BEARS divisional cricket. One-day and two-day formats with shared batting and bowling." },
  { num:"05", icon:"🏢", tag:"U/12–U/16 · Adults", name:"Warehouse Cricket", href:"/programs/warehouse-cricket",  color:"bg-green-dark",
    desc:"Winter 2026 indoor cricket. Junior & senior Saturdays plus fortnightly Sunday senior competitions." },
  { num:"04", icon:"🏆", tag:"Adults & Masters (35+)", name:"Senior Cricket", href:"/programs/senior-cricket",     color:"bg-green-dark",
    desc:"QSDCA Saturday turf competition. 1st, 2nd, 3rd Grade and Masters XI. Season September – March." },
];

export default function ProgramsGrid() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="section-label">Get Involved</div>
        <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-black text-green-dark leading-[1.1] mb-3">
          Programs for Every Age
        </h2>
        <p className="text-[14px] md:text-[15px] text-wello-grey max-w-[600px] leading-[1.7] mb-8 md:mb-12">
          From five-year-olds picking up a bat for the first time, through to senior and Masters cricket.
        </p>

        {/* Mobile: stacked cards | Tablet: 2-col | Desktop: 5-col strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-lg overflow-hidden shadow-programs">
          {PROGRAMS.map((p) => (
            <Link key={p.num} href={p.href}
              className={`relative flex flex-col p-6 md:p-9 min-h-[200px] md:min-h-[290px] no-underline text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:z-10 border-b border-white/[0.08] lg:border-b-0 lg:border-r last:border-0 group ${p.color}`}>
              <div className="absolute top-3 right-4 font-serif text-[48px] md:text-[62px] font-black text-gold/10 group-hover:text-gold/18 leading-none transition-colors pointer-events-none select-none">
                {p.num}
              </div>
              <div className="text-[24px] md:text-[30px] mb-3 md:mb-5 relative z-10">{p.icon}</div>
              <div className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1 md:mb-2 relative z-10">{p.tag}</div>
              <div className="font-serif text-[18px] md:text-[21px] font-bold text-white leading-[1.2] mb-2 md:mb-3 relative z-10">{p.name}</div>
              <div className="text-[12px] md:text-[13px] text-white/60 leading-[1.65] flex-1 relative z-10">{p.desc}</div>
              <div className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-gold mt-3 md:mt-5 relative z-10">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
