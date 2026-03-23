import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description: "The businesses that make Wellington Point Cricket Club possible.",
};

const SPONSORS = [
  { name:"Manny's Italian",       type:"Restaurant",          icon:"🍝", href:"https://www.mannysitalian.com.au/",      tier:"platinum",
    desc:"Authentic Italian cuisine in Wellington Point. A proud platinum sponsor and long-time supporter of Wello Wildcats cricket." },
  { name:"Punjab Curry Club",     type:"Restaurant",          icon:"🍛", href:"https://punjabcurryclub.com.au/",        tier:"platinum",
    desc:"Wellington Point's favourite Indian restaurant. A platinum sponsor proudly supporting local community cricket." },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", icon:"🏠", href:"https://mortgagefinanceguru.com.au/",    tier:"platinum",
    desc:"Redlands-based mortgage and finance specialists with over 30 lenders on their panel. Proud platinum partner of the Wildcats." },
  { name:"Cricket Gurus",         type:"Cricket Equipment",   icon:"🏏", href:"https://www.cricketgurus.com.au/",       tier:"gold",
    desc:"Cricket Gurus is a cricket specialty store carrying all major brands. Best price, best service, best quality." },
  { name:"LG Wealth",             type:"Financial Services",  icon:"💼", href:"https://lgwealth.com.au/",               tier:"gold",
    desc:"Expert financial planning and wealth management services for the Redlands community." },
];

const TIER_CONFIG = {
  platinum: { label:"Platinum Sponsor", bg:"bg-green-deep",  textCol:"text-white",    borderCol:"border-gold/30",   badge:"bg-[#E5E4E2] text-charcoal" },
  gold:     { label:"Gold Sponsor",     bg:"bg-white",       textCol:"text-charcoal", borderCol:"border-grey-light", badge:"bg-yellow-400 text-charcoal" },
};

export default function SponsorsPage() {
  const platinum = SPONSORS.filter(s => s.tier === "platinum");
  const gold     = SPONSORS.filter(s => s.tier === "gold");

  const SponsorCard = ({ s }: { s: typeof SPONSORS[0] }) => {
    const cfg = TIER_CONFIG[s.tier as keyof typeof TIER_CONFIG];
    return (
      <a href={s.href} target="_blank" rel="noopener noreferrer"
        className={`${cfg.bg} ${cfg.borderCol} rounded-lg border overflow-hidden no-underline group hover:shadow-[0_12px_32px_rgba(201,160,48,0.15)] hover:-translate-y-1 transition-all duration-200 flex flex-col`}>
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className={`inline-block font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded ${cfg.badge}`}>
            {cfg.label}
          </div>
          <span className="text-3xl">{s.icon}</span>
        </div>
        <div className="px-6 pb-6 flex flex-col flex-1">
          <h3 className={`font-serif text-[22px] font-bold ${cfg.textCol} mb-1`}>{s.name}</h3>
          <div className={`font-condensed text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${s.tier === "platinum" ? "text-gold" : "text-wello-grey"}`}>
            {s.type}
          </div>
          <p className={`text-[13px] leading-[1.65] flex-1 ${s.tier === "platinum" ? "text-white/70" : "text-wello-grey"}`}>{s.desc}</p>
          <div className={`mt-5 font-condensed text-[11px] font-bold tracking-[0.1em] uppercase ${s.tier === "platinum" ? "text-gold" : "text-green-dark"} group-hover:underline`}>
            Visit Website →
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Our Partners" title="Proudly Supported By"
          subtitle="These local businesses make Wello Wildcats cricket possible. Please support them as they support us." />

        <SectionWrapper className="bg-cream">
          {/* Platinum */}
          <div className="mb-14">
            <div className="section-label">Platinum Sponsors</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platinum.map(s => <SponsorCard key={s.name} s={s} />)}
            </div>
          </div>

          {/* Gold */}
          <div className="mb-14">
            <div className="section-label">Gold Sponsors</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gold.map(s => <SponsorCard key={s.name} s={s} />)}
            </div>
          </div>

          {/* Become a sponsor */}
          <div id="become" className="bg-white rounded-lg border-2 border-dashed border-grey-light p-12 text-center">
            <div className="text-5xl mb-5">🤝</div>
            <div className="section-label justify-center">Partner With Us</div>
            <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-4">Become a Sponsor</h2>
            <p className="text-[15px] text-wello-grey leading-[1.75] max-w-xl mx-auto mb-8">
              Sponsoring Wello Wildcats puts your brand in front of hundreds of families across the Redlands.
              We offer flexible sponsorship packages to suit all budgets.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="btn-primary">Enquire About Sponsorship</a>
              <a href="mailto:president@wellowildcats.com.au" className="btn-secondary"
                style={{ borderColor:"#1D4A1D", color:"#1D4A1D" }}>
                Email the President
              </a>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
