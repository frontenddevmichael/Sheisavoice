import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const GUARDRAILS = [
  {
    title: "Zero Intermediary Burden",
    description: "Families and students never carry administrative stress or unexpected transactional friction. We manage verification and coordination directly.",
    check: "Direct Provider Reimbursement",
    icon: "shield",
    accent: "plum" as const,
  },
  {
    title: "Unconditional Confidentiality",
    description: "Child safeguarding protocols strictly protect identities, diagnostic records, and personal stories. No child is exposed for fundraising optics.",
    check: "Ethical Non-identifiable Data",
    icon: "lock",
    accent: "coral" as const,
  },
  {
    title: "Verifiable Accountability",
    description: "Transparent oversight ensuring resources translate directly into tangible therapy hours and educational milestone completion.",
    check: "Milestone Log Continuity",
    icon: "verified",
    accent: "gold" as const,
  },
];

export default function DignityGuardrails() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-low overflow-hidden" id="guardrails">
      <NoiseOverlay />
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative z-10">
        <ScrollReveal animation="right">
          <div className="flex flex-col items-center mb-space-3xl">
            <Badge variant="coral-light" className="mb-space-md">Systemic Integrity</Badge>
            <h2 className="font-headline text-headline-lg text-primary text-center max-w-3xl leading-tight">
              Designed for Dignity &amp; Continuous Trust
            </h2>
            <p className="font-body text-body-md text-on-surface-variant text-center max-w-2xl mt-space-md">
              Our three foundational architecture guardrails ensure sustainable, non-stigmatizing advocacy that families can rely on without hesitation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger="children">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
            {GUARDRAILS.map((item) => (
              <Card key={item.title} accent={item.accent} className="flex flex-col gap-space-md pressable">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[32px]">{item.icon}</span>
                  <h3 className="font-headline text-headline-sm text-primary">{item.title}</h3>
                </div>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-space-sm mt-auto pt-space-md border-t border-outline-variant/20">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">check_circle</span>
                  <span className="font-label-sm text-label-sm font-bold text-primary">{item.check}</span>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
