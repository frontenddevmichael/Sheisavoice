interface WaveDecorationProps {
  className?: string;
  flip?: boolean;
  color?: string;
  opacity?: number;
  overlap?: boolean;
}

export default function WaveDecoration({
  className = "",
  flip = false,
  color = "var(--color-primary)",
  opacity = 0.06,
  overlap = true,
}: WaveDecorationProps) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none ${
        overlap ? "absolute bottom-0 left-0 right-0 translate-y-[1px]" : ""
      } ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        style={{ opacity }}
      >
        <path
          d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
        <path
          d="M0,80 C240,20 480,100 720,40 C960,0 1200,80 1440,40 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
