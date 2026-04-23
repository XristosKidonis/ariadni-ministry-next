"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayer: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/prayer-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit prayer request");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", prayer: "" });
      }, 4000);
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      alert("Failed to submit prayer request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="prayer"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--dark) 0%, #2A2920 100%)" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(193, 122, 53, 0.1)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[900px] mx-auto px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={24} style={{ color: "var(--accent)" }} />
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              PRAYER SUPPORT
            </span>
            <Heart size={24} style={{ color: "var(--accent)" }} />
          </div>
          <h2
            className="uppercase mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(40px,6vw,72px)",
              lineHeight: 0.97,
              letterSpacing: "0.02em",
              color: "var(--cream)",
            }}
          >
            PRAYER REQUESTS
          </h2>
          <p
            className="text-[16px] leading-[1.8] max-w-[600px] mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Share your prayer request with us. Our prayer team intercedes for you daily, believing God for His blessing and breakthrough in your life.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div
            className="p-12 text-center rounded-lg"
            style={{
              border: "2px solid var(--accent)",
              background: "rgba(193, 122, 53, 0.1)",
            }}
          >
            <div className="mb-4 flex justify-center">
              <Heart size={48} style={{ color: "var(--accent)" }} />
            </div>
            <p
              className="text-[20px] font-semibold mb-3"
              style={{ color: "var(--cream)" }}
            >
              Thank you for sharing your request.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              We are lifting your prayer request to the throne of God.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] font-semibold tracking-[0.12em] uppercase mb-3"
                  style={{ color: "var(--cream)" }}
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
                  className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="Your name"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
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
                  className="block text-[12px] font-semibold tracking-[0.12em] uppercase mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  Email (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
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
                  className="block text-[12px] font-semibold tracking-[0.12em] uppercase mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  Your Prayer Request *
                </label>
                <textarea
                  id="prayer"
                  name="prayer"
                  value={formData.prayer}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-2 text-white resize-none placeholder-gray-400 rounded-lg"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "var(--cream)",
                  }}
                  placeholder="Share what's on your heart..."
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase px-10 py-4 transition-all duration-300"
                  style={{
                    background: loading ? "rgba(193, 122, 53, 0.5)" : "var(--accent)",
                    color: "#fff",
                    borderRadius: 4,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "scale(1)";
                  }}
                >
                  <Heart size={16} />
                  {loading ? "SUBMITTING..." : "SUBMIT REQUEST"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
