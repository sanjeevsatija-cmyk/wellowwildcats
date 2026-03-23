export default function Topbar() {
  return (
    <div className="bg-green-deep overflow-hidden">
      {/* Mobile — single clean line */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 text-[11px] text-white/70 font-sans font-medium">
        <span className="flex items-center gap-1.5 truncate">
          📍 &nbsp;16 Ivy St, Thorneside &nbsp;|&nbsp; Est. 1895
        </span>
        <span className="flex items-center gap-1.5 flex-shrink-0 ml-3">
          <span className="live-dot" />
          <span className="text-white/70">2025/26</span>
        </span>
      </div>

      {/* Desktop — full topbar */}
      <div className="hidden md:flex items-center justify-between px-10 py-2 text-xs text-white/70 font-sans font-medium tracking-wide">
        <span className="flex items-center gap-1.5">
          🏏 &nbsp; 16 Ivy Street, Thorneside QLD &nbsp;|&nbsp; QSDCA Competition &nbsp;|&nbsp; Est. 1895
        </span>
        <div className="flex gap-5 items-center">
          <span className="flex items-center gap-1.5">
            <span className="live-dot" />
            &nbsp; Season 2025/26 in progress
          </span>
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
