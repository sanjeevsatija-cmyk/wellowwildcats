import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Wellington Point Cricket Club — established 1895. Our history, facilities and committee.",
};

const COMMITTEE = [
  { name: "Gurinder Singh Rangi (Guru)", role: "President",    phone: "0434 512 044", email: "president@wellowildcats.com.au" },
  { name: "Jamie Stainburn",             role: "Secretary",    phone: "0431 277 265", email: "secretary@wellowildcats.com.au" },
  { name: "Mike Mason",                  role: "Treasurer",    phone: "",             email: "" },
  { name: "Brendin Bloye",               role: "VP — Seniors", phone: "0404 381 304", email: "" },
  { name: "Greg Jones",                  role: "VP — Juniors", phone: "",             email: "" },
];

const FACILITIES = [
  { icon:"🏏", title:"Turf Wicket",       desc:"Well-maintained turf wicket for all senior QSDCA Saturday competition matches." },
  { icon:"🟩", title:"Synthetic Wicket",  desc:"Synthetic practice wicket available for training and junior matches." },
  { icon:"🎯", title:"4 Practice Nets",   desc:"Four fully equipped practice nets for individual and team training." },
  { icon:"🏠", title:"Modern Clubhouse",  desc:"Full facilities through the Mooroondu Sports & Recreation Club including canteen and bar." },
  { icon:"🌊", title:"Moreton Bay Views", desc:"Located beside the waters of Moreton Bay with cooling afternoon sea breezes." },
  { icon:"🅿️", title:"Ample Parking",    desc:"Plenty of on-site parking for players and spectators on match days." },
];

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Who We Are" title="About Wellington Point Cricket Club"
          subtitle="130 years of cricket in the heart of Redlands — Est. 1895." />

        {/* Club History */}
        <SectionWrapper className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="font-serif text-[clamp(24px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-6">
                A Club Built on Community Since 1895
              </h2>
              <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.85] mb-5">
                Wellington Point Cricket Club has been established since 1895 and has maintained its position as a premier cricket club for juniors, seniors and masters with nearly 200 registered players.
              </p>
              <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.85] mb-5">
                Located beside Moreton Bay with its cooling afternoon sea breezes, WPCC has attracted many players from outside the district and has won more than its fair share of premierships over 130 years.
              </p>
              <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.85]">
                In 1999, WPCC relocated to Mooroondu Road in Thorneside to become affiliates of the Mooroondu Sports &amp; Recreation Club — a move that gave the club access to first-class facilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { val:"1895",  label:"Year Founded" },
                { val:"130+",  label:"Years of Cricket" },
                { val:"200+",  label:"Registered Players" },
                { val:"16+",   label:"Teams Fielded" },
              ].map((s) => (
                <div key={s.label} className="bg-cream rounded-lg p-5 md:p-8 text-center border border-grey-light hover:border-gold transition-colors">
                  <div className="font-serif text-[36px] md:text-[48px] font-black text-gold leading-none mb-2">{s.val}</div>
                  <div className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-wello-grey">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Facilities */}
        <SectionWrapper className="bg-cream">
          <div className="section-label">Our Home Ground</div>
          <h2 className="font-serif text-[clamp(24px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-4">
            16 Ivy Street, Thorneside
          </h2>
          <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.75] mb-10 max-w-2xl">
            Our home ground at the Mooroondu Sports &amp; Recreation Club gives us everything a cricket club needs to thrive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {FACILITIES.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-6 md:p-8 border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{f.icon}</div>
                <h3 className="font-condensed text-[14px] md:text-[16px] font-bold tracking-[0.04em] text-green-dark mb-2 md:mb-3">{f.title}</h3>
                <p className="text-[12px] md:text-[13px] text-wello-grey leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 rounded-lg overflow-hidden border border-grey-light relative h-[280px]">
            <Image
              src="/Pitch1.jpg"
              alt="Mooroondu Oval — 16 Ivy Street, Thorneside"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="text-center font-condensed text-[11px] text-wello-grey tracking-[0.08em] uppercase mt-3">
            📍 16 Ivy Street, Thorneside QLD 4158
          </p>
        </SectionWrapper>

        {/* Committee */}
        <SectionWrapper className="bg-white">
          <div className="section-label">Club Leadership</div>
          <h2 className="font-serif text-[clamp(24px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-4">
            Committee 2024/25
          </h2>
          <p className="text-[13px] md:text-[15px] text-wello-grey leading-[1.75] mb-8 md:mb-10 max-w-xl">
            Committee meetings held 2nd Tuesday of each month at 7:00 PM. All members welcome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {COMMITTEE.map((m) => (
              <div key={m.name} className="bg-cream rounded-lg p-5 md:p-7 border border-grey-light hover:border-gold transition-all duration-200">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-dark flex items-center justify-center mb-3 md:mb-4 text-xl md:text-2xl text-gold font-serif font-black flex-shrink-0">
                  {m.name.charAt(0)}
                </div>
                <div className="font-condensed text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">{m.role}</div>
                <h3 className="font-serif text-[16px] md:text-[20px] font-bold text-charcoal mb-2 md:mb-3 leading-snug">{m.name}</h3>
                <div className="flex flex-col gap-1">
                  {m.phone && <a href={`tel:${m.phone}`} className="text-[12px] md:text-[13px] text-wello-grey no-underline hover:text-green-dark flex items-center gap-2"><span className="text-gold">📞</span>{m.phone}</a>}
                  {m.email && <a href={`mailto:${m.email}`} className="text-[11px] md:text-[13px] text-wello-grey no-underline hover:text-green-dark flex items-center gap-2 break-all"><span className="text-gold">✉️</span>{m.email}</a>}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <section className="relative overflow-hidden py-14 px-4 md:px-12 text-center"
          style={{ background:"linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="relative z-10 max-w-[600px] mx-auto">
            <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-black text-white mb-4">
              Want to Join the <span className="text-gold">Wildcats?</span>
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/60 leading-[1.7] mb-8">
              We welcome players of all ages and abilities. Get in touch or register online today.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register"
                target="_blank" rel="noopener noreferrer" className="btn-primary">Register Now</a>
              <a href="/contact" className="btn-secondary">Contact the Club</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
