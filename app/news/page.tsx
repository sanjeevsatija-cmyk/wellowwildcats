import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Resources",
  description: "Latest news, match reports and club resources from Wellington Point Cricket Club.",
};

const NEWS = [
  { slug:"1sts-win-round-14", cat:"Match Report", date:"9 Mar 2026", title:"1sts Dominate in Round 14 Victory", excerpt:"A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at 16 Ivy Street on Saturday.", featured:true },
  { slug:"2nds-finals-push",  cat:"Match Report", date:"9 Mar 2026", title:"2nds Strengthen Finals Push with Gritty Win", excerpt:"The 2nd Grade side produced a disciplined performance to secure a hard-fought victory, strengthening their finals position.", featured:false },
  { slug:"junior-registrations-open", cat:"Club News", date:"1 Mar 2026", title:"Winter 2026 Registrations Now Open", excerpt:"Warehouse Cricket winter 2026 registrations are now open. Register early to secure your spot — fixtures start Saturday 2nd May.", featured:false },
  { slug:"bears-u17-finals",  cat:"Junior News", date:"25 Feb 2026", title:"BEARS U17 Qualify for Finals", excerpt:"The U17 BEARS team has secured a finals berth after a strong performance in the final rounds of the regular season.", featured:false },
  { slug:"cricket-blast-start", cat:"Junior News", date:"18 Feb 2026", title:"Cricket Blast Season Kicks Off", excerpt:"Our Cricket Blast program welcomed a new group of young players this week for the start of the 2025/26 season.", featured:false },
];

