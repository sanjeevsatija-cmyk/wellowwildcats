export default function Topbar() {
  return (
    <div className="bg-green-deep py-2 px-10 flex justify-between items-center text-xs text-white/70 font-sans font-medium tracking-wide">
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
        <span>
          <a href="mailto:president@wellowildcats.com.au"
            className="text-gold hover:text-gold-bright">president@wellowildcats.com.au</a>
        </span>
      </div>
    </div>
  );
}
