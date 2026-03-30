import Link from "next/link";
import Image from "next/image";

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background photo */}
      <Image
        src="/Ground1.jpg"
        alt="Mooroondu Oval — Home of the Wildcats"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-green-deep/75" />

      {/* Subtle animated rings — kept for personality */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full border border-gold/[0.10] animate-slow-rotate"
          style={{ width: 920, height: 620, top: -120, right: -220 }} />
        <div className="absolute rounded-full border border-gold/[0.06] animate-slow-rotate-r"
          style={{ width: 700, height: 480, top: -40, right: -100 }} />
        <div className="absolute w-[200%] h-[2px] bg-gold/[0.12]"
          style={{ transform: "rotate(-8deg)", transformOrigin: "left center", top: "45%" }} />
      </div>
      <div className="grain-overlay" />

      {/* Content — centred, no right panel */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 md:px-14 py-16 md:py-24 text-center md:text-left">

        {/* Logo + Club name */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="flex flex-col items-center flex-shrink-0">
            <Image src="/logo.svg" alt="Wellington Point Wildcats" width={140} height={140}
              className="w-24 h-24 md:w-36 md:h-36 object-contain drop-shadow-lg" />
            <div className="flex items-center gap-1.5 mt-2">
              <span className="block w-5 h-px bg-gold/60" />
              <span className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.18em] uppercase text-gold">Est. 1895</span>
              <span className="block w-5 h-px bg-gold/60" />
            </div>
          </div>
          <h1 className="font-serif text-[clamp(32px,6vw,72px)] font-black leading-[1.0] text-white drop-shadow-md">
            Wellington Point<br />
            <em className="not-italic text-gold">Cricket Club</em>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-[15px] md:text-[18px] text-white/70 font-light leading-[1.75] max-w-[560px] mx-auto md:mx-0 mb-8 md:mb-10">
          Home of the Wildcats — a proud community cricket club beside Moreton Bay,
          welcoming players of all ages since 1895.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm md:text-base">
            🏏 &nbsp; Register Now
          </a>
          <Link href="/programs" className="btn-secondary text-sm md:text-base">
            View Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
