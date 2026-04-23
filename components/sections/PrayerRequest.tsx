"use client";
import { useState } from "react";

export default function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayer: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", prayer: "" });
    }, 3000);
  };

  return (
    <section
      id="prayer"
      className="py-20 border-t"
      style={{ background: "var(--dark)", color: "var(--cream)", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[800px] mx-auto px-10">
        <div className="mb-12">
          <span
            className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            PRAYER SUPPORT
          </span>
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(36px,5vw,64px)",
              lineHeight: 0.97,
              letterSpacing: "0.02em",
            }}
          >
            PRAYER REQUESTS
          </h2>
          <p
            className="text-[15px] leading-[1.75] mt-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Share your prayer request with us. Our prayer team will intercede
            for you and cover your needs before God&apos;s throne.
          </p>
        </div>

        {submitted ? (
          <div
            className="p-8 text-center"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
            }}
          >
            <p
              className="text-[18px] font-semibold mb-2"
              style={{ color: "var(--cream)" }}
            >
              Thank you for your prayer request.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>
              We will lift your request up in prayer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b text-white"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="Your name"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Email (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b text-white"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
              </div>

              {/* Prayer Request */}
              <div>
                <label
                  htmlFor="prayer"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Prayer Request *
                </label>
                <textarea
                  id="prayer"
                  name="prayer"
                  value={formData.prayer}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border text-white resize-none"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="Share your prayer request..."
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-8 py-3 text-black transition-colors"
                  style={{ background: "var(--cream)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "var(--cream-2)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "var(--cream)")
                  }
                >
                  SUBMIT PRAYER REQUEST →
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
