"use client";

interface SoundwaveDividerProps {
  className?: string;
  bars?: number;
  color?: string;
  opacity?: number;
}

export default function SoundwaveDivider({
  className = "",
  bars = 24,
  color = "var(--color-primary)",
  opacity = 0.05,
}: SoundwaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-10 block"
        style={{ opacity }}
      >
        {Array.from({ length: bars }).map((_, i) => {
          const x = (i / bars) * 1200;
          const maxH = 20 + Math.sin(i * 0.5) * 12 + Math.cos(i * 0.3) * 8;
          const delay = i * 0.06;
          return (
            <rect
              key={i}
              x={x}
              y={20 - maxH / 2}
              width={Math.max(1200 / bars - 4, 6)}
              height={maxH}
              rx="3"
              fill={color}
              className="soundwave-bar"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
