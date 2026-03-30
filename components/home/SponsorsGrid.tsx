"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const SPONSORS = [
  { name: "Manny's Italian",       logo: "/sponsors/mannys.png",       href: "https://www.mannysitalian.com.au/",   logoBg: "bg-black",  tier: "Platinum" },
  { name: "Punjab Curry Club",     logo: "/sponsors/punjab.png",       href: "https://punjabcurryclub.com.au/",     logoBg: "bg-black",  tier: "Platinum" },
  { name: "Mortgage Finance Guru", logo: "/sponsors/mortgageguru.png", href: "https://mortgagefinanceguru.com.au/", logoBg: "bg-black",  tier: "Platinum" },
  { name: "Cricket Gurus",         logo: "/sponsors/cricketgurus.png", href: "https://www.cricketgurus.com.au/",    logoBg: "bg-white",  tier: "Gold" },
  { name: "LG Wealth",             logo: "/sponsors/lgwealth.png",     href: "https://lgwealth.com.au/",            logoBg: "bg-white",  tier: "Gold" },
];

// Duplicate for seamless loop
const CAROUSEL = [...SPONSORS, ...SPONSORS, ...SPONSORS];

export default function SponsorsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let paused = false;
    let animId: number;

    const step = () => {
      if (!paused) {
        x -= 0.4;
        const third = track.scrollWidth / 3;
        if (Math.abs(x) >= third) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const el = track.parentElement;
    el?.addEventListener("mouseenter", () => { paused = true; });
    el?.addEventListener("mouseleave", () => { paused = false; });

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 md:px-12 mb-6 flex items-end justify-between">
        <div>
          <div className="section-label">Our Partners</div>
          <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-black text-green-dark leading-tight">
            These legends back us 🏏
          </h2>
        </div>
        <a
          href="/sponsors"
          className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark no-underline border border-green-dark/40 px-4 py-2 rounded hover:bg-cream transition-all hidden md:block"
        >
          Become a Sponsor
        </a>
      </div>

      {/* Carousel track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div ref={trackRef} className="flex items-center gap-6 md:gap-8 py-4 will-change-transform">
          {CAROUSEL.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group no-underline"
            >
              <div className={`
                ${s.logoBg} rounded-xl border border-grey-light
                px-6 py-4 flex flex-col items-center justify-center gap-2
                w-[160px] md:w-[190px] h-[100px] md:h-[110px]
                hover:border-gold hover:shadow-[0_6px_24px_rgba(201,160,48,0.15)]
                transition-all duration-200 group-hover:-translate-y-1
              `}>
                <div className="relative w-full h-[52px] flex items-center justify-center">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width={140}
                    height={52}
                    className="object-contain max-h-[52px] w-auto"
                  />
                </div>
              </div>
              <p className="text-center font-condensed text-[9px] font-bold tracking-[0.1em] uppercase text-wello-grey mt-2">
                {s.tier}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-4 md:hidden">
        <a
          href="/sponsors"
          className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark no-underline"
        >
          Become a Sponsor →
        </a>
      </div>
    </section>
  );
}
