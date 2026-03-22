import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Useful documents and resources for Wellington Point Cricket Club players, coaches and parents.",
};

const RESOURCES = [
  {
    category: "BEARS Junior Cricket",
    items: [
      {
        title: "BEARS Rules for the Conduct of Cricket 2025–2026",
        desc: "The official rules and by-laws governing all BEARS Junior Divisional Cricket competitions. Required reading for all coaches, managers and umpires participating in BEARS competitions.",
        file: "/BEARS_Rules_2025.pdf",
        type: "PDF",
        size: "~500KB",
        icon: "📋",
      },
    ],
  },
  {
    category: "Registration & Playing",
    items: [
      {
        title: "Register to Play — PlayHQ",
        desc: "Register for all Wello Wildcats programs through Cricket Australia's official PlayHQ platform.",
        file: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register",
        type: "Link",
        size: "",
        icon: "🏏",
        isExternal: true,
      },
      {
        title: "Club Page on PlayHQ",
        desc: "View all teams, fixtures, ladders, results and player statistics on the official Wello Wildcats PlayHQ page.",
        file: "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2",
        type: "Link",
        size: "",
        icon: "📊",
        isExternal: true,
      },
    ],
  },
  {
    category: "Cricket Australia",
    items: [
      {
        title: "Play Cricket — Find a Club",
        desc: "Find registration links, club details and competition information through the Cricket Australia Play Cricket portal.",
        file: "https://play.cricket.com.au/club-finder/club-details?Id=5499",
        type: "Link",
        size: "",
        icon: "🌐",
        isExternal: true,
      },
      {
        title: "Cricket Australia Safeguarding Kids",
        desc: "Cricket Australia's policies and codes for safeguarding children and young people in cricket.",
        file: "https://www.cricketaustralia.com.au/about/safeguarding/safeguarding-kids",
        type: "Link",
        size: "",
        icon: "🛡️",
        isExternal: true,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Club Resources"
          title="Resources & Documents"
          subtitle="Useful documents, rules, registration links and information for players, coaches and parents."
        />

        <SectionWrapper className="bg-cream">
          <div className="flex flex-col gap-12">
            {RESOURCES.map((section) => (
              <div key={section.category}>
                <div className="section-label">{section.category}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  {section.items.map((item) => (
                    <a key={item.title}
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.type === "PDF" ? item.title : undefined}
                      className="bg-white rounded-lg border border-grey-light p-7 no-underline group hover:border-gold hover:shadow-[0_8px_24px_rgba(201,160,48,0.1)] transition-all duration-200 flex gap-5 items-start">
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-serif text-[17px] font-bold text-charcoal group-hover:text-green-dark transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <span className={`font-condensed text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded flex-shrink-0 ${
                            item.type === "PDF"
                              ? "bg-red-100 text-red-700"
                              : "bg-green-pale text-green-dark"
                          }`}>
                            {item.type} {item.size && `· ${item.size}`}
                          </span>
                        </div>
                        <p className="text-[13px] text-wello-grey leading-[1.65] mb-3">{item.desc}</p>
                        <div className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-green-dark group-hover:text-gold transition-colors">
                          {item.type === "PDF" ? "Download PDF →" : "Visit Link →"}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-deep rounded-lg p-8 border border-gold/20 text-center">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="font-serif text-[22px] font-bold text-white mb-3">Need Something Else?</h3>
            <p className="text-[14px] text-white/60 leading-[1.7] mb-6 max-w-md mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact the club and we&apos;ll help point you in the right direction.
            </p>
            <a href="/contact" className="btn-primary">Contact the Club</a>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
