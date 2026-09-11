interface SectionDividerProps {
  variant?: "soundwave" | "gradient" | "dots" | "line";
  className?: string;
}

export default function SectionDivider({ variant = "soundwave", className = "" }: SectionDividerProps) {
  if (variant === "soundwave") {
    return (
      <div className={`w-full py-space-xl flex justify-center ${className}`} aria-hidden="true">
        <div className="flex items-end gap-[3px] h-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-[2px] bg-primary/15 rounded-full"
              style={{
                height: `${6 + Math.sin(i * 0.4) * 10 + Math.cos(i * 0.3) * 6}px`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent ${className}`} aria-hidden="true" />
    );
  }

  if (variant === "dots") {
    return (
      <div className={`w-full py-space-lg flex justify-center gap-3 ${className}`} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/20"
          />
        ))}
      </div>
    );
  }

  // line
  return (
    <div className={`w-full py-space-xl flex justify-center ${className}`} aria-hidden="true">
      <div className="w-16 h-px bg-outline-variant/30 rounded-full" />
    </div>
  );
}
