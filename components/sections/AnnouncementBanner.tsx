"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="relative z-50 flex items-center justify-center gap-3 px-12 h-10 text-[12px] tracking-wide"
      style={{ background: "var(--dark)", color: "var(--cream)" }}
    >
      <span>
        ✦ Fresh Fire Revival Ministries —{" "}
        <a href="https://www.youtube.com/@AriadniKspOfficial" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: "var(--accent)" }}>
          Watch on YouTube →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-5 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Close"
      >
        <X size={13} />
      </button>
    </div>
  );
}
