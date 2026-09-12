import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

export default function OurStory() {
  return (
    <SectionWrapper className="py-space-4xl bg-surface-lowest" id="our-story">
      <MotionSection stagger preset="left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <MotionChild>
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Institutional Genesis</span>
                <span className="w-8 h-[2px] bg-secondary-container" />
              </div>

              <h2 className="font-headline text-headline-lg text-primary tracking-tight">
                Our Story
              </h2>

              <p className="font-body text-body-lg text-on-surface leading-relaxed pt-space-xs">
                Founded on 28 May 2020, and incorporated with the Corporate Affairs
                Commission of Nigeria in 2022 (CAC Registration Number: 180464),
                SHEISAVOICE Global Children Advocacy Foundation began as a response
                to a simple, hard truth: children with special needs and capable
                students were being failed by circumstances they didn&apos;t choose, and
                no one was building the bridge to help them. Founded by Shola
                Amaraibi, SHEISAVOICE started in Nigeria and is built to grow across
                Africa.
              </p>

              <div className="pt-space-md flex flex-wrap gap-space-sm">
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface text-primary shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
                  <span className="font-label-md text-label-md font-semibold">Founded 28 May 2020</span>
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface text-primary shadow-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">verified</span>
                  <span className="font-label-md text-label-md font-semibold">CAC Reg #180464</span>
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface text-primary shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                  <span className="font-label-md text-label-md font-semibold">Nigeria to Africa Reach</span>
                </span>
              </div>
            </div>
          </MotionChild>

          <MotionChild>
            <div className="lg:col-span-5">
              <div className="rounded-card-lg bg-surface p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between pb-space-lg">
                  <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">diversity_1</span>
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Bridge Builders</span>
                </div>
                <div className="space-y-space-md">
                  <h3 className="font-headline text-headline-sm text-primary">Equitable Advocacy for Underserved Children</h3>
                  <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                    Rather than treating vulnerability as a permanent condition, we partner with communities, schools, and families to construct practical avenues toward dignity, therapeutic care, and lifelong educational completion.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline text-headline-md text-secondary font-bold">100%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Commitment to Non-Exploitative Representation</span>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant text-[32px]">shield</span>
                </div>
              </div>
            </div>
          </MotionChild>
        </div>
      </MotionSection>
    </SectionWrapper>
  );
}
