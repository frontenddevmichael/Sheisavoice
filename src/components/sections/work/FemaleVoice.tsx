import SectionWrapper from "@/components/ui/SectionWrapper";
import { WordReveal, SplitReveal, CurtainReveal, StaggerGrid } from "@/components/ui/Motion";
import { ScatteredDots, StarBurst, HeartDecor, ScribbleLine } from "@/components/ui/Decorations";
import WaveDecoration from "@/components/ui/WaveDecoration";
import { KenteZigzag } from "@/components/ui/AnkaraPatterns";

export default function FemaleVoice() {
  return (
    <SectionWrapper id="female-voice" className="relative bg-surface-lowest py-space-5xl overflow-hidden">
      <KenteZigzag color="tertiary-fixed-dim" opacity={0.05} className="absolute inset-0 pointer-events-none" />
      {/* Decorations */}
      <ScatteredDots position="bottom-right" count={5} className="opacity-30" />
      <HeartDecor className="absolute top-12 right-16" size={14} color="var(--color-secondary)" delay={0.5} />
      <StarBurst className="absolute top-20 left-8" size={18} color="var(--color-tertiary-fixed-dim)" delay={0.4} />
      {/* Header badge */}
      <SplitReveal delay={0.1}>
        <span className="inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold mb-space-lg">
          04 / Voice &amp; Leadership
        </span>
      </SplitReveal>

      {/* Main block — curtain reveal */}
      <CurtainReveal delay={0.15}>
        <div className="glass relative rounded-card-lg p-space-xl lg:p-space-2xl mb-space-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col gap-space-md max-w-3xl">
            <WordReveal
              text="Amplifying the Female Voice"
              as="h2"
              className="font-headline text-headline-lg text-primary leading-tight"
              staggerDelay={0.05}
            />
            <SplitReveal delay={0.4}>
              <p className="font-body text-body-lg text-on-surface leading-relaxed">
                SHEISAVOICE creates platforms for girls and women to discover, strengthen, and use
                their voices, through advocacy, mentorship, and opportunities for confidence and
                leadership. Whether she is a mother, a young woman finding her place, or a girl just
                learning to speak up in a room, we believe her voice matters.
              </p>
            </SplitReveal>
          </div>
        </div>
      </CurtainReveal>

      {/* Pillar cards — stagger grid */}
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {[
          {
            icon: "groups",
            title: "Mentorship Circles",
            description: "Structured intergenerational safe spaces providing steady peer counsel.",
            accent: "bg-primary",
          },
          {
            icon: "record_voice_over",
            title: "Spoken Expression",
            description: "Public presence clinics nurturing fearless community dialogue.",
            accent: "bg-secondary",
          },
          {
            icon: "family_restroom",
            title: "Caregiver Advocacy",
            description: "Empowering mothers of children with special needs as lead advocates.",
            accent: "bg-tertiary-fixed-dim",
          },
        ].map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-card-lg bg-surface-lowest p-space-xl shadow-[var(--shadow-card)] flex flex-col gap-space-md hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 pressable"
          >
            <div className="flex items-center gap-space-sm">
              <div className={`w-10 h-10 rounded-full ${pillar.accent} text-on-primary flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
              </div>
              <h3 className="font-headline text-headline-sm text-primary">{pillar.title}</h3>
            </div>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </StaggerGrid>

      <WaveDecoration />
    </SectionWrapper>
  );
}
