"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const PROGRAMS = [
  {
    slug: "cricket-blast",
    icon: "🌟",
    name: "Cricket Blast",
    age: "Ages 5–10",
    tag: "Beginners welcome",
    photo: "/young_programs01.jpg",
    desc: "The perfect first step into cricket. Fun, skills-based training sessions with no competitive matches — just kids learning to love the game.",
    features: ["No match play — training only","Batting, bowling & fielding basics","Mixed boys and girls","Qualified coaches","Fun game-based drills"],
  },
  {
    slug: "rci-trebles",
    icon: "⚡",
    name: "RCI Trebles",
    age: "Ages 7–12",
    tag: "Development cricket",
    photo: null,
    desc: "Ready for match play? RCI Trebles gives players their first taste of competitive cricket in a fun, low-pressure 20-over format.",
    features: ["20-over modified match format","Every player bats & bowls equally","Development-focused — not on PlayHQ","Perfect step up from Cricket Blast","Organised through Redlands Cricket Inc"],
  },
  {
    slug: "junior-cricket",
    icon: "🏏",
    name: "Junior Cricket",
    age: "BEARS divisional",
    tag: "Competitive juniors",
    photo: null,
    desc: "The main junior competition. BEARS divisional cricket with one-day and two-day formats. All results recorded in PlayHQ.",
    features: ["One-day and two-day formats","Graded divisions by age & skill","Batting and bowling shared equally","Recorded in PlayHQ","Pathway to senior cricket"],
  },
  {
    slug: "girls-cricket",
    icon: "👧",
    name: "Girls Cricket",
    age: "All ages",
    tag: "Girls only program",
    photo: "/Girl_Power.jpg",
    desc: "A dedicated space for girls to play, develop and thrive. Linked to the EDJCA Girls Only Sunday Competition with a Winter 2026 season upcoming.",
    features: ["Girls of all ages & skill levels","Supportive, inclusive environment","EDJCA Sunday competition","Winter 2026 season upcoming","Pathway into women's cricket"],
  },
  {
    slug: "warehouse-cricket",
    icon: "🏢",
    name: "Warehouse Cricket",
    age: "U12–U16 & Adults",
    tag: "Winter 2026",
    photo: null,
    desc: "Keep playing through winter. Junior Saturdays and senior Saturdays plus fortnightly Sunday 50 Over & T20 competitions.",
    features: ["Junior Saturdays (U12–U16)","Senior Saturdays + fortnightly Sundays","50 Over & T20 formats","Fixtures: 2 May → mid August","Grand Final: 29–30 August"],
  },
  {
    slug: "senior-cricket",
    icon: "🏆",
    name: "Senior Cricket",
    age: "Adults & Masters 35+",
    tag: "QSDCA turf cricket",
    photo: null,
    desc: "Saturday afternoon turf cricket in the QSDCA. 1st, 2nd, 3rd Grade and a Masters XI for players 35+.",
    features: ["QSDCA Saturday competition","Turf wicket cricket","1st, 2nd & 3rd Grade","Masters XI (35+)","Season: September to March"],
  },
];

export default function ProgramsPage() {
  const [active, setActive] = useState(0);
  const p = PROGRAMS[active];

  return (
    <>
      <Topbar />
      <Nav />
      <main>

        {/* Hero photo */}
        <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
          <Image src="/young_programs.jpg" alt="Wello Wildcats junior cricket training" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/75 via-green-deep/20 to-transparent" />
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-14 max-w-xl">
            <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold block mb-2">Get Involved</span>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight mb-2">Our Programs</h1>
            <p className="text-[14px] text-white/70 hidden md:block">There&apos;s a Wello Wildcats program for every age — from first-timers to Masters.</p>
          </div>
        </div>

        {/* Interactive pathway */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
          <div className="max-w-[1100px] mx-auto">

            <p className="font-condensed text-[11px] font-bold tracking-[0.18em] uppercase text-wello-grey text-center mb-8">
              Find the right program — tap to explore
            </p>

            {/* Pathway */}
            <div className="flex items-start gap-0 mb-10 overflow-x-auto pb-2">
              {PROGRAMS.map((prog, i) => (
                <div key={prog.slug} className="flex items-start flex-1 min-w-[80px]">
                  <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActive(i)}>
                    <div
                      className="mb-2 flex-shrink-0 flex items-center justify-center transition-all duration-200"
                      style={{
                        width: 52, height: 60,
                        clipPath: "polygon(50% 0%,100% 20%,100% 78%,50% 100%,0% 78%,0% 20%)",
                        background: active === i ? "#C9A030" : "#142E14",
                        transform: active === i ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      <span style={{ fontSize: 22 }}>{prog.icon}</span>
                    </div>
                    <span className={`font-condensed text-[10px] font-bold tracking-[0.06em] text-center leading-tight px-1 ${active === i ? "text-gold" : "text-wello-grey"}`}>
                      {prog.name}
                    </span>
                    <span className={`font-condensed text-[9px] text-center mt-1 px-1 ${active === i ? "text-gold" : "text-wello-grey/50"}`}>
                      {prog.age}
                    </span>
                  </div>
                  {i < PROGRAMS.length - 1 && (
                    <div className="h-[2px] flex-1 mt-[26px] bg-green-mid opacity-40" />
                  )}
                </div>
              ))}
            </div>

            {/* Detail card */}
            <div className="rounded-2xl overflow-hidden border border-grey-light">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_380px]">

                {/* Left: content */}
                <div>
                  <div className="bg-green-deep px-7 py-7">
                    <div className="font-condensed text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-2">{p.tag}</div>
                    <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-black text-white leading-tight mb-1">{p.name}</h2>
                    <p className="font-condensed text-[11px] text-white/50 tracking-[0.08em]">{p.age}</p>
                  </div>
                  <div className="bg-white px-7 py-6">
                    <p className="text-[14px] text-wello-grey leading-[1.75] mb-5">{p.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-charcoal">
                          <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-[5px]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 flex-wrap">
                      <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                        Register on PlayHQ
                      </a>
                      <Link href={`/programs/${p.slug}`} className="btn-secondary inline-flex items-center gap-2">
                        Full details →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: photo or placeholder */}
                <div className="relative hidden md:block min-h-[300px]">
                  {p.photo ? (
                    <Image src={p.photo} alt={p.name} fill sizes="380px" className="object-cover object-center" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-green-deep">
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: 100, height: 114,
                          clipPath: "polygon(50% 0%,100% 20%,100% 78%,50% 100%,0% 78%,0% 20%)",
                          background: "#C9A030",
                        }}
                      >
                        <span style={{ fontSize: 48 }}>{p.icon}</span>
                      </div>
                      <p className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-gold/50">Photo coming soon</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Prev / dots / Next */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-wello-grey disabled:opacity-30 hover:text-green-dark transition-colors"
              >
                ← Previous
              </button>
              <div className="flex gap-2 items-center">
                {PROGRAMS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-200 ${active === i ? "bg-gold w-5" : "bg-grey-light w-2"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((a) => Math.min(PROGRAMS.length - 1, a + 1))}
                disabled={active === PROGRAMS.length - 1}
                className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-wello-grey disabled:opacity-30 hover:text-green-dark transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">Ready to Register?</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">All registrations are handled through Cricket Australia&apos;s PlayHQ system.</p>
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
