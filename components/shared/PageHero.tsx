interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-green-deep overflow-hidden py-20 px-12">
      {/* Decorative oval */}
      <div className="absolute rounded-full border border-gold/10 animate-slow-rotate pointer-events-none"
        style={{ width: 700, height: 460, top: -200, right: -150 }} />
      <div className="absolute rounded-full border border-gold/[0.07] animate-slow-rotate-r pointer-events-none"
        style={{ width: 460, height: 300, top: -100, right: -50 }} />
      {/* Diagonal band */}
      <div className="absolute w-[200%] h-[3px] bg-gold/15 pointer-events-none"
        style={{ transform: "rotate(-8deg)", transformOrigin: "left center", top: "60%" }} />
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="section-label light">{label}</div>
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-black text-white leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] text-white/60 font-light leading-[1.75] max-w-xl mt-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
