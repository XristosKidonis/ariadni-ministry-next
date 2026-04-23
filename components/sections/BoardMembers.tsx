import Image from "next/image";

const members = [
  {
    name: "Hector \"Jay\" Garza",
    role: "Board Member & Director at Northern Star",
    bio: "With over 30 years of leadership experience, Jay brings deep expertise in leadership, curriculum development, and community-focused safety initiatives. He served 12 years in the U.S. Army training U.S. and NATO forces, followed by a distinguished 26-year career with the Department of Homeland Security where he earned multiple Director's Awards.",
    image: "/board/hector.jpg",
  },
  {
    name: "Jenna Quinn",
    role: "Board Member & Child Safety Advocate",
    bio: "A nationally recognized advocate and speaker since 2004, Jenna is the namesake of 'Jenna's Law,' which established the first mandated K–12 abuse prevention education policy in Texas. With a background in psychology and counseling, she has delivered over 500 keynote presentations, impacting more than 3 million youth.",
    image: "/board/jenna.webp",
  },
];

export default function BoardMembers() {
  return (
    <section id="board" className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16">
          <span
            className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-4"
            style={{ color: "var(--muted)" }}
          >
            LEADERSHIP
          </span>
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(36px,5vw,72px)",
              lineHeight: 0.97,
              letterSpacing: "0.02em",
            }}
          >
            BOARD MEMBERS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col"
              style={{
                border: "1px solid var(--border)",
                padding: 0,
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="uppercase mb-1 text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-6"
                  style={{ color: "var(--accent)" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-[14px] leading-[1.75]"
                  style={{ color: "var(--text)" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
