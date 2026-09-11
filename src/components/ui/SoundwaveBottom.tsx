"use client";

interface SoundwaveBottomProps {
  dark?: boolean;
}

export default function SoundwaveBottom({ dark = false }: SoundwaveBottomProps) {
  const bars = [
    { h: 8, delay: 0 },
    { h: 14, delay: 0.1 },
    { h: 6, delay: 0.2 },
    { h: 18, delay: 0.05 },
    { h: 10, delay: 0.15 },
    { h: 22, delay: 0.08 },
    { h: 8, delay: 0.18 },
    { h: 16, delay: 0.12 },
    { h: 12, delay: 0.22 },
    { h: 20, delay: 0.03 },
    { h: 6, delay: 0.16 },
    { h: 14, delay: 0.09 },
    { h: 10, delay: 0.2 },
    { h: 18, delay: 0.06 },
    { h: 8, delay: 0.14 },
    { h: 12, delay: 0.24 },
    { h: 16, delay: 0.02 },
    { h: 6, delay: 0.19 },
    { h: 10, delay: 0.11 },
    { h: 14, delay: 0.07 },
    { h: 8, delay: 0.17 },
    { h: 12, delay: 0.13 },
  ];

  return (
    <div className={`absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-[3px] pb-4 pointer-events-none ${dark ? "opacity-20" : "opacity-100"}`} aria-hidden="true">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`w-[2px] rounded-full soundwave-bar ${dark ? "bg-white/20" : "bg-primary/15"}`}
          style={{
            height: `${bar.h}px`,
            animationDelay: `${bar.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
