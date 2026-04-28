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
    }, 2500);
    return () => clearTimeout(id);
  }, [current, words.length]);

  return (
    <h1 className={className} style={style}>
      {staticText}{" "}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {words[current]}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
