export default function JoinCTA() {
  return (
    <section className="relative overflow-hidden py-20 px-12 text-center"
      style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
      {/* Concentric rings */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-gold/10 -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/15 -top-[100px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="flex items-center justify-center gap-3 font-condensed text-xs font-bold tracking-[0.2em] uppercase text-gold mb-3">
          <span className="block w-6 h-0.5 bg-gold" />
          Ready to Play?
          <span className="block w-6 h-0.5 bg-gold" />
        </div>
        <h2 className="font-serif text-[clamp(30px,4vw,50px)] font-black text-white leading-[1.1] mb-4">
          Join the <em className="not-italic text-gold">Wildcats</em><br />
          This Season
        </h2>
        <p className="text-[16px] text-white/60 leading-[1.7] mb-9">
          Whether you&apos;re 5 or 55, a complete beginner or a seasoned cricketer —
          there&apos;s a place for you at Wellington Point Cricket Club. Online registrations are open now.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a href="https://play.cricket.com.au/club-finder/club-details?Id=5499"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            Register Online
          </a>
          <a href="/contact" className="btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
