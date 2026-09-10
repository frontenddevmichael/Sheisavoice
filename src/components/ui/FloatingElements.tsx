"use client";

import useParallax from "@/hooks/useParallax";

interface FloatingElement {
  id: string;
  shape: "star" | "circle" | "dot";
  size: number;
  x: string;
  y: string;
  color: string;
  parallaxSpeed: number;
  driftDuration: number;
  driftDelay: number;
}

const ELEMENTS: FloatingElement[] = [
  { id: "star-1", shape: "star", size: 36, x: "8%", y: "20%", color: "var(--color-tertiary-fixed-dim)", parallaxSpeed: 0.06, driftDuration: 12, driftDelay: 0 },
  { id: "circle-1", shape: "circle", size: 22, x: "88%", y: "18%", color: "var(--color-secondary-container)", parallaxSpeed: 0.1, driftDuration: 10, driftDelay: 1 },
  { id: "dot-1", shape: "dot", size: 12, x: "75%", y: "65%", color: "var(--color-primary-fixed-dim)", parallaxSpeed: 0.05, driftDuration: 14, driftDelay: 2 },
  { id: "star-2", shape: "star", size: 20, x: "92%", y: "45%", color: "var(--color-secondary)", parallaxSpeed: 0.12, driftDuration: 11, driftDelay: 0.5 },
  { id: "circle-2", shape: "circle", size: 16, x: "5%", y: "60%", color: "var(--color-tertiary-fixed)", parallaxSpeed: 0.08, driftDuration: 13, driftDelay: 1.5 },
  { id: "dot-2", shape: "dot", size: 10, x: "20%", y: "75%", color: "var(--color-secondary-fixed-dim)", parallaxSpeed: 0.07, driftDuration: 15, driftDelay: 3 },
  { id: "star-3", shape: "star", size: 26, x: "95%", y: "72%", color: "var(--color-primary-fixed-dim)", parallaxSpeed: 0.09, driftDuration: 12, driftDelay: 0.8 },
  { id: "dot-3", shape: "dot", size: 14, x: "45%", y: "12%", color: "var(--color-secondary-container)", parallaxSpeed: 0.06, driftDuration: 16, driftDelay: 2.5 },
];

function StarSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L14.5 9.5L22 10L16.5 15L18 22L12 18L6 22L7.5 15L2 10L9.5 9.5Z" />
    </svg>
  );
}

function CircleSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function DotSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {ELEMENTS.map((el) => (
        <FloatingItem key={el.id} element={el} />
      ))}
    </div>
  );
}

function FloatingItem({ element }: { element: FloatingElement }) {
  const { ref, offset } = useParallax(element.parallaxSpeed);

  const ShapeComponent =
    element.shape === "star" ? StarSvg : element.shape === "circle" ? CircleSvg : DotSvg;

  return (
    <div
      ref={ref}
      className="absolute parallax-layer"
      style={{
        left: element.x,
        top: element.y,
        transform: `translateY(${offset}px)`,
        animation: `subtle-drift ${element.driftDuration}s ease-in-out ${element.driftDelay}s infinite`,
      }}
    >
      <ShapeComponent size={element.size} color={element.color} />
    </div>
  );
}
