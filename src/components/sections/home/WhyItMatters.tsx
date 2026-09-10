"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import useParallax from "@/hooks/useParallax";
import WaveDecoration from "@/components/ui/WaveDecoration";

export default function WhyItMatters() {
  const { ref: decorRef, offset } = useParallax(0.15);

  return (
    <section className="relative w-full bg-primary text-on-primary py-space-5xl">
      {/* Parallax decorative star */}
      <div
        ref={decorRef}
        className="parallax-layer absolute -right-16 top-1/4 opacity-[0.04] pointer-events-none"
        style={{ transform: `translateY(${offset}px)` }}
        aria-hidden="true"
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M150 20L170 110L260 120L170 130L150 220L130 130L40 120L130 110Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <ScrollReveal animation="right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-on-primary/10 text-tertiary-fixed-dim w-fit">
                <span className="material-symbols-outlined text-[18px]">format_quote</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">
                  Our Founding Conviction
                </span>
              </span>
              <h2 className="font-headline text-headline-lg text-surface leading-tight">
                Why This Work Matters
              </h2>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <div className="relative pl-space-lg">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-tertiary-fixed-dim via-secondary-container to-primary-fixed-dim" />
                <p className="font-headline text-headline-md text-surface/95 leading-relaxed font-normal">
                  Across many communities, children with special needs are still misunderstood or left
                  without the support they need. Their families often carry this alone, without the
                  funds, information, or professional care they deserve. Many bright students lose their
                  education to financial hardship they had no way to plan for. SHEISAVOICE exists to
                  change that. We are building a future where every child has access to the care that
                  helps them thrive, and every student has a path to finish what they started.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="rounded-card-md bg-on-primary/5 p-space-md flex flex-col gap-1">
                  <span className="font-label-lg text-label-lg text-tertiary-fixed-dim flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">handshake</span>
                    Direct Community Partnership
                  </span>
                  <p className="font-body text-body-sm text-on-primary/75">
                    We work side by side with caregivers, teachers, and clinics to build permanent local capacity.
                  </p>
                </div>
                <div className="rounded-card-md bg-on-primary/5 p-space-md flex flex-col gap-1">
                  <span className="font-label-lg text-label-lg text-secondary-container flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">lock_reset</span>
                    Safeguarding Priority
                  </span>
                  <p className="font-body text-body-sm text-on-primary/75">
                    Dignity and identity protection remain absolute across every intervention round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Wave transition out */}
      <WaveDecoration flip opacity={0.06} color="var(--color-surface)" />
    </section>
  );
}
