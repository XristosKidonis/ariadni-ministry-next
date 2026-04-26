"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Luke Warrell",
    text: "Hey I just want to say that your post have helped me in one of the hardest times of my life so thank you for making them and sharing!!!",
  },
  {
    name: "Elijah Joshua",
    text: "I absolutely love your content and to top it off you have got to be the most incredible most beautiful woman spreading the word. Thank you for all you do. You are truly amazing.",
  },
  {
    name: "Andrew Cabrera",
    text: "You are an inspiration, who you were and who you are now is an amazing testimony. Praise God.",
  },
  {
    name: "Rosa Maria",
    text: "Hello from Puerto Rico. I feel so much joy seeing a young woman who could be a model or use her beauty in other ways, but who chose instead to worship God and preach the Gospel. Keep sowing the Word of God everywhere. As Scripture says: “He who goes forth and weeps, bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him” (Psalm 126:6). May the Father open many doors of opportunity for you. God bless you.",
  },
  {
    name: "Kenny Johnson",
    text: "Dear Ariadni I am a pastor, but I am being blessed through your message.",
  },
  {
    name: "Joshua Collins",
    text: "I just shared some of your posts with my younger daughter. She is now following you on Facebook. Love your posts. Keep it going. God is answering my prayers. Thanks for your posts.",
  },
  {
    name: "Khaled Saafan",
    text: "Hey I just want to reach out and thank you. I grew up a Muslim but recently started to question the religion, then I was lost and prayed for direction and in good timing I was added to your Facebook group chat, and I feel like I've woken up and seen light to the truth in Jesus Christ, and I just want thank you so much for that!",
  },
  {
    name: "Charles Ladimir",
    text: "Your words of wisdom and insight about God is enlightening thank you.",
  },
  {
    name: "Shannon Pelkey",
    text: "The encouragement is much needed and appreciated. And I truly admire your faith, as well!! I haven't met many women with as much biblical knowledge… love it!! Praying for you, and may God bless you today, and everyday!",
  },
  {
    name: "Billy Whisler",
    text: "Ariadni, thank you for those inspirational messages today. I genuinely needed that, it felt like a divine message at just the right moment.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 border-t"
      style={{ background: "var(--dark)", borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <span
          className="text-[11px] font-semibold tracking-[0.16em] uppercase block mb-4"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          TESTIMONIES
        </span>
        <h2
          className="uppercase mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(36px,5vw,60px)",
            letterSpacing: "0.03em",
            color: "var(--cream)",
          }}
        >
          LIVES CHANGED
        </h2>

        <div style={{ minHeight: 220, position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p
                style={{
                  fontSize: "clamp(16px,2vw,20px)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.75)",
                  fontStyle: "italic",
                  maxWidth: 720,
                  margin: "0 auto 28px",
                }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === current ? "var(--accent)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
              aria-label={`Testimony ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
