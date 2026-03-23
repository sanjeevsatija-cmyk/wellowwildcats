export default function JoinCTA() {
  const REG_URL = "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";
  return (
    <section className="relative overflow-hidden py-14 md:py-20 px-4 md:px-12 text-center"
      style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/[0.08] -top-[150px] left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full border border-gold/[0.04] -top-[250px] left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 max-w-[580px] mx-auto">
        <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-black text-white mb-4">
          Join the <span className="text-gold">Wildcats</span>
        </h2>
        <p className="text-[14px] md:text-[15px] text-white/60 leading-[1.7] mb-8">
          We welcome players of all ages and abilities. Register online or contact the club to find the right team for you.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Register on PlayHQ
          </a>
          <a href="/contact" className="btn-secondary">Contact the Club</a>
        </div>
      </div>
    </section>
  );
}
