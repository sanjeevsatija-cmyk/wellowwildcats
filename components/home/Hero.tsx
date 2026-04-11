"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const REG_URL =
  "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);

  /* ── Particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
      a: Math.random() * 0.35 + 0.08, gold: Math.random() > 0.65,
    }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(201,160,48,${p.a})` : `rgba(255,255,255,${p.a * 0.3})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(id); };
  }, []);

  /* ── Stats counter ── */
  useEffect(() => {
    const targets = [130, 350, 12, 8, 5], sfx = ["+","+","","",""], ids = ["hs1","hs2","hs3","hs4","hs5"];
    let counted = false;
    const ob = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || counted) return;
      counted = true;
      targets.forEach((t, i) => {
        let v = 0; const step = t / 55; const el = document.getElementById(ids[i]);
        if (!el) return;
        const tm = setInterval(() => { v = Math.min(v + step, t); el.textContent = Math.floor(v) + sfx[i]; if (v >= t) clearInterval(tm); }, 18);
      });
    }, { threshold: 0.5 });
    if (statsRef.current) ob.observe(statsRef.current);
    return () => ob.disconnect();
  }, []);

  const STATS = [
    { id:"hs1", label:"Years of Cricket" },
    { id:"hs2", label:"Club Members" },
    { id:"hs3", label:"Teams This Season" },
    { id:"hs4", label:"Premierships" },
    { id:"hs5", label:"Girls & Women Teams" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideL { from{opacity:0;transform:translateX(-50px)} to{opacity:1;transform:translateX(0)} }
        @keyframes blink  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        @keyframes ringPulse { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.05)} }
      `}</style>

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col" style={{ minHeight: "91vh" }}>

        {/* Background photo */}
        <Image src="/Ground1.jpg" alt="Mooroondu Oval — Home of the Wildcats" fill priority className="object-cover object-center" />

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(20,46,20,0.96) 0%,rgba(20,46,20,0.90) 40%,rgba(20,46,20,0.60) 70%,rgba(20,46,20,0.28) 100%)" }} />

        {/* Gold grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"linear-gradient(rgba(201,160,48,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,160,48,.05) 1px,transparent 1px)", backgroundSize:"50px 50px", zIndex:1 }} />

        {/* Glow */}
        <div className="absolute pointer-events-none hidden md:block" style={{ width:580,height:580,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,160,48,.09) 0%,transparent 70%)",top:"50%",left:"68%",transform:"translate(-50%,-50%)",zIndex:1 }} />

        {/* Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex:2, width:"100%", height:"100%" }} />

        {/* Decorative rings — hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" style={{ zIndex:2 }}>
          <div className="absolute rounded-full border border-gold/[0.10] animate-slow-rotate" style={{ width:920,height:620,top:-120,right:-220 }} />
          <div className="absolute rounded-full border border-gold/[0.06] animate-slow-rotate-r" style={{ width:700,height:480,top:-40,right:-100 }} />
        </div>
        <div className="grain-overlay" />

        {/* Content */}
        <div className="relative flex-1 w-full max-w-[1240px] mx-auto px-5 md:px-14 py-12 md:py-20 flex flex-col justify-center" style={{ zIndex:10 }}>

          {/* ── TEXT ── */}
          <div className="text-center md:text-left max-w-[620px] mx-auto md:mx-0" style={{ animation:"slideL 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}>

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 mb-5" style={{ background:"rgba(201,160,48,.12)", border:"1px solid rgba(201,160,48,.35)", borderRadius:999, padding:"5px 14px", fontFamily:"'Raleway',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#C9A030" }}>
              <span className="block rounded-full" style={{ width:7,height:7,background:"#4ade80",animation:"blink 1.4s infinite" }} />
              2025/26 Season Live
            </div>

            {/* Logo + title */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 mb-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <Image src="/logo.svg" alt="Wellington Point Wildcats" width={140} height={140} className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-lg" />
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="block w-5 h-px bg-gold/60" />
                  <span className="font-condensed text-[9px] font-bold tracking-[0.18em] uppercase text-gold">Est. 1895</span>
                  <span className="block w-5 h-px bg-gold/60" />
                </div>
              </div>
              <h1 className="font-serif text-[clamp(30px,8vw,68px)] font-black leading-[1.0] text-white drop-shadow-md text-center md:text-left">
                Wellington Point<br />
                <em className="not-italic text-gold">Cricket Club</em>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-[14px] md:text-[17px] text-white/70 font-light leading-[1.75] max-w-[520px] mx-auto md:mx-0 mb-8 md:mb-10">
              Home of the Wildcats — a proud community cricket club beside Moreton Bay,
              welcoming players of all ages since 1895.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <a href={REG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm md:text-base">
                🏏 &nbsp; Register Now
              </a>
              <Link href="/programs" className="btn-secondary text-sm md:text-base">
                View Programs →
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal cut into gold stats bar */}
        <div className="absolute pointer-events-none" style={{ bottom:-2,left:"-5%",width:"110%",height:70,background:"#C9A030",transform:"skewY(-2.5deg)",zIndex:15 }} />
      </section>

      {/* ═══ STATS BAR ══════════════════════════════════════════════ */}
      <div ref={statsRef} className="bg-gold relative" style={{ zIndex:20 }}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-14 py-6 md:py-5">

          {/* Mobile: 2-col grid (last item centred across both cols) */}
          <div className="grid grid-cols-2 gap-y-5 gap-x-3 md:hidden">
            {STATS.map((s, i) => (
              <div key={s.id} className={`text-center ${i === STATS.length - 1 ? "col-span-2" : ""}`}>
                <div id={s.id} className="font-serif text-green-deep leading-none" style={{ fontSize:30 }}>0</div>
                <div className="font-condensed font-bold tracking-[0.2em] uppercase mt-1" style={{ fontSize:9, color:"rgba(20,46,20,0.65)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Desktop: flex row with dividers */}
          <div className="hidden md:flex justify-around items-center">
            {STATS.map((s, i) => (
              <div key={s.id} className="flex items-center gap-6">
                <div className="text-center">
                  <div id={`${s.id}-d`} className="font-serif text-green-deep leading-none" style={{ fontSize:36 }}>0</div>
                  <div className="font-condensed font-bold tracking-[0.2em] uppercase mt-1" style={{ fontSize:10, color:"rgba(20,46,20,0.65)" }}>{s.label}</div>
                </div>
                {i < STATS.length - 1 && <div style={{ width:1,height:30,background:"rgba(20,46,20,0.2)" }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
