import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

export default function OurStory() {
  return (
    <SectionWrapper className="py-space-4xl bg-surface-lowest" id="our-story">
      <MotionSection stagger preset="left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          <MotionChild>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-mid text-primary w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-md text-label-md tracking-wider uppercase">
                  Institutional Genesis
                </span>
              </span>

              <h2 className="font-headline text-headline-lg text-primary leading-tight">
                Our Story
              </h2>

              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                Founded on 28 May 2020, and incorporated with the Corporate Affairs
                Commission of Nigeria in 2022 (CAC Registration Number: 180464),
                SHEISAVOICE Global Children Advocacy Foundation began as a response
                to a simple, hard truth: children with special needs and capable
                students were being failed by circumstances they didn&apos;t choose, and
                no one was building the bridge to help them. Founded by Shola
                Amaraibi, SHEISAVOICE started in Nigeria and is built to grow across
                Africa.
              </p>

              <div className="flex flex-wrap gap-space-sm pt-space-md">
                <Badge variant="plum-light">Founded 28 May 2020</Badge>
                <Badge variant="plum-light">CAC Reg #180464</Badge>
                <Badge variant="plum-light">Nigeria to Africa Reach</Badge>
              </div>
            </div>
          </MotionChild>

          <MotionChild>
            <Card className="lg:col-span-5">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
                  <span className="font-label-lg text-label-lg text-primary font-bold">
                    Visual Accent
                  </span>
                </div>
                <h3 className="font-headline text-headline-sm text-primary leading-tight">
                  100% Commitment to Non-Exploitative Representation
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                  Every representation of the children and families we serve
                  upholds dignity, consent, and purpose. No imagery or narrative is
                  used for emotional leverage without direct benefit to the child.
                </p>
              </div>
            </Card>
          </MotionChild>
        </div>
      </MotionSection>
    </SectionWrapper>
  );
}
