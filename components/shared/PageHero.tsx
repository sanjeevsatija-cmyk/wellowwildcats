interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-green-deep overflow-hidden pb-20 pt-12 md:pt-16 px-4 md:px-12">
      <div className="absolute rounded-full border border-gold/[0.08] animate-slow-rotate pointer-events-none overflow-hidden"
        style={{ width: 600, height: 400, top: -180, right: -120 }} />
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-[800px]">
        {/* Section tag — matches homepage style */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="block w-6 h-0.5 bg-gold" />
          <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
            {label}
          </span>
        </div>
        <h1 className="font-serif text-[clamp(28px,5vw,52px)] font-black text-white leading-[1.1] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[14px] md:text-[16px] text-white/60 leading-[1.75] max-w-[600px]">
            {subtitle}
          </p>
        )}
      </div>
      {/* Diagonal cut into page content below */}
      <div className="absolute bottom-[-2px] left-[-5%] w-[110%] h-[60px] bg-cream pointer-events-none"
        style={{ transform: "skewY(-2deg)" }} />
    </section>
  );
}
