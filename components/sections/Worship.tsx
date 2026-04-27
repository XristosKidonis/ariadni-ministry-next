import Image from "next/image";

const albums = [
  { id: "05d7eJjiiBc3MvZ1GCc47M" },
  { id: "54bMTYiJONZ5mbxYrmjgnF" },
  { id: "6lGMc3X5gnixiSSAjcRDyE" },
  { id: "1sDkyHTxCNdObKSsf3jrVh" },
  { id: "3n26XApXqf3EGCikslQ4ae" },
];

export default function Worship() {
  return (
    <section
      id="worship"
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Header with featured image */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(56px,9vw,120px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
              }}
            >
              WORSHIP
            </h2>
            <a
              href="https://open.spotify.com/artist/ariadni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.12em] uppercase border-b border-current pb-0.5 self-end transition-opacity hover:opacity-50"
            >
              LISTEN ON SPOTIFY →
            </a>
          </div>

          {/* Featured image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-8 bg-gray-200">
            <Image
              src="/ariadni/worship-01.jpg"
              alt="Fresh Fire Revival Ministries worship"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>

          <p
            className="text-[15px] leading-[1.75] mb-6"
            style={{ color: "var(--muted)", maxWidth: 560 }}
          >
            Fresh Fire Revival Ministries creates original songs and curates
            live worship experiences that usher people into God&apos;s presence.
            Each album is crafted to deepen your encounter with God through
            music and prayer.
          </p>
        </div>

        {/* Spotify Albums Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="flex items-center justify-center">
              <iframe
                style={{
                  borderRadius: 12,
                }}
                src={`https://open.spotify.com/embed/album/${album.id}?utm_source=generator`}
                width="100%"
                height={380}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
