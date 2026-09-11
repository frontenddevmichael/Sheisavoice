"use client";

import FloatingElements from "@/components/ui/FloatingElements";
import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import useInView from "@/hooks/useInView";

interface WorkHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function WorkHero({ eyebrow, title, subtitle, children }: WorkHeroProps) {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div ref={heroRef} className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-xl">
            {/* Left: text content */}
            <div className="flex flex-col gap-space-lg max-w-3xl">
              {eyebrow && (
                <div className={`text-reveal ${isInView ? "is-visible" : ""}`}>
                  <div className="text-reveal-inner">
                    <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-secondary-container/30 text-secondary">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
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

            {/* Right: jump nav */}
            {children && (
              <div className={`text-reveal ${isInView ? "is-visible" : ""}`} style={{ transitionDelay: "360ms" }}>
                <div className="text-reveal-inner">
                  {children}
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
