import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results & Ladders",
  description: "Latest match results and competition ladders for all Wellington Point Cricket Club teams.",
};

const RESULTS = [
  { grade:"1st Grade", opp:"Redlands CC",    us:"167/6", them:"144",   r:"W", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"2nd Grade", opp:"Capalaba CC",    us:"203/8", them:"198",   r:"W", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"3rd Grade", opp:"Wynnum CC",      us:"148",   them:"151/7", r:"L", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"U17 BEARS", opp:"Wynnum CC",      us:"112",   them:"108/9", r:"W", date:"9 Mar 2026", comp:"BEARS" },
  { grade:"1st Grade", opp:"Valley CC",      us:"189/5", them:"143",   r:"W", date:"1 Mar 2026", comp:"QSDCA" },
  { grade:"2nd Grade", opp:"Redlands CC",    us:"134",   them:"136/4", r:"L", date:"1 Mar 2026", comp:"QSDCA" },
  { grade:"3rd Grade", opp:"Capalaba CC",    us:"201/7", them:"178",   r:"W", date:"1 Mar 2026", comp:"QSDCA" },
  { grade:"U14 BEARS", opp:"Redlands CC",    us:"98/8",  them:"97",    r:"W", date:"2 Mar 2026", comp:"BEARS" },
];

const GRADES = ["All Grades", "1st Grade", "2nd Grade", "3rd Grade", "Masters", "U17 BEARS", "U14 BEARS", "RCI Juniors"];
const SEASONS = ["2025/26 Season", "2024/25 Season"];

export default function ResultsPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Season 2025/26"
          title="Results & Ladders"
          subtitle="Latest match results for all Wello Wildcats teams. Full ladders and fixtures available on PlayHQ."
        />

        <SectionWrapper className="bg-cream">
          {/* PlayHQ ladder link banner */}
          <div className="bg-green-deep rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-gold/20">
            <div>
              <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">Live Ladders & Full Fixtures</div>
              <p className="text-white text-[14px]">View the complete QSDCA and BEARS ladders, upcoming fixtures and player stats on PlayHQ.</p>
            </div>
            <a href="https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap flex-shrink-0">
              View on PlayHQ →
            </a>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {GRADES.map((g) => (
                <button key={g}
                  className={`font-condensed text-xs font-bold tracking-[0.08em] uppercase px-3.5 py-2 rounded border transition-all duration-200 ${
                    g === "All Grades"
                      ? "bg-green-dark text-white border-green-dark"
                      : "bg-white text-wello-grey border-grey-light hover:border-green-dark hover:text-green-dark"
                  }`}>
                  {g}
                </button>
              ))}
            </div>
            <div className="md:ml-auto">
              <select className="font-condensed text-xs font-bold tracking-[0.08em] uppercase px-4 py-2 border border-grey-light rounded bg-white text-wello-grey focus:outline-none focus:border-gold">
                {SEASONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Results table */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            {/* Table header */}
            <div className="grid grid-cols-[120px_1fr_160px_100px_80px_100px] bg-green-deep px-6 py-4 gap-4">
              {["Grade","Opponent","Score","Result","Date","Competition"].map((h) => (
                <div key={h} className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-gold/80">{h}</div>
              ))}
            </div>
            {/* Rows */}
            {RESULTS.map((r, i) => (
              <div key={i}
                className={`grid grid-cols-[120px_1fr_160px_100px_80px_100px] px-6 py-4 gap-4 items-center border-b border-grey-light last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream/50"
                } hover:bg-green-pale/30 transition-colors`}>
                <div className="font-condensed text-[12px] font-bold tracking-[0.06em] text-green-dark">{r.grade}</div>
                <div className="text-[14px] text-charcoal font-medium">vs {r.opp}</div>
                <div className="font-condensed text-[13px] font-bold text-charcoal">
                  {r.us} <span className="text-wello-grey font-normal mx-1">—</span> {r.them}
                </div>
                <div>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-condensed text-[12px] font-black ${
                    r.r === "W"
                      ? "bg-green-400/15 text-green-600 border border-green-400/40"
                      : r.r === "L"
                      ? "bg-red-400/15 text-red-600 border border-red-400/30"
                      : "bg-amber-400/15 text-amber-600 border border-amber-400/30"
                  }`}>{r.r}</span>
                </div>
                <div className="font-condensed text-[11px] text-wello-grey tracking-[0.06em]">{r.date}</div>
                <div className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-wello-grey">{r.comp}</div>
              </div>
            ))}
          </div>

          {/* Mobile card view notice */}
          <p className="text-center text-[12px] text-wello-grey mt-6">
            Showing most recent results · {" "}
            <a href="https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2"
              target="_blank" rel="noopener noreferrer"
              className="text-green-dark font-semibold no-underline hover:text-gold">
              View full history on PlayHQ →
            </a>
          </p>
        </SectionWrapper>

        {/* Season summary cards */}
        <SectionWrapper className="bg-white">
          <div className="section-label">Season Summary</div>
          <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-10">
            2025/26 Season at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label:"Matches Played", val:"32",  sub:"across all grades" },
              { label:"Wins",           val:"19",  sub:"season total" },
              { label:"Win Rate",       val:"59%", sub:"across the club" },
              { label:"Finals Teams",   val:"3",   sub:"in contention" },
            ].map((s) => (
              <div key={s.label} className="bg-cream rounded-lg p-7 text-center border border-grey-light hover:border-gold transition-colors">
                <div className="font-serif text-[44px] font-black text-gold leading-none mb-2">{s.val}</div>
                <div className="font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-green-dark mb-1">{s.label}</div>
                <div className="font-condensed text-[10px] text-wello-grey">{s.sub}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
