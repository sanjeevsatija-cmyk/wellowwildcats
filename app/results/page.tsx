"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "imm53v2s",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

const hubCompetitions = [
  { association: "Bayside East & Redlands Cricket Association", name: "BEARS Junior Divisional Cricket", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams", borderColor: "#2A6B2A" },
  { association: "Eastern Districts Junior Cricket Association", name: "Girls Only Junior Sunday (EDJCA)", seasons: ["Summer 2025/26", "Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams", borderColor: "#2A6B2A" },
  { association: "Warehouse Cricket Association", name: "Junior Competition", seasons: ["Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams", borderColor: "#3b82f6" },
  { association: "Warehouse Cricket Association", name: "Senior Competition", seasons: ["Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams", borderColor: "#3b82f6" },
  { association: "Brisbane Metropolitan Cricket", name: "Post Christmas T20 Junior", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams", borderColor: "#2A6B2A" },
  { association: "Queensland Sub Districts Cricket Association", name: "QSDCA Competitions", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams", borderColor: "#C9A030" },
  { association: "Redlands Cricket Inc", name: "Redlands Trebles", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams", borderColor: "#2A6B2A" },
  { association: "Community Cricket Championships", name: "Senior Competition (Community)", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams", borderColor: "#C9A030" },
];

interface MatchEntry {
  _id: string;
  isUpcoming: boolean;
  competition: string;
  grade: string;
  opponent: string;
  matchDate: string;
  venue?: string;
  round?: string;
  ourScore?: string;
  theirScore?: string;
  result?: string;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" });
}

function useCountUp(target: number, delay = 300) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const t = setTimeout(() => {
      const start = Date.now();
      const duration = 900;
      const tick = () => {
        const p = Math.min((Date.now() - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, delay]);
  return val;
}

function StatCard({ target, suffix, label, delay }: { target: number; suffix?: string; label: string; delay: number }) {
  const val = useCountUp(target, delay);
  return (
    <div className="bg-green-deep rounded-xl p-4 md:p-6 text-center">
      <div className="font-serif text-[32px] md:text-[44px] font-black text-gold leading-none mb-1">
        {val}{suffix}
      </div>
      <div className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-white/45">{label}</div>
    </div>
  );
}

export default function ResultsPage() {
  const [matches, setMatches] = useState<MatchEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(
      `*[_type == "result" && season == "2025/26" && competition in ["QSDCA","BEARS"]] | order(matchDate desc) {
        _id, isUpcoming, competition, grade, opponent, matchDate, venue, round, ourScore, theirScore, result
      }`
    ).then((data) => { setMatches(data); setLoading(false); })
    .catch(() => setLoading(false));
  }, []);

  const completed = matches.filter((m) => !m.isUpcoming);
  const upcoming = matches.filter((m) => m.isUpcoming).sort((a, b) => a.matchDate.localeCompare(b.matchDate));

  const wins = completed.filter((m) => m.result === "W").length;
  const played = completed.length;
  const winRate = played > 0 ? Math.round((wins / played) * 100) : 0;

  // Group completed by grade
  const byGrade: Record<string, MatchEntry[]> = {};
  for (const m of completed) {
    if (!byGrade[m.grade]) byGrade[m.grade] = [];
    byGrade[m.grade].push(m);
  }

  return (
    <>
      <Topbar />
      <Nav />
      <main>

        {/* Hero */}
        <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
          <Image src="/Results.jpg" alt="Wello Wildcats celebrating" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-green-deep/30 to-transparent" />
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="live-dot" />
              <span className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">Live · Season 2025/26</span>
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">
              Results &amp; Fixtures
            </h1>
          </div>
        </div>

        <section className="py-12 md:py-16 px-4 md:px-12 bg-cream">
          <div className="max-w-[1100px] mx-auto">

            {/* Season at a glance */}
            {!loading && played > 0 && (
              <div className="mb-10">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">
                  Season at a glance
                </p>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <StatCard target={played} label="Matches Played" delay={300} />
                  <StatCard target={wins} label="Wins" delay={450} />
                  <StatCard target={winRate} suffix="%" label="Win Rate" delay={600} />
                </div>
              </div>
            )}

            {/* By grade — pill badges */}
            {!loading && Object.keys(byGrade).length > 0 && (
              <div className="mb-10">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">
                  By grade
                </p>
                <div className="flex flex-col gap-3">
                  {Object.entries(byGrade).map(([grade, gradeMatches]) => {
                    const gWins = gradeMatches.filter((m) => m.result === "W").length;
                    const gLosses = gradeMatches.filter((m) => m.result === "L").length;
                    return (
                      <div
                        key={grade}
                        className="bg-white rounded-xl border border-grey-light overflow-hidden"
                        style={{ borderLeftWidth: "3px", borderLeftColor: "#2A6B2A" }}
                      >
                        <div className="px-4 md:px-5 pt-3.5 pb-1 flex items-center justify-between flex-wrap gap-2">
                          <span className="font-condensed text-[12px] font-bold text-green-dark">{grade}</span>
                          <span className="font-condensed text-[11px] text-wello-grey">
                            <span className="text-emerald-600 font-bold">{gWins}W</span>
                            {" · "}
                            <span className="text-red-500 font-bold">{gLosses}L</span>
                            {" · "}{gradeMatches.length} played
                          </span>
                        </div>
                        <div className="px-4 md:px-5 pb-3.5 flex flex-wrap gap-1.5">
                          {gradeMatches.map((m) => (
                            <div
                              key={m._id}
                              title={`vs ${m.opponent} — ${formatDate(m.matchDate)}`}
                              className={`w-6 h-6 rounded-[4px] flex items-center justify-center font-condensed text-[10px] font-bold cursor-default ${
                                m.result === "W" ? "bg-emerald-50 text-emerald-700" :
                                m.result === "L" ? "bg-red-50 text-red-600" :
                                "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {m.result === "NR" || m.result === "A" ? "–" : m.result ?? "–"}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Upcoming fixtures */}
            {!loading && upcoming.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="live-dot" />
                  <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">
                    This Weekend
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {upcoming.map((m) => (
                    <div
                      key={m._id}
                      className="bg-white rounded-xl border border-grey-light flex items-center gap-3 px-4 py-3 md:px-5 md:py-4"
                      style={{ borderLeftWidth: "3px", borderLeftColor: "#C9A030" }}
                    >
                      <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-center flex-shrink-0">
                        <p className="font-condensed text-[10px] font-bold text-amber-700 leading-tight whitespace-nowrap">
                          {formatDate(m.matchDate)}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-condensed text-[9px] font-bold tracking-[0.1em] uppercase text-wello-grey mb-0.5">
                          {m.grade}{m.round ? ` · ${m.round}` : ""}
                        </p>
                        <p className="font-serif text-[15px] font-bold text-green-dark">vs {m.opponent}</p>
                        {m.venue && (
                          <p className="font-condensed text-[10px] text-wello-grey mt-0.5">📍 {m.venue}</p>
                        )}
                      </div>
                      <a
                        href={PLAYHQ_CLUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-green-deep text-gold font-condensed text-[10px] font-bold tracking-[0.06em] rounded-lg px-3 py-2 hover:bg-green-mid transition-colors no-underline"
                      >
                        PlayHQ →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state — no data yet */}
            {!loading && matches.length === 0 && (
              <div className="mb-10 rounded-xl border border-grey-light bg-white px-6 py-10 text-center">
                <p className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-wello-grey mb-2">
                  No data yet
                </p>
                <p className="text-[14px] text-wello-grey">
                  Results and fixtures will appear here once entered via the club CMS.
                </p>
              </div>
            )}

            {/* PlayHQ hub */}
            <div className="border-t-2 border-gold/20 pt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-grey-light" />
                <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
                  All Competitions on PlayHQ
                </span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hubCompetitions.map((comp) => (
                  <a
                    key={comp.name}
                    href={comp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-grey-light flex items-center justify-between px-4 py-3 hover:border-gold hover:shadow-sm transition-all no-underline"
                    style={{ borderLeftWidth: "3px", borderLeftColor: comp.borderColor }}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase text-wello-grey mb-0.5">
                        {comp.association}
                      </p>
                      <p className="font-condensed text-[12px] font-bold text-green-dark truncate">{comp.name}</p>
                      <div className="flex gap-1.5 mt-1 flex-wrap">
                        {comp.seasons.map((s) => (
                          <span key={s} className="font-condensed text-[9px] bg-cream border border-grey-light rounded-full px-2 py-0.5 text-wello-grey">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="flex-shrink-0 ml-3 font-condensed text-[10px] font-bold text-gold bg-green-deep rounded-lg px-3 py-1.5">
                      View →
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-center text-[12px] text-wello-grey mt-6">
                <a
                  href={PLAYHQ_CLUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-dark hover:text-gold no-underline"
                >
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