const RESOURCES = [
  {
    category: "Club Documents",
    items: [
      { title:"Players Code of Conduct", desc:"The Wello Wildcats Players Code of Conduct — 'Our Pride'. Required reading for all registered players.", file:"/WelloWildcats_CodeOfConduct.pdf", type:"PDF", icon:"📋" },
      { title:"BEARS Rules 2025–2026", desc:"Official BEARS rules for the conduct of cricket 2025–2026. Required reading for all BEARS coaches, managers and umpires.", file:"/BEARS_Rules_2025.pdf", type:"PDF", icon:"📋" },
    ],
  },
  {
    category: "Electronic Scoring (PlayHQ)",
    intro: "Electronic scoring allows results to sync live to PlayHQ and the Play Cricket app. Access the scoring app at score.playhq.com.",
    items: [
      { title:"How to e-Score a Cricket Game", desc:"Complete step-by-step guide: starting a game, recording runs/wickets/extras, changing batters and bowlers, ending overs, innings and games.", file:"https://support.playhq.com/hc/en-us/articles/24948598336156-How-to-e-Score-a-Cricket-game", type:"Guide", icon:"🏏", external:true },
      { title:"Cricket e-Scoring FAQs", desc:"Common questions: adding fill-in players, correcting game settings, applying DLS, and when scores appear live online.", file:"https://support.playhq.com/hc/en-us/articles/24948827333532-Cricket-e-Scoring-FAQs", type:"FAQ", icon:"❓", external:true },
      { title:"DLS Calculator on PlayHQ", desc:"How to use the Duckworth-Lewis-Stern calculator for rain-affected matches.", file:"https://support.playhq.com/hc/en-us/articles/24948620922396-DLS-calculator-on-PlayHQ", type:"Guide", icon:"🌧️", external:true },
      { title:"Recording Runs, Wickets & Extras", desc:"All delivery outcomes including dot balls, runs, wides, no balls, byes, leg byes, penalty runs and all dismissal types.", file:"https://support.playhq.com/hc/en-us/articles/23971813267484-Recording-Runs-Wickets-and-Extras", type:"Guide", icon:"📊", external:true },
      { title:"Secondary Scorer", desc:"How to set up a second device to score the same match simultaneously.", file:"https://support.playhq.com/hc/en-us/articles/23977947248796-Secondary-Scorer", type:"Guide", icon:"📱", external:true },
      { title:"Editing Bowlers, Batters & Line-ups", desc:"How to make corrections to existing entries including bowler/batter details and team line-ups during a match.", file:"https://support.playhq.com/hc/en-us/articles/23976909095324-Editing-bowlers-batters-value-of-runs-extras-team-line-ups", type:"Guide", icon:"✏️", external:true },
      { title:"Ending an Over, Innings or Game", desc:"How to manually end an over, innings or game — including using the Actions menu to end an innings early.", file:"https://support.playhq.com/hc/en-us/articles/23971718470044-Ending-an-Over-Innings-or-Game", type:"Guide", icon:"🏁", external:true },
      { title:"Replace Event — Fixing Dot Balls, Runs & Extras", desc:"How to correct a previously recorded ball — changing a dot ball to runs or correcting extra types.", file:"https://support.playhq.com/hc/en-us/articles/23976130850460-Replace-Event-Changing-dot-balls-runs-and-extras", type:"Guide", icon:"↩️", external:true },
      { title:"Split Innings", desc:"How to handle split innings in two-day game formats.", file:"https://support.playhq.com/hc/en-us/articles/23975262258844-Split-Innings", type:"Guide", icon:"📅", external:true },
    ],
  },
  {
    category: "Registration & PlayHQ",
    items: [
      { title:"Register to Play", desc:"Register for all Wello Wildcats programs through Cricket Australia's official PlayHQ platform.", file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register", type:"Link", icon:"🏏", external:true },
      { title:"Club Page on PlayHQ", desc:"View all teams, fixtures, ladders, results and player statistics on the official Wello Wildcats PlayHQ page.", file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2", type:"Link", icon:"📊", external:true },
      { title:"Cricket Australia Safeguarding Kids", desc:"Cricket Australia's policies and codes for safeguarding children and young people in cricket.", file:"https://www.cricketaustralia.com.au/about/safeguarding/safeguarding-kids", type:"Link", icon:"🛡️", external:true },
    ],
  },
];

const CAT_COLORS: Record<string, string> = {
  "Match Report":"bg-green-dark text-white",
  "Club News":"bg-gold text-green-deep",
  "Junior News":"bg-blue-600 text-white",
  "Event":"bg-purple-600 text-white",
};

export default function NewsResourcesPage() {
  const featured = NEWS.find(n => n.featured);
  const rest = NEWS.filter(n => !n.featured);

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Stay Informed" title="News & Resources"
          subtitle="Latest club news, match reports and essential resources for players, coaches and parents." />

        {/* ── NEWS SECTION ── */}
        <SectionWrapper className="bg-cream">
          <div className="section-label">Latest News</div>
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] font-black text-green-dark mb-10">Club News & Match Reports</h2>

          {featured && (
            <Link href={`/news/${featured.slug}`}
              className="group no-underline block rounded-lg overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_12px_32px_rgba(201,160,48,0.12)] transition-all duration-300 mb-8">
              <div className="bg-green-deep h-[240px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-mid/30 to-transparent" />
                <span className="text-[80px] relative z-10">🏏</span>
                <div className="absolute top-4 left-4">
                  <span className={`font-condensed text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded ${CAT_COLORS[featured.cat] || "bg-green-dark text-white"}`}>
                    {featured.cat}
                  </span>
                </div>
              </div>
              <div className="bg-white p-8">
                <div className="font-condensed text-[11px] text-wello-grey tracking-[0.08em] mb-2">{featured.date}</div>
                <h3 className="font-serif text-[26px] font-bold text-charcoal mb-3 group-hover:text-green-dark transition-colors">{featured.title}</h3>
                <p className="text-[14px] text-wello-grey leading-[1.7]">{featured.excerpt}</p>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map(n => (
              <Link key={n.slug} href={`/news/${n.slug}`}
                className="group no-underline block bg-white rounded-lg border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200 overflow-hidden">
                <div className="bg-green-dark h-[120px] flex items-center justify-center relative">
                  <span className="text-[40px]">🏏</span>
                  <div className="absolute top-3 left-3">
                    <span className={`font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded ${CAT_COLORS[n.cat] || "bg-green-dark text-white"}`}>
                      {n.cat}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-condensed text-[10px] text-wello-grey tracking-[0.08em] mb-2">{n.date}</div>
                  <h3 className="font-serif text-[17px] font-bold text-charcoal mb-2 group-hover:text-green-dark transition-colors leading-snug">{n.title}</h3>
                  <p className="text-[13px] text-wello-grey leading-[1.6]">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        {/* ── RESOURCES SECTION ── */}
        <SectionWrapper className="bg-white">
          <div className="section-label">Club Resources</div>
          <h2 className="font-serif text-[clamp(26px,3vw,38px)] font-black text-green-dark mb-3">Documents & Links</h2>
          <p className="text-[15px] text-wello-grey leading-[1.75] mb-12 max-w-2xl">
            Useful documents, scoring guides, registration links and information for players, coaches and parents.
          </p>

          <div className="flex flex-col gap-12">
            {RESOURCES.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-condensed text-[13px] font-bold tracking-[0.14em] uppercase text-green-dark">{section.category}</h3>
                  <div className="flex-1 h-px bg-grey-light" />
                </div>
                {'intro' in section && section.intro && (
                  <div className="bg-green-deep/5 border border-green-dark/20 rounded-lg px-5 py-3 mb-5">
                    <p className="text-[13px] text-green-dark font-medium">
                      💡 {section.intro}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <a key={item.title}
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.type === "PDF" ? true : undefined}
                      className="bg-cream rounded-lg border border-grey-light p-5 no-underline group hover:border-gold hover:shadow-[0_6px_20px_rgba(201,160,48,0.1)] transition-all duration-200 flex gap-4 items-start">
                      <div className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="font-condensed text-[13px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <span className={`font-condensed text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded flex-shrink-0 ${
                            item.type === "PDF" ? "bg-red-100 text-red-700" :
                            item.type === "FAQ" ? "bg-purple-100 text-purple-700" :
                            "bg-green-pale text-green-dark"
                          }`}>{item.type}</span>
                        </div>
                        <p className="text-[12px] text-wello-grey leading-[1.55]">{item.desc}</p>
                        <div className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors mt-2">
                          {item.type === "PDF" ? "Download →" : "Open →"}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
