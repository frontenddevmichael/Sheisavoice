"use client";

import { WordReveal, SplitReveal, ParallaxY, StaggerGrid, CurtainReveal } from "@/components/ui/Motion";

export default function WhyItMatters() {
  return (
    <section className="relative w-full bg-surface-lowest py-space-5xl">
      <div className="relative max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left: heading — word reveal */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <SplitReveal delay={0.1}>
              <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary font-bold">
                Our Founding Conviction
              </span>
            </SplitReveal>
            <WordReveal
              text="Why This Work Matters"
              as="h2"
              className="font-headline text-headline-lg text-primary leading-tight"
              staggerDelay={0.06}
            />
          </div>

          {/* Right: content — staggered from different directions */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <ParallaxY speed={10}>
              <div className="relative pl-space-lg">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-secondary via-primary-container to-primary-fixed-dim" />
                <SplitReveal delay={0.2}>
                  <p className="font-headline text-headline-md text-on-surface leading-relaxed font-normal">
                    Across many communities, children with special needs are still misunderstood or left
                    without the support they need. Their families often carry this alone, without the
                    funds, information, or professional care they deserve. Many bright students lose their
                    education to financial hardship they had no way to plan for. SHEISAVOICE exists to
                    change that. We are building a future where every child has access to the care that
                    helps them thrive, and every student has a path to finish what they started.
                  </p>
                </SplitReveal>
              </div>
            </ParallaxY>

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="rounded-card-md bg-surface-low p-space-md flex flex-col gap-1">
                <span className="font-label-lg text-label-lg text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  Direct Community Partnership
                </span>
                <p className="font-body text-body-sm text-on-surface-variant">
                  We work side by side with caregivers, teachers, and clinics to build permanent local capacity.
                </p>
              </div>
              <div className="rounded-card-md bg-surface-low p-space-md flex flex-col gap-1">
                <span className="font-label-lg text-label-lg text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">lock_reset</span>
                  Safeguarding Priority
                </span>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Dignity and identity protection remain absolute across every intervention round.
                </p>
              </div>
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
