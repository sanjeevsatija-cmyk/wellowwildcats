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
  { name:"Manny's Italian",       type:"Restaurant",          icon:"🍝", href:"https://www.mannysitalian.com.au",         tier:"principal",
    desc:"Authentic Italian cuisine in Wellington Point. Our valued principal sponsor supporting Wello Wildcats cricket." },
  { name:"Punjab Curry Club",     type:"Restaurant",          icon:"🍛", href:"https://punjabcurryclub.com.au/",         tier:"gold",
    desc:"Wellington Point's favourite Indian restaurant. Proud supporter of local community cricket." },
  { name:"LG Wealth",             type:"Financial Services",  icon:"💼", href:"https://lgwealth.com.au",                  tier:"gold",
    desc:"Expert financial planning and wealth management services for the Redlands community." },
  { name:"Cricket Gurus",         type:"Cricket Equipment",   icon:"🏏", href:"https://www.cricketgurus.com.au/", tier:"standard",
    desc:"Cricket Gurus is a cricket specialty store carrying all major brands. Best price, best service, best quality." },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", icon:"🏠", href:"https://mortgagefinanceguru.com.au",        tier:"standard",
    desc:"Redlands-based mortgage and finance specialists with over 30 lenders on their panel." },
];

const TIER_CONFIG = {
  principal: { label:"Principal Sponsor", bg:"bg-green-deep", textCol:"text-white",  borderCol:"border-gold/30",  badge:"bg-gold text-green-deep" },
  gold:      { label:"Gold Sponsor",      bg:"bg-white",      textCol:"text-charcoal", borderCol:"border-grey-light", badge:"bg-yellow-400 text-charcoal" },
  standard:  { label:"Club Sponsor",      bg:"bg-white",      textCol:"text-charcoal", borderCol:"border-grey-light", badge:"bg-cream text-green-dark border border-grey-light" },
};

export default function SponsorsPage() {
  const principal = SPONSORS.filter(s => s.tier === "principal");
  const gold      = SPONSORS.filter(s => s.tier === "gold");
  const standard  = SPONSORS.filter(s => s.tier === "standard");

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
          <div className={`font-condensed text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${s.tier === "principal" ? "text-gold" : "text-wello-grey"}`}>
            {s.type}
          </div>
          <p className={`text-[13px] leading-[1.65] flex-1 ${s.tier === "principal" ? "text-white/70" : "text-wello-grey"}`}>{s.desc}</p>
          <div className={`mt-5 font-condensed text-[11px] font-bold tracking-[0.1em] uppercase ${s.tier === "principal" ? "text-gold" : "text-green-dark"} group-hover:underline`}>
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
        <PageHero
          label="Our Partners"
          title="Proudly Supported By"
          subtitle="These local businesses make Wello Wildcats cricket possible. Please support them as they support us."
        />

        <SectionWrapper className="bg-cream">
          {/* Principal */}
          {principal.length > 0 && (
            <div className="mb-14">
              <div className="section-label">Principal Sponsor</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                {principal.map(s => <SponsorCard key={s.name} s={s} />)}
              </div>
            </div>
          )}

          {/* Gold */}
          {gold.length > 0 && (
            <div className="mb-14">
              <div className="section-label">Gold Sponsors</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gold.map(s => <SponsorCard key={s.name} s={s} />)}
              </div>
            </div>
          )}

          {/* Standard */}
          {standard.length > 0 && (
            <div className="mb-14">
              <div className="section-label">Club Sponsors</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {standard.map(s => <SponsorCard key={s.name} s={s} />)}
              </div>
            </div>
          )}

          {/* Become a sponsor */}
          <div id="become" className="bg-white rounded-lg border-2 border-dashed border-grey-light p-12 text-center">
            <div className="text-5xl mb-5">🤝</div>
            <div className="section-label justify-center">Partner With Us</div>
            <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-4">
              Become a Sponsor
            </h2>
            <p className="text-[15px] text-wello-grey leading-[1.75] max-w-xl mx-auto mb-8">
              Sponsoring Wello Wildcats puts your brand in front of hundreds of families across the
              Redlands. We offer flexible sponsorship packages to suit all budgets, with visibility
              across our website, social media, match days and club communications.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="btn-primary">Enquire About Sponsorship</a>
              <a href="mailto:president@wellowildcats.com.au" className="btn-secondary"
                style={{ borderColor:"#1D4A1D", color:"#1D4A1D" }}>
                Email the Secretary
              </a>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
