import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

// winterStatus: "active" | "upcoming" | "summer"
// Flip to "active" for Summer comps when season starts
const hubCompetitions = [
  { association: "Warehouse Cricket Assoc.", name: "Junior Competition",        winterStatus: "active",   dateRange: "7 Feb – 1 Sep 2026",   url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams",                                              headerBg: "#1e3a8a" },
  { association: "Warehouse Cricket Assoc.", name: "Senior Competition",        winterStatus: "active",   dateRange: "7 Feb – 1 Sep 2026",   url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams",                                             headerBg: "#1e3a8a" },
  { association: "Eastern Districts JCA",    name: "Girls Only Junior Sunday",  winterStatus: "upcoming", dateRange: "10 May – 23 Aug 2026", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams",                headerBg: "#142E14" },
  { association: "Bayside East & Redlands",  name: "BEARS Junior Divisional",   winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams",                             headerBg: "#142E14" },
  { association: "Queensland Sub Districts", name: "QSDCA Competitions",        winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams",                                         headerBg: "#7a5e0a" },
  { association: "Brisbane Metropolitan",    name: "Post Christmas T20 Junior", winterStatus: "summer",   dateRange: "Starting Dec 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams",                    headerBg: "#142E14" },
  { association: "Redlands Cricket Inc",     name: "Redlands Trebles",          winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams",                                         headerBg: "#142E14" },
  { association: "Community Cricket Champs", name: "Senior Competition",        winterStatus: "summer",   dateRange: "Starting Sep 2026",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams",                                    headerBg: "#7a5e0a" },
];

export default function ResultsPage() {
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

            {/* PlayHQ hub — portrait cards */}
            <div>

              {/* Section header */}
              <div className="mb-6">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-2">
                  Live on PlayHQ
                </p>
                <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-black text-green-deep leading-tight">
                  Find Your Team
                </h2>
                <p className="font-body text-[13px] text-wello-grey mt-2 max-w-xl leading-relaxed">
                  Our scorers update draws, results and ladders live on game day. Click any competition below to follow your team on PlayHQ.
                </p>
              </div>

              {/* Active / Upcoming Winter competitions */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Now Playing — Winter 2026
                </span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {hubCompetitions.filter(c => c.winterStatus !== "summer").map((comp) => (
                  <a key={comp.name} href={comp.url} target="_blank" rel="noopener noreferrer"
                    className="group rounded-xl overflow-hidden border border-grey-light bg-white no-underline hover:border-gold hover:shadow-sm transition-all flex flex-col"
                  >
                    <div className="relative px-3 py-2 overflow-hidden" style={{ background: comp.headerBg, minHeight: 48 }}>
                      <span className="absolute bottom-0 left-2 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 22, color: "rgba(255,255,255,0.08)", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}>{comp.name}</span>
                      <span className="relative z-10 font-condensed text-[8px] font-bold tracking-[0.1em] uppercase text-white/55">{comp.association}</span>
                    </div>
                    <div className="px-3 py-2 flex flex-col gap-0.5">
                      <p className="font-condensed text-[10px] font-bold text-green-dark leading-tight truncate">{comp.name}</p>
                      {comp.winterStatus === "active" && (
                        <span className="inline-flex items-center gap-1 font-condensed text-[8px] font-bold uppercase text-emerald-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Active
                        </span>
                      )}
                      {comp.winterStatus === "upcoming" && (
                        <span className="font-condensed text-[8px] font-bold uppercase text-gold">Upcoming · {comp.dateRange}</span>
                      )}
                    </div>
                  </a>
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
                {hubCompetitions.filter(c => c.winterStatus === "summer").map((comp) => (
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

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
