const TEAMS = [
  { label: "BEARS Junior Divisional Cricket", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/bears-junior-divisional-cricket-summer-202526/fd7e9a70/teams" },
  { label: "Girls Only Junior Sunday (EDJCA)", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/girls-only-junior-sunday-competition-via-edjca-summer-202526/e7527b89/teams" },
  { label: "Junior Competition", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/junior-competition-winter-2026/c0621f81/teams" },
  { label: "Senior Competition (Warehouse)", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-winter-2026/5eb3dc88/teams" },
  { label: "Post Christmas T20 Junior", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/post-christmas-t20-junior-competition-summer-202526/a1809052/teams" },
  { label: "QSDCA Competitions", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/qsdca-competitions-summer-202526/b3a6621f/teams" },
  { label: "Redlands Trebles", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/redlands-trebles-summer-202526/4f9ab34c/teams" },
  { label: "Senior Competition (Community)", url: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/senior-competition-summer-202526/c8eda977/teams" },
];

const PLAYHQ_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

export default function MatchesStrip() {
  return (
    <>
      <div className="relative overflow-hidden px-4 md:px-12 py-4 md:py-5"
        style={{ background: "linear-gradient(135deg,#C9A030 0%,#E8B420 100%)" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-deep" />
        <div className="max-w-[1240px] mx-auto">
          <div className="font-condensed text-[12px] md:text-[13px] font-extrabold tracking-[0.12em] uppercase text-green-deep mb-2 md:mb-0 md:inline-flex items-center gap-2.5 mr-1.5">
            🏏 &nbsp; This Weekend&apos;s Matches
          </div>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0 md:inline-flex">
            {TEAMS.map((t) => (
              <a key={t.label} href={t.url} target="_blank" rel="noopener noreferrer"
                className="team-btn text-xs">
                {t.label} ▶
              </a>
            ))}
          </div>
          <a href={PLAYHQ_URL} target="_blank" rel="noopener noreferrer"
            className="block mt-2 md:mt-0 md:float-right font-condensed text-xs font-bold tracking-[0.08em] uppercase text-green-deep no-underline hover:underline">
            All Teams on PlayHQ →
          </a>
        </div>
      </div>
      <div className="gold-divider" />
    </>
  );
}
