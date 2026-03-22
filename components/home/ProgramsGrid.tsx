import Link from "next/link";

const PROGRAMS = [
  {
    num:"01", icon:"🌟", tag:"Ages 5–10", name:"Cricket Blast",
    href:"/programs/cricket-blast", featured:false,
    desc:"An introductory program for young players aged 5–10 who have never played cricket before. Skills-based training in a fun, relaxed environment — no games, just learning the basics of batting, bowling and fielding.",
  },
  {
    num:"02", icon:"⚡", tag:"Ages 7–12", name:"RCI Trebles",
    href:"/programs/rci-trebles", featured:false,
    desc:"The next step after Cricket Blast. Modified 20-over match play where every player bats the same number of balls and bowls the same number of overs. Scores are not recorded on PlayHQ — this is structured development cricket.",
  },
  {
    num:"03", icon:"🏏", tag:"Divisional Cricket", name:"BEARS Junior Cricket",
    href:"/programs/bears-cricket", featured:true,
    desc:"Competitive divisional cricket through the Bayside East & Redlands Cricket Association (BEARS). One-day and two-day formats with 50 overs per day — batting and bowling shared equally across the team.",
  },
  {
    num:"04", icon:"🏆", tag:"Adults & Masters (35+)", name:"Senior Cricket",
    href:"/programs/senior-cricket", featured:false,
    desc:"QSDCA Saturday turf competition. Multiple grades from 1st through to 3rd Grade and a Masters XI for players 35 and over. Season runs September through to March.",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-20 px-12 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="section-label">Get Involved</div>
        <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-black text-green-dark leading-[1.1] mb-3">
          Programs for Every Age
        </h2>
        <p className="text-[15px] text-wello-grey max-w-[600px] leading-[1.7] mb-12">
          From five-year-olds picking up a bat for the first time, through to senior competition
          and Masters cricket — there&apos;s a place at Wello Wildcats for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden shadow-programs">
          {PROGRAMS.map((p) => (
            <Link key={p.num} href={p.href}
              className={`relative flex flex-col p-9 min-h-[290px] no-underline text-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:z-10 border-r border-white/[0.08] last:border-r-0 group ${
                p.featured ? "bg-green-deep" : "bg-green-dark"
              }`}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                p.featured ? "bg-gradient-to-br from-green-dark to-green-deep" : "bg-gradient-to-br from-green-mid to-green-dark"
              }`} />
              <div className="absolute top-4 right-5 font-serif text-[62px] font-black text-gold/10 group-hover:text-gold/18 leading-none transition-colors duration-300 pointer-events-none select-none">
                {p.num}
              </div>
              <div className="text-[30px] mb-5 relative z-10">{p.icon}</div>
              <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-2 relative z-10">{p.tag}</div>
              <div className="font-serif text-[21px] font-bold text-white leading-[1.2] mb-3 relative z-10">{p.name}</div>
              <div className="text-[13px] text-white/60 leading-[1.65] flex-1 relative z-10">{p.desc}</div>
              <div className="inline-flex items-center gap-1.5 font-condensed text-xs font-bold tracking-[0.1em] uppercase text-gold mt-5 relative z-10 transition-all duration-200 group-hover:gap-2.5">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
