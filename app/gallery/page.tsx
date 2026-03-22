import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Season photos and match highlights from Wellington Point Cricket Club.",
};

const ALBUMS = [
  { title:"Match Day — Mooroondu Road",    season:"2025/26", count:24, emoji:"🏟️", bg:"from-green-dark to-green-deep" },
  { title:"Cricket Blast 2025",            season:"2025/26", count:18, emoji:"⚾",  bg:"from-[#5a2d1b] to-[#331a0d]" },
  { title:"1sts vs Valley CC",             season:"2025/26", count:12, emoji:"🏏",  bg:"from-[#1b3d5a] to-[#0d2033]" },
  { title:"Presentation Night 2024",       season:"2024/25", count:34, emoji:"🏆",  bg:"from-[#5a4a1b] to-[#332a0d]" },
  { title:"Training — Practice Nets",      season:"2025/26", count:15, emoji:"🌅",  bg:"from-[#1b5a3a] to-[#0d3321]" },
  { title:"Junior Presentation 2024",      season:"2024/25", count:28, emoji:"⭐",  bg:"from-[#3a1b5a] to-[#220d33]" },
];

const GRID_LINES = "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.04) 39px,rgba(255,255,255,.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.04) 39px,rgba(255,255,255,.04) 40px)";

export default function GalleryPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Season Highlights"
          title="Photo Gallery"
          subtitle="Match day moments, presentations, training and celebrations from across the seasons."
        />

        <SectionWrapper className="bg-green-deep">
          {/* Season filter */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {["All Seasons","2025/26","2024/25","2023/24"].map((s) => (
              <button key={s}
                className={`font-condensed text-xs font-bold tracking-[0.1em] uppercase px-4 py-2 rounded border transition-all duration-200 ${
                  s === "All Seasons"
                    ? "bg-gold text-green-deep border-gold"
                    : "bg-transparent text-white/60 border-white/20 hover:border-gold hover:text-gold"
                }`}>{s}
              </button>
            ))}
          </div>

          {/* Album grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALBUMS.map((album) => (
              <div key={album.title}
                className="rounded-lg overflow-hidden cursor-pointer group border border-white/10 hover:border-gold transition-all duration-300">
                {/* Thumbnail */}
                <div className={`relative h-[200px] bg-gradient-to-br ${album.bg} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0" style={{ backgroundImage: GRID_LINES }} />
                  <span className="text-[56px] relative z-10 group-hover:scale-110 transition-transform duration-300">{album.emoji}</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/20 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <span className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-white bg-green-deep/80 px-4 py-2 rounded">
                      View Album
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="bg-green-dark px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-condensed text-[14px] font-bold text-white tracking-[0.03em]">{album.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="font-condensed text-[10px] text-gold tracking-[0.1em] uppercase">{album.season}</span>
                        <span className="font-condensed text-[10px] text-white/40">{album.count} photos</span>
                      </div>
                    </div>
                    <span className="text-gold/60 group-hover:text-gold transition-colors text-lg">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 font-condensed text-[12px] tracking-[0.08em] uppercase mt-10">
            More albums added throughout the season · Follow us on{" "}
            <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer"
              className="text-gold no-underline hover:text-gold-bright">Instagram @wellowildcats</a>
          </p>
        </SectionWrapper>

        {/* Submit your photos CTA */}
        <SectionWrapper className="bg-cream">
          <div className="text-center max-w-lg mx-auto">
            <div className="text-5xl mb-5">📸</div>
            <div className="section-label justify-center">Got Photos?</div>
            <h2 className="font-serif text-[clamp(24px,2.5vw,32px)] font-black text-green-dark mb-4">
              Share Your Match Day Photos
            </h2>
            <p className="text-[15px] text-wello-grey leading-[1.75] mb-8">
              Got great shots from a match or training session? Send them through and
              we&apos;ll add them to the gallery.
            </p>
            <a href="mailto:secretary@wellowildcats.com.au?subject=Photo submission" className="btn-primary">
              Submit Photos
            </a>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
