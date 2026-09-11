"use client";

interface FloatingShapesProps {
  variant?: "default" | "sparse" | "dense";
  className?: string;
}

const SHAPES = [
  { type: "circle", size: 80, x: "10%", y: "15%", color: "primary", opacity: 0.04, delay: 0 },
  { type: "circle", size: 120, x: "85%", y: "20%", color: "secondary", opacity: 0.03, delay: 0.5 },
  { type: "ring", size: 60, x: "75%", y: "70%", color: "primary", opacity: 0.05, delay: 1 },
  { type: "ring", size: 40, x: "15%", y: "80%", color: "secondary", opacity: 0.04, delay: 1.5 },
  { type: "dot", size: 8, x: "30%", y: "10%", color: "primary", opacity: 0.12, delay: 0.3 },
  { type: "dot", size: 6, x: "60%", y: "85%", color: "secondary", opacity: 0.1, delay: 0.8 },
  { type: "arc", size: 50, x: "90%", y: "50%", color: "primary", opacity: 0.04, delay: 1.2 },
  { type: "arc", size: 35, x: "5%", y: "45%", color: "secondary", opacity: 0.03, delay: 0.6 },
  { type: "line", size: 40, x: "50%", y: "5%", color: "primary", opacity: 0.06, delay: 0.9 },
  { type: "line", size: 30, x: "40%", y: "95%", color: "secondary", opacity: 0.05, delay: 1.4 },
];

const SPARSE_SHAPES = SHAPES.filter((_, i) => i % 3 === 0);
const DENSE_SHAPES = SHAPES;

export default function FloatingShapes({ variant = "default", className = "" }: FloatingShapesProps) {
  const shapes = variant === "sparse" ? SPARSE_SHAPES : variant === "dense" ? DENSE_SHAPES : SHAPES;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full animate-[float_8s_ease-in-out_infinite]"
              style={{
                backgroundColor: `var(--color-${shape.color})`,
                opacity: shape.opacity,
              }}
            />
          )}
          {shape.type === "ring" && (
            <div
              className="w-full h-full rounded-full animate-[float_10s_ease-in-out_infinite]"
              style={{
                border: `1.5px solid var(--color-${shape.color})`,
                opacity: shape.opacity,
              }}
            />
          )}
          {shape.type === "dot" && (
            <div
              className="w-full h-full rounded-full animate-[pulse_4s_ease-in-out_infinite]"
              style={{
                backgroundColor: `var(--color-${shape.color})`,
                opacity: shape.opacity,
              }}
            />
          )}
          {shape.type === "arc" && (
            <svg viewBox="0 0 50 50" className="w-full h-full animate-[float_12s_ease-in-out_infinite]">
              <path
                d="M10,40 Q25,10 40,40"
                stroke={`var(--color-${shape.color})`}
                strokeWidth="1.5"
                fill="none"
                opacity={shape.opacity}
              />
            </svg>
          )}
          {shape.type === "line" && (
            <div
              className="w-full h-[1.5px] rounded-full animate-[float_9s_ease-in-out_infinite]"
              style={{
                backgroundColor: `var(--color-${shape.color})`,
                opacity: shape.opacity,
                transform: `rotate(${30 + i * 20}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
