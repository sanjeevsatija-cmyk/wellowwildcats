export default function ComingSoon() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#142E14",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img src="/logo.svg" alt="Wello Wildcats" style={{ width: 100, marginBottom: "1.5rem", opacity: 0.9 }} />
      <h1 style={{ color: "#C9A030", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, margin: "0 0 1rem" }}>
        Coming Soon
      </h1>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 400, lineHeight: 1.7 }}>
        The new Wellington Point Cricket Club website is under construction.
        Check back soon.
      </p>
      <p style={{ marginTop: "2rem", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
        Est. 1895 · Wello Wildcats
      </p>
    </main>
  );
}
