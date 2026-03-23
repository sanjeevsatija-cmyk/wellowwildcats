const TEAMS = ["1st Grade","2nd Grade","3rd Grade","Masters","RCI Trebles","BEARS U17","BEARS U14","Cricket Blast"];
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
              <a key={t} href={PLAYHQ_URL} target="_blank" rel="noopener noreferrer"
                className="team-btn text-xs">
                {t} ▶
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
