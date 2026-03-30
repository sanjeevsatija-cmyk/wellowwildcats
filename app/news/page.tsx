"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

const NEWS = [
  { slug:"1sts-win-round-14",        cat:"Match Report", date:"9 Mar 2026",  title:"1sts Dominate in Round 14 Victory",          excerpt:"A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at 16 Ivy Street on Saturday.", featured:true },
  { slug:"2nds-finals-push",          cat:"Match Report", date:"9 Mar 2026",  title:"2nds Strengthen Finals Push with Gritty Win", excerpt:"The 2nd Grade side produced a disciplined performance to secure a hard-fought victory, strengthening their finals position.", featured:false },
  { slug:"junior-registrations-open", cat:"Club News",    date:"1 Mar 2026",  title:"Winter 2026 Registrations Now Open",         excerpt:"Warehouse Cricket winter 2026 registrations are now open. Register early to secure your spot — fixtures start Saturday 2nd May.", featured:false },
  { slug:"bears-u17-finals",          cat:"Junior News",  date:"25 Feb 2026", title:"BEARS U17 Qualify for Finals",               excerpt:"The U17 BEARS team has secured a finals berth after a strong performance in the final rounds of the regular season.", featured:false },
  { slug:"cricket-blast-start",       cat:"Junior News",  date:"18 Feb 2026", title:"Cricket Blast Season Kicks Off",             excerpt:"Our Cricket Blast program welcomed a new group of young players this week for the start of the 2025/26 season.", featured:false },
];

const CAT_STYLES: Record<string, { border: string; badge: string; dot: string }> = {
  "Match Report": { border: "#2A6B2A", badge: "bg-green-dark text-white",    dot: "#2A6B2A" },
  "Club News":    { border: "#C9A030", badge: "bg-gold text-green-deep",      dot: "#C9A030" },
  "Junior News":  { border: "#2563eb", badge: "bg-blue-600 text-white",       dot: "#2563eb" },
  "Event":        { border: "#7c3aed", badge: "bg-purple-600 text-white",     dot: "#7c3aed" },
};

