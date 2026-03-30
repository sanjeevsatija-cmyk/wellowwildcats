import Link from "next/link";

const JUNIOR_PROGRAMS = [
  { icon:"🌟", tag:"Ages 5–10",         name:"Cricket Blast",  href:"/programs/cricket-blast",
    desc:"Introductory training for kids aged 5–10. No matches — just fun skills-based cricket." },
  { icon:"⚡", tag:"Ages 7–12",          name:"RCI Trebles",    href:"/programs/rci-trebles",
    desc:"Modified 20-over match play. Every player bats and bowls equally." },
  { icon:"🏏", tag:"Divisional Cricket", name:"Junior Cricket", href:"/programs/junior-cricket",
    desc:"Competitive BEARS divisional cricket. One-day and two-day formats." },
  { icon:"👧", tag:"Girls · All Ages",   name:"Girls Cricket",  href:"/programs/girls-cricket",
    desc:"A dedicated program for girls to participate, develop and thrive in cricket." },
];

const ADULT_PROGRAMS = [
  { icon:"🏢", tag:"U/12–U/16 · Adults",    name:"Warehouse Cricket", href:"/programs/warehouse-cricket",
    desc:"Winter 2026 cricket. Junior & senior Saturdays plus fortnightly Sunday competitions." },
  { icon:"🏆", tag:"Adults & Masters (35+)", name:"Senior Cricket",    href:"/programs/senior-cricket",
    desc:"QSDCA Saturday turf competition. 1st, 2nd, 3rd Grade and Masters XI." },
];

function ProgramCard({ p, bg }: { p: typeof JUNIOR_PROGRAMS[0]; bg: string }) {
  return (
    <Link
      href={p.href}
      className={`relative flex flex-col p-6 md:p-8 min-h-[200px] md:min-h-[240px] no-underline text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:z-10 group ${bg}`}
    >
      <div className="text-[26px] md:text-[30px] mb-3 relative z-10">{p.icon}</div>
      <div className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1 relative z-10">{p.tag}</div>
      <div className="font-serif text-[18px] md:text-[20px] font-bold text-white leading-[1.2] mb-2 relative z-10">{p.name}</div>
      <div className="text-[12px] md:text-[13px] text-white/60 leading-[1.65] flex-1 relative z-10">{p.desc}</div>
      <div className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-gold mt-4 relative z-10">
        Learn more →
      </div>
    </Link>
  );
}

export default function ProgramsGrid() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="section-label">Get Involved</div>
        <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-black text-green-dark leading-[1.1] mb-3">
          Programs for Every Age
        </h2>
        <p className="text-[14px] md:text-[15px] text-wello-grey max-w-[600px] leading-[1.7] mb-10 md:mb-14">
          From five-year-olds picking up a bat for the first time, through to senior and Masters cricket.
        </p>

        {/* Kids & Juniors */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">For Kids &amp; Juniors</span>
            <div className="flex-1 h-px bg-grey-light" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden shadow-programs">
            {JUNIOR_PROGRAMS.map((p) => (
              <ProgramCard key={p.name} p={p} bg="bg-green-dark" />
            ))}
          </div>
        </div>

        {/* Adults */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">For Adults</span>
            <div className="flex-1 h-px bg-grey-light" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg overflow-hidden shadow-programs">
            {ADULT_PROGRAMS.map((p) => (
              <ProgramCard key={p.name} p={p} bg="bg-green-deep" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
