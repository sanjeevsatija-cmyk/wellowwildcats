import Link from "next/link";
import Image from "next/image";

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const PROGRAM_LINKS = [
  { label: "Cricket Blast",    href: "/programs/cricket-blast" },
  { label: "RCI Trebles",      href: "/programs/rci-trebles" },
  { label: "Junior Cricket",   href: "/programs/junior-cricket" },
  { label: "Senior Cricket",   href: "/programs/senior-cricket" },
  { label: "Winter Cricket",   href: "/programs/warehouse-cricket" },
];
const CLUB_LINKS = [
  { label: "About Us",         href: "/about" },
  { label: "News & Resources", href: "/news" },
  { label: "Photo Gallery",    href: "/gallery" },
  { label: "Sponsors",         href: "/sponsors" },
  { label: "Resources",        href: "/news#resources" },
];
const CONTACT_LINKS = [
  { label: "Contact the Club", href: "/contact" },
  { label: "Register to Play", href: REG_URL, external: true },
  { label: "Find Our Ground",  href: "/contact#ground" },
  { label: "Become a Sponsor", href: "/sponsors#become" },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <div className="font-condensed text-xs font-bold tracking-[0.16em] uppercase text-gold mb-4">{title}</div>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          target={l.external ? "_blank" : undefined}
          rel={l.external ? "noopener noreferrer" : undefined}
          className="text-[13px] text-white/45 flex items-center gap-1.5 mb-2 no-underline transition-colors duration-200 hover:text-gold before:content-['›'] before:text-green-mid before:text-base"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-10 md:pt-14 pb-7 px-4 md:px-12">
      <div className="max-w-[1240px] mx-auto">

        {/* Top grid — 1 col mobile, 2 col sm, 4 col md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-12 pb-12 border-b border-white/[0.08]">

          {/* Brand — full width on mobile */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Wellington Point Wildcats"
                width={60}
                height={60}
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] object-contain flex-shrink-0"
              />
              <div>
                <div className="font-condensed text-lg font-extrabold tracking-[0.08em] text-white uppercase leading-tight">
                  Wello Wildcats
                </div>
                <div className="font-condensed text-[11px] tracking-[0.06em] uppercase text-white/35">
                  Est. 1895
                </div>
              </div>
            </div>
            <p className="text-[13px] text-white/45 leading-7 mb-5 max-w-sm">
              A proud community cricket club beside Moreton Bay, welcoming players of all ages
              for over 130 years. Home ground at 16 Ivy Street, Thorneside — affiliates of the
              Mooroondu Sports &amp; Recreation Club.
            </p>
            <div className="flex gap-2.5">
              <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.08] rounded flex items-center justify-center no-underline transition-all duration-200 hover:bg-gold group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/50 group-hover:text-green-deep transition-colors">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.08] rounded flex items-center justify-center no-underline transition-all duration-200 hover:bg-gold group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/50 group-hover:text-green-deep transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterCol title="Programs"  links={PROGRAM_LINKS} />
          <FooterCol title="Club"      links={CLUB_LINKS} />

          <div>
            <FooterCol title="Contact" links={CONTACT_LINKS} />
            <div className="mt-5 text-xs text-white/30 leading-7">
              16 Ivy Street<br />
              Thorneside QLD 4158<br />
              <a href="mailto:president@wellowildcats.com.au"
                className="text-white/40 no-underline hover:text-gold">
                president@wellowildcats.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <div className="text-center md:text-left">
            © 2025 Wellington Point Cricket Club. All rights reserved. &nbsp;|&nbsp;
            <Link href="/privacy" className="text-white/40 no-underline hover:text-gold">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-2.5 font-condensed text-[11px] tracking-[0.1em] uppercase">
            <div className="w-10 h-10 flex items-center justify-center font-condensed text-[9px] font-bold text-gold text-center leading-tight"
              style={{ background:"rgba(201,160,48,0.08)", border:"1px solid rgba(201,160,48,0.2)", clipPath:"polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}>
              EST<br />1895
            </div>
            130 Years of Cricket
          </div>
        </div>
      </div>
    </footer>
  );
}
