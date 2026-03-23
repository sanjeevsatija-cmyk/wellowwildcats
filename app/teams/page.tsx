import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teams",
  description: "All Wellington Point Cricket Club teams across senior, junior and Cricket Blast competitions.",
};

const PLAYHQ_CLUB = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";
const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const TEAM_GROUPS = [
  {
    category: "🏆 Senior Cricket",
    comp: "QSDCA — Queensland Sub Districts Cricket Association",
    compNote: "Saturday afternoon turf cricket · September – March",
    teams: [
      { name: "1st Grade",  playhqUrl: PLAYHQ_CLUB },
      { name: "2nd Grade",  playhqUrl: PLAYHQ_CLUB },
      { name: "3rd Grade",  playhqUrl: PLAYHQ_CLUB },
    ],
  },
  {
    category: "🎖️ Masters Cricket",
    comp: "QSDCA Masters Competition",
    compNote: "Social and competitive cricket for players 35+",
    teams: [
      { name: "Masters XI", playhqUrl: PLAYHQ_CLUB },
    ],
  },
  {
    category: "⭐ Junior Cricket",
    comp: "Bayside East & Redlands Cricket Association (BEARS)",
    compNote: "Divisional junior cricket · One-day & two-day formats",
    teams: [
      { name: "BEARS U17", playhqUrl: PLAYHQ_CLUB },
      { name: "BEARS U14", playhqUrl: PLAYHQ_CLUB },
    ],
  },
  {
    category: "⭐ RCI Trebles",
    comp: "Redlands Cricket Inc (RCI)",
    compNote: "Development match play · Ages 7–12 · Not recorded on PlayHQ",
    teams: [
      { name: "Trebles U12", playhqUrl: PLAYHQ_CLUB },
      { name: "Trebles U10", playhqUrl: PLAYHQ_CLUB },
      { name: "Trebles U8",  playhqUrl: PLAYHQ_CLUB },
    ],
  },
  {
    category: "🌟 Cricket Blast",
    comp: "Woolworths Cricket Blast",
    compNote: "Introductory training program · Ages 5–10 · No match play",
    teams: [
      { name: "Cricket Blast", playhqUrl: REG_URL },
    ],
  },
];

export default function TeamsPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Season 2025/26" title="Our Teams"
          subtitle="From Cricket Blast to 1st Grade — Wello Wildcats fields teams across every age group and competition." />

        <SectionWrapper className="bg-cream">
          <div className="bg-green-deep rounded-lg p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-gold/20">
            <div>
              <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">Live Fixtures, Ladders & Stats</div>
              <p className="text-white text-[14px]">View all team fixtures, results, player stats and competition ladders on PlayHQ.</p>
            </div>
            <a href={PLAYHQ_CLUB} target="_blank" rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap flex-shrink-0">
              View Club on PlayHQ →
            </a>
          </div>

          <div className="flex flex-col gap-14">
            {TEAM_GROUPS.map((group) => (
              <div key={group.category}>
                <div className="border-b-2 border-gold pb-4 mb-7">
                  <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] font-black text-green-dark">{group.category}</h2>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-gold">{group.comp}</span>
                    <span className="text-wello-grey">·</span>
                    <span className="font-condensed text-[11px] text-wello-grey">{group.compNote}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.teams.map((team) => (
                    <div key={team.name} className="bg-white rounded-lg border border-grey-light overflow-hidden hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200">
                      <div className="bg-green-dark px-6 py-5 flex items-center justify-between">
                        <h3 className="font-condensed text-[17px] font-bold text-white">{team.name}</h3>
                        <span className="text-2xl">🏏</span>
                      </div>
                      <div className="px-6 py-5">
                        <p className="text-[13px] text-wello-grey mb-4">
                          Coach, captain and squad details will be updated for the upcoming season.
                        </p>
                        <a href={team.playhqUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between w-full bg-cream hover:bg-green-pale border border-grey-light hover:border-gold rounded px-4 py-2.5 no-underline transition-all duration-200">
                          <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark">Fixtures & Results</span>
                          <span className="font-condensed text-[11px] text-gold">PlayHQ →</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <section className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">Want to play for the <span className="text-gold">Wildcats?</span></h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">Register online or contact the club to find the right team for you.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Register on PlayHQ</a>
              <a href="/contact" className="btn-secondary">Contact the Club</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
