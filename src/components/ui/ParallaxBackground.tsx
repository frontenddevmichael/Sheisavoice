"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Wraps content with slow-drift parallax movement.
 * Used for background patterns and decorations that drift
 * as the user scrolls, creating depth.
 */
export default function ParallaxBackground({
  children,
  speed = 30,
  className = "",
}: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
