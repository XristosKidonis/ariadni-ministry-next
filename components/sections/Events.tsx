"use client";

const events = [
  {
    month: "MAY", day: "10",
    tag: "WORSHIP NIGHT",
    title: "ARISE WORSHIP NIGHT NYC",
    location: "Brooklyn Tabernacle · New York City",
    cta: "REGISTER →",
  },
  {
    month: "JUN", day: "7",
    tag: "CONFERENCE",
    title: "ENCOUNTER WEEKEND RETREAT",
    location: "Hillsong Church · Los Angeles, CA",
    cta: "REGISTER →",
  },
  {
    month: "JUL", day: "19",
    tag: "ONLINE",
    title: "GLOBAL PRAYER & WORSHIP STREAM",
    location: "YouTube Live · All timezones welcome",
    cta: "JOIN ONLINE →",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <h2
          className="uppercase mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(36px,5vw,56px)",
            letterSpacing: "0.03em",
          }}
        >
          UPCOMING EVENTS
        </h2>

        <div>
          {events.map((ev, i) => (
            <div
              key={i}
              className="grid items-center gap-8 py-7 border-b transition-all duration-200 hover:bg-[var(--cream)] hover:px-5 hover:-mx-5 cursor-pointer"
              style={{
                gridTemplateColumns: "90px 1fr auto",
                borderColor: "var(--border)",
                borderTop: i === 0 ? "1px solid var(--border)" : undefined,
              }}
            >
              <div className="flex flex-col items-center">
                <span
                  className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {ev.month}
                </span>
                <span
                  className="leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, letterSpacing: "0.02em" }}
                >
                  {ev.day}
                </span>
              </div>

              <div>
                <span
                  className="text-[10px] font-semibold tracking-[0.14em] uppercase block mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  {ev.tag}
                </span>
                <h4
                  className="uppercase mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, letterSpacing: "0.03em" }}
                >
                  {ev.title}
                </h4>
                <p className="text-[13px]" style={{ color: "var(--muted)" }}>
                  {ev.location}
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 border-[1.5px] transition-colors whitespace-nowrap"
                style={{ borderColor: "var(--text)", color: "var(--text)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--text)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                }}
              >
                {ev.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
