"use client";

import React, { ReactNode } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import useOnScreen from "@/hooks/useOnScreen";

/* ============================================
   EASING
   ============================================ */

const ease = [0.16, 1, 0.3, 1] as const;
const easeOut = [0.33, 1, 0.68, 1] as const;

/* ============================================
   BASIC FADE VARIANTS
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
   SECTION WRAPPER (stagger + preset)
   ============================================ */

interface MotionSectionProps {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function MotionSection({
  children,
  preset = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  stagger = false,
  staggerDelay = 0.08,
}: MotionSectionProps) {
  const variants = presets[preset] || fadeUp;
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
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
  const { ref, visible } = useOnScreen();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={visible ? { y: "0%" } : { y: "100%" }}
        transition={{ duration: 0.7, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================
   WORD REVEAL (each word slides up)
   ============================================ */

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function WordReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  staggerDelay = 0.04,
  as: Tag = "h2",
}: WordRevealProps) {
  const words = text.split(" ");
  const { ref, visible } = useOnScreen();

  return (
    <Tag ref={ref as any} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden mr-[0.25em]">
            <motion.span
              className={`inline-block ${wordClassName}`}
              initial={{ y: "100%" }}
              animate={visible ? { y: "0%" } : { y: "100%" }}
              transition={{
                duration: 0.45,
                delay: delay + i * staggerDelay,
                ease: easeOut,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

/* ============================================
   PARALLAX WRAPPER (scroll-linked movement)
   ============================================ */

interface ParallaxYProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: [string, string];
}

export function ParallaxY({
  children,
  className = "",
  speed = 50,
  offset = ["start end", "end start"],
}: ParallaxYProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================
   COUNT UP (animated number)
   ============================================ */

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 1.8,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const { ref, visible } = useOnScreen();
  const [display, setDisplay] = React.useState(from);

  React.useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(2, -10 * progress);
        setDisplay(Math.round(from + (to - from) * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [visible, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ============================================
   STAGGER GRID (items fade in with stagger)
   ============================================ */

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerGridProps) {
  const items = React.Children.toArray(children);
  const { ref, visible } = useOnScreen();

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================
   SCALE BLUR (scale + blur combo)
   ============================================ */

interface ScaleBlurProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
  blur?: number;
}

export function ScaleBlur({
  children,
  className = "",
  delay = 0,
  scale = 0.95,
  blur = 6,
}: ScaleBlurProps) {
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale, filter: `blur(${blur}px)` }}
      animate={
        visible
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale, filter: `blur(${blur}px)` }
      }
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SPLIT REVEAL (fade + slide from left)
   ============================================ */

interface SplitRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function SplitReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: SplitRevealProps) {
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   CURTAIN REVEAL (fade + slide up)
   ============================================ */

interface CurtainRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function CurtainReveal({
  children,
  className = "",
  delay = 0,
}: CurtainRevealProps) {
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
