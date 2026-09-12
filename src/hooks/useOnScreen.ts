"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns true once the element is in the viewport — either shortly
 * after mount (already visible) or when it scrolls into view.
 *
 * Has a small mount delay (150ms) so animations don't fire instantly
 * when navigating to a new page. This gives the user time to see
 * the hero content animate in rather than it already being done.
 */
export default function useOnScreen<T extends Element = HTMLDivElement>(rootMargin = "100px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      mounted.current = true;

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
    }, 150);

    return () => clearTimeout(timer);
  }, [rootMargin]);

  return { ref, visible };
}
