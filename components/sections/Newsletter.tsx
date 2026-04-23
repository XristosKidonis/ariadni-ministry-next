"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2
              className="font-black uppercase mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px,7vw,88px)",
                lineHeight: 0.92,
              }}
            >
              STAY<br />CONNECTED
            </h2>
            <p className="text-[15px] leading-[1.75]" style={{ color: "var(--muted)" }}>
              Get the latest sermons, worship releases, and event
              announcements delivered straight to your inbox.
            </p>
          </div>

          <div>
            {submitted ? (
              <p className="text-[15px] font-medium">
                ✓ You&apos;re in! Check <strong>{email}</strong> for a welcome email.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3.5 text-[14px] outline-none bg-transparent border-[1.5px] sm:border-r-0 focus:border-[var(--accent)] transition-colors"
                  style={{ borderColor: "var(--text)", fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white transition-colors whitespace-nowrap"
                  style={{ background: "var(--black)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#2A2920")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--black)")}
                >
                  SUBSCRIBE →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
