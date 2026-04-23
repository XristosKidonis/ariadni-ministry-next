"use client";
import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { RevealText } from "@/components/ui/reveal-text";

const episodes = [
  {
    num: "01",
    tag: "EPISODE 1",
    title: "WHEN GOD FEELS SILENT",
    date: "April 6, 2026",
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&q=80",
  },
  {
    num: "02",
    tag: "EPISODE 2",
    title: "THE ANCHOR HOLDS",
    date: "April 13, 2026",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80",
  },
  {
    num: "03",
    tag: "EPISODE 3",
    title: "RUNNING YOUR RACE",
    date: "April 20, 2026",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  },
];

export default function Messages() {
  return (
    <section id="messages" className="py-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Header */}
        <div
          className="flex justify-between items-end border-b pb-8 mb-9"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3"
              style={{ color: "var(--muted)" }}
            >
              NEW SERIES
            </span>
            <RevealText
              as="h2"
              text="UNSHAKEABLE: FAITH IN UNCERTAIN TIMES"
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
            href="#messages"
            className="text-[11px] font-semibold tracking-[0.12em] uppercase border-b border-current pb-0.5 self-end transition-opacity hover:opacity-50 whitespace-nowrap"
          >
            SEE ALL MESSAGES →
          </a>
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
          <p
            className="text-[15px] leading-[1.75] max-w-[480px]"
            style={{ color: "var(--muted)" }}
          >
            Join Ariadni each week as she unpacks what it means to walk by
            faith and not by sight. A 6-part series drawing from the book of
            Hebrews — raw, honest, and full of hope.
          </p>
          <a
            href="#messages"
            className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 text-white transition-colors whitespace-nowrap"
            style={{ background: "var(--black)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--dark-2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--black)")}
          >
            WATCH THE SERIES →
          </a>
        </div>

        {/* Episode cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((ep, i) => (
            <FadeUp key={ep.num} delay={i * 0.1}>
            <div className="group cursor-pointer">
              <div
                className="font-black leading-none mb-[-20px] relative z-0 select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 80,
                  color: "var(--border)",
                }}
              >
                {ep.num}
              </div>
              <div className="relative z-10 overflow-hidden aspect-[4/3]">
                <Image
                  src={ep.img}
                  alt={ep.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4">
                <span
                  className="text-[10px] font-semibold tracking-[0.14em] uppercase block mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  {ep.tag}
                </span>
                <h4
                  className="uppercase mb-1.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: 1.1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {ep.title}
                </h4>
                <p className="text-[12px]" style={{ color: "var(--muted)", letterSpacing: "0.05em" }}>
                  {ep.date}
                </p>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
