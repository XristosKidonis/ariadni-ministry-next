"use client";
import { RevealText } from "@/components/ui/reveal-text";

const sermons = [
  {
    title: "Sermon 1",
    youtubeId: "lX6Rim1m688",
  },
  {
    title: "Sermon 2",
    youtubeId: "lTyHkJpz5zw",
  },
];

export default function Messages() {
  return (
    <section id="messages" className="py-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Header */}
        <div
          className="flex justify-between items-end border-b pb-8 mb-12"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3"
              style={{ color: "var(--muted)" }}
            >
              HEAR FROM ARIADNI
            </span>
            <RevealText
              as="h2"
              text="SERMONS & MESSAGES"
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(40px,6vw,84px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            />
          </div>
          <a
            href="https://www.youtube.com/@AriadniKspOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.12em] uppercase border-b border-current pb-0.5 self-end transition-opacity hover:opacity-50 whitespace-nowrap"
          >
            MORE ON YOUTUBE →
          </a>
        </div>

        {/* Description */}
        <p
          className="text-[15px] leading-[1.75] max-w-[600px] mb-14"
          style={{ color: "var(--muted)" }}
        >
          Watch as Ariadni shares God&apos;s Word through powerful preaching and teaching.
          Each message is designed to draw you closer to Jesus and help you discover your
          identity in Christ.
        </p>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sermons.map((sermon) => (
            <div
              key={sermon.youtubeId}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ background: "#000" }}
            >
              <div className="relative w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                  title={sermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6" style={{ background: "var(--text)" }}>
                <h3
                  className="text-[16px] font-semibold uppercase"
                  style={{ color: "#fff", letterSpacing: "0.05em" }}
                >
                  {sermon.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 8, fontSize: 14 }}>
                  Watch on YouTube
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-[14px] mb-6"
            style={{ color: "var(--muted)" }}
          >
            Subscribe to Ariadni&apos;s YouTube channel for new sermons, worship sessions, and more
          </p>
          <a
            href="https://www.youtube.com/@AriadniKspOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-8 py-3 text-white transition-opacity"
            style={{ background: "var(--accent)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            SUBSCRIBE ON YOUTUBE →
          </a>
        </div>
      </div>
    </section>
  );
}
