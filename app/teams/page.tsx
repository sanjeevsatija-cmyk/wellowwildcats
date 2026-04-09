"use client";

import { useState } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/shared/SectionWrapper";

// winterStatus: "active" = playing now | "upcoming" = starts soon | "summer" = off-season
// To switch back for Summer: set Warehouse/Girls to "summer", BEARS/QSDCA etc to "active"
const competitions = [
  {
    association: "Warehouse Cricket Association",
    name: "Junior Competition",
    seasons: ["Winter 2026"], winterStatus: "active" as const,
    dateRange: "7 Feb – 1 Sep 2026",
    summary: "Junior (U12–U16) · Saturday competition",
    description: "Warehouse cricket for juniors through the winter months. Saturday competition for U12–U16 age groups.",
    details: ["Fixtures: 2 May → mid August", "U12–U14: 11:30am–4:20pm", "U15–U16: 11:00am–4:40pm"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams" }],
    headerBg: "#1e3a8a", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Senior Competition",
    seasons: ["Winter 2026"], winterStatus: "active" as const,
    dateRange: "7 Feb – 1 Sep 2026",
    summary: "Senior · Saturdays + fortnightly Sundays",
    description: "Warehouse cricket for seniors through the winter months. Saturday competition plus fortnightly Sunday matches in 50 Over and T20 formats.",
    details: ["Saturday competition", "Fortnightly Sunday — 50 Over & T20", "GF: 29–30 August"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams" }],
    headerBg: "#1e3a8a", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Eastern Districts Junior Cricket Association",
    name: "Girls Only Junior Sunday",
    seasons: ["Winter 2026"], winterStatus: "upcoming" as const,
    dateRange: "10 May – 23 Aug 2026",
    summary: "Girls Only · Junior Sunday Competition",
    description: "Girls-only junior Sunday competition run through the Eastern Districts Junior Cricket Association. Winter 2026 season upcoming.",
    details: ["Sunday competition format", "Winter 2026: 10 May – 23 Aug"],
    links: [
      { label: "Winter 2026 on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams" },
    ],
    headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Bayside East & Redlands Cricket Association",
    name: "BEARS Junior Divisional Cricket",
    seasons: ["Summer 2025/26"], winterStatus: "summer" as const,
    dateRange: "Starting Sep 2026",
    summary: "11 teams across U12–U17 · Boys & Mixed",
    description: "Our largest junior program, competing in the BEARS Junior Divisional Cricket competition. Teams are named after their coaches and span two terms — Pre-Christmas (Term 4) and Post-Christmas (Term 1).",
    details: ["Pre-Christmas: Term 4 divisions", "Post-Christmas: Term 1 divisions"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams" }],
    headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Queensland Sub Districts Cricket Association",
    name: "QSDCA Competitions",
    seasons: ["Summer 2025/26"], winterStatus: "summer" as const,
    dateRange: "Starting Sep 2026",
    summary: "1st Grade · 2nd Grade · 3rd Grade · Masters XI",
    description: "Competing in the Queensland Sub-District Cricket Association on turf wickets every Saturday. The club fields four senior sides across the grades.",
    details: ["Saturday turf competition", "4 teams this season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams" }],
    headerBg: "#7a5e0a", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Brisbane Metropolitan Cricket",
    name: "Post Christmas T20 Junior",
    seasons: ["Summer 2025/26"], winterStatus: "summer" as const,
    dateRange: "Starting Dec 2026",
    summary: "Junior T20 · Post-Christmas",
    description: "Junior T20 competition run through Brisbane Metropolitan Cricket in the post-Christmas period of the summer season.",
    details: ["T20 format", "Post-Christmas season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams" }],
    headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Redlands Cricket Inc",
    name: "Redlands Trebles",
    seasons: ["Summer 2025/26"], winterStatus: "summer" as const,
    dateRange: "Starting Sep 2026",
    summary: "Development cricket · Ages 7–12 · 20-over format",
    description: "A development-focused competition for our youngest cricketers. Designed to build skills and game sense in a fun, low-pressure environment.",
    details: ["20-over development format", "Ages 7–12"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams" }],
    headerBg: "#142E14", watermarkColor: "rgba(255,255,255,0.07)",
  },
  {
    association: "Community Cricket Championships",
    name: "Senior Competition",
    seasons: ["Summer 2025/26"], winterStatus: "summer" as const,
    dateRange: "Starting Sep 2026",
    summary: "Senior · Community competition",
    description: "Senior competition run through the Community Cricket Championships for the Summer 2025/26 season.",
    details: ["Summer 2025/26 season"],
    links: [{ label: "View Teams on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams" }],
    headerBg: "#7a5e0a", watermarkColor: "rgba(255,255,255,0.07)",
  },
];

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

function StatusBadge({ status }: { status: "active" | "upcoming" | "summer" }) {
  if (status === "active") return (
    <span className="relative z-10 self-start inline-flex items-center gap-1.5 font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-emerald-600 text-white">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse flex-shrink-0" />
      Active Now
    </span>
  );
  if (status === "upcoming") return (
    <span className="relative z-10 self-start font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-gold text-green-deep">
      Upcoming
    </span>
  );
  return (
    <span className="relative z-10 self-start font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded bg-white/20 text-white/60">
      Summer Season
    </span>
  );
}

function CompCard({ comp }: { comp: typeof competitions[0] }) {
  const isSummer = comp.winterStatus === "summer";
  return (
    <div
      className="group rounded-xl overflow-hidden border border-grey-light hover:border-gold hover:shadow-[0_16px_40px_rgba(201,160,48,0.14)] transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col"
      style={{ opacity: isSummer ? 0.5 : 1, filter: isSummer ? "grayscale(0.25)" : "none" }}
    >
      {/* Coloured header with watermark */}
      <div className="relative flex items-flex-end p-4 overflow-hidden" style={{ background: comp.headerBg, minHeight: 100 }}>
        <span
          className="absolute bottom-1 left-3 font-serif font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 44, color: comp.watermarkColor, lineHeight: 1, whiteSpace: "nowrap", overflow: "hidden", maxWidth: "100%" }}
        >
          {comp.name.split(" ").slice(0, 2).join(" ")}
        </span>
        <StatusBadge status={comp.winterStatus} />
      </div>

      {/* White body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-wello-grey mb-1">{comp.association}</p>
        <h3 className="font-serif text-[16px] font-bold text-green-dark leading-snug mb-1">{comp.name}</h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {comp.seasons.map((s) => (
            <span key={s} className="font-condensed text-[9px] bg-cream border border-grey-light rounded-full px-2 py-0.5 text-wello-grey">{s}</span>
          ))}
          <span className="font-condensed text-[9px] bg-cream border border-grey-light rounded-full px-2 py-0.5 text-wello-grey">{comp.dateRange}</span>
        </div>
        <p className="font-condensed text-[10px] font-bold tracking-[0.08em] uppercase text-gold mb-2">{comp.summary}</p>
        <p className="text-[12px] text-wello-grey leading-[1.65] flex-1 mb-3">{comp.description}</p>
        {comp.details.length > 0 && (
          <ul className="flex flex-col gap-1 mb-4">
            {comp.details.map((d) => (
              <li key={d} className="flex items-center gap-1.5 font-condensed text-[10px] text-wello-grey">
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />{d}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col gap-2 mt-auto">
          {comp.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
              className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors no-underline">
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamsPage() {
  const winterComps = competitions.filter(c => c.winterStatus !== "summer");
  const summerComps = competitions.filter(c => c.winterStatus === "summer");

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        {/* Photo hero */}
        <div className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
          <Image src="/Team1.jpg" alt="Wello Wildcats" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/70 via-green-deep/20 to-transparent" />
          <div className="absolute bottom-14 left-6 md:bottom-16 md:left-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-5 h-0.5 bg-gold" />
              <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold">Season 2025/26</span>
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">Our Teams</h1>
          </div>
          <div className="absolute bottom-0 left-[-5%] w-[110%] h-[50px] bg-cream pointer-events-none" style={{ transform: "skewY(-2deg)" }} />
        </div>

        <SectionWrapper className="bg-cream">

          {/* ── Currently playing ── */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Now Playing — Winter 2026
            </span>
            <span className="flex-1 h-px bg-grey-light" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {winterComps.map((comp) => (
              <CompCard key={`${comp.association}-${comp.name}`} comp={comp} />
            ))}
          </div>

          {/* ── Summer season ── */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-wello-grey">
              ☀️ Summer Season — Returning Sep 2026
            </span>
            <span className="flex-1 h-px bg-grey-light" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {summerComps.map((comp) => (
              <CompCard key={`${comp.association}-${comp.name}`} comp={comp} />
            ))}
          </div>

        </SectionWrapper>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">
              Want to play for the <span className="text-gold">Wildcats?</span>
            </h2>
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
