"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const NEWS = [
  { slug:"1sts-win-round-14",        cat:"Match Report", date:"9 Mar 2026",  title:"1sts Dominate in Round 14 Victory",          excerpt:"A dominant batting display saw the 1sts post 9/287 before rolling the opposition for 164 in an emphatic 123-run victory at 16 Ivy Street.", photo: null },
  { slug:"2nds-finals-push",          cat:"Match Report", date:"9 Mar 2026",  title:"2nds Strengthen Finals Push with Gritty Win", excerpt:"The 2nd Grade side produced a disciplined performance to secure a hard-fought victory, strengthening their finals position.", photo: null },
  { slug:"junior-registrations-open", cat:"Club News",    date:"1 Mar 2026",  title:"Winter 2026 Registrations Now Open",         excerpt:"Warehouse Cricket winter 2026 registrations are now open. Register early to secure your spot.", photo: null },
  { slug:"bears-u17-finals",          cat:"Junior News",  date:"25 Feb 2026", title:"BEARS U17 Qualify for Finals",               excerpt:"The U17 BEARS team has secured a finals berth after a strong performance in the final rounds of the regular season.", photo: null },
  { slug:"cricket-blast-start",       cat:"Junior News",  date:"18 Feb 2026", title:"Cricket Blast Season Kicks Off",             excerpt:"Our Cricket Blast program welcomed a new group of young players this week for the start of the 2025/26 season.", photo: null },
  { slug:"presentation-night",        cat:"Club News",    date:"10 Feb 2026", title:"Junior Presentation Night — Save the Date",  excerpt:"Our annual junior presentation night is set for Friday 28 March. All families welcome — a great night to celebrate our young players.", photo: null },
];

const CAT: Record<string, { border: string; badge: string; bg: string; text: string }> = {
  "Match Report": { border:"#2A6B2A", badge:"bg-green-dark text-white",  bg:"#142E14", text:"MATCH\nREPORT" },
  "Club News":    { border:"#C9A030", badge:"bg-gold text-green-deep",    bg:"#7a5e0a", text:"CLUB\nNEWS"   },
  "Junior News":  { border:"#2563eb", badge:"bg-blue-600 text-white",     bg:"#1e3a8a", text:"JUNIOR\nNEWS"  },
  "Event":        { border:"#7c3aed", badge:"bg-purple-600 text-white",   bg:"#4c1d95", text:"EVENT"         },
};

