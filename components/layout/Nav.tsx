// ─────────────────────────────────────────────────────────────────────────────
// Wellington Point Cricket Club — Navigation Component
// Designed & developed by Sanjeev Satija © 2025
// Unauthorised reproduction prohibited
// ─────────────────────────────────────────────────────────────────────────────
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Teams",     href: "/teams" },
  { label: "Programs",  href: "/programs" },
  { label: "Results",   href: "/results" },
  { label: "News & Resources", href: "/news" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Sponsors",  href: "/sponsors" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[200] bg-green-dark shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between px-4 md:px-10 h-[68px] overflow-hidden">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0 min-w-0">
          <Image
            src="/logo.svg"
            alt="Wellington Point Wildcats"
            width={52}
            height={52}
            className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] flex-shrink-0 object-contain"
          />
          <div className="leading-tight min-w-0">
            {/* Full name on md+, short name on mobile */}
            <strong className="hidden md:block font-condensed font-extrabold text-[13px] text-white tracking-[0.05em] uppercase">
              Wellington Point Cricket Club
            </strong>
            <strong className="block md:hidden font-condensed font-extrabold text-[12px] text-white tracking-[0.04em] uppercase leading-tight">
              Wello Wildcats
            </strong>
            <span className="hidden md:block text-[10px] text-white/50 tracking-[0.08em] uppercase">
              Wello Wildcats
            </span>
            <span className="block md:hidden text-[9px] text-white/50 tracking-[0.06em] uppercase">
              Est. 1895
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[11px] font-condensed font-semibold tracking-[0.05em] uppercase px-2.5 py-2 rounded transition-all duration-200 no-underline ${
                  pathname === l.href
                    ? "text-gold bg-white/10"
                    : "text-white/82 hover:text-gold-bright hover:bg-white/[0.06]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-green-deep px-4 py-2 font-condensed font-extrabold text-[12px] tracking-[0.05em] uppercase no-underline transition-all duration-200 hover:bg-gold-bright whitespace-nowrap"
              style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px))" }}
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Mobile: Join Now button + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={REG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-green-deep px-3 py-1.5 font-condensed font-extrabold text-[10px] tracking-[0.05em] uppercase no-underline whitespace-nowrap"
            style={{ clipPath: "polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px))" }}
          >
            Join
          </a>
          <button
            className="text-white p-1.5 ml-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-green-dark border-t border-white/10 lg:hidden z-50 max-h-[85vh] overflow-y-auto shadow-xl">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-6 py-4 font-condensed font-semibold tracking-[0.05em] uppercase text-[13px] border-b border-white/5 no-underline transition-colors ${
                pathname === l.href
                  ? "text-gold bg-white/10"
                  : "text-white/80 hover:text-gold hover:bg-white/5"
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-5">
            <a
              href={REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-green-deep py-3.5 font-condensed font-extrabold tracking-[0.08em] uppercase text-[13px] no-underline"
              style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px))" }}
            >
              Join Now — Register on PlayHQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
