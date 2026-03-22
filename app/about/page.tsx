import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Wellington Point Cricket Club — established 1895. Our history, facilities and committee.",
};

const COMMITTEE = [
  { name: "Gurinder Rangi",   role: "President",          phone: "0434 512 044", email: "president@wellowildcats.com.au" },
  { name: "Jamie Stainburn", role: "Secretary",          phone: "0431 277 265", email: "president@wellowildcats.com.au" },
  { name: "Mike Mason",      role: "Treasurer",          phone: "",             email: "" },
  { name: "Brendin Bloye",   role: "VP — Seniors",       phone: "0404 381 304", email: "" },
  { name: "Greg Jones",      role: "VP — Juniors",       phone: "",             email: "" },
];

const FACILITIES = [
  { icon: "🏏", title: "First-Class Turf Wicket",    desc: "A well-maintained turf wicket used for all senior QSDCA Saturday competition matches." },
  { icon: "🟩", title: "Synthetic Wicket",           desc: "A synthetic practice wicket available for training sessions and junior matches." },
  { icon: "🎯", title: "4 Practice Nets",            desc: "Four fully equipped practice nets for individual and team training sessions." },
  { icon: "🏠", title: "Modern Clubhouse",           desc: "Full clubhouse facilities through the Mooroondu Sports & Recreation Club, including canteen and bar." },
  { icon: "🌊", title: "Moreton Bay Location",       desc: "Located beside the waters of Moreton Bay with cooling afternoon sea breezes — a great place to play cricket." },
  { icon: "🅿️", title: "Ample Parking",             desc: "Plenty of on-site parking available for players and spectators on match days." },
];

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Who We Are"
          title="About Wellington Point Cricket Club"
          subtitle="130 years of cricket in the heart of Redlands — Est. 1895."
        />

        {/* Club History */}
        <SectionWrapper className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-6">
                A Club Built on Community Since 1895
              </h2>
              <p className="text-[15px] text-wello-grey leading-[1.85] mb-5">
                Wellington Point Cricket Club has been established since 1895 and has maintained its
                position as a premier cricket club for juniors, seniors and masters with nearly over
                200 registered players in recent years.
              </p>
              <p className="text-[15px] text-wello-grey leading-[1.85] mb-5">
                Located beside Moreton Bay with its cooling afternoon sea breezes, WPCC has attracted
                many players from outside the district and has won more than its fair share of
                premierships over 130 years of competition.
              </p>
              <p className="text-[15px] text-wello-grey leading-[1.85] mb-5">
                Most notable player to come through the club in recent years is Clinton Perrin, who
                has gone on to play for the Queensland Bulls.
              </p>
              <p className="text-[15px] text-wello-grey leading-[1.85]">
                In 1999, WPCC relocated to Mooroondu Road in Thorneside to become affiliates of the
                Mooroondu Sports &amp; Recreation Club — a move that gave the club access to
                first-class facilities and a permanent home for generations to come.
              </p>
            </div>
            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "1895", label: "Year Founded" },
                { val: "130+", label: "Years of Cricket" },
                { val: "200+", label: "Registered Players" },
                { val: "16+",  label: "Teams Fielded" },
              ].map((s) => (
                <div key={s.label} className="bg-cream rounded-lg p-8 text-center border border-grey-light hover:border-gold transition-colors">
                  <div className="font-serif text-[48px] font-black text-gold leading-none mb-2">{s.val}</div>
                  <div className="font-condensed text-[11px] font-bold tracking-[0.14em] uppercase text-wello-grey">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Facilities */}
        <SectionWrapper className="bg-cream">
          <div className="section-label">Our Home Ground</div>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-4">
            16 Ivy Street, Thorneside
          </h2>
          <p className="text-[15px] text-wello-grey leading-[1.75] mb-12 max-w-2xl">
            Our home ground at the Mooroondu Sports &amp; Recreation Club gives us access to
            everything a cricket club needs to thrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-8 border border-grey-light hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-condensed text-[16px] font-bold tracking-[0.04em] text-green-dark mb-3">{f.title}</h3>
                <p className="text-[13px] text-wello-grey leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
          {/* Map embed placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden border border-grey-light">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2!2d153.217!3d-27.503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzEwLjgiUyAxNTLCsDEzJzAxLjIiRQ!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mooroondu Sports & Recreation Club"
            />
          </div>
          <p className="text-center font-condensed text-[12px] text-wello-grey tracking-[0.08em] uppercase mt-4">
            📍 16 Ivy Street, Thorneside QLD 4158 — Affiliates of the Mooroondu Sports & Recreation Club
          </p>
        </SectionWrapper>

        {/* Committee */}
        <SectionWrapper className="bg-white">
          <div className="section-label">Club Leadership</div>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-black text-green-dark leading-[1.1] mb-4">
            Committee 2024/25
          </h2>
          <p className="text-[15px] text-wello-grey leading-[1.75] mb-10 max-w-xl">
            Committee meetings are held on the 2nd Tuesday of each month at 7:00 PM at the
            Mooroondu Sports &amp; Recreation Clubhouse. All members welcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMITTEE.map((m) => (
              <div key={m.name} className="bg-cream rounded-lg p-7 border border-grey-light hover:border-gold transition-all duration-200 group">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-green-dark flex items-center justify-center mb-4 text-2xl text-gold font-serif font-black">
                  {m.name.charAt(0)}
                </div>
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1">{m.role}</div>
                <h3 className="font-serif text-[20px] font-bold text-charcoal mb-3">{m.name}</h3>
                <div className="flex flex-col gap-1.5">
                  {m.phone && (
                    <a href={`tel:${m.phone}`} className="text-[13px] text-wello-grey no-underline hover:text-green-dark transition-colors flex items-center gap-2">
                      <span className="text-gold">📞</span> {m.phone}
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="text-[13px] text-wello-grey no-underline hover:text-green-dark transition-colors flex items-center gap-2 break-all">
                      <span className="text-gold">✉️</span> {m.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 px-12 text-center"
          style={{ background: "linear-gradient(135deg,#142E14 0%,#1D4A1D 60%,#2A6B2A 100%)" }}>
          <div className="absolute w-[500px] h-[500px] rounded-full border border-gold/10 -top-[180px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 max-w-[600px] mx-auto">
            <h2 className="font-serif text-[36px] font-black text-white mb-4">
              Want to Join the <span className="text-gold">Wildcats?</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
              We welcome players of all ages and abilities. Get in touch or register online today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register"
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register Now
              </a>
              <a href="/contact" className="btn-secondary">Contact the Club</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
