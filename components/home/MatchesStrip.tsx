const TICKER_ITEMS = [
  "🏏 Wello 1st XI vs Ormiston CC — This Saturday 11am",
  "⭐ U14 Boys — Top of the table!",
  "🦁 Girls team tryouts — Register your interest now",
  "🏆 Junior Carnival — 3rd April · Wellington Point Oval",
  "🎯 Senior registrations OPEN for 2025/26 season",
  "📍 Home ground: 16 Ivy Street, Thorneside QLD",
];

export default function MatchesStrip() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "#1D4A1D", borderTop: "2px solid #C9A030", padding: "10px 0" }}
    >
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* "News" label */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center z-10"
        style={{
          background: "#C9A030",
          color: "#142E14",
          fontFamily: "'Raleway',sans-serif",
          fontSize: 9,
          fontWeight: 800,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          padding: "0 16px",
        }}
      >
        🏏 News
      </div>

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          gap: 56,
          paddingLeft: 140,
          whiteSpace: "nowrap",
          animation: "tickerScroll 28s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Raleway',sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: "#C9A030", fontSize: 14 }}>·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
