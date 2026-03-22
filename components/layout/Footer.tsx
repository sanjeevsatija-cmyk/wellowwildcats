import Link from "next/link";
import Image from "next/image";

const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const PROGRAM_LINKS = [
  { label: "Cricket Blast",  href: "/programs/cricket-blast" },
  { label: "RCI Trebles",    href: "/programs/rci-trebles" },
  { label: "BEARS Cricket",  href: "/programs/bears-cricket" },
  { label: "Senior Cricket", href: "/programs/senior-cricket" },
];
const CLUB_LINKS = [
  { label: "About Us",       href: "/about" },
  { label: "News & Reports", href: "/news" },
  { label: "Photo Gallery",  href: "/gallery" },
  { label: "Sponsors",       href: "/sponsors" },
  { label: "Resources",      href: "/resources" },
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
    <footer className="bg-charcoal pt-14 pb-7 px-12">
      <div className="max-w-[1240px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Wellington Point Wildcats"
                width={60}
                height={60}
                className="w-[60px] h-[60px] object-contain"
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
            <p className="text-[13px] text-white/45 leading-7 mb-5">
              A proud community cricket club beside Moreton Bay, welcoming players of all ages
              for over 130 years. Home ground at 16 Ivy Street, Thorneside — affiliates of the
              Mooroondu Sports &amp; Recreation Club.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: "f", href: "https://facebook.com/wellowildcats" },
                { icon: "📷", href: "https://instagram.com/wellowildcats" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.08] rounded flex items-center justify-center text-[15px] text-white/50 no-underline transition-all duration-200 hover:bg-gold hover:text-green-deep"
                >
                  {s.icon}
                </a>
              ))}
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
          <div>
            © 2025 Wellington Point Cricket Club. All rights reserved. &nbsp;|&nbsp;
            <Link href="/privacy" className="text-white/40 no-underline hover:text-gold">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-2.5 font-condensed text-[11px] tracking-[0.1em] uppercase">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center font-serif text-[9px] font-bold text-gold text-center leading-tight">
              EST<br />1895
            </div>
            130 Years of Cricket
          </div>
        </div>
      </div>
    </footer>
  );
}
