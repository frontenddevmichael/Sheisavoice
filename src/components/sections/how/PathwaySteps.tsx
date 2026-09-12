"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { PATHWAY_STEPS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useInView from "@/hooks/useInView";

export default function PathwaySteps() {
  const { ref: lineRef, isInView: lineVisible } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper className="py-space-5xl bg-surface-lowest relative" id="pathway">
      <ScrollReveal animation="left">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-lg mb-space-3xl">
          <div className="max-w-xl">
            <Badge variant="plum-light" className="mb-space-md">Sequential Architecture</Badge>
            <h2 className="font-headline text-headline-lg text-primary leading-tight">
              The 5-Stage Pathway to Care
            </h2>
          </div>
          <p className="font-body text-body-lg text-on-surface-variant max-w-md leading-relaxed">
            Every child with special needs and underserved student receives uninterrupted, tailored
            backing via an intentional sequence of protective checkpoints.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto" ref={lineRef}>
        {/* Central connecting line — animated draw */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-tertiary-fixed-dim origin-top"
            style={{
              transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-space-2xl">
          {PATHWAY_STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Desktop: alternating layout */}
              <div className={`hidden lg:grid grid-cols-[1fr_auto_1fr] gap-space-xl items-center`}>
                {/* Left content (odd steps) */}
                <div className={`${i % 2 === 0 ? "" : "order-3"}`}>
                  {i % 2 === 0 ? (
                    <StepContent step={step} align="right" />
                  ) : (
                    <StepMeta step={step} />
                  )}
                </div>

                {/* Center node */}
                <div className="relative z-10 flex flex-col items-center order-2">
                  <div
                    className={`w-14 h-14 rounded-full ${step.accentBg} flex items-center justify-center shadow-lg border-4 border-surface`}
                    style={{
                      transform: lineVisible ? "scale(1)" : "scale(0)",
                      transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 150 + 200}ms`,
                    }}
                  >
                    <span className="font-headline text-headline-xs text-on-primary font-bold">{step.number}</span>
                  </div>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-100 hover:scale-150 hover:border-primary/0 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Right content (even steps) */}
                <div className={`${i % 2 === 0 ? "order-3" : ""}`}>
                  {i % 2 === 0 ? (
                    <StepMeta step={step} />
                  ) : (
                    <StepContent step={step} align="left" />
                  )}
                </div>
              </div>

              {/* Mobile: stacked layout */}
              <div className="lg:hidden flex gap-space-lg">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${step.accentBg} flex items-center justify-center shadow-md border-[3px] border-surface shrink-0 z-10`}
                    style={{
                      transform: lineVisible ? "scale(1)" : "scale(0)",
                      transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 150 + 200}ms`,
                    }}
                  >
                    <span className="font-headline text-label-lg text-on-primary font-bold">{step.number}</span>
                  </div>
                  {i < PATHWAY_STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-outline-variant/40 to-outline-variant/10 min-h-[20px]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-space-md">
                  <StepContent step={step} align="left" />
                  <div className="mt-space-md">
                    <StepMeta step={step} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function StepContent({ step, align }: { step: typeof PATHWAY_STEPS[number]; align: "left" | "right" }) {
  return (
    <div className={`flex flex-col gap-space-sm ${align === "right" ? "text-right" : ""}`}>
      <Badge variant="plum-light" className={align === "right" ? "self-end" : ""}>{step.phase}</Badge>
      <h3 className="font-headline text-headline-sm text-primary">{step.title}</h3>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">{step.description}</p>
    </div>
  );
}

function StepMeta({ step }: { step: typeof PATHWAY_STEPS[number] }) {
  return (
    <div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-low border border-outline-variant/20 w-fit">
      <span className="material-symbols-outlined text-primary text-[20px]">{step.meta.icon}</span>
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm font-bold text-primary">{step.meta.label}</span>
        <span className="font-body text-body-sm text-on-surface-variant">{step.meta.sublabel}</span>
      </div>
    </div>
  );
}
