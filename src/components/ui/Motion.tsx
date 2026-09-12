"use client";

import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, Variants } from "framer-motion";

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

/* ============================================
   WORD REVEAL (each word appears from mask)
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

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden mr-[0.3em]">
            <motion.span
              className={`inline-block ${wordClassName}`}
              initial={{ y: "110%", rotateX: -40 }}
              whileInView={{ y: "0%", rotateX: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.5,
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
  speed?: number; // pixels of movement per scroll unit (negative = opposite direction)
  offset?: [string, string]; // scroll offset range ["start end", "end start"]
}

export function ParallaxY({
  children,
  className = "",
  speed = 50,
  offset = ["start end", "end start"],
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement>(null);
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
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = 1 - Math.pow(2, -10 * progress);
        setDisplay(Math.round(from + (to - from) * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ============================================
   STAGGER GRID (items from different directions)
   ============================================ */

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  columns?: number;
  staggerDelay?: number;
}

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease,
    },
  }),
};

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={gridItemVariants}
              transition={{ staggerChildren: staggerDelay }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

/* ============================================
   SLIDE REVEAL (content revealed by sliding mask)
   ============================================ */

interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export function SlideReveal({
  children,
  className = "",
  direction = "left",
  delay = 0,
}: SlideRevealProps) {
  const clipPaths: Record<string, string> = {
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
    up: "inset(100% 0 0 0)",
    down: "inset(0 0 100% 0)",
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: clipPaths[direction] }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SCALE BLUR (dramatic scale + blur combo)
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
  scale = 0.85,
  blur = 8,
}: ScaleBlurProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   ROTATE IN (subtle rotation on entry)
   ============================================ */

interface RotateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotate?: number; // degrees
}

export function RotateIn({
  children,
  className = "",
  delay = 0,
  rotate = -3,
}: RotateInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, rotate, y: 30 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   CURTAIN REVEAL (two-part sliding curtain)
   ============================================ */

interface CurtainRevealProps {
  children: ReactNode;
  className?: string;
  color?: string;
  delay?: number;
}

export function CurtainReveal({
  children,
  className = "",
  color = "bg-primary",
  delay = 0,
}: CurtainRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Curtain overlay */}
      <motion.div
        className={`absolute inset-0 z-10 ${color}`}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay, ease: easeOut }}
        style={{ transformOrigin: "right" }}
      />
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================
   SPLIT TEXT REVEAL (left/right halves)
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
  duration = 0.8,
}: SplitRevealProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 50% 0 50%)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   FLOATING ELEMENT (continuous subtle motion)
   ============================================ */

interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function Floating({
  children,
  className = "",
  amplitude = 8,
  duration = 3,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
