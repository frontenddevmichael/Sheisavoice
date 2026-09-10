"use client";

import { useEffect, useRef } from "react";
import useInView from "@/hooks/useInView";

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
  const { ref, isInView } = useInView({ threshold });
  const localRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stagger === "deep" && localRef.current) {
      assignDepths(localRef.current);
    }
  }, [stagger]);

  // Merge refs
  const setRef = (node: HTMLDivElement | null) => {
    localRef.current = node;
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <div
      ref={setRef}
      className={`${ANIMATIONS[animation]} ${stagger ? STAGGERS[stagger] : ""} ${isInView ? "is-visible" : ""} ${className}`}
      style={!stagger && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
