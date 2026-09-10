export default function SoundwaveStrip({ className = "" }: { className?: string }) {
  const bars = [
    { h: 8, delay: 0 },
    { h: 16, delay: 0.1 },
    { h: 24, delay: 0.2 },
    { h: 12, delay: 0.15 },
    { h: 20, delay: 0.05 },
    { h: 28, delay: 0.25 },
    { h: 14, delay: 0.12 },
    { h: 22, delay: 0.18 },
    { h: 10, delay: 0.08 },
    { h: 18, delay: 0.22 },
    { h: 26, delay: 0.14 },
    { h: 8, delay: 0.03 },
    { h: 16, delay: 0.2 },
    { h: 24, delay: 0.1 },
    { h: 12, delay: 0.16 },
    { h: 20, delay: 0.06 },
    { h: 28, delay: 0.24 },
    { h: 14, delay: 0.11 },
    { h: 22, delay: 0.19 },
    { h: 10, delay: 0.07 },
    { h: 18, delay: 0.21 },
    { h: 26, delay: 0.13 },
  ];

  return (
    <div
      className={`w-full flex items-end justify-center gap-[3px] py-space-md ${className}`}
      aria-hidden="true"
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-primary/20 soundwave-bar"
          style={{
            height: `${bar.h}px`,
            animationDelay: `${bar.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
