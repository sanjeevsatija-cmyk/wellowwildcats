import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Results & Ladders" };

const RESULTS = [
  { grade:"1st Grade", opp:"Redlands CC",  us:"167/6", them:"144",   r:"W", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"2nd Grade", opp:"Capalaba CC",  us:"203/8", them:"198",   r:"W", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"3rd Grade", opp:"Wynnum CC",    us:"148",   them:"151/7", r:"L", date:"8 Mar 2026", comp:"QSDCA" },
  { grade:"U17 BEARS", opp:"Wynnum CC",    us:"112",   them:"108/9", r:"W", date:"9 Mar 2026", comp:"BEARS" },
  { grade:"1st Grade", opp:"Valley CC",    us:"189/5", them:"143",   r:"W", date:"1 Mar 2026", comp:"QSDCA" },
  { grade:"2nd Grade", opp:"Redlands CC",  us:"134",   them:"136/4", r:"L", date:"1 Mar 2026", comp:"QSDCA" },
];

const PLAYHQ = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

export default function ResultsPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Season 2025/26" title="Results & Ladders"
          subtitle="Latest match results for all Wello Wildcats teams. Full ladders on PlayHQ." />

        <SectionWrapper className="bg-cream">
          {/* PlayHQ banner */}
          <div className="bg-green-deep rounded-lg p-5 md:p-6 mb-8 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-gold/20">
            <div>
              <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">Live Ladders & Full Fixtures</div>
              <p className="text-white text-[13px] md:text-[14px]">View the complete QSDCA and BEARS ladders, fixtures and stats on PlayHQ.</p>
            </div>
            <a href={PLAYHQ} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap flex-shrink-0">
              View on PlayHQ →
            </a>
          </div>

          {/* Mobile card view */}
          <div className="flex flex-col gap-3 md:hidden">
            {RESULTS.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-grey-light flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-gold mb-0.5">{r.grade} · {r.comp}</div>
                  <div className="text-[14px] font-medium text-charcoal">vs {r.opp}</div>
                  <div className="font-condensed text-[11px] text-wello-grey mt-0.5">{r.us} — {r.them} · {r.date}</div>
                </div>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-black font-condensed flex-shrink-0 ${
                  r.r === "W" ? "bg-green-400/15 text-green-600 border border-green-400/40"
                              : "bg-red-400/15 text-red-600 border border-red-400/30"
                }`}>{r.r}</span>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-[120px_1fr_160px_80px_100px_100px] bg-green-deep px-6 py-4 gap-4">
              {["Grade","Opponent","Score","Result","Date","Comp"].map((h) => (
                <div key={h} className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-gold/80">{h}</div>
              ))}
            </div>
            {RESULTS.map((r, i) => (
              <div key={i} className={`grid grid-cols-[120px_1fr_160px_80px_100px_100px] px-6 py-4 gap-4 items-center border-b border-grey-light last:border-0 ${i%2===0?"bg-white":"bg-cream/50"}`}>
                <div className="font-condensed text-[12px] font-bold text-green-dark">{r.grade}</div>
                <div className="text-[14px] text-charcoal font-medium">vs {r.opp}</div>
                <div className="font-condensed text-[13px] font-bold text-charcoal">{r.us} <span className="text-wello-grey font-normal mx-1">—</span> {r.them}</div>
                <div>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-condensed text-[12px] font-black ${
                    r.r==="W"?"bg-green-400/15 text-green-600 border border-green-400/40":"bg-red-400/15 text-red-600 border border-red-400/30"
                  }`}>{r.r}</span>
                </div>
                <div className="font-condensed text-[11px] text-wello-grey">{r.date}</div>
                <div className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-wello-grey">{r.comp}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] text-wello-grey mt-5">
            <a href={PLAYHQ} target="_blank" rel="noopener noreferrer" className="text-green-dark font-semibold no-underline hover:text-gold">View full history on PlayHQ →</a>
          </p>
        </SectionWrapper>

        {/* Season stats */}
        <SectionWrapper className="bg-white">
          <div className="section-label">Season Summary</div>
          <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-8">Summer 2025/26 at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { label:"Matches Played", val:"32", sub:"across all grades" },
              { label:"Wins",           val:"19", sub:"season total" },
              { label:"Win Rate",       val:"59%",sub:"across the club" },
              { label:"Finals Teams",   val:"3",  sub:"in contention" },
            ].map((s) => (
              <div key={s.label} className="bg-cream rounded-lg p-5 md:p-7 text-center border border-grey-light hover:border-gold transition-colors">
                <div className="font-serif text-[36px] md:text-[44px] font-black text-gold leading-none mb-2">{s.val}</div>
                <div className="font-condensed text-[10px] md:text-[12px] font-bold tracking-[0.1em] uppercase text-green-dark mb-1">{s.label}</div>
                <div className="font-condensed text-[9px] md:text-[10px] text-wello-grey">{s.sub}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
