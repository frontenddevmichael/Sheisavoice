"use client";

import { useEffect, useState } from "react";

/**
 * Returns a 0-1 value representing scroll progress within the viewport.
 * 0 = top of page, 1 = bottom of viewport.
 * Used for hero gradient shifts and soundwave compression.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - viewportHeight;
      setProgress(maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

/**
 * Returns scroll-normalized 0-1 value relative to an element.
 * 0 = element just entered viewport, 1 = element fully passed.
 */
export function useElementScrollProgress(ref: React.RefObject<Element | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const raw = 1 - (rect.top / viewportHeight);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}
