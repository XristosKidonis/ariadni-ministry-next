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
          ABOUT THE FOUNDER
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
          className="text-[15px] leading-[1.75] mb-6"
          style={{ color: "var(--muted)" }}
        >
          Ariadni Kidonis (known as ARIA) is a speaker, preacher, worship leader, and social media evangelist passionate about leading people into a deeper relationship with Jesus Christ. Originally based in Los Angeles and now residing in Texas, she is actively engaged in ministry through preaching, worship, and digital evangelism. She also travels nationally and internationally to minister at churches, conferences, and events, sharing the Gospel across diverse communities.
        </p>
        <p
          className="text-[15px] leading-[1.75] mb-6"
          style={{ color: "var(--muted)" }}
        >
          Before stepping fully into ministry, Ariadni built a multifaceted career in the music industry as an artist, DJ, producer, songwriter, and audio engineer. She is a voting member of both The Recording Academy (Grammys) and the Latin Recording Academy (Latin Grammys), and has contributed to major film and television productions including Love Is Blind, Sweet Magnolias, Dubai Bling, Deep Fake Love, Love Island, and more, with credits spanning platforms such as Netflix, HBO, FOX, Nickelodeon, Disney, MTV, LionsGate and Paramount.
        </p>
        <p
          className="text-[15px] leading-[1.75] mb-11"
          style={{ color: "var(--muted)" }}
        >
          She has collaborated with a wide range of artists and achieved global chart success, including placements on Billboard R&B charts, iTunes R&B and all-genre charts, as well as international #1 rankings. She ministers in both English and Spanish, reaching a broad and diverse audience with the message of Christ. Through her preaching, music, and online presence, Ariadni communicates the Gospel in a way that is both powerful and relatable, helping people encounter God personally and walk confidently in their identity in Christ.
        </p>
        <style>{`
          .btn-meet-ariadni {
            border: 1.5px solid var(--text);
            color: var(--text);
            background: transparent;
            transition: all 0.3s;
          }
          .btn-meet-ariadni:hover {
            background: var(--text);
            color: #fff;
          }
        `}</style>
        <a
          href="#about"
          className="btn-meet-ariadni inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 self-start"
        >
          MEET ARIADNI →
        </a>
      </div>
    </section>
  );
}
