"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function InviteAriadni() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    eventDate: "",
    location: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in required fields");
      return;
    }

    try {
      const response = await fetch("/api/event-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          organization: "",
          eventType: "",
          eventDate: "",
          location: "",
          details: "",
        });
        setShowForm(false);
      }
    } catch (error) {
      alert("Error submitting inquiry");
    }
  };

  return (
    <section
      id="invite"
      className="py-20 border-t border-b"
      style={{ borderColor: "var(--border)", background: "var(--cream)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(36px,5vw,56px)",
                letterSpacing: "0.03em",
              }}
            >
              INVITE ARIADNI TO YOUR NEXT EVENT
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-8"
              style={{ color: "var(--muted)" }}
            >
              Ariadni travels nationally and internationally to minister at
              churches, conferences, and special events. Whether you need a
              worship leader, speaker, or prayer-focused ministry experience,
              we'd love to hear from you.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 transition-opacity"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              SEND INQUIRY →
            </button>
          </div>

          <div>
            <div
              style={{
                padding: "40px 44px",
                background: "linear-gradient(135deg, #fff 0%, #fdf8f4 100%)",
                borderRadius: 12,
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 24,
                }}
              >
                HOW WE MINISTER
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Worship Leading & Anointed Music",
                  "Preaching & Spirit-Led Teaching",
                  "Prayer & Intercession Ministry",
                  "Prophetic & Healing Ministry",
                  "Mentoring & Discipleship",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      paddingBottom: i < 4 ? 16 : 0,
                      borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.06)" : "none",
                      marginBottom: i < 4 ? 16 : 0,
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: 18, flexShrink: 0 }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "20px",
          }}
          onClick={() => setShowForm(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              width: "100%",
              maxWidth: 600,
              maxHeight: "90vh",
              overflow: "auto",
              padding: "40px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Event Inquiry
              </h3>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "var(--muted)",
                }}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Church / Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Type of Event
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="">Select...</option>
                  <option value="church-service">Church Service</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="special-event">Special Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State / Country"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "var(--muted)",
                  }}
                >
                  Additional Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, expectations, budget, etc."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  padding: "14px 24px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: 8,
                  cursor: "pointer",
                  marginTop: 12,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
