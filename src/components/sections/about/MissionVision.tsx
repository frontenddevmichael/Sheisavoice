import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MissionVision() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-lowest overflow-hidden grain" id="mission-vision">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.02] pointer-events-none" aria-hidden="true" />

      <div className="relative">
        <ScrollReveal animation="right">
          <div className="flex flex-col gap-space-md items-center text-center mb-space-3xl">
            <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-mid text-primary w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md tracking-wider uppercase">
                Our Guiding Compass
              </span>
            </span>
            <h2 className="font-headline text-headline-lg text-primary leading-tight">
              Mission &amp; Vision
            </h2>
            <p className="font-body text-body-md text-on-surface-variant max-w-2xl">
              The two enduring pillars guiding our institutional decisions, field partnerships, and
              continental aspirations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger="children">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
            <Card accent="plum" className="flex flex-col gap-space-lg transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
              <Badge variant="primary">OUR MISSION</Badge>
              <h3 className="font-headline text-headline-md text-primary leading-tight">
                A Direct Avenue for Care and Education
              </h3>
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                Our mission is to support children with special needs and students
                facing financial hardship by providing access to care, education,
                and opportunity, while creating platforms for girls and women to
                find and use their voice.
              </p>
            </Card>

            <Card accent="coral" className="flex flex-col gap-space-lg transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
              <Badge variant="coral">OUR VISION</Badge>
              <h3 className="font-headline text-headline-md text-secondary leading-tight">
                An Africa Defined by Boundless Dignity
              </h3>
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                Our vision is an Africa where every child with special needs has
                access to transformative care, every student can complete their
                education regardless of financial circumstance, and every girl and
                woman has the opportunity to reach her full potential.
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
