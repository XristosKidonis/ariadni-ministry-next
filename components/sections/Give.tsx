"use client";
import Image from "next/image";
import { useState } from "react";

const DONATION_EMAIL = "Freshfirerevivalministriesinc@gmail.com";
const ZELLE_EMAIL = "Freshfirerevivalministriesinc@gmail.com";

export default function Give() {
  const [showZelleInfo, setShowZelleInfo] = useState(false);

  return (
    <>
      <style>{`
        .btn-paypal {
          background: var(--accent);
          color: #fff;
          transition: opacity 0.3s;
        }
        .btn-paypal:hover {
          opacity: 0.8;
        }
        .btn-zelle {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
          transition: all 0.3s;
        }
        .btn-zelle:hover {
          background: var(--accent);
          color: #fff;
        }
      `}</style>

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
              <div className="flex gap-4 pt-2 flex-wrap">
                <a
                  href={`https://www.paypal.com/donate?hosted_button_id=EXAMPLE&email=${DONATION_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-paypal inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3"
                >
                  DONATE VIA PAYPAL →
                </a>
                <button
                  className="btn-zelle inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3"
                  onClick={() => setShowZelleInfo(!showZelleInfo)}
                >
                  ZELLE
                </button>
              </div>
              {showZelleInfo && (
                <div
                  className="mt-4 p-4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                  }}
                >
                  <p
                    className="text-[13px] mb-3"
                    style={{ color: "var(--muted)" }}
                  >
                    <strong>Send Zelle transfer to:</strong>
                  </p>
                  <p
                    className="text-[14px] font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {ZELLE_EMAIL}
                  </p>
                  <p
                    className="text-[12px] mt-3"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Please include a note: "Donation to Fresh Fire Revival Ministries"
                  </p>
                </div>
              )}
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
    </>
  );
}
