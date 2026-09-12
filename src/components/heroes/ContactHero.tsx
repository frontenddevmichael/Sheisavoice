"use client";

import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import useInView from "@/hooks/useInView";

interface ContactHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function ContactHero({ eyebrow, title, subtitle }: ContactHeroProps) {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      {/* Large decorative soundwave on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 200 600"
          className="absolute right-[5%] top-[15%] h-[70%] w-auto opacity-[0.06]"
          fill="none"
        >
          {/* Large soundwave arcs */}
          <path d="M100 50 Q140 100 100 150 Q60 200 100 250 Q140 300 100 350 Q60 400 100 450 Q140 500 100 550" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
          <path d="M120 30 Q160 80 120 130 Q80 180 120 230 Q160 280 120 330 Q80 380 120 430 Q160 480 120 530" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M80 70 Q120 120 80 170 Q40 220 80 270 Q120 320 80 370 Q40 420 80 470 Q120 520 80 570" stroke="var(--color-tertiary-fixed-dim)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Vertical bars */}
          {[40, 70, 100, 130, 160].map((y, i) => (
            <line key={i} x1="30" y1={y} x2="30" y2={y + 20 + i * 5} stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div ref={heroRef} className="max-w-3xl mx-auto w-full">
          <div className="flex flex-col gap-space-lg">
            {eyebrow && (
              <div className={`text-reveal ${isInView ? "is-visible" : ""}`}>
                <div className="text-reveal-inner">
                  <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-primary-container/20 text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-label-md text-label-md tracking-wider uppercase">
                      {eyebrow}
                    </span>
                  </span>
                </div>
              </div>
            )}

            <div className={`text-reveal ${isInView ? "is-visible" : ""}`} style={{ transitionDelay: "120ms" }}>
              <div className="text-reveal-inner">
                <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
                  {title}
                </h1>
              </div>
            </div>

            {subtitle && (
              <div className={`text-reveal ${isInView ? "is-visible" : ""}`} style={{ transitionDelay: "240ms" }}>
                <div className="text-reveal-inner">
                  <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <SoundwaveBottom />
    </section>
  );
}
