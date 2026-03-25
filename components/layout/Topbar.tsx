export default function Topbar() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=16+Ivy+Street+Thorneside+QLD+4158";

  return (
    <div className="bg-green-deep overflow-hidden">
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 text-[11px] text-white/70 font-sans font-medium">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 truncate text-white/70 no-underline hover:text-gold transition-colors">
          📍 &nbsp;16 Ivy St, Thorneside
        </a>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-10 py-2 text-xs text-white/70 font-sans font-medium tracking-wide">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/70 no-underline hover:text-gold transition-colors">
          📍 &nbsp; 16 Ivy Street, Thorneside QLD 4158
        </a>
        <div className="flex gap-5 items-center">
          <span>
            <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright">📘 Facebook</a>
            &nbsp;|&nbsp;
            <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright">📷 Instagram</a>
          </span>
          <a href="mailto:president@wellowildcats.com.au"
            className="text-gold hover:text-gold-bright">president@wellowildcats.com.au</a>
        </div>
      </div>
    </div>
  );
}
