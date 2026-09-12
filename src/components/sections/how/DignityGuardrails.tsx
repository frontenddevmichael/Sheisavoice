import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { WordReveal, SplitReveal, ScaleBlur, StaggerGrid } from "@/components/ui/Motion";
import { ScatteredDots, StarBurst, HeartDecor } from "@/components/ui/Decorations";
import { LeafFlow } from "@/components/ui/AnkaraPatterns";

const GUARDRAILS = [
  {
    title: "Zero Intermediary Burden",
    description: "Families and students never carry administrative stress or unexpected transactional friction. We manage verification and coordination directly.",
    check: "Direct Provider Reimbursement",
    icon: "shield",
  },
  {
    title: "Unconditional Confidentiality",
    description: "Child safeguarding protocols strictly protect identities, diagnostic records, and personal stories. No child is exposed for fundraising optics.",
    check: "Ethical Non-identifiable Data",
    icon: "lock",
  },
  {
    title: "Verifiable Accountability",
    description: "Transparent oversight ensuring resources translate directly into tangible therapy hours and educational milestone completion.",
    check: "Milestone Log Continuity",
    icon: "verified",
  },
];

export default function DignityGuardrails() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-lowest overflow-hidden" id="guardrails">
      <LeafFlow color="secondary" opacity={0.04} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Decorations */}
      <ScatteredDots position="bottom-right" count={4} className="opacity-25" />
      <StarBurst className="absolute top-16 left-12" size={18} color="var(--color-tertiary-fixed-dim)" delay={0.5} />
      <HeartDecor className="absolute bottom-20 right-16" size={12} delay={0.6} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-space-3xl">
          <SplitReveal delay={0.1}>
            <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-mid text-primary w-fit mb-space-md">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md tracking-wider uppercase">
                Systemic Integrity
              </span>
            </span>
          </SplitReveal>
          <WordReveal
            text="Designed for Dignity & Continuous Trust"
            as="h2"
            className="font-headline text-headline-lg text-primary text-center max-w-3xl leading-tight"
            staggerDelay={0.04}
          />
          <SplitReveal delay={0.3}>
            <p className="font-body text-body-md text-on-surface-variant text-center max-w-2xl mt-space-md">
              Our three foundational architecture guardrails ensure sustainable, non-stigmatizing advocacy that families can rely on without hesitation.
            </p>
          </SplitReveal>
        </div>

        {/* Cards — stagger grid */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
          {GUARDRAILS.map((item) => (
            <Card key={item.title} className="flex flex-col gap-space-md pressable">
              <ScaleBlur scale={0.9} blur={3}>
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[32px]">{item.icon}</span>
                  <h3 className="font-headline text-headline-sm text-primary">{item.title}</h3>
                </div>
              </ScaleBlur>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
              <div className="flex items-center gap-space-sm mt-auto pt-space-md border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">check_circle</span>
                <span className="font-label-sm text-label-sm font-bold text-primary">{item.check}</span>
              </div>
            </Card>
          ))}
        </StaggerGrid>
      </div>
    </SectionWrapper>
  );
}
