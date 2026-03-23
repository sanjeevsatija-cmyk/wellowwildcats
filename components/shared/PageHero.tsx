interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-green-deep overflow-hidden py-12 md:py-16 px-4 md:px-12">
      <div className="absolute rounded-full border border-gold/[0.08] animate-slow-rotate pointer-events-none overflow-hidden"
        style={{ width: 600, height: 400, top: -180, right: -120 }} />
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-[800px]">
        <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold/80 mb-3">
          {label}
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
    </section>
  );
}
