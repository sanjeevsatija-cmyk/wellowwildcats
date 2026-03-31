"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

const hubCompetitions = [
  { association: "Bayside East & Redlands", name: "BEARS Junior Divisional", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams", headerBg: "#142E14" },
  { association: "Queensland Sub Districts", name: "QSDCA Competitions", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams", headerBg: "#7a5e0a" },
  { association: "Warehouse Cricket Assoc.", name: "Junior Competition", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams", headerBg: "#1e3a8a" },
  { association: "Warehouse Cricket Assoc.", name: "Senior Competition", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams", headerBg: "#1e3a8a" },
  { association: "Eastern Districts JCA", name: "Girls Only Junior Sunday", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams", headerBg: "#142E14" },
  { association: "Brisbane Metropolitan", name: "Post Christmas T20 Junior", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams", headerBg: "#142E14" },
  { association: "Redlands Cricket Inc", name: "Redlands Trebles", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams", headerBg: "#142E14" },
  { association: "Community Cricket Champs", name: "Senior Competition (Community)", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams", headerBg: "#7a5e0a" },
];

interface MatchEntry {
  _id: string; isUpcoming: boolean; competition: string; grade: string;
  opponent: string; matchDate: string; venue?: string; round?: string; result?: string;
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
      const tick = () => {
        const p = Math.min((Date.now() - start) / 900, 1);
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
      <div className="font-serif text-[32px] md:text-[40px] font-black text-gold leading-none mb-1">{val}{suffix}</div>
      <div className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase text-white/45">{label}</div>
    </div>
  );
}

export default function ResultsPage() {
  const [loading] = useState(false);

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
  const upcoming = matches.filter((m) => m.isUpcoming);
  const wins = completed.filter((m) => m.result === "W").length;
  const played = completed.length;
  const winRate = played > 0 ? Math.round((wins / played) * 100) : 0;

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
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">Results &amp; Fixtures</h1>
          </div>
        </div>

        <section className="py-10 md:py-14 px-4 md:px-12 bg-cream">
          <div className="max-w-[1100px] mx-auto">

            {/* Season at a glance — stat cards stay as-is */}
            {!loading && played > 0 && (
              <div className="mb-10">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">Season at a glance</p>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <StatCard target={played} label="Matches Played" delay={300} />
                  <StatCard target={wins} label="Wins" delay={450} />
                  <StatCard target={winRate} suffix="%" label="Win Rate" delay={600} />
                </div>
              </div>
            )}

            {/* By grade — portrait cards */}
            {!loading && Object.keys(byGrade).length > 0 && (
              <div className="mb-10">
                <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-4">By grade</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(byGrade).map(([grade, gradeMatches]) => {
                    const gWins = gradeMatches.filter((m) => m.result === "W").length;
                    const gLosses = gradeMatches.filter((m) => m.result === "L").length;
                    return (
                      <div key={grade} className="rounded-xl overflow-hidden border border-grey-light bg-white">
                        {/* Green header with watermark */}
                        <div className="relative px-4 py-3 overflow-hidden" style={{ background: "#142E14", minHeight: 60 }}>
                          <span className="absolute bottom-0 left-3 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 36, color: "rgba(255,255,255,0.07)", whiteSpace: "nowrap" }}>{grade}</span>
                          <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
                            <span className="font-condensed text-[12px] font-bold text-white">{grade}</span>
                            <span className="font-condensed text-[10px] text-white/50">
                              <span style={{ color: "#4ade80", fontWeight: 700 }}>{gWins}W</span>
                              {" · "}
                              <span style={{ color: "#f87171", fontWeight: 700 }}>{gLosses}L</span>
                              {" · "}{gradeMatches.length} played
                            </span>
                          </div>
                        </div>
                        {/* White body with W/L pills */}
                        <div className="px-4 py-3 flex flex-wrap gap-1.5">
                          {gradeMatches.map((m) => (
                            <div
                              key={m._id}
                              title={`vs ${m.opponent} — ${formatDate(m.matchDate)}`}
                              className="w-7 h-7 rounded-md flex items-center justify-center font-condensed text-[11px] font-bold cursor-default"
                              style={{
                                background: m.result === "W" ? "rgba(22,163,74,0.12)" : m.result === "L" ? "rgba(220,38,38,0.12)" : "rgba(0,0,0,0.06)",
                                color: m.result === "W" ? "#166534" : m.result === "L" ? "#991b1b" : "#9ca3af",
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

            {/* This weekend — portrait cards */}
            {!loading && upcoming.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="live-dot" />
                  <p className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold">This Weekend</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcoming.map((m) => (
                    <div key={m._id} className="rounded-xl overflow-hidden border border-grey-light bg-white flex flex-col">
                      {/* Gold header */}
                      <div className="relative px-4 py-3 overflow-hidden" style={{ background: "#7a5e0a", minHeight: 60 }}>
                        <span className="absolute bottom-0 left-3 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 28, color: "rgba(255,255,255,0.08)", whiteSpace: "nowrap" }}>THIS WEEKEND</span>
                        <div className="relative z-10">
                          <span className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase text-white/60">{m.grade}{m.round ? ` · ${m.round}` : ""}</span>
                          <p className="font-condensed text-[11px] font-bold text-white">{formatDate(m.matchDate)}</p>
                        </div>
                      </div>
                      {/* White body */}
                      <div className="px-4 py-3 flex flex-col gap-1 flex-1">
                        <p className="font-serif text-[15px] font-bold text-green-dark">vs {m.opponent}</p>
                        {m.venue && <p className="font-condensed text-[10px] text-wello-grey">📍 {m.venue}</p>}
                        <a href={PLAYHQ_CLUB} target="_blank" rel="noopener noreferrer"
                          className="font-condensed text-[10px] font-bold tracking-[0.08em] uppercase text-green-dark hover:text-gold transition-colors no-underline mt-auto pt-2">
                          View on PlayHQ →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!loading && matches.length === 0 && (
              <div className="mb-8 rounded-xl px-6 py-10 text-center bg-white border border-grey-light">
                <p className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase mb-2 text-wello-grey">No data yet</p>
                <p className="text-[14px] text-wello-grey">Results and fixtures will appear here once entered via the club CMS.</p>
              </div>
            )}

            {/* PlayHQ hub — portrait cards */}
            <div className="border-t-2 border-gold/20 pt-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-grey-light" />
                <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold">All Competitions on PlayHQ</span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {hubCompetitions.map((comp) => (
                  <a key={comp.name} href={comp.url} target="_blank" rel="noopener noreferrer"
                    className="group rounded-xl overflow-hidden border border-grey-light bg-white no-underline hover:border-gold hover:shadow-sm transition-all flex flex-col"
                  >
                    {/* Coloured header */}
                    <div className="relative px-3 py-2 overflow-hidden" style={{ background: comp.headerBg, minHeight: 48 }}>
                      <span className="absolute bottom-0 left-2 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 22, color: "rgba(255,255,255,0.08)", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}>{comp.name}</span>
                      <span className="relative z-10 font-condensed text-[8px] font-bold tracking-[0.1em] uppercase text-white/55">{comp.association}</span>
                    </div>
                    {/* White body */}
                    <div className="px-3 py-2 flex items-center justify-between gap-2">
                      <p className="font-condensed text-[10px] font-bold text-green-dark leading-tight truncate">{comp.name}</p>
                      <span className="flex-shrink-0 font-condensed text-[9px] font-bold text-wello-grey group-hover:text-gold transition-colors">→</span>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-center text-[12px] text-wello-grey mt-5">
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
