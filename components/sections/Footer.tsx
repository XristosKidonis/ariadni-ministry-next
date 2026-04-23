"use client";

const SocialIcons = {
  instagram: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  ),
  youtube: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  ),
  spotify: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
  ),
};

const cols = [
  {
    title: "MINISTRY",
    links: [
      { label: "About Ariadni", href: "#about" },
      { label: "Messages",      href: "#messages" },
      { label: "Worship",       href: "#worship" },
      { label: "Events",        href: "#events" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Podcast",      href: "#" },
      { label: "Devotionals",  href: "#" },
      { label: "Prayer Wall",  href: "#" },
      { label: "Blog",         href: "#" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Give",         href: "#give" },
      { label: "Contact",      href: "#" },
      { label: "Booking",      href: "#" },
      { label: "Newsletter",   href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10" style={{ background: "var(--dark)", color: "#fff" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Top */}
        <div
          className="grid md:grid-cols-[280px_1fr] gap-20 pb-16 mb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div>
            <div
              className="tracking-[0.14em] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28 }}
            >
              ARISE
            </div>
            <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Bringing heaven to earth,<br />one heart at a time.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: SocialIcons.instagram, label: "Instagram" },
                { icon: SocialIcons.youtube,   label: "YouTube" },
                { icon: SocialIcons.spotify,   label: "Spotify" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="transition-colors"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h5
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-[14px] mb-3 transition-colors"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row justify-between gap-2 text-[11px] tracking-[0.05em]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <p>© 2026 Arise Ministry. All rights reserved.</p>
          <p>Made with love &amp; faith.</p>
        </div>
      </div>
    </footer>
  );
}
