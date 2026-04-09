import { client } from "@/lib/sanity.client";
import { TICKER_QUERY } from "@/lib/sanity.queries";

// ─── Fallback items (shown if Sanity has no ticker items yet) ─────────────────
const FALLBACK_ITEMS = [
  "🏏 Senior registrations open for 2025/26 season",
  "⭐ Junior cricket — all ages and skill levels welcome",
  "🦁 Girls cricket — welcoming, fun and competitive",
  "🏆 Warehouse Cricket — winter competition now underway",
  "🎯 Cricket Blast — for kids aged 5 to 8",
  "📍 Home ground: 16 Ivy Street, Thorneside QLD",
];

interface TickerItem {
  _id: string;
  text: string;
  emoji?: string;
}

export default async function MatchesStrip() {
  let items: string[] = [];

  try {
    const sanityItems: TickerItem[] = await client.fetch(TICKER_QUERY);
    if (sanityItems.length > 0) {
      items = sanityItems.map((item) =>
        item.emoji ? `${item.emoji} ${item.text}` : item.text
      );
    }
  } catch {
    // Fail silently — fallback handles it
  }

  if (items.length === 0) {
    items = FALLBACK_ITEMS;
  }

  // Double the items so the scroll loops seamlessly
  const doubled = [...items, ...items];

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
