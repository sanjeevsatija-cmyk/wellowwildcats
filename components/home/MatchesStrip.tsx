const TEAMS = ["1st Grade","2nd Grade","3rd Grade","Masters","RCI Trebles","BEARS U17","BEARS U14","Cricket Blast"];
const PLAYHQ_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2";

export default function MatchesStrip() {
  return (
    <>
      <div className="relative overflow-hidden px-12 py-5"
        style={{ background: "linear-gradient(135deg,#C9A030 0%,#E8B420 100%)" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-deep" />
        <div className="max-w-[1240px] mx-auto flex items-center gap-2.5 flex-wrap">
          <div className="font-condensed text-[13px] font-extrabold tracking-[0.12em] uppercase text-green-deep whitespace-nowrap flex items-center gap-2.5 mr-1.5">
            🏏 &nbsp; This Weekend&apos;s Matches
            <span className="block w-px h-6 bg-green-deep/25" />
          </div>
          {TEAMS.map((t, i) => (
            <a key={t} href={PLAYHQ_URL} target="_blank" rel="noopener noreferrer"
              className={`team-btn${i < 4 ? " active" : ""}`}>
              {t} ▶
            </a>
          ))}
          <a href={PLAYHQ_URL} target="_blank" rel="noopener noreferrer"
            className="ml-auto font-condensed text-xs font-bold tracking-[0.08em] uppercase text-green-deep no-underline whitespace-nowrap hover:underline">
            All Teams on PlayHQ →
          </a>
        </div>
      </div>
      <div className="gold-divider" />
    </>
  );
}
