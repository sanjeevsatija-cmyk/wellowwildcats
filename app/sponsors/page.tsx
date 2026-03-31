"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const PLATINUM = [
  { name:"Manny's Italian",       type:"Restaurant",          logo:"/sponsors/mannys.png",      href:"https://www.mannysitalian.com.au/",   logoBg:"#000",
    desc:"Authentic Italian cuisine in Wellington Point. A proud platinum sponsor and long-time supporter of Wello Wildcats cricket." },
  { name:"Punjab Curry Club",     type:"Restaurant",          logo:"/sponsors/punjab.png",       href:"https://punjabcurryclub.com.au/",     logoBg:"#000",
    desc:"Wellington Point's favourite Indian restaurant. A platinum sponsor proudly supporting local community cricket." },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", logo:"/sponsors/mortgageguru.png", href:"https://mortgagefinanceguru.com.au/", logoBg:"#000",
    desc:"Redlands-based mortgage and finance specialists with over 30 lenders on their panel. Proud platinum partner of the Wildcats." },
];

const GOLD = [
  { name:"Cricket Gurus", type:"Cricket Equipment",  logo:"/sponsors/cricketgurus.png", href:"https://www.cricketgurus.com.au/", logoBg:"#fff" },
  { name:"LG Wealth",     type:"Financial Services", logo:"/sponsors/lgwealth.png",     href:"https://lgwealth.com.au/",         logoBg:"#fff" },
];

const STATS = [
  { target:200, suffix:"+", label:"Registered Players" },
  { target:130, suffix:"+", label:"Years of Cricket"   },
  { target:16,  suffix:"",  label:"Active Teams"       },
  { target:800, suffix:"+", label:"Facebook Followers" },
];

// Count-up hook
function useCountUp(target: number, active: boolean, delay: number) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const t = setTimeout(() => {
      const start = Date.now();
      const dur = 1200;
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [active, target, delay]);
  return val;
}

function StatCard({ target, suffix, label, active, delay }: { target: number; suffix: string; label: string; active: boolean; delay: number }) {
  const val = useCountUp(target, active, delay);
  return (
    <div className="text-center px-4 py-6 md:py-8 relative">
      <div className="font-serif text-[36px] md:text-[48px] font-black text-gold leading-none mb-2">
        {val}{suffix}
      </div>
      <div className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-white/50">{label}</div>
    </div>
  );
}

function SponsorTile({ s, delay, size }: { s: typeof PLATINUM[0]; delay: number; size: "large" | "medium" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <a
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-xl overflow-hidden no-underline"
        style={{ background: "#142E14", border: "1px solid rgba(201,160,48,0.15)" }}
      >
        {/* Logo area */}
        <div
          className="flex items-center justify-center"
          style={{
            background: s.logoBg,
            height: size === "large" ? 120 : 90,
            padding: 20,
          }}
        >
          <Image
            src={s.logo}
            alt={s.name}
            width={size === "large" ? 200 : 160}
            height={size === "large" ? 80 : 60}
            className="object-contain w-auto"
            style={{ maxHeight: size === "large" ? 80 : 60 }}
          />
        </div>

        {/* Info */}
        <div className="px-5 py-4">
          <div className="font-condensed text-[9px] font-bold tracking-[0.14em] uppercase text-gold mb-1">{s.type}</div>
          <div className="font-condensed text-[13px] font-bold text-white">{s.name}</div>
        </div>

        {/* Hover overlay — reveals visit link */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: "rgba(20,46,20,0.92)" }}
        >
          <div className="font-serif text-[16px] font-bold text-white">{s.name}</div>
          <div
            className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-lg"
            style={{ background: "#C9A030", color: "#142E14" }}
          >
            Visit Website →
          </div>
        </div>

        {/* Gold border glow on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1.5px rgba(201,160,48,0.6)" }}
        />
      </a>
    </div>
  );
}

export default function SponsorsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  // Parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * -20;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
      bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
      bg.style.transition = "transform 0.08s linear";
    };
    const onLeave = () => {
      bg.style.transform = "translate(0,0) scale(1.04)";
      bg.style.transition = "transform 0.6s ease";
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => { hero.removeEventListener("mousemove", onMove); hero.removeEventListener("mouseleave", onLeave); };
  }, []);

  // Stats count-up on scroll into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <Nav />
      <main>

        {/* Hero with parallax */}
        <div ref={heroRef} className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
          <div
            ref={bgRef}
            className="absolute inset-0"
            style={{ transform: "scale(1.04)" }}
          >
            <Image
              src="/Ground1.jpg"
              alt="Mooroondu Oval"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/85 via-green-deep/40 to-transparent" />
          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-14 z-10">
            <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold block mb-2">
              Our Partners
            </span>
            <h1 className="font-serif text-[clamp(28px,4vw,56px)] font-black text-white leading-tight mb-3">
              These legends make<br />it all possible
            </h1>
            <p className="text-[14px] md:text-[15px] text-white/60 max-w-md hidden md:block">
              Proudly supported by local businesses who believe in community cricket
            </p>
          </div>
        </div>

        {/* Stats counter — dark strip */}
        <div
          ref={statsRef}
          className="bg-green-deep"
          style={{ borderTop: "1px solid rgba(201,160,48,0.15)", borderBottom: "1px solid rgba(201,160,48,0.15)" }}
        >
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/10">
            {STATS.map((s, i) => (
              <StatCard key={s.label} {...s} active={statsActive} delay={i * 200} />
            ))}
          </div>
        </div>

        {/* Sponsor wall — cream bg */}
        <section className="py-14 md:py-20 px-4 md:px-12 bg-cream">
          <div className="max-w-[1100px] mx-auto">

            {/* Intro */}
            <div className="text-center mb-12">
              <div className="section-label justify-center mb-2">Season 2025/26 Partners</div>
              <h2 className="font-serif text-[clamp(24px,3vw,40px)] font-black text-green-dark mb-3">
                The Club Behind the Club
              </h2>
              <p className="text-[14px] text-wello-grey max-w-lg mx-auto leading-[1.75]">
                These local businesses make Wello Wildcats cricket possible. Please support them as they support us.
              </p>
            </div>

            {/* Platinum tier */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-gold">Platinum Partners</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PLATINUM.map((s, i) => (
                  <SponsorTile key={s.name} s={s} delay={i * 150} size="large" />
                ))}
              </div>
            </div>

            {/* Gold tier */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-grey-light" />
                <span className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-wello-grey">Gold Partners</span>
                <div className="h-px flex-1 bg-grey-light" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GOLD.map((s, i) => (
                  <SponsorTile key={s.name} s={{ ...s, desc: "" }} delay={300 + i * 150} size="medium" />
                ))}
              </div>
            </div>

            {/* Become a sponsor */}
            <div
              className="rounded-2xl p-10 md:p-14 text-center"
              style={{ background: "#142E14", border: "1px solid rgba(201,160,48,0.2)" }}
            >
              <div className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                Partner With Us
              </div>
              <h2 className="font-serif text-[clamp(22px,2.5vw,34px)] font-black text-white mb-4">
                Become a Sponsor
              </h2>
              <p className="text-[14px] text-white/55 leading-[1.75] max-w-lg mx-auto mb-8">
                Sponsoring Wello Wildcats puts your brand in front of 200+ registered players and their families across the Redlands. Flexible packages to suit all budgets.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/contact" className="btn-primary">Enquire About Sponsorship</a>
                <a
                  href="mailto:president@wellowildcats.com.au"
                  className="btn-secondary"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
                >
                  Email the President
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
