"use client";

import { useState, useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function Card({ children, className = "", tilt = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTransform(`perspective(800px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-card bg-surface-lowest p-space-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 ${className}`}
      style={tilt ? { transform, transition: "transform 0.15s ease-out, box-shadow 0.3s ease" } : undefined}
    >
      {children}
    </div>
  );
}
