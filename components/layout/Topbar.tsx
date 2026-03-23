export default function Topbar() {
  return (
    <div className="bg-green-deep py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 font-sans font-medium tracking-wide gap-1 md:gap-0">
      <span className="flex items-center gap-1.5 text-center md:text-left">
        🏏 &nbsp; 16 Ivy Street, Thorneside QLD &nbsp;|&nbsp; Est. 1895
      </span>
      <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 items-center">
        <span className="flex items-center gap-1.5">
          <span className="live-dot" />
          &nbsp; Season 2025/26
        </span>
        <span className="hidden md:inline">
          <a href="https://facebook.com/wellowildcats" target="_blank" rel="noopener noreferrer"
            className="text-gold hover:text-gold-bright">📘 Facebook</a>
          &nbsp;|&nbsp;
          <a href="https://instagram.com/wellowildcats" target="_blank" rel="noopener noreferrer"
            className="text-gold hover:text-gold-bright">📷 Instagram</a>
        </span>
        <a href="mailto:president@wellowildcats.com.au"
          className="text-gold hover:text-gold-bright hidden md:inline">president@wellowildcats.com.au</a>
      </div>
    </div>
  );
}
