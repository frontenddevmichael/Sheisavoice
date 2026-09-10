export default function StackedMonogram({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`} aria-label="SHE IS A VOICE">
      {/* SHE */}
      <span
        className="font-headline text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-[0.85] tracking-[0.18em] text-primary"
      >
        SHE
      </span>

      {/* is a — with decorative lines */}
      <div className="flex items-center gap-space-sm my-space-xs">
        <span className="w-8 sm:w-12 h-px bg-outline-variant" />
        <span className="font-label-sm sm:font-label-md tracking-[0.35em] uppercase text-on-surface-variant">
          is a
        </span>
        <span className="w-8 sm:w-12 h-px bg-outline-variant" />
      </div>

      {/* VOICE */}
      <span
        className="font-headline text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-[0.85] tracking-[0.12em]"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        VOICE
      </span>
    </div>
  );
}