const RESOURCES = [
  {
    category: "Club Documents",
    items: [
      { title:"Players Code of Conduct", file:"/WelloWildcats_CodeOfConduct.pdf", type:"PDF", icon:"📋", external:false },
      { title:"BEARS Rules 2025–2026",   file:"/BEARS_Rules_2025.pdf",             type:"PDF", icon:"📋", external:false },
      { title:"Member Protection Policy",file:"/Member-Protection-Policy.pdf",     type:"PDF", icon:"🛡️", external:false },
    ],
  },
  {
    category: "Registration & PlayHQ",
    items: [
      { title:"Register to Play",                    file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register", type:"Link", icon:"🏏", external:true },
      { title:"Club Page on PlayHQ",                 file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2",          type:"Link", icon:"📊", external:true },
      { title:"Cricket Australia Safeguarding Kids", file:"https://www.cricketaustralia.com.au/about/safeguarding/safeguarding-kids",                      type:"Link", icon:"🛡️", external:true },
      { title:"Get Started – Funding for Kids",      file:"/Get-Started-fact-sheet-parents.pdf",                                                          type:"PDF",  icon:"💰", external:false },
      { title:"Blue Card Application",               file:"/PSBA001MAY16-BC-Blue-card-application.pdf",                                                   type:"PDF",  icon:"🪪", external:false },
    ],
  },
  {
    category: "Electronic Scoring (PlayHQ)",
    intro: "Electronic scoring syncs results live to PlayHQ and the Play Cricket app. Access the scoring app at score.playhq.com.",
    items: [
      { title:"How to e-Score a Cricket Game",             file:"https://support.playhq.com/hc/en-us/articles/24948598336156", type:"Guide", icon:"🏏", external:true },
      { title:"Cricket e-Scoring FAQs",                    file:"https://support.playhq.com/hc/en-us/articles/24948827333532", type:"FAQ",   icon:"❓", external:true },
      { title:"DLS Calculator on PlayHQ",                  file:"https://support.playhq.com/hc/en-us/articles/24948620922396", type:"Guide", icon:"🌧️", external:true },
      { title:"Recording Runs, Wickets & Extras",          file:"https://support.playhq.com/hc/en-us/articles/23971813267484", type:"Guide", icon:"📊", external:true },
      { title:"Secondary Scorer",                          file:"https://support.playhq.com/hc/en-us/articles/23977947248796", type:"Guide", icon:"📱", external:true },
      { title:"Editing Bowlers, Batters & Line-ups",       file:"https://support.playhq.com/hc/en-us/articles/23976909095324", type:"Guide", icon:"✏️", external:true },
      { title:"Ending an Over, Innings or Game",           file:"https://support.playhq.com/hc/en-us/articles/23971718470044", type:"Guide", icon:"🏁", external:true },
      { title:"Replace Event – Fixing Dot Balls & Extras", file:"https://support.playhq.com/hc/en-us/articles/23976130850460", type:"Guide", icon:"↩️", external:true },
      { title:"Split Innings",                             file:"https://support.playhq.com/hc/en-us/articles/23975262258844", type:"Guide", icon:"📅", external:true },
    ],
  },
];

function ResourceAccordion({ section }: { section: typeof RESOURCES[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-grey-light overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-cream transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
          <span className="font-condensed text-[12px] font-bold tracking-[0.12em] uppercase text-green-dark">
            {section.category}
          </span>
          <span className="font-condensed text-[10px] text-wello-grey bg-cream border border-grey-light rounded-full px-2 py-0.5">
            {section.items.length} items
          </span>
        </div>
        <span
          className="text-wello-grey text-lg flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="border-t border-grey-light">
          {'intro' in section && section.intro && (
            <div className="px-5 py-3 bg-green-deep/5 border-b border-grey-light">
              <p className="text-[12px] text-green-dark">💡 {section.intro}</p>
            </div>
          )}
          <div className="divide-y divide-grey-light">
            {section.items.map((item) => (
              <a
                key={item.title}
                href={item.file}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={!item.external ? true : undefined}
                className="flex items-center gap-4 px-5 py-3 bg-white hover:bg-cream transition-colors no-underline group"
              >
                <span className="text-xl flex-shrink-0 w-7 text-center">{item.icon}</span>
                <span className="flex-1 font-condensed text-[12px] font-bold text-charcoal group-hover:text-green-dark transition-colors">
                  {item.title}
                </span>
                <span className={`font-condensed text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded flex-shrink-0 ${
                  item.type === "PDF"   ? "bg-red-50 text-red-600" :
                  item.type === "FAQ"   ? "bg-purple-50 text-purple-600" :
                  item.type === "Guide" ? "bg-green-50 text-green-700" :
                  "bg-amber-50 text-amber-700"
                }`}>{item.type}</span>
                <span className="font-condensed text-[10px] font-bold text-wello-grey group-hover:text-gold transition-colors flex-shrink-0">
                  {item.type === "PDF" ? "↓" : "→"}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function NewsResourcesPage() {
  const featured = NEWS.find((n) => n.featured)!;
  const rest = NEWS.filter((n) => !n.featured);

  return (
    <>
      <Topbar />
      <Nav />
      <main>

        {/* Hero */}
        <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden">
          <Image src="/Events.jpg" alt="Wello Wildcats club event" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-green-deep/30 to-transparent" />
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-14">
            <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold block mb-2">Stay Informed</span>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">News &amp; Resources</h1>
          </div>
        </div>

        {/* News section */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-cream">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-2">Latest News</div>
            <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-black text-green-dark mb-8">
              Club News &amp; Match Reports
            </h2>

            {/* Featured article */}
            <Link
              href={`/news/${featured.slug}`}
              className="group no-underline flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_12px_32px_rgba(201,160,48,0.12)] transition-all duration-300 mb-4 bg-white"
              style={{ borderLeftWidth: "4px", borderLeftColor: CAT_STYLES[featured.cat]?.border }}
            >
              <div className="bg-green-deep md:w-[220px] h-[120px] md:h-auto flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <span className="text-[52px]">🏏</span>
                <span className={`absolute top-3 left-3 font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded ${CAT_STYLES[featured.cat]?.badge}`}>
                  {featured.cat}
                </span>
              </div>
              <div className="p-5 md:p-6 flex flex-col justify-center flex-1">
                <div className="font-condensed text-[10px] text-wello-grey tracking-[0.08em] mb-1">{featured.date}</div>
                <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-charcoal mb-2 group-hover:text-green-dark transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-[13px] text-wello-grey leading-[1.65]">{featured.excerpt}</p>
                <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors mt-3">
                  Read more →
                </span>
              </div>
            </Link>

            {/* Rest of articles — compact horizontal rows */}
            <div className="flex flex-col gap-2">
              {rest.map((n) => (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  className="group no-underline flex items-center gap-4 bg-white rounded-xl border border-grey-light hover:border-gold hover:shadow-sm transition-all duration-200 px-4 py-3.5 overflow-hidden"
                  style={{ borderLeftWidth: "3px", borderLeftColor: CAT_STYLES[n.cat]?.border }}
                >
                  <div className="flex-shrink-0 hidden sm:flex w-8 h-8 rounded-lg items-center justify-center text-base"
                    style={{ background: `${CAT_STYLES[n.cat]?.border}20` }}>
                    <span style={{ fontSize: 16 }}>🏏</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className={`font-condensed text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded flex-shrink-0 ${CAT_STYLES[n.cat]?.badge}`}>
                        {n.cat}
                      </span>
                      <span className="font-condensed text-[10px] text-wello-grey">{n.date}</span>
                    </div>
                    <h3 className="font-condensed text-[13px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-snug truncate">
                      {n.title}
                    </h3>
                  </div>
                  <span className="font-condensed text-[11px] text-wello-grey group-hover:text-gold transition-colors flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources section */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-2">Club Resources</div>
            <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-black text-green-dark mb-2">
              Documents &amp; Links
            </h2>
            <p className="text-[14px] text-wello-grey leading-[1.7] mb-8 max-w-xl">
              Scoring guides, registration links and documents for players, coaches and parents.
              Click a section to expand.
            </p>
            <div className="flex flex-col gap-3">
              {RESOURCES.map((section) => (
                <ResourceAccordion key={section.category} section={section} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
