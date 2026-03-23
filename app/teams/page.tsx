import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Teams" };

const PLAYHQ = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";
const REG    = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const GROUPS = [
  { category:"🏆 Senior Cricket", comp:"QSDCA", note:"Saturday turf cricket · September – March",
    teams:["1st Grade","2nd Grade","3rd Grade"] },
  { category:"🎖️ Masters Cricket", comp:"QSDCA Masters", note:"Players 35+",
    teams:["Masters XI"] },
  { category:"⭐ BEARS Junior Cricket", comp:"Bayside East & Redlands Cricket Association", note:"Divisional junior cricket",
    teams:["BEARS U17","BEARS U14"] },
  { category:"⭐ RCI Trebles", comp:"Redlands Cricket Inc", note:"Development match play · Ages 7–12",
    teams:["Trebles U12","Trebles U10","Trebles U8"] },
  { category:"🌟 Cricket Blast", comp:"Woolworths Cricket Blast", note:"Training program · Ages 5–10",
    teams:["Cricket Blast"] },
];

export default function TeamsPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Season 2025/26" title="Our Teams"
          subtitle="From Cricket Blast to 1st Grade — Wello Wildcats fields teams across every age group." />

        <SectionWrapper className="bg-cream">
          <div className="bg-green-deep rounded-lg p-5 md:p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-gold/20">
            <div>
              <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">Live Fixtures, Ladders & Stats</div>
              <p className="text-white text-[13px] md:text-[14px]">View all team fixtures, results, player stats and ladders on PlayHQ.</p>
            </div>
            <a href={PLAYHQ} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap flex-shrink-0">View Club on PlayHQ →</a>
          </div>

          <div className="flex flex-col gap-10 md:gap-14">
            {GROUPS.map((group) => (
              <div key={group.category}>
                <div className="border-b-2 border-gold pb-3 mb-5 md:mb-7">
                  <h2 className="font-serif text-[clamp(20px,2.5vw,32px)] font-black text-green-dark">{group.category}</h2>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-gold">{group.comp}</span>
                    <span className="text-wello-grey text-xs">·</span>
                    <span className="font-condensed text-[10px] text-wello-grey">{group.note}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {group.teams.map((team) => (
                    <div key={team} className="bg-white rounded-lg border border-grey-light overflow-hidden hover:border-gold transition-all duration-200">
                      <div className="bg-green-dark px-5 py-4 flex items-center justify-between">
                        <h3 className="font-condensed text-[15px] md:text-[17px] font-bold text-white">{team}</h3>
                        <span className="text-xl">🏏</span>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-[12px] md:text-[13px] text-wello-grey mb-3">Coach and squad details updated each season.</p>
                        <a href={PLAYHQ} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between w-full bg-cream hover:bg-green-pale border border-grey-light hover:border-gold rounded px-3 py-2 no-underline transition-all">
                          <span className="font-condensed text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark">Fixtures & Results</span>
                          <span className="font-condensed text-[10px] md:text-[11px] text-gold">PlayHQ →</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <section className="py-14 px-4 md:px-12 text-center"
          style={{ background:"linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="max-w-[580px] mx-auto">
            <h2 className="font-serif text-[clamp(26px,4vw,34px)] font-black text-white mb-4">Want to play for the <span className="text-gold">Wildcats?</span></h2>
            <p className="text-[14px] md:text-[15px] text-white/60 leading-[1.7] mb-8">Register online or contact the club to find the right team for you.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={REG} target="_blank" rel="noopener noreferrer" className="btn-primary">Register on PlayHQ</a>
              <a href="/contact" className="btn-secondary">Contact the Club</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
