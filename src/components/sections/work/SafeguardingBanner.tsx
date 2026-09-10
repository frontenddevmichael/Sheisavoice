import Link from "next/link";
import { SITE } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function SafeguardingBanner() {
  return (
    <SectionWrapper className="bg-surface-lowest py-space-2xl">
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
          className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-md font-bold hover:bg-primary-container transition-all duration-300 shadow-md hover:-translate-y-0.5"
        >
          <span className="material-symbols-outlined text-[18px]">shield</span>
          Safeguarding Standards
        </Link>
      </div>
    </SectionWrapper>
  );
}
