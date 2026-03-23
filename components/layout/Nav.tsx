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
    <nav className="sticky top-0 z-[200] bg-green-dark flex items-center justify-between px-10 h-[68px] shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      {/* Logo — SVG transparent, merges with nav background */}
      <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="Wellington Point Wildcats"
          width={52}
          height={52}
          className="w-[52px] h-[52px] object-contain"
        />
        <div className="leading-tight">
          <strong className="block font-condensed font-extrabold text-[13px] text-white tracking-[0.05em] uppercase">
            Wellington Point Cricket Club
          </strong>
          <span className="text-[10px] text-white/50 tracking-[0.06em] uppercase tracking-[0.08em]">
            Wello Wildcats
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
            className="bg-gold text-green-deep px-4 py-2 rounded font-condensed font-extrabold text-[12px] tracking-[0.05em] uppercase no-underline transition-all duration-200 hover:bg-gold-bright whitespace-nowrap"
          >
            Join Now
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white text-2xl ml-auto"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-green-dark border-t border-white/10 lg:hidden z-50 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-8 py-4 font-condensed font-semibold tracking-[0.05em] uppercase text-sm border-b border-white/5 no-underline transition-colors ${
                pathname === l.href
                  ? "text-gold bg-white/10"
                  : "text-white/80 hover:text-gold hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-8 py-5">
            <a
              href={REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-green-deep py-3 rounded font-condensed font-extrabold tracking-[0.08em] uppercase text-sm no-underline"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
