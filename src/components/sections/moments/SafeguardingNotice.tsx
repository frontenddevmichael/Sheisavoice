import SectionWrapper from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export default function SafeguardingNotice() {
  return (
    <SectionWrapper className="py-space-5xl bg-surface-lowest relative overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-space-lg">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-secondary-container/30 text-on-surface-variant mb-space-md">
          <span className="material-symbols-outlined text-lg">verified_user</span>
          <span className="font-label-sm text-label-sm tracking-wider uppercase">Ethical Standards</span>
        </div>

        <h2 className="font-headline text-headline-lg text-primary">
          Safeguarding and Media Ethics Notice
        </h2>

        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
          SHEISAVOICE adheres strictly to international child protection and consent standards.
          We do not publish identifiable portraits or sensitive medical moments of children without
          comprehensive, verified consent. Our visual archive highlights collective community
          accompaniment, professional educators, and supportive caregivers.
        </p>

        <p className="font-label-sm text-label-sm text-on-surface-variant/80 pt-space-sm">
          CAC Registration Number #{SITE.cacReg}
        </p>
      </div>
    </SectionWrapper>
  );
}
