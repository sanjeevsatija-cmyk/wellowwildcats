import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Program Details" };
export const revalidate = 3600;

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const PROGRAMS: Record<string, { num:string; icon:string; tag:string; name:string; detail:string; features:string[] }> = {
  "cricket-blast": {
    num:"01", icon:"🌟", tag:"Ages 5–10", name:"Cricket Blast",
    detail:`Cricket Blast is Wello Wildcats' introductory cricket program, designed specifically for children aged 5 to 10 who have never played cricket before. This is a training-only format — there are no competitive games — making it the ideal first experience of the sport in a fun, low-pressure environment.

Using age-appropriate equipment and activity-based coaching methods, participants develop the core fundamentals of cricket: batting technique, basic bowling action, catching, throwing and fielding positioning. Sessions are run by qualified, accredited coaches who understand how to engage young children and make learning enjoyable.

Cricket Blast builds confidence, coordination and a love of the game. It follows the Woolworths Cricket Blast framework endorsed by Cricket Australia and is the natural entry point into the Wello Wildcats cricket pathway.`,
    features:["Skills-based training — no competitive matches","Ages 5 to 10 — complete beginners welcome","Batting, bowling and fielding fundamentals","Fun, game-based activities and drills","Mixed boys and girls sessions","Qualified and accredited coaches","Small group sizes for personalised attention","Woolworths Cricket Blast endorsed program"],
  },
  "rci-trebles": {
    num:"02", icon:"⚡", tag:"Ages 7–12", name:"RCI Trebles",
    detail:`RCI Trebles is the natural next step for players who have progressed through Cricket Blast and are ready to experience structured match play for the first time. Organised through Redlands Cricket Inc (RCI), this competition is designed for players aged 7 to 12 and provides a supported transition from training into a game environment.

Matches are played in a 20-over format with a key emphasis on equal participation — every player bats the same number of balls and bowls the same number of overs. This ensures maximum involvement for all players regardless of ability, reinforcing the development-first philosophy of junior cricket.

Unlike higher-level competitions, RCI Trebles results are not recorded in PlayHQ. This deliberate approach keeps the focus on player development, skill building and enjoyment rather than competition outcomes. It is considered a structured development phase rather than formal competitive cricket.`,
    features:["20-over modified match format","Every player bats the same number of balls","Every player bowls the same number of overs","Development-focused — not recorded in PlayHQ","Ages 7 to 12","Organised through Redlands Cricket Inc (RCI)","Ideal transition from Cricket Blast","Emphasis on participation and skill development"],
  },
  "bears-cricket": {
    num:"03", icon:"🏏", tag:"Divisional Cricket", name:"BEARS Junior Cricket",
    detail:`BEARS Junior Cricket is the competitive divisional competition organised by the Bayside East & Redlands Cricket Association (BEARS). This is full divisional cricket for players ready to compete at a higher level, with teams graded based on age and skill across multiple divisions.

BEARS cricket is played in both one-day and two-day formats. In a one-day match, each team plays 25 overs per innings, with a total of 50 overs available for the day. Batting and bowling responsibilities are shared across the whole team, ensuring every player contributes meaningfully to the game regardless of their position.

Two-day games provide an additional challenge and are played across consecutive weekends, developing patience, match awareness and game management skills. All results and player statistics are recorded in PlayHQ, making BEARS the official entry point into the Cricket Australia data ecosystem for junior players.

The BEARS competition is the primary pathway for junior players aspiring to progress to senior club cricket at Wello Wildcats.`,
    features:["One-day format: 25 overs per team","Two-day format: 50 overs per day","Batting and bowling shared equally across team","All results recorded in PlayHQ","Multiple divisions based on age and skill","Organised by BEARS (Bayside East & Redlands)","Clear pathway to senior cricket","Played across Redlands-area grounds"],
  },
  "senior-cricket": {
    num:"04", icon:"🏆", tag:"Adults & Masters (35+)", name:"Senior Cricket",
    detail:`Senior cricket at Wello Wildcats is played in the Queensland Sub Districts Cricket Association (QSDCA) on Saturday afternoons. The club fields multiple grades — 1st Grade, 2nd Grade and 3rd Grade — catering to players across all ability levels, from competitive cricketers through to those playing for the enjoyment of the game.

The Masters XI provides an excellent pathway for players aged 35 and over who wish to continue playing competitive cricket in a setting that balances competitiveness with the social aspects of the game.

All QSDCA matches are played on turf wickets, which is a hallmark of the competition and a major draw for senior players in the region. The season commences on the third weekend of September and concludes with the grand final in early March, giving players a full and rewarding summer of cricket at Mooroondu Road.`,
    features:["QSDCA Saturday afternoon competition","1st Grade, 2nd Grade and 3rd Grade","Masters XI for players aged 35 and over","All matches played on turf wickets","Season: September to March","Grand final held in early March","Home games at 16 Ivy Street, Thorneside","Strong social and competitive culture"],
  },
};

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const p = PROGRAMS[params.slug] || PROGRAMS["cricket-blast"];
  const others = Object.entries(PROGRAMS).filter(([slug]) => slug !== params.slug);

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <section className="relative bg-green-deep overflow-hidden py-16 px-12">
          <div className="absolute rounded-full border border-gold/10 animate-slow-rotate pointer-events-none"
            style={{ width: 600, height: 400, top: -180, right: -120 }} />
          <div className="grain-overlay" />
          <div className="relative z-10 max-w-[900px] mx-auto">
            <Link href="/programs" className="inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[0.15em] uppercase text-gold/70 hover:text-gold no-underline mb-6 transition-colors">
              ← All Programs
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[48px]">{p.icon}</span>
              <div>
                <div className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-gold mb-1">{p.tag}</div>
                <div className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-white/40">Program {p.num}</div>
              </div>
            </div>
            <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] font-black text-white leading-[1.05] mb-4">
              {p.name}
            </h1>
          </div>
        </section>

        <section className="py-16 px-12 bg-cream">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <div>
              <div className="section-label">About This Program</div>
              <h2 className="font-serif text-[28px] font-black text-green-dark mb-6">Program Overview</h2>
              {p.detail.split('\n\n').map((para, i) => (
                <p key={i} className="text-[15px] text-charcoal leading-[1.85] mb-5">{para.trim()}</p>
              ))}
              <div className="bg-white rounded-lg p-7 border border-grey-light mt-8">
                <h3 className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-green-dark mb-4">Key Details</h3>
                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-charcoal">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-green-deep rounded-lg p-7 border border-gold/20">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-4">Register Now</div>
                <p className="text-[14px] text-white/70 leading-[1.65] mb-5">
                  Registrations are handled through Cricket Australia&apos;s PlayHQ platform.
                </p>
                <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                  Register on PlayHQ
                </a>
              </div>
              <div className="bg-white rounded-lg p-7 border border-grey-light">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-3">Questions?</div>
                <p className="text-[13px] text-wello-grey leading-[1.65] mb-4">
                  Contact the club for more information about this program.
                </p>
                <Link href="/contact" className="font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-green-dark no-underline hover:text-gold transition-colors">
                  Contact Us →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-7 border border-grey-light">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-3">Other Programs</div>
                {others.map(([slug, prog]) => (
                  <Link key={slug} href={`/programs/${slug}`}
                    className="flex items-center gap-3 py-2.5 border-b border-grey-light last:border-0 no-underline group">
                    <span className="text-xl">{prog.icon}</span>
                    <div>
                      <div className="font-condensed text-[12px] font-bold text-charcoal group-hover:text-green-dark transition-colors">{prog.name}</div>
                      <div className="font-condensed text-[10px] text-wello-grey">{prog.tag}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
