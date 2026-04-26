"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedHeroTitleProps {
  staticText: string;
  words: string[];
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedHeroTitle({
  staticText,
  words,
  className,
  style,
}: AnimatedHeroTitleProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearTimeout(id);
  }, [current, words.length]);

  return (
    <h1 className={className} style={style}>
      {staticText}{" "}
      <span
        style={{
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          verticalAlign: "bottom",
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={current}
            style={{ display: "block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            {words[current]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
