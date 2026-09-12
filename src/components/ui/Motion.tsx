"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";

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
          <span key={i} className="overflow-hidden mr-[0.25em]">
            <motion.span
              className={`inline-block ${wordClassName}`}
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0.8 }}
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
  staggerDelay?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerGridProps) {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
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
  scale = 0.95,
  blur = 6,
}: ScaleBlurProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SPLIT REVEAL (clip from left edge)
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   CURTAIN REVEAL (overlay slides away)
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
