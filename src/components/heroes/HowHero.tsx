"use client";

import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import useInView from "@/hooks/useInView";

interface HowHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  steps?: { label: string; icon: string }[];
}

export default function HowHero({ eyebrow, title, subtitle, steps = [] }: HowHeroProps) {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div ref={heroRef} className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          {eyebrow && (
            <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-lg`}>
              <div className="text-reveal-inner">
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-tertiary-fixed/20 text-on-tertiary-fixed">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                  <span className="font-label-md text-label-md tracking-wider uppercase">
                    {eyebrow}
                  </span>
                </span>
              </div>
            </div>
          )}

          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-lg`} style={{ transitionDelay: "120ms" }}>
            <div className="text-reveal-inner">
              <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
                {title}
              </h1>
            </div>
          </div>

          {subtitle && (
            <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-2xl`} style={{ transitionDelay: "240ms" }}>
              <div className="text-reveal-inner">
                <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Process dots strip */}
          {steps.length > 0 && (
            <div className={`text-reveal ${isInView ? "is-visible" : ""} w-full max-w-3xl`} style={{ transitionDelay: "360ms" }}>
              <div className="text-reveal-inner">
                <div className="flex items-center justify-between relative gap-2 overflow-hidden">
                  {/* Connecting line */}
                  <div className="absolute top-3 left-0 right-0 h-px bg-outline-variant/40" />

                  {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-space-xs relative z-10 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-tertiary-fixed-dim flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed">{step.icon}</span>
                      </span>
                      <span className="font-label-sm text-on-surface-variant text-center leading-tight">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <SoundwaveBottom />
    </section>
  );
}
