"use client";
import Image from "next/image";
import { AnimatedHeroTitle } from "@/components/ui/animated-hero";

export default function Hero() {
  return (
    <section
      style={{
        background: "var(--dark)",
        color: "var(--cream)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
          }
          .hero-left, .hero-right {
            border: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
      {/* Main grid */}
      <div
        className="hero-grid"
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "220px 1fr 320px",
          gap: 0,
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
          boxSizing: "border-box",
        }}
      >
        {/* Left: small description */}
        <div
          className="hero-left"
          style={{
            paddingRight: 40,
            borderRight: "1px solid rgba(255,255,255,0.07)",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 60,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.4)",
              marginBottom: 48,
            }}
          />
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 190,
              letterSpacing: "0.01em",
            }}
          >
            Ariadni is a worship leader
            <br />
            and minister bringing the
            <br />
            presence of God to cities
            <br />
            and nations.
          </p>
        </div>

        {/* Center: headline */}
        <div style={{ padding: "0 48px" }}>
          <AnimatedHeroTitle
            staticText="BRINGING"
            words={["HEAVEN", "HOPE", "HEALING", "GLORY", "REVIVAL"]}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(68px, 10vw, 152px)",
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "0.015em",
              textTransform: "uppercase",
              color: "var(--cream)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(68px, 10vw, 152px)",
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "0.015em",
              textTransform: "uppercase",
              color: "var(--cream)",
              marginTop: 0,
            }}
          >
            TO EARTH,
            <br />
            ONE HEART
            <br />
            AT A TIME.
          </p>
        </div>

        {/* Right: photo card */}
        <div
          className="hero-right"
          style={{
            paddingLeft: 40,
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 60,
            paddingBottom: 40,
          }}
        >
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              width: 280,
              height: 380,
              backgroundColor: "#333",
            }}
          >
            <img
              src="/ariadni/aria-02.jpg"
              alt="Ariadni — Arise Ministry"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.28)",
              marginTop: 14,
              textTransform: "uppercase",
            }}
          >
            Arise Ministry · Est. 2024
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.28)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 6,
            }}
          >
            Worship · Preaching · Ministry
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
            }}
          >
            3M+ followers across platforms
          </span>
        </div>
        <a
          href="#about"
          style={{
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(255,255,255,0.4)")
          }
        >
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}
