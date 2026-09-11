"use client";

import FloatingElements from "@/components/ui/FloatingElements";
import useInView from "@/hooks/useInView";

interface AboutHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function AboutHero({ eyebrow, title, subtitle, children }: AboutHeroProps) {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div ref={heroRef} className="max-w-4xl mx-auto w-full">
          {/* Editorial vertical line on left */}
          <div className="flex gap-space-xl lg:gap-space-2xl items-start">
            {/* Vertical accent line */}
            <div className="hidden lg:flex flex-col items-center gap-space-xs pt-space-xs">
              <span className="w-px h-16 bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-px h-8 bg-outline-variant/40" />
            </div>

            <div className="flex flex-col gap-space-lg">
              {eyebrow && (
                <div className={`text-reveal ${isInView ? "is-visible" : ""}`}>
                  <div className="text-reveal-inner">
                    <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant">
                      {eyebrow}
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
      </div>

    </section>
  );
}
