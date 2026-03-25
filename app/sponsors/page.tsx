import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description: "The businesses that make Wellington Point Cricket Club possible.",
};

const PLATINUM = [
  { name:"Manny's Italian",       type:"Restaurant",          logo:"/sponsors/mannys.png",       href:"https://www.mannysitalian.com.au/",    logoBg:"bg-black",
    desc:"Authentic Italian cuisine in Wellington Point. A proud platinum sponsor and long-time supporter of Wello Wildcats cricket." },
  { name:"Punjab Curry Club",     type:"Restaurant",          logo:"/sponsors/punjab.png",        href:"https://punjabcurryclub.com.au/",      logoBg:"bg-black",
    desc:"Wellington Point's favourite Indian restaurant. A platinum sponsor proudly supporting local community cricket." },
  { name:"Mortgage Finance Guru", type:"Finance & Mortgages", logo:"/sponsors/mortgageguru.png",  href:"https://mortgagefinanceguru.com.au/",  logoBg:"bg-black",
    desc:"Redlands-based mortgage and finance specialists with over 30 lenders on their panel. Proud platinum partner of the Wildcats." },
];

const GOLD = [
  { name:"Cricket Gurus",  type:"Cricket Equipment",  logo:"/sponsors/cricketgurus.png", href:"https://www.cricketgurus.com.au/", icon:"", logoBg:"bg-white",
    desc:"Cricket Gurus is a cricket specialty store carrying all major brands. Best price, best service, best quality." },
  { name:"LG Wealth",      type:"Financial Services",  logo:"/sponsors/lgwealth.png", href:"https://lgwealth.com.au/", icon:"", logoBg:"bg-white",
    desc:"Expert financial planning and wealth management services for the Redlands community." },
];

export default function SponsorsPage() {
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
              {PLATINUM.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="bg-green-deep border border-gold/20 rounded-lg overflow-hidden no-underline group hover:shadow-[0_12px_32px_rgba(201,160,48,0.2)] hover:-translate-y-1 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <span className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase bg-[#E5E4E2] text-charcoal px-2.5 py-1 rounded">
                      Platinum Sponsor
                    </span>
                  </div>
                  <div className={`mx-5 mb-4 rounded-lg ${s.logoBg} flex items-center justify-center p-4 h-[100px]`}>
                    <Image src={s.logo} alt={s.name} width={240} height={80}
                      className="object-contain max-h-[80px] w-auto" />
                  </div>
                  <div className="px-5 pb-5 flex flex-col flex-1">
                    <h3 className="font-serif text-[20px] font-bold text-white mb-1">{s.name}</h3>
                    <div className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-gold mb-3">{s.type}</div>
                    <p className="text-[13px] leading-[1.65] text-white/70 flex-1">{s.desc}</p>
                    <div className="mt-4 font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-gold group-hover:underline">
                      Visit Website →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Gold */}
          <div className="mb-14">
            <div className="section-label">Gold Sponsors</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GOLD.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="bg-white border border-grey-light rounded-lg overflow-hidden no-underline group hover:border-gold hover:shadow-[0_12px_32px_rgba(201,160,48,0.15)] hover:-translate-y-1 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <span className="font-condensed text-[9px] font-bold tracking-[0.12em] uppercase bg-yellow-400 text-charcoal px-2.5 py-1 rounded">
                      Gold Sponsor
                    </span>
                  </div>
                  <div className={`mx-5 mb-4 rounded-lg ${s.logoBg} flex items-center justify-center p-4 h-[100px] border border-grey-light`}>
                    {s.logo ? (
                      <Image src={s.logo} alt={s.name} width={240} height={80}
                        className="object-contain max-h-[80px] w-auto" />
                    ) : (
                      <span className="text-[48px]">{s.icon}</span>
                    )}
                  </div>
                  <div className="px-5 pb-5 flex flex-col flex-1">
                    <h3 className="font-serif text-[20px] font-bold text-charcoal mb-1">{s.name}</h3>
                    <div className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-wello-grey mb-3">{s.type}</div>
                    <p className="text-[13px] leading-[1.65] text-wello-grey flex-1">{s.desc}</p>
                    <div className="mt-4 font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors group-hover:underline">
                      Visit Website →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Become a sponsor */}
          <div id="become" className="bg-white rounded-lg border-2 border-dashed border-grey-light p-10 md:p-12 text-center">
            <div className="text-5xl mb-5">🤝</div>
            <div className="section-label justify-center">Partner With Us</div>
            <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-4">Become a Sponsor</h2>
            <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.75] max-w-xl mx-auto mb-8">
              Sponsoring Wello Wildcats puts your brand in front of hundreds of families across the Redlands.
              We offer flexible sponsorship packages to suit all budgets.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="btn-primary">Enquire About Sponsorship</a>
              <a href="mailto:president@wellowildcats.com.au"
                className="btn-secondary" style={{ borderColor:"#1D4A1D", color:"#1D4A1D" }}>
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
