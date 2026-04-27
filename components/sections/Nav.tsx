"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",           href: "#about" },
  { label: "Messages",        href: "#messages" },
  { label: "Worship",         href: "#worship" },
  { label: "Prayer Requests", href: "#prayer" },
  { label: "Give",            href: "#give" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ariadniksp/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/AriadniKspOfficial/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AriadniKspOfficial",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ariaksp",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z"/></svg>
    ),
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-10 border-b"
        style={{
          background: "var(--dark)",
          height: 60,
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Image
            src="/logo-white.png"
            alt="Fresh Fire Revival Ministries"
            width={120}
            height={120}
            style={{ maxHeight: "100%", width: "auto" }}
          />
        </a>

        {/* Desktop links + social icons */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {l.label}
            </a>
          ))}
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.12)" }} />
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "var(--dark)" }}
        >
          <button
            className="absolute top-5 right-6 transition-opacity"
            style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#fff")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.5)")
            }
          >
            <X size={22} />
          </button>
          <nav className="flex flex-col items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 52,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--cream)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--cream)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
