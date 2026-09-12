"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyItMatters() {
  return (
    <section className="relative w-full bg-surface-lowest py-space-5xl">
      <div className="relative max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <ScrollReveal animation="right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary font-bold">
                Our Founding Conviction
              </span>
              <h2 className="font-headline text-headline-lg text-primary leading-tight">
                Why This Work Matters
              </h2>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <div className="relative pl-space-lg">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-secondary via-primary-container to-primary-fixed-dim" />
                <p className="font-headline text-headline-md text-on-surface leading-relaxed font-normal">
                  Across many communities, children with special needs are still misunderstood or left
                  without the support they need. Their families often carry this alone, without the
                  funds, information, or professional care they deserve. Many bright students lose their
                  education to financial hardship they had no way to plan for. SHEISAVOICE exists to
                  change that. We are building a future where every child has access to the care that
                  helps them thrive, and every student has a path to finish what they started.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
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
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
