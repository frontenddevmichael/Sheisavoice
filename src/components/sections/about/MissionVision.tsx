import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { WordReveal, SplitReveal, ScaleBlur, CurtainReveal } from "@/components/ui/Motion";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

export default function MissionVision() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-lowest overflow-hidden" id="mission-vision">

      <div className="relative">
        {/* Header — word reveal */}
        <div className="flex flex-col gap-space-md items-center text-center mb-space-3xl">
          <SplitReveal delay={0.1}>
            <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-mid text-primary w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md tracking-wider uppercase">
                Our Guiding Compass
              </span>
            </span>
          </SplitReveal>
          <WordReveal
            text="Mission & Vision"
            as="h2"
            className="font-headline text-headline-lg text-primary leading-tight"
            staggerDelay={0.06}
          />
          <SplitReveal delay={0.3}>
            <p className="font-body text-body-md text-on-surface-variant max-w-2xl">
              The two enduring pillars guiding our institutional decisions, field partnerships, and
              continental aspirations.
            </p>
          </SplitReveal>
        </div>

        {/* Cards — curtain reveal from different directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          <CurtainReveal delay={0.2}>
            <Card className="flex flex-col gap-space-lg">
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
          </CurtainReveal>

          <CurtainReveal delay={0.35}>
            <Card className="flex flex-col gap-space-lg">
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
          </CurtainReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
