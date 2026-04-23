"use client";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="pt-20" style={{ background: "var(--dark)", color: "#fff" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-20 items-end pb-16">
          <div>
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              WHAT WE DO
            </span>
            <h2
              className="uppercase text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(40px,5.5vw,88px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                marginTop: 12,
              }}
            >
              SEE HOW GOD IS MOVING THROUGH ARISE.
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.75] mb-9"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We create worship experiences, preach the Word, and build
              community across cities and nations. Join a growing family of
              believers hungry for more of God.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 text-black transition-colors"
              style={{ background: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--cream)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#fff")}
            >
              EXPLORE OUR MINISTRY →
            </a>
          </div>
        </div>

        <div className="h-[420px] overflow-hidden">
          <Image
            src="/ariadni/rc2.jpg"
            alt="Ariadni ministry moment"
            width={1400}
            height={420}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
