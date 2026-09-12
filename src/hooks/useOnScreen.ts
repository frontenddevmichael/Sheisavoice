"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns true once the element is in the viewport — either immediately
 * on mount (already visible) or when it scrolls into view.
 *
 * Uses a generous rootMargin so elements near the edges are caught early.
 * The observer fires its callback as soon as the element is ANY amount visible.
 */
export default function useOnScreen<T extends Element = HTMLDivElement>(rootMargin = "100px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}
