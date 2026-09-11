interface BackgroundPatternProps {
  variant?: "dots" | "grid" | "noise";
  className?: string;
}

export default function BackgroundPattern({ variant = "dots", className = "" }: BackgroundPatternProps) {
  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--color-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--color-outline-variant) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
    );
  }

  // noise
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-0 grain opacity-[0.03]" />
    </div>
  );
}
