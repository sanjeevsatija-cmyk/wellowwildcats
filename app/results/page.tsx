import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { createClient } from "@sanity/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results & Fixtures",
  description:
    "Match results and upcoming fixtures for Wellington Point Cricket Club — QSDCA and BEARS competitions.",
};

export const revalidate = 3600;

const client = createClient({
  projectId: "imm53v2s",
  dataset:   "production",
  apiVersion: "2024-01-01",
  useCdn:    true,
});

interface MatchEntry {
  _id:         string;
  isUpcoming:  boolean;
  competition: string;
  grade:       string;
  opponent:    string;
  matchDate:   string;
  venue?:      string;
  round?:      string;
  ourScore?:   string;
  theirScore?: string;
  result?:     string;
  notes?:      string;
}

const PLAYHQ_CLUB =
  "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

const hubCompetitions = [
  {
    association: "Bayside East & Redlands Cricket Association",
    name: "BEARS Junior Divisional Cricket",
    seasons: ["Summer 2025/26"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams" },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Eastern Districts Junior Cricket Association",
    name: "Girls Only Junior Sunday Competition via EDJCA",
    seasons: ["Summer 2025/26", "Winter 2026"],
    links: [
      { label: "Summer 2025/26 Teams & Fixtures", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams" },
      { label: "Winter 2026 Teams & Fixtures",    url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-winter-2026/27d0024a/teams" },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Junior Competition",
    seasons: ["Winter 2026"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams" },
    ],
    borderColor: "#3b82f6",
  },
  {
    association: "Warehouse Cricket Association",
    name: "Senior Competition",
    seasons: ["Winter 2026"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams" },
    ],
    borderColor: "#3b82f6",
  },
  {
    association: "Brisbane Metropolitan Cricket",
    name: "Post Christmas T20 Junior Competition",
    seasons: ["Summer 2025/26"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams" },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Queensland Sub Districts Cricket Association",
    name: "QSDCA Competitions",
    seasons: ["Summer 2025/26"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams" },
    ],
    borderColor: "#C9A030",
  },
  {
    association: "Redlands Cricket Inc",
    name: "Redlands Trebles",
    seasons: ["Summer 2025/26"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams" },
    ],
    borderColor: "#2A6B2A",
  },
  {
    association: "Community Cricket Championships",
    name: "Senior Competition",
    seasons: ["Summer 2025/26"],
    links: [
      { label: "View Teams & Fixtures on PlayHQ", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams" },
    ],
    borderColor: "#C9A030",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", {
    weekday: "short",
    day:     "numeric",
    month:   "short",
    year:    "numeric",
  });
}

function ResultBadge({ result }: { result: string }) {
  const styles: Record<string, string> = {
    W:  "bg-emerald-50 text-emerald-700 border-emerald-300",
    L:  "bg-red-50 text-red-600 border-red-300",
    D:  "bg-amber-50 text-amber-700 border-amber-300",
    NR: "bg-gray-100 text-gray-500 border-gray-300",
    A:  "bg-gray-100 text-gray-500 border-gray-300",
  };
  const labels: Record<string, string> = {
    W: "Win", L: "Loss", D: "Draw", NR: "No Result", A: "Abandoned",
  };
  return (
    <span className={`inline-flex items-center justify-center rounded-full border px-3 py-0.5 font-condensed text-[11px] font-bold tracking-[0.1em] uppercase ${styles[result] ?? styles.NR}`}>
      {labels[result] ?? result}
    </span>
  );
}

function MatchCard({ match }: { match: MatchEntry }) {
  const upcoming = match.isUpcoming;
  return (
    <div className={`bg-white rounded-lg border border-grey-light overflow-hidden transition-shadow hover:shadow-md${upcoming ? " border-l-4 border-l-amber-400" : ""}`}>
      {/* Header strip */}
      <div className="flex items-center justify-between bg-green-deep/5 border-b border-grey-light px-4 py-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold">
            {match.competition}
          </span>
          <span className="text-wello-grey/40">·</span>
          <span className="font-condensed text-[11px] font-bold text-green-dark">
            {match.grade}
          </span>
          {match.round && (
            <>
              <span className="text-wello-grey/40">·</span>
              <span className="font-condensed text-[10px] text-wello-grey uppercase tracking-[0.1em]">
                {match.round}
              </span>
            </>
          )}
        </div>
        {upcoming ? (
          <span className="rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-amber-700">
            Upcoming
          </span>
        ) : (
          match.result && <ResultBadge result={match.result} />
        )}
      </div>

      {/* Body */}
      <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-1">
          <p className="text-[15px] font-bold text-charcoal mb-1">
            vs <span className="text-green-dark">{match.opponent}</span>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="font-condensed text-[11px] text-wello-grey">
              📅 {formatDate(match.matchDate)}
            </span>
            {match.venue && (
              <span className="font-condensed text-[11px] text-wello-grey">
                📍 {match.venue}
              </span>
            )}
          </div>
          {match.notes && (
            <p className="mt-2 text-[12px] text-wello-grey italic">{match.notes}</p>
          )}
        </div>

        {/* Score — completed matches only */}
        {!upcoming && match.ourScore && (
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <p className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-wello-grey mb-0.5">
                WPCC
              </p>
              <p className="font-serif text-[22px] font-black text-green-dark leading-none">
                {match.ourScore}
              </p>
            </div>
            <span className="font-condensed text-[14px] text-wello-grey/40">—</span>
            <div className="text-left">
              <p className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-wello-grey mb-0.5">
                OPP
              </p>
              <p className="font-serif text-[22px] font-black text-charcoal leading-none">
                {match.theirScore ?? "—"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function ResultsPage() {
  const allMatches: MatchEntry[] = await client.fetch(
    `*[_type == "result" && season == "2025/26" && competition in ["QSDCA","BEARS"]] | order(matchDate desc) {
      _id, isUpcoming, competition, grade, opponent, matchDate,
      venue, round, ourScore, theirScore, result, notes
    }`
  );

  const upcoming = allMatches
    .filter((m) => m.isUpcoming)
    .sort((a, b) => a.matchDate.localeCompare(b.matchDate));

  const completed = allMatches.filter((m) => !m.isUpcoming);

  // Group completed results by date
  const groupedByDate: Record<string, MatchEntry[]> = {};
  for (const match of completed) {
    const label = formatDate(match.matchDate);
    if (!groupedByDate[label]) groupedByDate[label] = [];
    groupedByDate[label].push(match);
  }

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Season 2025/26"
          title="Results & Fixtures"
          subtitle="QSDCA and BEARS match results with upcoming fixtures. For all other competitions use the PlayHQ links below."
        />

        <SectionWrapper className="bg-cream">

          {/* ── UPCOMING FIXTURES ── */}
          {upcoming.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-grey-light" />
                <span className="font-condensed text-[11px] font-bold tracking-[0.2em] uppercase text-amber-600">
                  Upcoming Fixtures
                </span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="flex flex-col gap-4">
                {upcoming.map((match) => (
                  <MatchCard key={match._id} match={match} />
                ))}
              </div>
            </div>
          )}

          {/* ── RECENT RESULTS ── */}
          {completed.length > 0 ? (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-grey-light" />
                <span className="font-condensed text-[11px] font-bold tracking-[0.2em] uppercase text-green-dark">
                  Recent Results
                </span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="flex flex-col gap-8">
                {Object.entries(groupedByDate).map(([dateLabel, matches]) => (
                  <div key={dateLabel}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-condensed text-[11px] font-bold tracking-[0.15em] uppercase text-wello-grey bg-cream border border-grey-light rounded px-3 py-1 shrink-0">
                        {dateLabel}
                      </span>
                      <div className="h-px flex-1 bg-grey-light" />
                    </div>
                    <div className="flex flex-col gap-3">
                      {matches.map((match) => (
                        <MatchCard key={match._id} match={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : upcoming.length === 0 ? (
            <div className="mb-14 rounded-lg border border-grey-light bg-white px-6 py-10 text-center">
              <p className="font-condensed text-[12px] font-bold tracking-[0.15em] uppercase text-wello-grey mb-2">
                No data yet
              </p>
              <p className="text-[14px] text-wello-grey">
                Results and fixtures will appear here once entered via the club CMS.
              </p>
            </div>
          ) : null}

          {/* ── PLAYHQ HUB ── */}
          <div className="border-t-2 border-gold/20 pt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-grey-light" />
              <span className="font-condensed text-[11px] font-bold tracking-[0.2em] uppercase text-gold">
                All Competitions on PlayHQ
              </span>
              <div className="h-px flex-1 bg-grey-light" />
            </div>
            <p className="text-[13px] text-wello-grey mb-8 text-center">
              Select your team on PlayHQ to view their full fixture list, results and ladder position.
            </p>
            <div className="flex flex-col gap-4">
              {hubCompetitions.map((comp) => (
                <div
                  key={`${comp.association}-${comp.name}`}
                  className="rounded-lg border border-grey-light bg-white overflow-hidden"
                  style={{ borderLeftWidth: "4px", borderLeftColor: comp.borderColor }}
                >
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-wello-grey mb-0.5">
                        {comp.association}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-[16px] font-black text-green-dark">
                          {comp.name}
                        </h3>
                        {comp.seasons.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-grey-light bg-cream px-2.5 py-0.5 font-condensed text-[9px] font-bold tracking-[0.1em] uppercase text-wello-grey"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
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
                </div>
              ))}
            </div>
            <p className="text-center text-[12px] text-wello-grey mt-6">
              <a
                href={PLAYHQ_CLUB}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-dark hover:text-gold no-underline"
              >
                View full club page on PlayHQ →
              </a>
            </p>
          </div>

        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
