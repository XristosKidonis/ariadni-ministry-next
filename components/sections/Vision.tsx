"use client";

const visions = [
  {
    title: "Encountering Jesus Intimately",
    description: "To lead people into authentic, life-changing encounters with the presence of God where hearts are transformed and identity is restored in Christ.",
  },
  {
    title: "Igniting Revival Fire",
    description: "To awaken a spiritual hunger in individuals and communities that produces ongoing revival, prayer, worship, and repentance.",
  },
  {
    title: "Equipping Believers for Ministry",
    description: "To train and activate believers to operate in their spiritual gifts, boldly share the Gospel, and walk in the power of the Holy Spirit.",
  },
  {
    title: "Raising a Generation of Purity and Purpose",
    description: "To see a generation set apart—living in holiness, rooted in the Word, and committed to God's calling without compromise.",
  },
  {
    title: "Impacting Nations Through the Gospel",
    description: "To take the message of Jesus Christ beyond the church walls through missions, media, worship, and evangelism, transforming cultures globally.",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16">
          <span
            className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-4"
            style={{ color: "var(--muted)" }}
          >
            OUR PURPOSE
          </span>
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(36px,5vw,56px)",
              letterSpacing: "0.03em",
              marginBottom: 40,
            }}
          >
            OUR VISION
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {visions.map((vision, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  marginBottom: 16,
                }}
              />
              <h3
                className="uppercase mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 20,
                  letterSpacing: "0.02em",
                }}
              >
                {vision.title}
              </h3>
              <p
                className="text-[15px] leading-[1.75]"
                style={{ color: "var(--muted)" }}
              >
                {vision.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-16 border-t text-center"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-[15px] leading-[1.75] mb-8"
            style={{ color: "var(--muted)", maxWidth: 600, margin: "0 auto 32px" }}
          >
            Join us in this movement. Whether through worship, prayer, giving, or service, there's a place for you in what God is doing through Arise.
          </p>
          <a
            href="#give"
            className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3"
            style={{
              background: "var(--accent)",
              color: "#fff",
              transition: "opacity 0.3s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            PARTNER WITH US →
          </a>
        </div>
      </div>
    </section>
  );
}
