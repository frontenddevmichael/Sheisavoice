const bars = [
  { h: 10, color: "primary" },
  { h: 18, color: "secondary" },
  { h: 26, color: "primary" },
  { h: 14, color: "tertiary" },
  { h: 22, color: "secondary" },
  { h: 30, color: "primary" },
  { h: 16, color: "tertiary" },
  { h: 24, color: "secondary" },
  { h: 12, color: "primary" },
  { h: 20, color: "tertiary" },
  { h: 28, color: "secondary" },
  { h: 10, color: "primary" },
  { h: 18, color: "tertiary" },
  { h: 26, color: "secondary" },
  { h: 14, color: "primary" },
  { h: 22, color: "tertiary" },
  { h: 30, color: "secondary" },
  { h: 16, color: "primary" },
  { h: 24, color: "tertiary" },
  { h: 12, color: "secondary" },
  { h: 20, color: "primary" },
  { h: 28, color: "tertiary" },
  { h: 10, color: "secondary" },
  { h: 18, color: "primary" },
  { h: 26, color: "tertiary" },
  { h: 14, color: "secondary" },
  { h: 22, color: "primary" },
  { h: 30, color: "tertiary" },
  { h: 16, color: "secondary" },
  { h: 24, color: "primary" },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/25",
  secondary: "bg-secondary/20",
  tertiary: "bg-tertiary-fixed-dim/20",
};

export default function SoundwaveStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full flex items-end justify-center gap-[3px] py-space-lg ${className}`}
      aria-hidden="true"
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full soundwave-bar ${colorMap[bar.color]}`}
          style={{
            height: `${bar.h}px`,
            animationDelay: `${(i * 0.06).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
