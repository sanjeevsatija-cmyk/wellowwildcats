import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Photo Gallery" };

const ALBUMS = [
  { title:"Match Day — Home Ground", season:"2025/26", count:24, emoji:"🏟️" },
  { title:"Cricket Blast 2025",       season:"2025/26", count:18, emoji:"⚾" },
  { title:"1sts vs Valley CC",        season:"2025/26", count:12, emoji:"🏏" },
  { title:"Presentation Night 2024",  season:"2024/25", count:34, emoji:"🏆" },
  { title:"Training — Practice Nets", season:"2025/26", count:15, emoji:"🌅" },
  { title:"Junior Presentation 2024", season:"2024/25", count:28, emoji:"⭐" },
];

export default function GalleryPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero label="Season Highlights" title="Photo Gallery"
          subtitle="Match day moments, presentations, training and celebrations from across the seasons." />

        <SectionWrapper className="bg-green-deep">
          <div className="flex gap-2 mb-8 flex-wrap">
            {["All Seasons","2025/26","2024/25"].map((s) => (
              <button key={s} className={`font-condensed text-xs font-bold tracking-[0.1em] uppercase px-3.5 py-2 rounded border transition-all duration-200 ${
                s==="All Seasons" ? "bg-gold text-green-deep border-gold" : "bg-transparent text-white/60 border-white/20 hover:border-gold hover:text-gold"
              }`}>{s}</button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {ALBUMS.map((album) => (
              <div key={album.title} className="rounded-lg overflow-hidden cursor-pointer group border border-white/10 hover:border-gold transition-all duration-300">
                <div className="relative h-[130px] md:h-[200px] flex items-center justify-center overflow-hidden"
                  style={{ background:"linear-gradient(135deg,#1D4A1D,#142E14)" }}>
                  <span className="text-[40px] md:text-[56px] relative z-10 group-hover:scale-110 transition-transform duration-300">{album.emoji}</span>
                  <div className="absolute inset-0 bg-gold/20 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-white bg-green-deep/80 px-3 py-1.5 rounded">View Album</span>
                  </div>
                </div>
                <div className="bg-green-dark px-4 py-3">
                  <h3 className="font-condensed text-[12px] md:text-[14px] font-bold text-white leading-snug">{album.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-condensed text-[9px] text-gold tracking-[0.1em] uppercase">{album.season}</span>
                    <span className="font-condensed text-[9px] text-white/40">{album.count} photos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 font-condensed text-[11px] tracking-[0.08em] uppercase mt-8">
            Follow us on <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:text-gold-bright">Instagram @wellowildcats</a>
          </p>
        </SectionWrapper>

        <SectionWrapper className="bg-cream">
          <div className="text-center max-w-lg mx-auto">
            <div className="text-4xl md:text-5xl mb-4">📸</div>
            <div className="section-label justify-center">Got Photos?</div>
            <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] font-black text-green-dark mb-4">Share Your Match Day Photos</h2>
            <p className="text-[14px] md:text-[15px] text-wello-grey leading-[1.75] mb-6 md:mb-8">
              Got great shots from a match or training session? Send them through and we&apos;ll add them to the gallery.
            </p>
            <a href="mailto:president@wellowildcats.com.au?subject=Photo submission" className="btn-primary">Submit Photos</a>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
