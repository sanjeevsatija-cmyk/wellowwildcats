import Image from "next/image";
import Link from "next/link";

const PLATINUM = [
  { name: "Manny's Italian",       logo: "/sponsors/mannys.png",       href: "/sponsors" },
  { name: "Punjab Curry Club",     logo: "/sponsors/punjab.png",       href: "/sponsors" },
  { name: "Mortgage Finance Guru", logo: "/sponsors/mortgageguru.png", href: "/sponsors" },
];

const GOLD = [
  { name: "Cricket Gurus", logo: "/sponsors/cricketgurus.png", href: "/sponsors" },
  { name: "LG Wealth",     logo: "/sponsors/lgwealth.png",     href: "/sponsors" },
];

function TierLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5 font-condensed text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
      <span className="flex-1 h-px bg-black/[0.09] max-w-[80px]" />
      {label}
      <span className="flex-1 h-px bg-black/[0.09] max-w-[80px]" />
    </div>
  );
}

export default function SponsorsGrid() {
  return (
    <section className="bg-cream text-center" style={{ padding: "52px 52px 44px" }}>
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <div className="inline-flex items-center justify-center gap-2 mb-3 font-condensed text-[11px] font-bold tracking-[0.25em] uppercase text-gold">
          <span className="block w-6 h-0.5 bg-gold" />
          Our community backers
        </div>
        <h2 className="font-serif text-green-deep leading-tight mb-3" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
          Proud <em className="not-italic text-gold">Partners</em>
        </h2>
        <p className="mb-12 mx-auto font-sans text-base text-wello-grey leading-relaxed" style={{ maxWidth: 420 }}>
          We&apos;re grateful to the local businesses who make Wello cricket possible — year after year.
        </p>

        {/* Platinum */}
        <TierLabel label="Platinum Sponsors" />
        <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
          {PLATINUM.map((s) => (
            <Link key={s.name} href={s.href} className="no-underline group">
              <div className="bg-white flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-gold-glow group-hover:border-gold"
                style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.07)", borderTop: "3px solid #C9A030", padding: "20px 28px", minWidth: 160, minHeight: 80 }}>
                <Image src={s.logo} alt={s.name} width={120} height={50} className="object-contain max-h-12" />
              </div>
            </Link>
          ))}
        </div>

        {/* Gold */}
        <TierLabel label="Gold Sponsors" />
        <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
          {GOLD.map((s) => (
            <Link key={s.name} href={s.href} className="no-underline group">
              <div className="bg-white flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-card-hover"
                style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.07)", borderTop: "2px solid rgba(201,160,48,0.4)", padding: "20px 28px", minWidth: 150, minHeight: 76 }}>
                <Image src={s.logo} alt={s.name} width={110} height={44} className="object-contain max-h-11" />
              </div>
            </Link>
          ))}
        </div>

        {/* Become a sponsor */}
        <Link href="/sponsors#become" className="inline-flex items-center gap-2 no-underline font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-green-deep border-b border-green-deep/30 pb-0.5 hover:text-gold hover:border-gold transition-colors">
          Become a Sponsor →
        </Link>
      </div>
    </section>
  );
}
