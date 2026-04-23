"use client";
import Image from "next/image";

export default function Give() {
  return (
    <section
      id="give"
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-4"
              style={{ color: "var(--muted)" }}
            >
              SUPPORT THE MINISTRY
            </span>
            <h2
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(36px,5vw,72px)",
                lineHeight: 0.97,
                letterSpacing: "0.02em",
              }}
            >
              YOUR GENEROSITY MAKES THIS POSSIBLE.
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-10"
              style={{ color: "var(--muted)" }}
            >
              Every gift enables Ariadni to travel, produce worship content,
              and reach more people with the Gospel. 100% of donations go
              directly to ministry operations.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 transition-colors"
                style={{ background: "var(--accent)", color: "#fff" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                DONATE VIA PAYPAL →
              </a>
              <button
                className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 transition-colors border-2"
                style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "transparent" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--accent)", (e.currentTarget as HTMLButtonElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent", (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)")}
                onClick={() => alert("Zelle: Contact ariadni@arise.ministry or ask for details")}
              >
                ZELLE
              </button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src="/ariadni/rc3.jpg"
              alt="Ariadni ministry"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
