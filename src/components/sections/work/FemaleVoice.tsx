import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";

export default function FemaleVoice() {
  return (
    <SectionWrapper id="female-voice" className="relative bg-surface py-space-5xl">
      <ScrollReveal animation="scale">
        <span className="inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold mb-space-lg">
          04 / Voice &amp; Leadership
        </span>

        <div className="relative rounded-card-lg bg-gradient-to-r from-primary via-primary-container to-tertiary-fixed-dim p-space-xl lg:p-space-2xl mb-space-2xl overflow-hidden grain">
          <div className="relative z-10 flex flex-col gap-space-md max-w-3xl">
            <h2 className="font-headline text-headline-lg text-on-primary leading-tight">
              Amplifying the Female Voice
            </h2>
            <p className="font-body text-body-lg text-on-primary/90 leading-relaxed">
              SHEISAVOICE creates platforms for girls and women to discover, strengthen, and use
              their voices, through advocacy, mentorship, and opportunities for confidence and
              leadership. Whether she is a mother, a young woman finding her place, or a girl just
              learning to speak up in a room, we believe her voice matters.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal stagger="children">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {[
            {
              icon: "groups",
              title: "Mentorship Circles",
              description: "Intergenerational dialogue sessions pairing experienced women leaders with young girls navigating identity, education, and self-expression.",
              accent: "bg-primary",
            },
            {
              icon: "record_voice_over",
              title: "Spoken Expression",
              description: "Workshops, speaking forums, and creative platforms that help girls and women find, refine, and courageously use their voices.",
              accent: "bg-secondary",
            },
            {
              icon: "family_restroom",
              title: "Caregiver Advocacy",
              description: "Training and equipping mothers, guardians, and female caregivers with the language and confidence to advocate for their children.",
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
        </div>
      </ScrollReveal>

      <WaveDecoration />
    </SectionWrapper>
  );
}
