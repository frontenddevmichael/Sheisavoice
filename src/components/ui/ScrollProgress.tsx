"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Thin gradient line at the top of the viewport that fills
 * left-to-right as the user scrolls the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}
