"use client";
import React from "react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
  separator?: string;
}

export function Marquee({
  items,
  speed = 40,
  reverse = false,
  className = "",
  style,
  separator = "·",
}: MarqueeProps) {
  const duration = `${speed}s`;

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", ...style }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            {items.map((item, j) => (
              <span key={j} className="flex items-center gap-6 mx-6">
                <span>{item}</span>
                <span style={{ opacity: 0.4 }}>{separator}</span>
              </span>
            ))}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
