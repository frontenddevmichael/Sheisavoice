"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

/* ============================================
   ANIMATION VARIANTS
   ============================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

/* ============================================
   PRESET MAP
   ============================================ */

const presets = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  blur: blurIn,
  slideUp,
} as const;

type Preset = keyof typeof presets;

/* ============================================
   EASING
   ============================================ */

const ease = [0.16, 1, 0.3, 1] as const;

/* ============================================
   SECTION WRAPPER
   ============================================ */

interface MotionSectionProps {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  viewportMargin?: string;
}

export default function MotionSection({
  children,
  preset = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  stagger = false,
  staggerDelay = 0.08,
  viewportMargin = "0px 0px -60px 0px",
}: MotionSectionProps) {
  const variants = presets[preset] || fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: viewportMargin as `${number}px ${number}px ${number}px ${number}px` }}
      transition={{
        duration,
        delay,
        ease,
        ...(stagger ? { staggerChildren: staggerDelay } : {}),
      }}
      variants={
        stagger
          ? {
              hidden: variants.hidden,
              visible: {
                ...variants.visible,
                transition: { staggerChildren: staggerDelay },
              },
            }
          : variants
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   STAGGER CHILD
   ============================================ */

interface MotionChildProps {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  className?: string;
}

export function MotionChild({
  children,
  preset = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: MotionChildProps) {
  const variants = presets[preset] || fadeUp;

  return (
    <motion.div
      variants={variants}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   TEXT REVEAL (line-by-line)
   ============================================ */

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}
