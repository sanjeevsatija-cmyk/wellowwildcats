import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Wellington Point Cricket Club.",
};

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Get in Touch"
          title="Contact the Club"
          subtitle="We'd love to hear from you — whether you're looking to join, volunteer, sponsor, or just find out more."
        />

        <SectionWrapper className="bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-14">

            {/* Contact form */}
            <div>
              <div className="section-label">Send Us a Message</div>
              <h2 className="font-serif text-[clamp(24px,2.5vw,34px)] font-black text-green-dark mb-8">
                We&apos;ll get back to you soon
              </h2>
              <form action="mailto:president@wellowildcats.com.au" method="GET" className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">First Name</label>
                    <input type="text" name="first_name" placeholder="Your first name"
                      className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">Last Name</label>
                    <input type="text" name="last_name" placeholder="Your last name"
                      className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">Phone (optional)</label>
                  <input type="tel" name="phone" placeholder="04xx xxx xxx"
                    className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">Enquiry Type</label>
                  <select name="subject" className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors text-wello-grey">
                    <option value="">Select a topic…</option>
                    <option>Joining the club / Registration</option>
                    <option>Junior Cricket enquiry</option>
                    <option>Senior Cricket enquiry</option>
                    <option>Volunteer opportunities</option>
                    <option>Sponsorship opportunity</option>
                    <option>Venue / facilities hire</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-green-dark block mb-2">Message</label>
                  <textarea name="body" rows={5} placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-grey-light rounded bg-white text-[14px] focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
                <p className="text-[12px] text-wello-grey text-center">
                  Or email us directly at{" "}
                  <a href="mailto:president@wellowildcats.com.au"
                    className="text-green-dark font-semibold no-underline hover:text-gold">
                    president@wellowildcats.com.au
                  </a>
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* Club contacts */}
              <div className="bg-white rounded-lg p-7 border border-grey-light">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-4">Club Contacts</div>
                {[
                  { role: "President",  name: "Gurinder Singh Rangi (Guru)", phone: "0434 512 044", email: "president@wellowildcats.com.au" },
                  { role: "Secretary",  name: "Jamieson Stainburn",          phone: "",             email: "secretary@wellowildcats.com.au" },
                  { role: "Treasurer",  name: "Andrew Bowker",               phone: "",             email: "" },
                ].map((c) => (
                  <div key={c.name} className="mb-5 last:mb-0 pb-5 last:pb-0 border-b border-grey-light last:border-0">
                    <div className="font-condensed text-[10px] font-bold tracking-[0.12em] uppercase text-wello-grey mb-1">{c.role}</div>
                    <div className="font-semibold text-[14px] text-charcoal mb-1">{c.name}</div>
                    {c.phone && (
                      <a href={`tel:${c.phone.replace(/\s/g,"")}`}
                        className="text-[13px] text-wello-grey no-underline hover:text-gold block">{c.phone}</a>
                    )}
                    {c.email && (
                      <a href={`mailto:${c.email}`}
                        className="text-[12px] text-wello-grey no-underline hover:text-gold block break-all">{c.email}</a>
                    )}
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="bg-white rounded-lg p-7 border border-grey-light" id="ground">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-4">Our Location</div>
                <p className="text-[14px] text-charcoal font-semibold mb-1">Mooroondu Sports & Recreation Club</p>
                <p className="text-[13px] text-wello-grey leading-[1.7] mb-4">
                  16 Ivy Street<br />
                  Thorneside QLD 4158
                </p>
                <a href="https://maps.google.com/?q=16+Ivy+Street+Thorneside+QLD+4158"
                  target="_blank" rel="noopener noreferrer"
                  className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark no-underline hover:text-gold transition-colors">
                  Get Directions →
                </a>
              </div>

              {/* Committee meetings */}
              <div className="bg-green-deep rounded-lg p-7 border border-gold/20">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-3">Committee Meetings</div>
                <p className="text-[14px] text-white font-semibold mb-2">2nd Tuesday of every month</p>
                <p className="text-[13px] text-white/60 leading-[1.65]">
                  7:00 PM at the Mooroondu Sports &amp; Recreation Clubhouse.<br />
                  All members welcome to attend.
                </p>
              </div>

              {/* Social */}
              <div className="bg-white rounded-lg p-7 border border-grey-light">
                <div className="font-condensed text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-4">Follow the Wildcats</div>
                <div className="flex gap-3">
                  <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-[#1877F2] text-white text-center py-2.5 rounded font-condensed text-xs font-bold tracking-[0.06em] uppercase no-underline hover:opacity-90 transition-opacity">
                    Facebook
                  </a>
                  <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-[#E4405F] text-white text-center py-2.5 rounded font-condensed text-xs font-bold tracking-[0.06em] uppercase no-underline hover:opacity-90 transition-opacity">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
