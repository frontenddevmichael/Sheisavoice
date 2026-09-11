"use client";

import Button from "@/components/ui/Button";
import FloatingElements from "@/components/ui/FloatingElements";
import useInView from "@/hooks/useInView";

export default function HeroSection() {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className="relative w-full bg-surface min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Layer 1: Floating geometric elements — scattered across full hero */}
      <FloatingElements />

      {/* Layer 2: Content */}
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-3xl lg:pt-[10rem] pb-[80px] lg:pb-[120px] w-full flex-1 flex items-center">
        <div ref={heroRef} className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-xl`}>
            <div className="text-reveal-inner">
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wide">
                  SHEISAVOICE Global Children Advocacy Foundation
                </span>
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-lg`} style={{ transitionDelay: "120ms" }}>
            <div className="text-reveal-inner">
              <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
                Amplifying the Voice of the{" "}
                <span className="text-secondary relative">
                  Unheard
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/20" fill="none" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6C35 2 65 10 100 6C135 2 165 10 200 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-2xl`} style={{ transitionDelay: "240ms" }}>
            <div className="text-reveal-inner">
              <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                SHEISAVOICE is a social impact and advocacy organization committed to supporting
                children with special needs and students facing financial hardship, giving them access
                to care, education, and opportunity across Africa.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className={`text-reveal ${isInView ? "is-visible" : ""} mb-space-3xl`} style={{ transitionDelay: "360ms" }}>
            <div className="text-reveal-inner">
              <div className="flex flex-wrap items-center gap-space-md">
                <Button href="/contact" variant="primary" size="lg">
                  Support Our Work
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Button>
                <Button href="/our-work" variant="secondary" size="lg">
                  See Our Programs
                </Button>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className={`text-reveal ${isInView ? "is-visible" : ""}`} style={{ transitionDelay: "480ms" }}>
            <div className="text-reveal-inner">
              <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant text-label-md font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  Qualified Clinical Providers
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">shield</span>
                  Non-Identifiable Safeguarding
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                  Pan-African Direct Reach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No scallop needed — hero and sections share same white background */}
    </section>
  );
}
