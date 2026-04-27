export default function SocialProofBand() {
  return (
    <section
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 20,
          }}
        >
          Global Reach
        </p>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(88px, 18vw, 200px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          3M<span style={{ color: "var(--accent)" }}>+</span>
        </div>
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginTop: 24,
          }}
        >
          Followers Combined Across Platforms
        </p>
      </div>
    </section>
  );
}
