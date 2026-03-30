"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

const hubCompetitions = [
  { association: "Bayside East & Redlands", name: "BEARS Junior Divisional", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams", borderColor: "#2A6B2A" },
  { association: "Queensland Sub Districts", name: "QSDCA Competitions", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams", borderColor: "#C9A030" },
  { association: "Warehouse Cricket Assoc.", name: "Junior Competition", seasons: ["Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams", borderColor: "#3b82f6" },
  { association: "Warehouse Cricket Assoc.", name: "Senior Competition", seasons: ["Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams", borderColor: "#3b82f6" },
  { association: "Eastern Districts JCA", name: "Girls Only Junior Sunday", seasons: ["Summer 2025/26", "Winter 2026"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams", borderColor: "#2A6B2A" },
  { association: "Brisbane Metropolitan Cricket", name: "Post Christmas T20 Junior", seasons: ["Summer 2025/26"], url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams", borderColor: "#2A6B2A" },
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

function StatCard({ target, suffix = "", label, delay }: { target: number; suffix?: string; label: string; delay: number }) {
  const val = useCountUp(target, delay);
  return (
    <div className="bg-green-deep rounded-xl p-4 md:p-6 text-center">
      <div className="font-serif text-[32px] md:text-[40px] font-black text-gold leading-none mb-1">
        {val}{suffix}
      </div>
      <div className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase text-white/45">{label}</div>
    </div>
  );
}

export default function ResultsPage() {
  const [loading] = useState(false);

  // Sample results — replace with Sanity fetch once committee starts entering data
  const matches: MatchEntry[] = [
    { _id:"1",  isUpcoming:false, competition:"QSDCA", grade:"1st Grade",  opponent:"Redlands CC",  matchDate:"2026-03-21", result:"W" },
    { _id:"2",  isUpcoming:false, competition:"QSDCA", grade:"1st Grade",  opponent:"Capalaba CC",  matchDate:"2026-03-14", result:"W" },
    { _id:"3",  isUpcoming:false, competition:"QSDCA", grade:"1st Grade",  opponent:"Wynnum CC",    matchDate:"2026-03-07", result:"L" },
    { _id:"4",  isUpcoming:false, competition:"QSDCA", grade:"1st Grade",  opponent:"Easts CC",     matchDate:"2026-02-28", result:"W" },
    { _id:"5",  isUpcoming:false, competition:"QSDCA", grade:"1st Grade",  opponent:"Bayside CC",   matchDate:"2026-02-21", result:"W" },
    { _id:"6",  isUpcoming:false, competition:"QSDCA", grade:"2nd Grade",  opponent:"Redlands CC",  matchDate:"2026-03-21", result:"W" },
    { _id:"7",  isUpcoming:false, competition:"QSDCA", grade:"2nd Grade",  opponent:"Capalaba CC",  matchDate:"2026-03-14", result:"L" },
    { _id:"8",  isUpcoming:false, competition:"QSDCA", grade:"2nd Grade",  opponent:"Wynnum CC",    matchDate:"2026-03-07", result:"W" },
    { _id:"9",  isUpcoming:false, competition:"QSDCA", grade:"2nd Grade",  opponent:"Easts CC",     matchDate:"2026-02-28", result:"W" },
    { _id:"10", isUpcoming:false, competition:"BEARS", grade:"BEARS U17",  opponent:"Wynnum CC",    matchDate:"2026-03-22", result:"W" },
    { _id:"11", isUpcoming:false, competition:"BEARS", grade:"BEARS U17",  opponent:"Capalaba CC",  matchDate:"2026-03-15", result:"L" },
    { _id:"12", isUpcoming:false, competition:"BEARS", grade:"BEARS U17",  opponent:"Redlands CC",  matchDate:"2026-03-08", result:"W" },
    { _id:"13", isUpcoming:true,  competition:"QSDCA", grade:"1st Grade",  opponent:"Bayside CC",   matchDate:"2026-04-05", venue:"16 Ivy Street, Thorneside", round:"Round 16" },
    { _id:"14", isUpcoming:true,  competition:"BEARS", grade:"BEARS U17",  opponent:"Victoria Point CC", matchDate:"2026-04-05", venue:"Victoria Point Oval", round:"Round 14" },
  ];

  const completed = matches.filter((m) => !m.isUpcoming);
  const upcoming = matches.filter((m) => m.isUpcoming).sort((a, b) => a.matchDate.localeCompare(b.matchDate));

  const wins = completed.filter((m) => m.result === "W").length;
  const played = completed.length;
  const winRate = played > 0 ? Math.round((wins / played) * 100) : 0;
  const finalsTeams = Object.values(
    completed.reduce((acc: Record<string, boolean>, m) => { acc[m.grade] = true; return acc; }, {})
  ).length;

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
        <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
          <Image src="/Results.jpg" alt="Wello Wildcats celebrating" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/85 via-green-deep/40 to-transparent" />
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

        {/* Main content — dark bg matching mockup */}
        <section className="py-10 md:py-14 px-4 md:px-12" style={{ background: "#1a1a1a" }}>
          <div className="max-w-[1100px] mx-auto">

            {/* Season at a glance — 4 cards */}
            {!loading && played > 0 && (
              <div className="mb-8">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">
                  Season at a glance
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <StatCard target={played} label="Played" delay={300} />
                  <StatCard target={wins} label="Wins" delay={450} />
                  <StatCard target={winRate} suffix="%" label="Win Rate" delay={600} />
                  <StatCard target={finalsTeams} label="Finals Teams" delay={750} />
                </div>
              </div>
            )}

            {/* By grade — dark rows */}
            {!loading && Object.keys(byGrade).length > 0 && (
              <div className="mb-8">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">
                  By grade
                </p>
                <div className="flex flex-col gap-3">
                  {Object.entries(byGrade).map(([grade, gradeMatches]) => {
                    const gWins = gradeMatches.filter((m) => m.result === "W").length;
                    const gLosses = gradeMatches.filter((m) => m.result === "L").length;
                    return (
                      <div key={grade} className="rounded-xl px-4 py-3 md:px-5 md:py-4" style={{ background: "#2a2a2a" }}>
                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                          <span className="font-condensed text-[13px] font-bold text-white">{grade}</span>
                          <span className="font-condensed text-[11px]" style={{ color: "#aaa" }}>
                            <span style={{ color: "#4ade80", fontWeight: 700 }}>{gWins}W</span>
                            {" · "}
                            <span style={{ color: "#f87171", fontWeight: 700 }}>{gLosses}L</span>
                            {" · "}{gradeMatches.length} played
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {gradeMatches.map((m) => (
                            <div
                              key={m._id}
                              title={`vs ${m.opponent} — ${formatDate(m.matchDate)}`}
                              className="w-7 h-7 rounded-md flex items-center justify-center font-condensed text-[11px] font-bold cursor-default"
                              style={{
                                background: m.result === "W" ? "rgba(74,222,128,0.15)" :
                                  m.result === "L" ? "rgba(248,113,113,0.15)" : "rgba(255,255,255,0.08)",
                                color: m.result === "W" ? "#4ade80" :
                                  m.result === "L" ? "#f87171" : "#666",
                              }}
                            >
                              {m.result ?? "–"}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* This weekend — dark cards */}
            {!loading && upcoming.length > 0 && (
              <div className="mb-8">
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
                      className="rounded-xl flex items-center gap-3 px-4 py-3 md:px-5 md:py-4"
                      style={{ background: "#2a2a2a", borderLeft: "3px solid #C9A030" }}
                    >
                      <div className="rounded-lg px-3 py-2 text-center flex-shrink-0" style={{ background: "#FFF8E7" }}>
                        <p className="font-condensed text-[10px] font-bold whitespace-nowrap" style={{ color: "#854F0B" }}>
                          {formatDate(m.matchDate)}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-condensed text-[9px] font-bold tracking-[0.1em] uppercase mb-0.5" style={{ color: "#888" }}>
                          {m.grade}{m.round ? ` · ${m.round}` : ""}
                        </p>
                        <p className="font-serif text-[15px] font-bold text-white">vs {m.opponent}</p>
                        {m.venue && <p className="font-condensed text-[10px] mt-0.5" style={{ color: "#888" }}>📍 {m.venue}</p>}
                      </div>
                      <a
                        href={PLAYHQ_CLUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 font-condensed text-[10px] font-bold tracking-[0.06em] rounded-lg px-3 py-2 no-underline hover:opacity-80 transition-opacity"
                        style={{ background: "#142E14", color: "#C9A030" }}
                      >
                        PlayHQ →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!loading && matches.length === 0 && (
              <div className="mb-8 rounded-xl px-6 py-10 text-center" style={{ background: "#2a2a2a" }}>
                <p className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "#888" }}>
                  No data yet
                </p>
                <p className="text-[14px]" style={{ color: "#888" }}>
                  Results and fixtures will appear here once entered via the club CMS.
                </p>
              </div>
            )}

            {/* PlayHQ hub — dark cards */}
            <div style={{ borderTop: "1px solid rgba(201,160,48,0.2)", paddingTop: "2rem" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1" style={{ background: "#333" }} />
                <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
                  All Competitions on PlayHQ
                </span>
                <div className="h-px flex-1" style={{ background: "#333" }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hubCompetitions.map((comp) => (
                  <a
                    key={comp.name}
                    href={comp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl flex items-center justify-between px-4 py-3 no-underline hover:opacity-80 transition-opacity"
                    style={{ background: "#2a2a2a", borderLeft: `3px solid ${comp.borderColor}` }}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase mb-0.5" style={{ color: "#888" }}>
                        {comp.association}
                      </p>
                      <p className="font-condensed text-[12px] font-bold text-white truncate">{comp.name}</p>
                    </div>
                    <span
                      className="flex-shrink-0 ml-3 font-condensed text-[10px] font-bold rounded-lg px-3 py-1.5"
                      style={{ background: "#333", color: "#aaa" }}
                    >
                      View →
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-center text-[12px] mt-5" style={{ color: "#666" }}>
                <a href={PLAYHQ_CLUB} target="_blank" rel="noopener noreferrer"
                  className="no-underline hover:text-gold transition-colors" style={{ color: "#888" }}>
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
