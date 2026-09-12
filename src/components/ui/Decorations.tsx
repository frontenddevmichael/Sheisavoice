"use client";

import { motion } from "framer-motion";
import useOnScreen from "@/hooks/useOnScreen";

/* ============================================
   SCRIBBLE LINE (hand-drawn wavy divider)
   ============================================ */

interface ScribbleLineProps {
  className?: string;
  color?: string;
  width?: number;
  animate?: boolean;
}

export function ScribbleLine({
  className = "",
  color = "var(--color-secondary-container)",
  width = 200,
  animate = true,
}: ScribbleLineProps) {
  const { ref, visible } = useOnScreen<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} 12`}
      fill="none"
      className={`h-3 ${className}`}
      style={{ width }}
      aria-hidden="true"
    >
      <motion.path
        d={`M2 6C${width * 0.15} 2 ${width * 0.3} 10 ${width * 0.5} 6C${width * 0.65} 2 ${width * 0.8} 10 ${width - 2} 6`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : {}}
        animate={animate && visible ? { pathLength: 1, opacity: 1 } : animate ? { pathLength: 0, opacity: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ============================================
   SCATTERED DOTS (colorful corner decoration)
   ============================================ */

interface ScatteredDotsProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  count?: number;
}

const DOT_COLORS = [
  "var(--color-secondary-container)",
  "var(--color-tertiary-fixed-dim)",
  "var(--color-primary-fixed-dim)",
  "var(--color-secondary-fixed-dim)",
];

export function ScatteredDots({
  className = "",
  position = "top-right",
  count = 6,
}: ScatteredDotsProps) {
  const positionClasses: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const dots = Array.from({ length: count }, (_, i) => ({
    size: 4 + (i % 3) * 3,
    x: (i * 37 + 13) % 80,
    y: (i * 29 + 7) % 60,
    color: DOT_COLORS[i % DOT_COLORS.length],
    delay: i * 0.05,
  }));

  const { ref, visible } = useOnScreen();

  return (
    <div
      ref={ref}
      className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-24 h-20">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              left: dot.x,
              top: dot.y,
              backgroundColor: dot.color,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={visible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: dot.delay, duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================
   STAR BURST (hand-drawn star)
   ============================================ */

interface StarBurstProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export function StarBurst({
  className = "",
  size = 24,
  color = "var(--color-tertiary-fixed-dim)",
  delay = 0,
}: StarBurstProps) {
  const { ref, visible } = useOnScreen<SVGSVGElement>();

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={visible ? { opacity: 0.7, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -30 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity={0.15}
      />
    </motion.svg>
  );
}

/* ============================================
   COLORFUL BLOB (soft organic shape)
   ============================================ */

interface ColorfulBlobProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}

export function ColorfulBlob({
  className = "",
  color = "var(--color-primary-fixed)",
  size = 120,
  delay = 0,
}: ColorfulBlobProps) {
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={visible ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <path
          d="M60 10C80 10 100 25 105 45C110 65 100 85 80 95C60 105 35 100 20 85C5 70 10 45 25 30C40 15 50 10 60 10Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}

/* ============================================
   SCRIBBLE CIRCLE (imperfect hand-drawn circle)
   ============================================ */

interface ScribbleCircleProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export function ScribbleCircle({
  className = "",
  size = 40,
  color = "var(--color-secondary-container)",
  delay = 0,
}: ScribbleCircleProps) {
  const { ref, visible } = useOnScreen<SVGSVGElement>();

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={visible ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <path
        d="M20 4C28 3 36 10 37 18C38 26 32 35 24 37C16 39 6 33 4 24C2 15 8 5 17 4C19 3.8 20 4 20 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </motion.svg>
  );
}

/* ============================================
   HEART DECOR (small hand-drawn heart)
   ============================================ */

interface HeartDecorProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export function HeartDecor({
  className = "",
  size = 16,
  color = "var(--color-secondary)",
  delay = 0,
}: HeartDecorProps) {
  const { ref, visible } = useOnScreen<SVGSVGElement>();

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <path
        d="M12 21C12 21 3 14 3 8.5C3 5.5 5.5 3 8.5 3C10 3 11.5 3.8 12 5C12.5 3.8 14 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14 12 21 12 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity={0.2}
      />
    </motion.svg>
  );
}

/* ============================================
   WAVE SEPARATOR (section divider)
   ============================================ */

interface WaveSeparatorProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

export function WaveSeparator({
  className = "",
  color = "var(--color-surface-low)",
  flip = false,
}: WaveSeparatorProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" fill="none" className="w-full h-8 md:h-10">
        <path
          d="M0 20C150 5 300 35 450 20C600 5 750 35 900 20C1050 5 1200 35 1200 20V40H0V20Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ============================================
   CORNER DOODLE (decorative corner element)
   ============================================ */

interface CornerDoodleProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
}

export function CornerDoodle({
  className = "",
  position = "top-right",
  color = "var(--color-primary-fixed-dim)",
}: CornerDoodleProps) {
  const positionClasses: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={`absolute ${positionClasses[position]} pointer-events-none opacity-30 ${className}`}
      style={{ width: 80, height: 80 }}
      aria-hidden="true"
    >
      <path
        d="M0 0C0 0 20 5 30 15C40 25 35 45 50 50C65 55 75 40 80 80"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <circle cx="15" cy="8" r="3" fill={color} fillOpacity={0.3} />
      <circle cx="40" cy="30" r="2" fill={color} fillOpacity={0.4} />
    </svg>
  );
}

/* ============================================
   HAND DRAWN UNDERLINE (for headings)
   ============================================ */

interface HandDrawnUnderlineProps {
  className?: string;
  color?: string;
  width?: string;
}

export function HandDrawnUnderline({
  className = "",
  color = "var(--color-secondary-container)",
  width = "100%",
}: HandDrawnUnderlineProps) {
  const { ref, visible } = useOnScreen<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 8"
      fill="none"
      className={`absolute -bottom-1 left-0 h-2 ${className}`}
      style={{ width }}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 5C30 2 60 7 100 4C140 1 170 6 198 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={visible ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}
