"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "up" | "left" | "right" | "scale" | "slow" | "blur" | "rotate";
  stagger?: "children" | "left" | "deep" | false;
  delay?: number;
  threshold?: number;
}

const ANIMATIONS = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  slow: "reveal-slow",
  blur: "reveal-blur",
  rotate: "reveal-rotate",
} as const;

const STAGGERS = {
  children: "stagger-children",
  left: "stagger-left",
  deep: "stagger-deep",
} as const;

function assignDepths(el: HTMLElement, depth = 0) {
  el.setAttribute("data-depth", String(depth));
  for (const child of el.children) {
    if (child instanceof HTMLElement) {
      assignDepths(child, depth + 1);
    }
  }
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "up",
  stagger = false,
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (stagger === "deep" && ref.current) {
      assignDepths(ref.current);
    }
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`${ANIMATIONS[animation]} ${stagger ? STAGGERS[stagger] : ""} ${isInView ? "is-visible" : ""} ${className}`}
      style={!stagger && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
