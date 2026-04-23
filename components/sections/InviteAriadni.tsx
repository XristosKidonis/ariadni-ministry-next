"use client";

export default function InviteAriadni() {
  const handleInvite = () => {
    const subject = encodeURIComponent("Invitation to Minister at Our Event");
    const body = encodeURIComponent(
      "Hello Ariadni,\n\nWe would like to invite you to minister at our upcoming event...\n\n"
    );
    window.location.href = `mailto:Freshfirerevivalministriesinc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="py-20 border-t border-b"
      style={{ borderColor: "var(--border)", background: "var(--cream)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(36px,5vw,56px)",
                letterSpacing: "0.03em",
              }}
            >
              INVITE ARIADNI TO YOUR NEXT EVENT
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-8"
              style={{ color: "var(--muted)" }}
            >
              Ariadni travels nationally and internationally to minister at churches, conferences, and special events. Whether you need a worship leader, speaker, or prayer-focused ministry experience, we'd love to hear from you.
            </p>
            <button
              onClick={handleInvite}
              className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 transition-opacity"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              SEND INQUIRY →
            </button>
          </div>

          <div>
            <div
              style={{
                padding: 40,
                background: "#fff",
                borderRadius: 10,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                WHAT WE OFFER
              </span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "var(--muted)",
                }}
              >
                <li style={{ marginBottom: 12 }}>✓ Worship Leading & Music</li>
                <li style={{ marginBottom: 12 }}>✓ Preaching & Bible Teaching</li>
                <li style={{ marginBottom: 12 }}>✓ Prayer & Intercession</li>
                <li style={{ marginBottom: 12 }}>✓ Prophetic Ministry</li>
                <li style={{ marginBottom: 0 }}>✓ Spiritual Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
