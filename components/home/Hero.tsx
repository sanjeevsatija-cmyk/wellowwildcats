import Link from "next/link";
import Image from "next/image";

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-green-deep overflow-hidden flex items-center">
      {/* Animated rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full border border-gold/[0.12] animate-slow-rotate"
          style={{ width: 920, height: 620, top: -120, right: -220 }} />
        <div className="absolute rounded-full border-2 border-gold/[0.07] animate-slow-rotate-r"
          style={{ width: 700, height: 480, top: -40, right: -100 }} />
        <div className="absolute rounded-full border border-gold/[0.15] animate-slow-rotate-f"
          style={{ width: 500, height: 340, top: 60, right: 10 }} />
        <div className="absolute w-[200%] h-16 bg-white/[0.02]"
          style={{ transform: "rotate(-8deg)", transformOrigin: "left center", top: "20%" }} />
        <div className="absolute w-[200%] h-[3px] bg-gold/[0.15]"
          style={{ transform: "rotate(-8deg)", transformOrigin: "left center", top: "45%" }} />
        <div className="absolute w-[200%] h-16 bg-white/[0.02]"
          style={{ transform: "rotate(-8deg)", transformOrigin: "left center", top: "65%" }} />
      </div>
      <div className="grain-overlay" />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 md:px-14 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-8 md:gap-16 items-center">

        {/* LEFT */}
        <div>
          {/* Logo + Est 1895 + Heading */}
          <div className="flex items-center gap-4 md:gap-6 mb-5 md:mb-6">
            <div className="flex flex-col items-center flex-shrink-0">
              <Image src="/logo.svg" alt="Wellington Point Wildcats" width={140} height={140}
                className="w-20 h-20 md:w-32 md:h-32 object-contain" />
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="block w-4 h-px bg-gold/60" />
                <span className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.18em] uppercase text-gold">Est. 1895</span>
                <span className="block w-4 h-px bg-gold/60" />
              </div>
            </div>
            <h1 className="font-serif text-[clamp(28px,7vw,68px)] font-black leading-[1.0] text-white">
              Wellington Point<br />
              <em className="not-italic text-gold">Cricket Club</em>
            </h1>
          </div>

          <p className="text-[14px] md:text-[17px] text-white/65 font-light leading-[1.75] max-w-[520px] mb-6 md:mb-9">
            Home of the Wildcats. A proud community cricket club beside Moreton Bay —
            welcoming players of all ages from Cricket Blast through to Senior and
            Masters grades since 1895.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm md:text-base">
              🏏 &nbsp; Register Now
            </a>
            <Link href="/programs" className="btn-secondary text-sm md:text-base">
              View Programs →
            </Link>
          </div>
        </div>

        {/* RIGHT — stats + results */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-px bg-gold/[0.18] rounded-lg overflow-hidden">
            {[
              ["130+", "Years of History"],
              ["16",   "Active Teams"],
              ["200+", "Registered Players"],
              ["5",    "Club Sponsors"],
            ].map(([num, label]) => (
              <div key={label}
                className="bg-green-deep/[0.88] backdrop-blur-md px-3 md:px-5 py-4 md:py-6 text-center">
                <div className="font-serif text-[32px] md:text-[44px] font-black text-gold leading-none mb-1">{num}</div>
                <div className="font-condensed text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase text-white/55">{label}</div>
              </div>
            ))}
            <div className="col-span-2 bg-gold/[0.1] px-4 py-3 md:py-4 text-center">
              <div className="font-serif text-base md:text-xl font-black text-white">🏆 &nbsp; Multiple Premierships</div>
              <div className="font-condensed text-[9px] md:text-[11px] font-semibold tracking-[0.12em] uppercase text-white/55 mt-1">
                Home Ground: 16 Ivy St, Thorneside
              </div>
            </div>
          </div>

          {/* Results panel */}
          <div className="mt-3 bg-green-deep/70 backdrop-blur-md border border-gold/[0.18] rounded-lg p-4 md:p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="font-condensed text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-gold">Weekend Results</span>
              <span className="flex items-center gap-1.5 font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-green-400">
                <span className="live-dot" /> Latest
              </span>
            </div>
            {[
              { grade: "1st Grade", opp: "Redlands CC",  us: "167/6", them: "144",   r: "W" },
              { grade: "2nd Grade", opp: "Capalaba CC",  us: "203/8", them: "198",   r: "W" },
              { grade: "3rd Grade", opp: "Wynnum CC",    us: "148",   them: "151/7", r: "L" },
              { grade: "U17 BEARS", opp: "Wynnum CC",    us: "112",   them: "108/9", r: "W" },
            ].map((row) => (
              <div key={row.grade} className="flex items-center gap-1.5 md:gap-2 py-1.5 md:py-2 border-b border-white/[0.06] last:border-0 last:pb-0">
                <span className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-gold w-16 md:w-20 flex-shrink-0">
                  {row.grade}
                </span>
                <span className="text-[11px] md:text-[13px] text-white/80 flex-1 truncate">vs {row.opp}</span>
                <span className="font-condensed text-[10px] md:text-xs font-bold text-white/60 hidden sm:block">{row.us} — {row.them}</span>
                <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-black font-condensed flex-shrink-0 ${
                  row.r === "W"
                    ? "bg-green-400/15 text-green-400 border border-green-400/30"
                    : "bg-red-400/12 text-red-400 border border-red-400/25"
                }`}>{row.r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
