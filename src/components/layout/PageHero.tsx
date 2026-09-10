"use client";

import FloatingElements from "@/components/ui/FloatingElements";
import ScallopEdge from "@/components/ui/ScallopEdge";
import useInView from "@/hooks/useInView";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  accent?: "plum" | "coral" | "gold";
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "plum",
  children,
}: PageHeroProps) {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  const accentColor =
    accent === "coral"
      ? "text-secondary"
      : accent === "gold"
        ? "text-tertiary-fixed-dim"
        : "text-primary";

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-between bg-surface overflow-hidden">
      {/* Scattered floating elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-space-3xl w-full flex-1 flex items-center">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-lg`}>
              <div className="text-reveal-inner">
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label-md text-label-md tracking-wider uppercase">
                    {eyebrow}
                  </span>
                </span>
              </div>
            </div>
          )}

          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-lg`} style={{ transitionDelay: "120ms" }}>
            <div className="text-reveal-inner">
              <h1 className={`font-headline text-headline-xl ${accentColor} tracking-tight max-w-3xl leading-[1.08]`}>
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

          {children && (
            <div className={`text-reveal ${isInView ? "is-visible" : ""}`} style={{ transitionDelay: "360ms" }}>
              <div className="text-reveal-inner">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scalloped edge transition */}
      <ScallopEdge color="var(--color-surface-mid)" scallops={14} height="40px" />
    </section>
  );
}
