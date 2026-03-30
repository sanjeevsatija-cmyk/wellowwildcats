"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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

// Duplicate teams for seamless loop
const TICKER_ITEMS = [...TEAMS, ...TEAMS];

export default function MatchesStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let paused = false;
    let animId: number;

    const step = () => {
      if (!paused) {
        x -= 0.6; // speed — px per frame
        // Reset when first half scrolled off (seamless loop)
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(x) >= halfWidth) {
          x = 0;
        }
        track.style.transform = `translateX(${x}px)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    // Pause on hover
    const bar = track.parentElement;
    bar?.addEventListener("mouseenter", () => { paused = true; });
    bar?.addEventListener("mouseleave", () => { paused = false; });

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#C9A030 0%,#E8B420 100%)" }}
      >
        {/* Left label — fixed, doesn't scroll */}
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pl-4 md:pl-6 pr-4 pointer-events-none"
          style={{ background: "linear-gradient(to right, #C9A030 70%, transparent)" }}>
          <div className="flex items-center gap-2">
            <Image src="/bat-ball.png" alt="Cricket bat and ball" width={28} height={28} className="object-contain flex-shrink-0" />
            <span className="font-condensed text-[11px] md:text-[12px] font-extrabold tracking-[0.14em] uppercase text-green-deep whitespace-nowrap">
              Upcoming Games
            </span>
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="pl-[160px] md:pl-[180px] pr-[120px] md:pr-[140px] py-3 md:py-3.5 overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-3 will-change-transform">
            {TICKER_ITEMS.map((t, i) => (
              <a
                key={i}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-deep text-gold font-condensed text-[11px] font-bold tracking-[0.06em] whitespace-nowrap no-underline hover:bg-green-mid hover:text-gold-bright transition-colors flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {t.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right CTA — fixed */}
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pr-4 md:pr-5"
          style={{ background: "linear-gradient(to left, #E8B420 70%, transparent)" }}>
          <a
            href={PLAYHQ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-[10px] md:text-[11px] font-bold tracking-[0.08em] uppercase text-green-deep no-underline hover:underline whitespace-nowrap"
          >
            All Teams →
          </a>
        </div>
      </div>
      <div className="gold-divider" />
    </>
  );
}
