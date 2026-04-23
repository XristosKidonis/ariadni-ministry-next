"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",    href: "#about" },
  { label: "Messages", href: "#messages" },
  { label: "Worship",  href: "#worship" },
  { label: "Events",   href: "#events" },
  { label: "Give",     href: "#give" },
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
            width={40}
            height={40}
          />
        </a>

        {/* Desktop links */}
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
          <a
            href="#give"
            className="transition-colors"
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.25)";
            }}
          >
            Give
          </a>
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
            {[...links, { label: "Give", href: "#give" }].map((l) => (
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
