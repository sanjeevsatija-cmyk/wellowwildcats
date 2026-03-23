const ITEMS = [
  { emoji:"🏟️", label:"Match Day" },
  { emoji:"⭐",  label:"Juniors" },
  { emoji:"🏆",  label:"Presentations" },
  { emoji:"🌅",  label:"Training" },
  { emoji:"🏏",  label:"1sts Action" },
  { emoji:"🎉",  label:"Celebrations" },
];

export default function GalleryMosaic() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 bg-green-deep">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-3">
          <div>
            <div className="section-label" style={{ color:"rgba(201,160,48,0.8)" }}>Moments</div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-black text-white leading-[1.1]">
              Photo Gallery
            </h2>
          </div>
          <a href="/gallery" className="font-condensed text-xs font-bold tracking-[0.1em] uppercase text-gold no-underline border border-gold/40 px-4 py-2 rounded hover:border-gold transition-all whitespace-nowrap">
            View All Photos →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {ITEMS.map((item) => (
            <div key={item.label}
              className="relative rounded-lg overflow-hidden cursor-pointer group border border-white/10 hover:border-gold transition-all duration-300 aspect-square md:aspect-video flex items-center justify-center"
              style={{ background:"linear-gradient(135deg,#1D4A1D,#142E14)" }}>
              <span className="text-[40px] md:text-[52px] group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
              <div className="absolute inset-0 bg-gold/20 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-white">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