const RESOURCES = [
  {
    category: "Club Documents",
    items: [
      { title:"Players Code of Conduct", file:"/WelloWildcats_CodeOfConduct.pdf",        type:"PDF",  icon:"📋", external:false },
      { title:"BEARS Rules 2025–2026",   file:"/BEARS_Rules_2025.pdf",                   type:"PDF",  icon:"📋", external:false },
      { title:"Member Protection Policy",file:"/Member-Protection-Policy.pdf",           type:"PDF",  icon:"🛡️", external:false },
      { title:"Get Started – Funding",   file:"/Get-Started-fact-sheet-parents.pdf",     type:"PDF",  icon:"💰", external:false },
      { title:"Blue Card Application",   file:"/PSBA001MAY16-BC-Blue-card-application.pdf", type:"PDF", icon:"🪪", external:false },
    ],
  },
  {
    category: "Registration & PlayHQ",
    items: [
      { title:"Register to Play",         file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register", type:"Link", icon:"🏏", external:true },
      { title:"Club Page on PlayHQ",      file:"https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2",          type:"Link", icon:"📊", external:true },
      { title:"CA Safeguarding Kids",     file:"https://www.cricketaustralia.com.au/about/safeguarding/safeguarding-kids",                     type:"Link", icon:"🛡️", external:true },
    ],
  },
  {
    category: "Electronic Scoring (PlayHQ)",
    intro: "Access the scoring app at score.playhq.com. Results sync live to PlayHQ and the Play Cricket app.",
    items: [
      { title:"How to e-Score",            file:"https://support.playhq.com/hc/en-us/articles/24948598336156", type:"Guide", icon:"🏏", external:true },
      { title:"e-Scoring FAQs",            file:"https://support.playhq.com/hc/en-us/articles/24948827333532", type:"FAQ",   icon:"❓", external:true },
      { title:"DLS Calculator",            file:"https://support.playhq.com/hc/en-us/articles/24948620922396", type:"Guide", icon:"🌧️", external:true },
      { title:"Runs, Wickets & Extras",    file:"https://support.playhq.com/hc/en-us/articles/23971813267484", type:"Guide", icon:"📊", external:true },
      { title:"Secondary Scorer",          file:"https://support.playhq.com/hc/en-us/articles/23977947248796", type:"Guide", icon:"📱", external:true },
      { title:"Edit Bowlers & Batters",    file:"https://support.playhq.com/hc/en-us/articles/23976909095324", type:"Guide", icon:"✏️", external:true },
      { title:"End Over / Innings",        file:"https://support.playhq.com/hc/en-us/articles/23971718470044", type:"Guide", icon:"🏁", external:true },
      { title:"Replace Event",             file:"https://support.playhq.com/hc/en-us/articles/23976130850460", type:"Guide", icon:"↩️", external:true },
      { title:"Split Innings",             file:"https://support.playhq.com/hc/en-us/articles/23975262258844", type:"Guide", icon:"📅", external:true },
    ],
  },
];

// --- Scroll reveal hook ---
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// --- News card with shine effect ---
function NewsCard({ n, delay }: { n: typeof NEWS[0]; delay: number }) {
  const { ref, visible } = useReveal();
  const style = CAT[n.cat] || CAT["Club News"];

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <Link
        href={`/news/${n.slug}`}
        className="group no-underline flex flex-col rounded-xl overflow-hidden border border-grey-light hover:border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,160,48,0.14)] bg-white h-full"
        style={{ borderLeftWidth: "3px", borderLeftColor: style.border }}
      >
        {/* Photo or coloured header */}
        <div className="relative overflow-hidden" style={{ height: 200 }}>
          {n.photo ? (
            <Image src={n.photo} alt={n.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover object-center" />
          ) : (
            <div
              className="w-full h-full flex items-end p-4"
              style={{ background: style.bg }}
            >
              <span
                className="font-serif font-black leading-none select-none pointer-events-none"
                style={{ fontSize: 56, color: "rgba(255,255,255,0.08)", lineHeight: 1, whiteSpace: "pre-line" }}
              >
                {style.text}
              </span>
            </div>
          )}
          {/* Category badge */}
          <span className={`absolute top-3 left-3 font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded ${style.badge}`}>
            {n.cat}
          </span>
          {/* Shine sweep on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
              animation: "none",
            }}
          />
          <style>{`
            .group:hover .shine-sweep {
              animation: shine 0.5s ease forwards;
            }
            @keyframes shine {
              from { background-position: -200% center; }
              to   { background-position: 200% center; }
            }
          `}</style>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="font-condensed text-[10px] text-wello-grey tracking-[0.08em] mb-1">{n.date}</div>
          <h3 className="font-serif text-[17px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-snug mb-2">
            {n.title}
          </h3>
          <p className="text-[12px] text-wello-grey leading-[1.65] flex-1">{n.excerpt}</p>
          <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors mt-3 block">
            Read more →
          </span>
        </div>
      </Link>
    </div>
  );
}

// --- Resource accordion with smooth slide ---
function ResourceSection({ section }: { section: typeof RESOURCES[0] }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  const typeBadge = (type: string) => {
    if (type === "PDF")   return "bg-red-50 text-red-600";
    if (type === "FAQ")   return "bg-purple-50 text-purple-600";
    if (type === "Guide") return "bg-emerald-50 text-emerald-700";
    return "bg-amber-50 text-amber-700";
  };

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
          className="text-wello-grey text-base flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}
        >
          ▾
        </span>
      </button>

      {/* Smooth slide */}
      <div
        ref={bodyRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="border-t border-grey-light">
          {'intro' in section && section.intro && (
            <div className="px-5 py-3 bg-green-deep/5 border-b border-grey-light">
              <p className="text-[12px] text-green-dark">💡 {(section as any).intro}</p>
            </div>
          )}
          {/* Portrait cards grid */}
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {section.items.map((item) => (
              <a
                key={item.title}
                href={item.file}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={!item.external ? true : undefined}
                className="group rounded-xl overflow-hidden border border-grey-light bg-white no-underline hover:border-gold hover:shadow-sm transition-all flex flex-col"
              >
                {/* Coloured header with watermark */}
                <div
                  className="relative px-3 py-3 overflow-hidden flex flex-col justify-between"
                  style={{
                    background: item.type === "PDF" ? "#7a1a1a" : item.type === "FAQ" ? "#4c1d95" : item.type === "Guide" ? "#142E14" : "#7a5e0a",
                    minHeight: 70,
                  }}
                >
                  <span className="absolute bottom-0 left-2 font-serif font-black leading-none select-none pointer-events-none" style={{ fontSize: 28, color: "rgba(255,255,255,0.08)", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}>
                    {item.title.split(" ").slice(0,2).join(" ")}
                  </span>
                  <span className="relative z-10 text-xl self-start">{item.icon}</span>
                  <span className={`relative z-10 self-start font-condensed text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded mt-1 ${typeBadge(item.type)}`}>
                    {item.type}
                  </span>
                </div>
                {/* White body */}
                <div className="px-3 py-2.5 flex flex-col flex-1">
                  <span className="font-condensed text-[10px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-tight mb-auto">
                    {item.title}
                  </span>
                  <span className="font-condensed text-[9px] font-bold tracking-[0.08em] uppercase text-wello-grey group-hover:text-gold transition-colors mt-2">
                    {item.type === "PDF" ? "Download →" : "Open →"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsResourcesPage() {
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

            {/* 3-column magazine grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {NEWS.map((n, i) => (
                <NewsCard key={n.slug} n={n} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>

        {/* Documents section */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-2">Club Resources</div>
            <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-black text-green-dark mb-2">
              Documents &amp; Links
            </h2>
            <p className="text-[14px] text-wello-grey leading-[1.7] mb-8 max-w-xl">
              Scoring guides, registration links and documents for players, coaches and parents. Click a section to expand.
            </p>
            <div className="flex flex-col gap-3">
              {RESOURCES.map((section) => (
                <ResourceSection key={section.category} section={section} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
