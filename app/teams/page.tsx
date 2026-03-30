"use client";

import { useState } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/shared/SectionWrapper";

const competitions = [
  {
    association: "Bayside East & Redlands Cricket Association",
    name: "BEARS Junior Divisional Cricket",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "11 teams across U12–U17 · Boys & Mixed",
    description: "Our largest junior program, competing in the BEARS Junior Divisional Cricket competition. Teams are named after their coaches and span two terms — Pre-Christmas (Term 4) and Post-Christmas (Term 1).",
    details: ["Pre-Christmas: Term 4 divisions", "Post-Christmas: Term 1 divisions"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams" }],
    borderColor: "#2A6B2A",
  },
  {
    association: "Eastern Districts Junior Cricket Association",
    name: "Girls Only Junior Sunday Competition via EDJCA",
    seasons: ["Summer 2025/26", "Winter 2026"],
    status: "Active + Upcoming",
    statusGreen: true,
    summary: "Girls Only · Junior Sunday Competition",
    description: "Girls-only junior Sunday competition run through the Eastern Districts Junior Cricket Association. Currently active for Summer 2025/26 with the Winter 2026 season upcoming.",
    details: ["Sunday competition format", "Summer 2025/26 active", "Winter 2026 upcoming"],
    links: [
      { label: "Summer 2025/26 Teams", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams" },
      { label: "Winter 2026 Teams", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams" },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Junior Competition",
    seasons: ["Winter 2026"],
    status: "Active",
    statusGreen: true,
    summary: "Junior (U12–U16) · Saturday competition",
    description: "Warehouse cricket for juniors through the winter months. Saturday competition for U12–U16 age groups.",
    details: ["Fixtures: 2 May → mid August", "U12–U14: 11:30am–4:20pm", "U15–U16: 11:00am–4:40pm", "S/F: 15 & 22 Aug | GF: 29–30 Aug"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams" }],
    borderColor: "#3b82f6",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Senior Competition",
    seasons: ["Winter 2026"],
    status: "Active",
    statusGreen: true,
    summary: "Senior · Saturdays + fortnightly Sundays (50 Over & T20)",
    description: "Warehouse cricket for seniors through the winter months. Saturday competition plus fortnightly Sunday matches in both 50 Over and T20 formats.",
    details: ["Saturday competition", "Fortnightly Sunday — 50 Over & T20", "Fixtures: 2 May → mid August", "S/F: 15 & 22 Aug | GF: 29–30 Aug"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams" }],
    borderColor: "#3b82f6",
  },
  {
    association: "Brisbane Metropolitan Cricket",
    name: "Post Christmas T20 Junior Competition",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Junior T20 · Post-Christmas",
    description: "Junior T20 competition run through Brisbane Metropolitan Cricket in the post-Christmas period of the summer season.",
    details: ["T20 format", "Post-Christmas season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams" }],
    borderColor: "#2A6B2A",
  },
  {
    association: "Queensland Sub Districts Cricket Association",
    name: "QSDCA Competitions",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "1st Grade · 2nd Grade · 3rd Grade · Masters XI (35+)",
    description: "Competing in the Queensland Sub-District Cricket Association on turf wickets every Saturday. The club fields four senior sides across the grades.",
    details: ["Saturday turf competition", "4 teams this season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams" }],
    borderColor: "#C9A030",
  },
  {
    association: "Redlands Cricket Inc",
    name: "Redlands Trebles",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Development cricket · Ages 7–12 · 20-over format",
    description: "A development-focused competition for our youngest cricketers. Designed to build skills and game sense in a fun, low-pressure environment.",
    details: ["20-over development format", "Ages 7–12"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams" }],
    borderColor: "#2A6B2A",
  },
  {
    association: "Community Cricket Championships",
    name: "Senior Competition",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Senior · Community competition",
    description: "Senior competition run through the Community Cricket Championships for the Summer 2025/26 season.",
    details: ["Summer 2025/26 season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams" }],
    borderColor: "#C9A030",
  },
];

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function TeamsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        {/* Photo hero */}
        <div className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
          <Image
            src="/Team1.jpg"
            alt="Wello Wildcats — Season 2025/26"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/70 via-green-deep/20 to-transparent" />
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-14">
            <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold block mb-1">
              Season 2025/26
            </span>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">
              Our Teams
            </h1>
          </div>
        </div>

        <SectionWrapper className="bg-cream">
          <div className="flex flex-col gap-3">
            {competitions.map((comp, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={`${comp.association}-${comp.name}`}
                  className="rounded-xl border border-grey-light bg-white overflow-hidden"
                  style={{ borderLeftWidth: "4px", borderLeftColor: comp.borderColor }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full text-left px-5 md:px-7 py-4 md:py-5 flex items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-condensed text-[9px] font-bold tracking-[0.15em] uppercase text-wello-grey mb-1">
                        {comp.association}
                      </p>
                      <h2 className="font-serif text-[clamp(15px,1.8vw,20px)] font-black text-green-dark leading-tight mb-2">
                        {comp.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 font-condensed text-[9px] font-bold tracking-[0.1em] uppercase text-white ${comp.statusGreen ? "bg-emerald-600" : "bg-amber-500"}`}>
                          {comp.status}
                        </span>
                        {comp.seasons.map((s) => (
                          <span key={s} className="rounded-full border border-grey-light bg-cream px-2.5 py-0.5 font-condensed text-[9px] font-bold tracking-[0.1em] uppercase text-wello-grey">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      className="text-wello-grey text-lg flex-shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Expanded body — gold tint */}
                  {isOpen && (
                    <div
                      className="px-5 md:px-7 py-5 border-t border-gold/20"
                      style={{ backgroundColor: "#FFF8E7" }}
                    >
                      <p className="font-condensed text-[11px] font-bold tracking-[0.08em] uppercase text-gold mb-3">
                        {comp.summary}
                      </p>
                      <p className="text-[14px] leading-relaxed text-wello-grey mb-4">
                        {comp.description}
                      </p>
                      {comp.details.length > 0 && (
                        <ul className="flex flex-wrap gap-x-6 gap-y-1.5 mb-5">
                          {comp.details.map((d) => (
                            <li key={d} className="flex items-center gap-1.5 font-condensed text-[11px] text-wello-grey">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: comp.borderColor }} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-col sm:flex-row gap-3">
                        {comp.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
                          >
                            {link.label}
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Bottom CTA */}
        <section
          className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}
        >
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">
              Want to play for the <span className="text-gold">Wildcats?</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
              Register online or contact the club to find the right team for you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register on PlayHQ
              </a>
              <a href="/contact" className="btn-secondary">Contact the Club</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
