import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

export default function OurStory() {
  return (
    <SectionWrapper className="py-space-5xl bg-surface-lowest" id="our-story">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-3xl items-start">
          {/* Left: Story */}
          <MotionSection preset="left" className="lg:col-span-7">
            <div className="flex flex-col gap-space-xl">
              {/* Label */}
              <div className="flex items-center gap-space-sm">
                <span className="w-10 h-[2px] bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-bold">
                  Institutional Genesis
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-headline text-headline-xl lg:text-[3.25rem] text-primary leading-[1.05] tracking-tight">
                Our Story
              </h2>

              {/* Body text */}
              <p className="font-body text-body-lg text-on-surface leading-[1.8]">
                Founded on 28 May 2020, and incorporated with the Corporate Affairs
                Commission of Nigeria in 2022 (CAC Registration Number: 180464),
                SHEISAVOICE Global Children Advocacy Foundation began as a response
                to a simple, hard truth: children with special needs and capable
                students were being failed by circumstances they didn&apos;t choose, and
                no one was building the bridge to help them.
              </p>

              <p className="font-body text-body-lg text-on-surface leading-[1.8]">
                Founded by Shola Amaraibi, SHEISAVOICE started in Nigeria and is built
                to grow across Africa.
              </p>

              {/* Governance pills */}
              <div className="flex flex-wrap gap-space-sm pt-space-sm">
                <span className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-full bg-primary-fixed/40 text-primary">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span className="font-label-md text-label-md font-semibold">Founded 28 May 2020</span>
                </span>
                <span className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-full bg-tertiary-fixed/50 text-primary">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span className="font-label-md text-label-md font-semibold">CAC Reg #180464</span>
                </span>
                <span className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-full bg-secondary-fixed/50 text-primary">
                  <span className="material-symbols-outlined text-[16px]">public</span>
                  <span className="font-label-md text-label-md font-semibold">Nigeria to Africa Reach</span>
                </span>
              </div>
            </div>
          </MotionSection>

          {/* Right: Accent card */}
          <MotionSection preset="right" delay={0.15} className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-card-lg bg-surface-low p-space-xl lg:p-space-2xl relative overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none" aria-hidden="true" />

                <div className="relative flex flex-col gap-space-xl">
                  {/* Icon + label */}
                  <div className="flex items-center justify-between">
                    <span className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px] text-on-primary">diversity_1</span>
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant font-bold">
                      Bridge Builders
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-headline text-headline-md text-primary leading-tight">
                    Equitable Advocacy for Underserved Children
                  </h3>

                  {/* Description */}
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                    Rather than treating vulnerability as a permanent condition, we partner
                    with communities, schools, and families to construct practical avenues
                    toward dignity, therapeutic care, and lifelong educational completion.
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-outline-variant/20" />

                  {/* Stat */}
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-headline text-[2.5rem] leading-none text-secondary font-bold">
                        100%
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight max-w-[180px]">
                        Commitment to Non-Exploitative Representation
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant/40 text-[48px]">shield</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </SectionWrapper>
  );
}
