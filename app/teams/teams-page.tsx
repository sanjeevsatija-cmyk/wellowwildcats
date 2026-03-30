import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teams",
  description:
    "Wellington Point Cricket Club fields teams across senior, junior, and winter competitions. View all teams on PlayHQ.",
};

const competitions = [
  {
    association: "Bayside East & Redlands Cricket Association",
    name: "BEARS Junior Divisional Cricket",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "11 teams across U12–U17 · Boys & Mixed",
    description:
      "Our largest junior program, competing in the BEARS Junior Divisional Cricket competition. Teams are named after their coaches and span two terms — Pre-Christmas (Term 4) and Post-Christmas (Term 1).",
    details: [
      "Pre-Christmas: Term 4 divisions",
      "Post-Christmas: Term 1 divisions",
    ],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams",
      },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Eastern Districts Junior Cricket Association",
    name: "Girls Only Junior Sunday Competition via EDJCA",
    seasons: ["Summer 2025/26", "Winter 2026"],
    status: "Active + Upcoming",
    statusGreen: true,
    summary: "Girls Only · Junior Sunday Competition",
    description:
      "Girls-only junior Sunday competition run through the Eastern Districts Junior Cricket Association. Currently active for Summer 2025/26 with the Winter 2026 season upcoming.",
    details: [
      "Sunday competition format",
      "Summer 2025/26 active",
      "Winter 2026 upcoming",
    ],
    links: [
      {
        label: "Summer 2025/26 Teams",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams",
      },
      {
        label: "Winter 2026 Teams",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams",
      },
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
    description:
      "Indoor warehouse cricket for juniors through the winter months. Saturday competition for U12–U16 age groups.",
    details: [
      "Fixtures: 2 May → mid August",
      "U12–U14: 11:30am–4:20pm",
      "U15–U16: 11:00am–4:40pm",
      "S/F: 15 & 22 Aug | GF: 29–30 Aug",
    ],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams",
      },
    ],
    borderColor: "#3b82f6",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Senior Competition",
    seasons: ["Winter 2026"],
    status: "Active",
    statusGreen: true,
    summary: "Senior · Saturdays + fortnightly Sundays (50 Over & T20)",
    description:
      "Indoor warehouse cricket for seniors through the winter months. Saturday competition plus fortnightly Sunday matches in both 50 Over and T20 formats.",
    details: [
      "Saturday competition",
      "Fortnightly Sunday — 50 Over & T20",
      "Fixtures: 2 May → mid August",
      "S/F: 15 & 22 Aug | GF: 29–30 Aug",
    ],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams",
      },
    ],
    borderColor: "#3b82f6",
  },
  {
    association: "Brisbane Metropolitan Cricket",
    name: "Post Christmas T20 Junior Competition",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Junior T20 · Post-Christmas",
    description:
      "Junior T20 competition run through Brisbane Metropolitan Cricket in the post-Christmas period of the summer season.",
    details: ["T20 format", "Post-Christmas season"],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams",
      },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Queensland Sub Districts Cricket Association",
    name: "QSDCA Competitions",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "1st Grade · 2nd Grade · 3rd Grade · Masters XI (35+)",
    description:
      "Competing in the Queensland Sub-District Cricket Association on turf wickets every Saturday. The club fields four senior sides across the grades.",
    details: ["Saturday turf competition", "4 teams this season"],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams",
      },
    ],
    borderColor: "#C9A030",
  },
  {
    association: "Redlands Cricket Inc",
    name: "Redlands Trebles",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Development cricket · Ages 7–12 · 20-over format",
    description:
      "A development-focused competition for our youngest cricketers. Designed to build skills and game sense in a fun, low-pressure environment.",
    details: ["20-over development format", "Ages 7–12"],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams",
      },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Community Cricket Championships",
    name: "Senior Competition",
    seasons: ["Summer 2025/26"],
    status: "Active",
    statusGreen: true,
    summary: "Senior · Community competition",
    description:
      "Senior competition run through the Community Cricket Championships for the Summer 2025/26 season.",
    details: ["Summer 2025/26 season"],
    links: [
      {
        label: "View Teams on PlayHQ",
        url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams",
      },
    ],
    borderColor: "#C9A030",
  },
];

const REG_URL =
  "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function TeamsPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Season 2025/26"
          title="Our Teams"
          subtitle="Wellington Point CC fields teams across eight competitions — from senior turf cricket to junior development programs and winter warehouse cricket."
        />

        {/* Team photo */}
        <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
          <Image
            src="/Team1.jpg"
            alt="Wello Wildcats — Season 2025/26"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 md:bottom-8 md:left-10">
            <span className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-gold">Season 2025/26</span>
            <p className="font-serif text-[18px] md:text-[24px] font-black text-white leading-tight mt-1">Wello Wildcats — One Club, All Ages</p>
          </div>
        </div>

        <SectionWrapper className="bg-cream">
          {/* Intro note */}
          <div className="mb-10 rounded-lg border border-gold/30 bg-green-deep/5 px-6 py-4 text-[13px] text-wello-grey">
            <span className="font-semibold text-green-dark">Team names change each season</span>{" "}
            — our junior sides are named after their coaches who rotate yearly. For the most
            accurate and up-to-date team lists, rosters, and fixtures, always use the{" "}
            <a
              href="https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-2 hover:text-gold-bright"
            >
              official PlayHQ club page
            </a>
            .
          </div>

          {/* Competition cards */}
          <div className="flex flex-col gap-6">
            {competitions.map((comp) => (
              <div
                key={`${comp.association}-${comp.name}`}
                className="rounded-lg border border-grey-light bg-white shadow-sm transition-shadow hover:shadow-md overflow-hidden"
                style={{ borderLeftWidth: "4px", borderLeftColor: comp.borderColor }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    {/* Left: info */}
                    <div className="flex-1">
                      {/* Association name */}
                      <p className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-wello-grey mb-1">
                        {comp.association}
                      </p>

                      {/* Competition name + badges */}
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <h2 className="font-serif text-[clamp(17px,2vw,22px)] font-black text-green-dark">
                          {comp.name}
                        </h2>
                        <span
                          className={`rounded-full px-3 py-0.5 font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-white ${
                            comp.statusGreen ? "bg-emerald-600" : "bg-amber-500"
                          }`}
                        >
                          {comp.status}
                        </span>
                        {comp.seasons.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-grey-light bg-cream px-3 py-0.5 font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-wello-grey"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Summary */}
                      <p className="mb-3 font-condensed text-[12px] font-bold tracking-[0.08em] uppercase text-gold">
                        {comp.summary}
                      </p>

                      {/* Description */}
                      <p className="mb-4 text-[14px] leading-relaxed text-wello-grey">
                        {comp.description}
                      </p>

                      {/* Detail bullets */}
                      <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                        {comp.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-1.5 font-condensed text-[11px] text-wello-grey"
                          >
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: comp.borderColor }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA button(s) */}
                    <div className="shrink-0 md:pl-8 md:pt-1 flex flex-col gap-3">
                      {comp.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
                        >
                          {link.label}
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Bottom CTA */}
        <section
          className="relative overflow-hidden py-16 px-12 text-center"
          style={{
            background:
              "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)",
          }}
        >
          <div className="relative z-10 max-w-[580px] mx-auto">
            <h2 className="font-serif text-[34px] font-black text-white mb-4">
              Want to play for the{" "}
              <span className="text-gold">Wildcats?</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
              Register online or contact the club to find the right team for you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={REG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register on PlayHQ
              </a>
              <a href="/contact" className="btn-secondary">
                Contact the Club
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
