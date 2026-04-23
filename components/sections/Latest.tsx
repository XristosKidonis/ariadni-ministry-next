import Image from "next/image";

const cards = [
  {
    category: "SERMON SERIES",
    title: "UNSHAKEABLE FAITH: STANDING FIRM IN THE STORM",
    meta: "ARIADNI · APRIL 2026",
    img: "/ariadni/aria-03.jpg",
    large: true,
  },
  {
    category: "ANNOUNCEMENT",
    title: "ARISE WORSHIP NIGHT — MAY 10TH, NEW YORK CITY",
    meta: "EVENT · MAY 10, 2026",
    img: "/ariadni/aria-04.jpg",
  },
  {
    category: "STORY",
    title: "HOW ONE PRAYER MEETING BECAME A MOVEMENT",
    meta: "TESTIMONY · MARCH 2026",
    img: "/ariadni/aria-05.jpg",
  },
];

export default function Latest() {
  return (
    <section
      id="latest"
      className="border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <h2
          className="uppercase pt-20 mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(36px,5vw,56px)",
            letterSpacing: "0.03em",
          }}
        >
          OUR LATEST
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            border: "1px solid var(--border)",
          }}
        >
          {/* Large card */}
          <div
            className="flex flex-col p-6 border-r border-b transition-colors hover:bg-[var(--cream)] cursor-pointer row-span-2"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--muted)" }}>
              {cards[0].category}
            </span>
            <h3
              className="font-bold uppercase mb-2 flex-1"
              style={{ fontFamily: "var(--font-display)", fontSize: 21, lineHeight: 1.12 }}
            >
              {cards[0].title}
            </h3>
            <p className="text-[11px] mb-5" style={{ color: "var(--muted)", letterSpacing: "0.06em" }}>
              {cards[0].meta}
            </p>
            <div className="aspect-[3/4] overflow-hidden mt-auto bg-gray-200">
              <Image
                src={cards[0].img}
                alt={cards[0].title}
                width={450}
                height={600}
                className="w-full h-full transition-transform duration-500 hover:scale-[1.04]"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col p-6 border-r border-b transition-colors hover:bg-[var(--cream)] cursor-pointer"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--muted)" }}>
              {cards[1].category}
            </span>
            <h3
              className="font-bold uppercase mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: 21, lineHeight: 1.12 }}
            >
              {cards[1].title}
            </h3>
            <p className="text-[11px] mb-4" style={{ color: "var(--muted)", letterSpacing: "0.06em" }}>
              {cards[1].meta}
            </p>
            <div className="aspect-[3/4] overflow-hidden bg-gray-200">
              <Image src={cards[1].img} alt={cards[1].title} width={450} height={600} className="w-full h-full transition-transform duration-500 hover:scale-[1.04]" style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col p-6 border-b transition-colors hover:bg-[var(--cream)] cursor-pointer"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--muted)" }}>
              {cards[2].category}
            </span>
            <h3
              className="font-bold uppercase mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: 21, lineHeight: 1.12 }}
            >
              {cards[2].title}
            </h3>
            <p className="text-[11px] mb-4" style={{ color: "var(--muted)", letterSpacing: "0.06em" }}>
              {cards[2].meta}
            </p>
            <div className="aspect-[3/4] overflow-hidden bg-gray-200">
              <Image src={cards[2].img} alt={cards[2].title} width={450} height={600} className="w-full h-full transition-transform duration-500 hover:scale-[1.04]" style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>

          {/* Mini card */}
          <div
            className="col-span-2 flex items-center gap-4 p-6 transition-colors hover:bg-[var(--cream)] cursor-pointer"
            style={{ borderColor: "var(--border)" }}
          >
            <Image
              src="/ariadni/aria-07.jpg"
              alt="Ariadni"
              width={56}
              height={56}
              className="rounded-full object-cover flex-shrink-0"
              style={{ width: 56, height: 56 }}
            />
            <div>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase block mb-1" style={{ color: "var(--muted)" }}>
                NEW RELEASE
              </span>
              <p className="text-[14px] font-medium leading-snug">
                Ariadni drops new devotional series on identity in Christ — available now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
