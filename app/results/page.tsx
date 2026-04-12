import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

// winterStatus: "active" | "upcoming" | "summer"
// Flip to "active" for Summer comps when season starts
const hubCompetitions = [
  { association: "Warehouse Cricket Assoc.", name: "Junior Competition",        winterStatus: "active",   dateRange: "7 Feb – 1 Sep 2026",   url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams",                                              headerBg: "#1e3a8a", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Warehouse Cricket Assoc.", name: "Senior Competition",        winterStatus: "active",   dateRange: "7 Feb – 1 Sep 2026",   url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams",                                             headerBg: "#1e3a8a", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Eastern Districts JCA",    name: "Girls Only Junior Sunday",  winterStatus: "upcoming", dateRange: "10 May – 23 Aug 2026", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams",                headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Bayside East & Redlands",  name: "BEARS Junior Divisional",   winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams",                             headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Queensland Sub Districts", name: "QSDCA Competitions",        winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams",                                         headerBg: "#7a5e0a", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Brisbane Metropolitan",    name: "Post Christmas T20 Junior", winterStatus: "summer",   dateRange: "Starting Dec 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams",                    headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Redlands Cricket Inc",     name: "Redlands Trebles",          winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams",                                         headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)" },
  { association: "Community Cricket Champs", name: "Senior Competition",        winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams",                                    headerBg: "#7a5e0a", watermarkColor: "rgba(255,255,255,0.07)" },
];

function StatusBadge({ status, dateRange }: { status: string; dateRange: string }) {
  if (status === "active") return (
    <span className="relative z-10 self-start inline-flex items-center gap-1.5 font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-emerald-600 text-white">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse flex-shrink-0" />
      Active Now
    </span>
  );
  if (status === "upcoming") return (
    <span className="relative z-10 self-start font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-gold text-green-deep">
      Upcoming
    </span>
  );
  return (
    <span className="relative z-10 self-start font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-white/20 text-white/60">
      Summer Season
    </span>
  );
}

function WinterCompCard({ comp }: { comp: typeof hubCompetitions[0] }) {
  return (
    <a
      href={comp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_16px_40px_rgba(201,160,48,0.14)] transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col no-underline"
    >
      {/* Coloured header with watermark */}
      <div className="relative flex items-flex-end p-4 overflow-hidden" style={{ background: comp.headerBg, minHeight: 100 }}>
        <span
          className="absolute bottom-1 left-3 font-serif font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 44, color: comp.watermarkColor, lineHeight: 1, whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}
        >
          {comp.name.split(" ").slice(0, 2).join(" ")}
        </span>
        <StatusBadge status={comp.winterStatus} dateRange={comp.dateRange} />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-1">{comp.association}</p>
        <h3 className="font-serif text-[16px] font-bold text-green-dark leading-snug mb-2">{comp.name}</h3>
        <span className="font-condensed text-[9px] bg-cream border border-grey-light rounded-full px-2 py-0.5 text-wello-grey self-start mb-4">{comp.dateRange}</span>
        <div className="mt-auto">
          <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors">
            View Teams on PlayHQ →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ResultsPage() {
  const winterComps = hubCompetitions.filter(c => c.winterStatus !== "summer");
  const summerComps = hubCompetitions.filter(c => c.winterStatus === "summer");

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        {/* Hero */}
        <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/Results.jpg" alt="Wello Wildcats celebrating" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/85 via-green-deep/40 to-transparent" />
          <div className="absolute bottom-14 left-6 md:bottom-16 md:left-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-5 h-0.5 bg-gold" />
              <span className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">Live · Season 2025/26</span>
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">Results &amp; Fixtures</h1>
          </div>
          <div className="absolute bottom-0 left-[-5%] w-[110%] h-[50px] bg-cream pointer-events-none" style={{ transform: "skewY(-2deg)" }} />
        </div>

        <section className="py-10 md:py-14 px-4 md:px-12 bg-cream">
          <div className="max-w-[1100px] mx-auto">

            {/* Active / Upcoming Winter competitions */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Now Playing — Winter 2026
              </span>
              <div className="h-px flex-1 bg-grey-light" />
            </div>

            {/* Scorecards Coming Soon banner */}
            <div className="flex items-start gap-3 bg-green-deep/5 border border-green-deep/15 rounded-xl px-4 py-3.5 mb-5">
              <span className="text-[18px] leading-none mt-0.5">🏏</span>
              <div>
                <p className="font-condensed text-[16px] font-bold tracking-[0.14em] uppercase text-green-deep mb-0.5">
                  Live Scorecards — Coming Soon
                </p>
                <p className="text-[14px] text-wello-grey leading-relaxed">
                  Full match scorecards, ladders and fixtures will be available here once our PlayHQ API access is confirmed. In the meantime, click any competition card to follow your team directly on PlayHQ.
                </p>
              </div>
            </div>

            {/* Winter cards — full size, matching Teams page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {winterComps.map((comp) => (
                <WinterCompCard key={comp.name} comp={comp} />
              ))}
            </div>

            {/* Summer season competitions */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-wello-grey">
                ☀️ Summer Season — Returning Sep 2026
              </span>
              <div className="h-px flex-1 bg-grey-light" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5" style={{ opacity: 0.5 }}>
              {summerComps.map((comp) => (
                <a key={comp.name} href={comp.url} target="_blank" rel="noopener noreferrer"
                  className="group rounded-xl overflow-hidden border border-grey-light bg-white no-underline hover:border-gold hover:shadow-sm transition-all flex flex-col"
                >
                  <div className="relative px-3 py-2 overflow-hidden" style={{ background: comp.headerBg, minHeight: 48 }}>
                    <span className="absolute bottom-0 left-2 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 22, color: "rgba(255,255,255,0.08)", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}>{comp.name}</span>
                    <span className="relative z-10 font-condensed text-[8px] font-bold tracking-[0.1em] uppercase text-white/55">{comp.association}</span>
                  </div>
                  <div className="px-3 py-2 flex flex-col gap-0.5">
                    <p className="font-condensed text-[10px] font-bold text-green-dark leading-tight truncate">{comp.name}</p>
                    <span className="font-condensed text-[8px] uppercase text-wello-grey">{comp.dateRange}</span>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-center text-[12px] text-wello-grey mt-2">
              <a href={PLAYHQ_CLUB} target="_blank" rel="noopener noreferrer"
                className="no-underline text-wello-grey hover:text-gold transition-colors">
                View full club page on PlayHQ →
              </a>
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
