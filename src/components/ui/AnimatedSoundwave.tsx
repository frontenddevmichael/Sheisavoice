"use client";

import { useEffect, useRef } from "react";

interface AnimatedSoundwaveProps {
  className?: string;
  bars?: number;
}

export default function AnimatedSoundwave({
  className = "",
  bars = 32,
}: AnimatedSoundwaveProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const rects = svg.querySelectorAll("rect");
    rects.forEach((rect, i) => {
      const delay = i * 40;
      const maxHeight = parseFloat(rect.getAttribute("data-max-height") || "40");
      const baseHeight = 4;

      rect.animate(
        [
          { height: baseHeight, y: 60 - baseHeight / 2 },
          { height: maxHeight, y: 60 - maxHeight / 2 },
          { height: baseHeight, y: 60 - baseHeight / 2 },
        ],
        {
          duration: 1200 + Math.random() * 600,
          delay,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, [bars]);

  const barWidth = Math.floor(800 / bars);
  const gap = 4;

  return (
    <div className={`relative pointer-events-none ${className}`} aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 800 120"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: bars }).map((_, i) => {
          const x = i * (barWidth + gap);
          const centerDist = Math.abs(i - bars / 2) / (bars / 2);
          const maxHeight = 80 * (1 - centerDist * 0.6) + Math.sin(i * 0.4) * 15;
          const baseHeight = 4;
          return (
            <rect
              key={i}
              x={x}
              y={60 - baseHeight / 2}
              width={barWidth}
              height={baseHeight}
              rx="3"
              fill="var(--color-secondary)"
              opacity={0.12 + (1 - centerDist) * 0.08}
              data-max-height={maxHeight}
            />
          );
        })}
      </svg>
    </div>
  );
}
