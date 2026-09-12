import Button from "@/components/ui/Button";
import { WordReveal, SplitReveal, CurtainReveal } from "@/components/ui/Motion";
import { StarBurst, HeartDecor, ScatteredDots } from "@/components/ui/Decorations";

export default function ActionCTA() {
  return (
    <section className="w-full bg-primary text-on-primary py-space-3xl lg:py-space-5xl relative overflow-hidden">
      {/* Decorations */}
      <StarBurst className="absolute top-10 left-12" size={22} color="var(--color-on-primary)" delay={0.4} />
      <StarBurst className="absolute bottom-12 right-16" size={16} color="var(--color-on-primary)" delay={0.6} />
      <HeartDecor className="absolute top-16 right-20" size={14} color="var(--color-on-primary)" delay={0.5} />
      <ScatteredDots position="bottom-left" count={3} className="opacity-15" />
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 relative z-10">
        <CurtainReveal delay={0.1}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <SplitReveal delay={0.3}>
              <span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-on-primary/10 text-on-primary w-fit mb-space-md">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wider uppercase">
                  Direct Family &amp; Clinical Inquiries
                </span>
              </span>
            </SplitReveal>
            <WordReveal
              text="Ready to Begin the Journey?"
              as="h2"
              className="font-headline text-headline-lg text-surface leading-tight mb-space-xl"
              staggerDelay={0.05}
            />
            <SplitReveal delay={0.5}>
              <p className="font-body text-body-lg text-on-primary/85 max-w-2xl leading-relaxed mb-space-2xl">
                Whether you are a family seeking structured care for a child with special needs or an
                accredited provider desiring to serve underserved students, we are ready to connect.
              </p>
            </SplitReveal>
            <div className="flex flex-col sm:flex-row items-center gap-space-md">
              <Button variant="gold" size="lg" href="/contact">Submit an Intake Application</Button>
              <Button variant="ghost" size="lg" href="/contact" className="text-on-primary hover:bg-on-primary/10">
                Partner as a Clinical Provider
              </Button>
            </div>
            <SplitReveal delay={0.7}>
              <p className="font-body text-body-sm text-on-primary/60 mt-space-2xl max-w-xl">
                SHEISAVOICE operates in full alignment with international child protection and
                non-stigmatizing protocols. All applications are treated with strict confidentiality.
              </p>
            </SplitReveal>
          </div>
        </CurtainReveal>
      </div>
    </section>
  );
}
