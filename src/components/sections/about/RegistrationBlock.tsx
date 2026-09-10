import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function RegistrationBlock() {
  return (
    <SectionWrapper className="py-space-3xl bg-surface-lowest" id="registration">
      <ScrollReveal animation="scale">
        <div className="rounded-card-lg bg-surface-low border border-outline-variant/20 p-space-xl lg:p-space-2xl flex flex-col md:flex-row items-start md:items-center gap-space-lg">
          <div className="flex-1 flex flex-col gap-space-sm">
            <h3 className="font-headline text-headline-sm text-primary leading-tight">
              Official Registration
            </h3>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
              SHEISAVOICE Global Children Advocacy Foundation was founded in 2020
              and incorporated with the Corporate Affairs Commission of Nigeria in
              2022. CAC Registration Number: 180464.
            </p>
          </div>
          <Badge variant="plum-light">High-Trust Safeguarded</Badge>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
