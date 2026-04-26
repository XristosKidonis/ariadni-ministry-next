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
            gap: 32px !important;
            padding: 32px 20px 24px !important;
            min-height: unset !important;
          }
          .hero-text, .hero-image {
            border: none !important;
            padding: 0 !important;
          }
          .hero-image-container {
            height: 420px !important;
            max-width: 100% !important;
          }
          .hero-image-container img {
            object-position: center 15% !important;
          }
          .hero-bottom-bar {
            padding: 14px 20px !important;
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
          padding: "60px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: 60,
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Headline + description */}
        <div
          className="hero-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 0,
            maxWidth: 600,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              marginBottom: 32,
            }}
          />
          <div
            style={{
              maxWidth: 500,
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 1.1,
            }}
          >
            <AnimatedHeroTitle
              staticText="BRINGING"
              words={["HEAVEN", "HOPE", "HEALING", "GLORY", "REVIVAL"]}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                letterSpacing: "0.015em",
                textTransform: "uppercase",
                color: "var(--cream)",
                display: "inline",
                whiteSpace: "nowrap",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "0.015em",
              textTransform: "uppercase",
              color: "var(--cream)",
              margin: "24px 0 40px 0",
              maxWidth: 500,
            }}
          >
            TO EARTH,
            <br />
            ONE HEART AT A TIME.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 420,
              letterSpacing: "0.01em",
              margin: 0,
            }}
          >
            Ariadni is a worship leader and minister bringing the presence of
            God to cities and nations through worship, preaching, and prophetic
            ministry.
          </p>
        </div>

        {/* Right: Large impactful photo */}
        <div
          className="hero-image"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div
            className="hero-image-container"
            style={{
              borderRadius: 20,
              overflow: "hidden",
              width: "100%",
              maxWidth: 600,
              height: 720,
              position: "relative",
              boxShadow: "-60px 60px 120px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/ariadni/aria-02.jpg"
              alt="Ariadni Kidonis — Fresh Fire Revival Ministries"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.25)",
                pointerEvents: "none",
              }}
            />
            {/* Vignette blend */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.28)",
              marginTop: 20,
              textTransform: "uppercase",
              margin: "20px 0 0 0",
            }}
          >
            Fresh Fire Revival Ministries
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="hero-bottom-bar"
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
