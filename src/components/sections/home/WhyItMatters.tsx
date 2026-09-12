"use client";

import { WordReveal, SplitReveal, ParallaxY, StaggerGrid } from "@/components/ui/Motion";
import { ScatteredDots, StarBurst, HeartDecor, ColorfulBlob } from "@/components/ui/Decorations";
import { AnkaraDiamonds } from "@/components/ui/AnkaraPatterns";
import AnimatedSoundwave from "@/components/ui/AnimatedSoundwave";

export default function WhyItMatters() {
  return (
    <section className="relative w-full bg-surface-lowest py-space-5xl overflow-hidden">
      <AnkaraDiamonds color="var(--color-primary)" opacity={0.04} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Decorations */}
      <ScatteredDots position="top-left" count={5} className="opacity-30" />
      <ColorfulBlob className="top-0 -left-24 opacity-10" size={180} color="var(--color-primary-fixed)" />
      <HeartDecor className="absolute top-8 right-16" size={14} delay={0.8} />
      <StarBurst className="absolute bottom-12 left-8" size={20} color="var(--color-tertiary-fixed-dim)" delay={0.6} />

      <div className="relative max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 glass rounded-card-lg p-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left: heading */}
          <div className="lg:col-span-4 flex flex-col gap-space-md relative accent-line">
            <SplitReveal delay={0.1}>
              <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary font-bold inline-flex items-center gap-2">
                Our Founding Conviction
                <AnimatedSoundwave className="w-12 h-3 text-secondary" />
              </span>
            </SplitReveal>
            <WordReveal
              text="Why This Work Matters"
              as="h2"
              className="font-headline text-headline-lg text-primary leading-tight"
              staggerDelay={0.06}
            />
            <HeartDecor className="absolute -top-3 -left-2" size={12} color="var(--color-secondary)" delay={0.4} />
          </div>

          {/* Right: content */}
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
              <div className="rounded-card-md bg-surface-low p-space-md flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-secondary to-primary-fixed-dim" />
                <StarBurst className="absolute -top-2 -right-2" size={16} color="var(--color-secondary-container)" delay={0.5} />
                <span className="font-label-lg text-label-lg text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  Direct Community Partnership
                </span>
                <p className="font-body text-body-sm text-on-surface-variant">
                  We work side by side with caregivers, teachers, and clinics to build permanent local capacity.
                </p>
              </div>
              <div className="rounded-card-md bg-surface-low p-space-md flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-secondary to-primary-fixed-dim" />
                <HeartDecor className="absolute -top-1 -right-1" size={10} color="var(--color-secondary)" delay={0.6} />
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
