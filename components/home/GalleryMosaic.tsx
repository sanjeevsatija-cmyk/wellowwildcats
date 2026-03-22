const TILES = [
  { label:"Mooroondu Road — Match Day", icon:"🏟️", tall:true,  bg:"linear-gradient(135deg,#2d5a1b 20%,#1a3a10 80%)" },
  { label:"1sts vs Valley",             icon:"🏏",  tall:false, bg:"linear-gradient(135deg,#1b3d5a,#0d2033)" },
  { label:"Cricket Blast 2024",         icon:"⚾",  tall:false, bg:"linear-gradient(135deg,#5a2d1b,#331a0d)" },
  { label:"Training — Nets",            icon:"🌅",  tall:false, bg:"linear-gradient(135deg,#1b5a3a,#0d3321)" },
  { label:"Presentation Night 2024",    icon:"🏆",  tall:false, bg:"linear-gradient(135deg,#5a4a1b,#332a0d)" },
];
const GRID_LINES = "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.04) 39px,rgba(255,255,255,.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.04) 39px,rgba(255,255,255,.04) 40px)";

export default function GalleryMosaic() {
  return (
    <section className="py-20 px-12 bg-green-deep">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-end mb-9">
          <div>
            <div className="section-label light">Season Highlights</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-black text-white leading-[1.1]">
              Photo Gallery
            </h2>
          </div>
          <a href="/gallery" className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-gold no-underline hover:text-gold-bright transition-colors">
            View All Albums →
          </a>
        </div>

        <div className="grid rounded-lg overflow-hidden" style={{
          display:"grid",
          gridTemplateColumns:"2fr 1fr 1fr",
          gridTemplateRows:"200px 200px",
          gap:8
        }}>
          {TILES.map((t, i) => (
            <div
              key={i}
              className="relative overflow-hidden flex items-center justify-center cursor-pointer group"
              style={{ gridRow: t.tall ? "1 / 3" : undefined }}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
                style={{ background: t.bg }} />
              <div className="absolute inset-0" style={{ backgroundImage: GRID_LINES }} />
              <span className="relative z-10" style={{ fontSize: t.tall ? 52 : 36 }}>{t.icon}</span>
              <div className="absolute bottom-3.5 left-3.5 font-condensed text-[11px] font-bold tracking-[0.12em] uppercase text-white/60 z-10">
                {t.label}
              </div>
              {/* Hover gold overlay */}
              <div className="absolute inset-0 border-2 border-gold bg-gold/[0.15] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
