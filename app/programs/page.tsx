import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Cricket programs for all ages at Wellington Point Cricket Club.",
};

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const PROGRAMS = [
  {
    slug:"cricket-blast", num:"01", icon:"🌟", tag:"Ages 5–10", name:"Cricket Blast",
    color:"bg-green-dark",
    short:"An introductory program for young players aged 5–10 who have never played cricket before.",
    features:["Fun, skills-based training","No match play — training format only","Batting, bowling & fielding fundamentals","Mixed boys and girls","Qualified coaches","Perfect for complete beginners"],
    season:"Summer",
  },
  {
    slug:"rci-trebles", num:"02", icon:"⚡", tag:"Ages 7–12", name:"RCI Trebles",
    color:"bg-green-dark",
    short:"Modified 20-over match play where every player bats the same number of balls and bowls equally.",
    features:["20-over modified match format","Equal batting balls for all players","Equal bowling overs for all players","Scores not recorded in PlayHQ","Development-focused competition","Perfect transition from Cricket Blast"],
    season:"Summer",
  },
  {
    slug:"junior-cricket", num:"03", icon:"🏏", tag:"Divisional Cricket", name:"Junior Cricket",
    color:"bg-green-dark",
    short:"Competitive divisional cricket through the Bayside East & Redlands Cricket Association (BEARS).",
    features:["One-day and two-day game formats","50 overs per day (25 overs each in 1-day)","Batting and bowling shared equally","Registered and recorded in PlayHQ","Divisional grading based on age and skill","Pathway to senior cricket"],
    season:"Summer",
  },
  {
    slug:"senior-cricket", num:"04", icon:"🏆", tag:"Adults & Masters (35+)", name:"Senior Cricket",
    color:"bg-green-dark",
    short:"QSDCA Saturday turf competition across multiple grades including a Masters XI.",
    features:["QSDCA Saturday competition","Turf wicket cricket","1st, 2nd and 3rd Grade","Masters XI for players 35+","Season runs September – March","Grand final in early March"],
    season:"Summer",
  },
  {
    slug:"warehouse-cricket", num:"05", icon:"🏢", tag:"U/12–U/16 · Adults", name:"Warehouse Cricket",
    color:"bg-green-dark",
    short:"Indoor cricket for Winter 2026 — junior and senior competitions every Saturday, with senior-only Sunday competitions fortnightly.",
    features:["Junior & Senior Saturday competitions","Sunday Senior grades (fortnightly)","U/12–U/16 junior age groups","50 Over & T20 formats (Sundays)","Fixture: 2 May – Mid August + finals","Grand Final: 29–30 August"],
    season:"Winter",
  },
];

export default function ProgramsPage() {
  const summer = PROGRAMS.filter(p => p.season === "Summer");
  const winter  = PROGRAMS.filter(p => p.season === "Winter");

  const ProgramCard = ({ p }: { p: typeof PROGRAMS[0] }) => (
    <Link href={`/programs/${p.slug}`}
      className="group no-underline rounded-lg overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_12px_32px_rgba(201,160,48,0.12)] transition-all duration-300">
      <div className={`${p.color} px-8 py-7 relative overflow-hidden`}>
        <div className="absolute top-3 right-4 font-serif text-[56px] font-black text-gold/10 leading-none select-none group-hover:text-gold/18 transition-colors">
          {p.num}
        </div>
        <div className="text-[32px] mb-3 relative z-10">{p.icon}</div>
        <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-2 relative z-10">{p.tag}</div>
        <h2 className="font-serif text-[24px] font-bold text-white leading-[1.2] relative z-10">{p.name}</h2>
      </div>
      <div className="px-8 py-6 bg-white">
        <p className="text-[14px] text-wello-grey leading-[1.7] mb-5">{p.short}</p>
        <ul className="flex flex-col gap-1.5 mb-5">
          {p.features.slice(0,3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-[13px] text-charcoal">
              <span className="text-gold text-xs">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors">
          Learn More →
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Get Involved" title="Our Programs"
          subtitle="Whether you're picking up a bat for the first time or returning for another season — there's a Wello Wildcats program for you." />

        <SectionWrapper className="bg-white">
          {/* Summer Programs */}
          <div className="section-label">Summer Programs — Season 2025/26</div>
          <h2 className="font-serif text-[clamp(24px,2.5vw,32px)] font-black text-green-dark mb-8">Summer Cricket</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {summer.map(p => <ProgramCard key={p.slug} p={p} />)}
          </div>

          {/* Winter Programs */}
          <div className="border-t-2 border-gold pt-12">
            <div className="section-label">Winter Programs — Season 2026</div>
            <h2 className="font-serif text-[clamp(24px,2.5vw,32px)] font-black text-green-dark mb-8">Winter Cricket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {winter.map(p => <ProgramCard key={p.slug} p={p} />)}
            </div>
          </div>
        </SectionWrapper>

        <section className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background:"linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">Ready to Register?</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
              All registrations are handled through Cricket Australia&apos;s PlayHQ system.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Register on PlayHQ</a>
              <a href="/contact" className="btn-secondary">Ask a Question</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
