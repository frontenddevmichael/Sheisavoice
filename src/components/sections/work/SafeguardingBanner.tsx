import Link from "next/link";
import { SITE } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MotionSection from "@/components/ui/Motion";

export default function SafeguardingBanner() {
  return (
    <SectionWrapper className="bg-surface-lowest py-space-2xl">
      <MotionSection preset="up">
        <div className="flex flex-col items-center text-center gap-space-lg max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-space-md py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span className="font-label-md text-label-md tracking-wider uppercase">
            CAC Registration #{SITE.cacReg} Official Entity
          </span>
        </div>

        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
          SHEISAVOICE Global Children Advocacy Foundation operates in complete adherence to strict
          child protection protocols, non-identifiable representation ethics, and transparent
          governance.
        </p>

        <Link
          href="/how-we-work#guardrails"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-md font-semibold tracking-wide shadow-[0_2px_16px_rgba(62,0,94,0.12)] hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[18px]">shield</span>
          Safeguarding Standards
        </Link>
        </div>
      </MotionSection>
    </SectionWrapper>
  );
}
