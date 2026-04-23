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
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.025]"
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
          WHO WE ARE
        </span>
        <RevealText
          as="h2"
          text="EVERY PERSON DESERVES TO ENCOUNTER THE LIVING GOD."
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
          className="text-[15px] leading-[1.75] mb-11 max-w-[420px]"
          style={{ color: "var(--muted)" }}
        >
          We are a team of worshippers, intercessors, and communicators. We
          believe transformation happens when people step into God&apos;s presence
          — not just in church, but in every area of life. Arise exists to
          create those encounters.
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
