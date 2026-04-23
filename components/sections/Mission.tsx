"use client";
import Image from "next/image";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeUp } from "@/components/ui/fade-up";

export default function Mission() {
  return (
    <section id="about" className="grid md:grid-cols-2 min-h-[600px]">
      <div className="overflow-hidden min-h-[300px] md:min-h-0">
        <Image
          src="/ariadni/aria-preaching.jpg"
          alt="Ariadni ministry moment"
          width={900}
          height={700}
          className="w-full h-full transition-transform duration-700 hover:scale-[1.025]"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ background: "#fff" }}
      >
        <span
          className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-6"
          style={{ color: "var(--muted)" }}
        >
          ABOUT ARIADNI
        </span>
        <RevealText
          as="h2"
          text="SPEAKER, PREACHER, WORSHIP LEADER"
          className="uppercase mb-7"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(32px,4vw,56px)",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
          }}
        />
        <p
          className="text-[15px] leading-[1.75] mb-8"
          style={{ color: "var(--muted)" }}
        >
          Ariadni Kidonis (Aria) is a speaker, preacher, worship leader, and content creator passionate about leading people into a deeper relationship with Jesus. Originally based in Los Angeles and now in Texas, she is actively involved in ministry through preaching, worship, and social media evangelism.
        </p>
        <p
          className="text-[15px] leading-[1.75] mb-11"
          style={{ color: "var(--muted)" }}
        >
          She preaches in both English and Spanish, reaching diverse audiences with the Gospel message. Through her music, teaching, and online presence, Ariadni shares the Gospel in a way that is both powerful and relatable, helping people encounter God personally and walk in their identity in Christ.
        </p>
        <a
          href="#about"
          className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 border-[1.5px] transition-colors self-start"
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
          MEET ARIADNI →
        </a>
      </div>
    </section>
  );
}
