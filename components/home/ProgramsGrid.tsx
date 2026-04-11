import Link from "next/link";

const PROGRAMS = [
  {
    name: "Cricket Blast",
    watermark: "BLAST",
    emoji: "🌟",
    ages: "Ages 5–8",
    desc: "First taste of cricket — bats, balls and big smiles! Designed for the littlest Wildcats.",
    href: "/programs/cricket-blast",
    bg: "#2A6B2A",
  },
  {
    name: "RCI Trebles",
    watermark: "TREB",
    emoji: "⚡",
    ages: "Ages 8–11",
    desc: "Building skills, making friends and loving the game in our junior development pathway.",
    href: "/programs/rci-trebles",
    bg: "#1D4A1D",
  },
  {
    name: "Girls Cricket",
    watermark: "GIRLS",
    emoji: "👧",
    ages: "All ages",
    desc: "A welcoming, fun and competitive team for girls who love the game.",
    href: "/programs/girls-cricket",
    bg: "#8B1A1A",
  },
  {
    name: "Junior Cricket",
    watermark: "JNRS",
    emoji: "🏏",
    ages: "Ages 10–16",
    desc: "Compete at district level with BEARS and grow as a player every season.",
    href: "/programs/junior-cricket",
    bg: "#142E14",
  },
  {
    name: "Senior Cricket",
    watermark: "SNRS",
    emoji: "🏆",
    ages: "17+",
    desc: "QSDCA competition cricket across all grades — new players always welcome.",
    href: "/programs/senior-cricket",
    bg: "#0D1F0D",
  },
  {
    name: "Winter Cricket",
    watermark: "WIN",
    emoji: "🏢",
    ages: "Winter season",
    desc: "Year-round cricket so you never have a dull off-season. Fun for everyone.",
    href: "/programs/warehouse-cricket",
    bg: "#1a4a7a",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="bg-cream py-20 px-5 md:px-14">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div
          className="inline-flex items-center gap-2 mb-3"
          style={{ fontFamily:"'Raleway',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#C9A030" }}
        >
          <span style={{ display:"block", width:24, height:2, background:"#C9A030" }} />
          Pathways for every player
        </div>
        <h2
          className="font-serif leading-tight mb-3"
          style={{ fontSize:"clamp(32px,4vw,52px)", color:"#142E14" }}
        >
          Find Your <em className="not-italic text-gold">Perfect</em> Program
        </h2>
        <p
          className="mb-12"
          style={{ fontFamily:"'Barlow',sans-serif", fontSize:16, color:"#666", maxWidth:480, lineHeight:1.6 }}
        >
          Whether you&apos;re 5 or 55, brand new or a seasoned batter — we&apos;ve got your spot.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <Link key={p.href} href={p.href} className="no-underline group">
              <div
                className="bg-white overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-programs"
                style={{ borderRadius:16 }}
              >
                {/* Card header */}
                <div className="relative overflow-hidden" style={{ background: p.bg, padding:"28px 24px 22px" }}>
                  {/* Watermark */}
                  <div
                    className="absolute pointer-events-none select-none"
                    style={{ right:-8, bottom:-10, fontFamily:"'DM Serif Display',serif", fontSize:68, fontWeight:900, color:"rgba(255,255,255,0.10)", lineHeight:1 }}
                  >
                    {p.watermark}
                  </div>
                  <span style={{ fontSize:32, marginBottom:10, display:"block" }}>{p.emoji}</span>
                  <div className="font-serif text-white leading-tight relative z-10" style={{ fontSize:22 }}>
                    {p.name}
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding:"16px 24px 22px" }}>
                  <div
                    className="mb-1.5"
                    style={{ fontFamily:"'Raleway',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#C9A030" }}
                  >
                    {p.ages}
                  </div>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, color:"#666", lineHeight:1.55 }}>
                    {p.desc}
                  </p>
                  <div
                    className="inline-flex items-center mt-3 transition-all duration-200 group-hover:gap-2.5"
                    style={{ fontFamily:"'Raleway',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#142E14", gap:6 }}
                  >
                    Learn more →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
