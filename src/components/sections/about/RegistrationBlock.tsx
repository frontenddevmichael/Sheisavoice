import SectionWrapper from "@/components/ui/SectionWrapper";
import { SplitReveal, ScaleBlur } from "@/components/ui/Motion";

export default function RegistrationBlock() {
  return (
    <SectionWrapper className="py-space-3xl bg-surface-lowest" id="registration">
      <ScaleBlur scale={0.96} blur={4}>
        <div className="rounded-card-lg bg-surface-low border border-outline-variant/20 p-space-xl lg:p-space-2xl flex flex-col md:flex-row items-start md:items-center gap-space-lg">
          <div className="flex-1 flex flex-col gap-space-sm">
            <SplitReveal delay={0.1}>
              <h3 className="font-headline text-headline-sm text-primary leading-tight">
                Official Registration
              </h3>
            </SplitReveal>
            <SplitReveal delay={0.2}>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                SHEISAVOICE Global Children Advocacy Foundation was founded in 2020
                and incorporated with the Corporate Affairs Commission of Nigeria in
                2022. CAC Registration Number: 180464.
              </p>
            </SplitReveal>
          </div>
          <ScaleBlur delay={0.3} scale={0.8}>
            <span className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-full bg-primary-fixed/40 text-primary">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="font-label-md text-label-md font-semibold">High-Trust Safeguarded</span>
            </span>
          </ScaleBlur>
        </div>
      </ScaleBlur>
    </SectionWrapper>
  );
}
