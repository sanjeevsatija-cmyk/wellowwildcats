import Link from "next/link";

const REG_URL =
  "https://www.playhq.com/cricket-australia/org/wellington-point-cricket-club/df5cb0b2/register";

const JOIN_OPTIONS = [
  { icon: "🏏", label: "Junior Cricket",     sub: "Ages 5–16 · All skill levels",    href: "/programs/junior-cricket" },
  { icon: "🦁", label: "Girls Cricket",      sub: "Welcoming, fun & competitive",     href: "/programs" },
  { icon: "🎯", label: "Senior Men",         sub: "Grades 1–4 · SENIOR",              href: "/programs/senior-cricket" },
  { icon: "🌧️", label: "Warehouse Cricket",  sub: "Winter cricket · Year-round",      href: "/programs/warehouse-cricket" },
];

export default function JoinCTA() {
  return (
    <section
      style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:460, marginTop:80 }}
    >
      {/* LEFT — dark green with text */}
      <div
        className="flex flex-col justify-center"
        style={{ background:"#142E14", padding:"80px 60px" }}
      >
        <div
          className="inline-flex items-center gap-2 mb-4"
          style={{ fontFamily:"'Raleway',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#C9A030" }}
        >
          <span style={{ display:"block", width:24, height:2, background:"#C9A030" }} />
          Get involved
        </div>

        <h2
          className="font-serif text-white mb-4"
          style={{ fontSize:"clamp(36px,4.5vw,60px)", lineHeight:0.95 }}
        >
          Ready to Join<br />
          the <em className="not-italic text-gold">Pack?</em>
        </h2>

        <p
          className="mb-8"
          style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, color:"rgba(255,255,255,0.6)", maxWidth:360, lineHeight:1.65 }}
        >
          New players welcome. Registrations open for all age groups.
          Come for a trial — no experience needed.
        </p>

        <a
          href={REG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-start btn-primary"
        >
          Register Now →
        </a>
      </div>

      {/* RIGHT — gold with diagonal cut and option list */}
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          background: "#C9A030",
          padding: "80px 60px",
          clipPath: "polygon(60px 0,100% 0,100% 100%,0 100%)",
        }}
      >
        {/* Diagonal stripe pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(20,46,20,0.05) 10px,rgba(20,46,20,0.05) 20px)" }}
        />

        {/* Options */}
        <div className="relative" style={{ zIndex:2 }}>
          {JOIN_OPTIONS.map((opt, i) => (
            <Link key={opt.href} href={opt.href} className="no-underline group">
              <div
                className="flex items-center gap-4 transition-all duration-200 group-hover:gap-5"
                style={{ padding:"15px 0", borderBottom: i < JOIN_OPTIONS.length - 1 ? "1px solid rgba(20,46,20,0.13)" : "none" }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ width:42, height:42, background:"#142E14", fontSize:18 }}
                >
                  {opt.icon}
                </div>
                {/* Text */}
                <div className="flex-1">
                  <div className="font-serif" style={{ fontSize:20, color:"#142E14" }}>{opt.label}</div>
                  <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:"rgba(20,46,20,0.6)" }}>{opt.sub}</div>
                </div>
                {/* Arrow */}
                <div style={{ color:"#142E14", fontSize:22, fontWeight:"bold" }}>›</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
