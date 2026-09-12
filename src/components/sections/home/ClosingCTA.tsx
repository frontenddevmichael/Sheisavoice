import Button from "@/components/ui/Button";
import { WordReveal, CurtainReveal } from "@/components/ui/Motion";
import { StarBurst, HeartDecor, ScatteredDots, ScribbleLine } from "@/components/ui/Decorations";

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-surface-lowest pb-space-3xl lg:pb-space-5xl pt-space-md">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <CurtainReveal delay={0.1}>
          <div className="relative w-full rounded-card-lg bg-primary p-space-2xl lg:p-space-3xl text-center flex flex-col items-center justify-center gap-space-lg overflow-hidden">
            {/* Decorations inside CTA */}
            <StarBurst className="absolute top-6 left-8" size={24} color="var(--color-on-primary)" delay={0.6} />
            <StarBurst className="absolute bottom-8 right-10" size={18} color="var(--color-on-primary)" delay={0.7} />
            <HeartDecor className="absolute top-10 right-16" size={14} color="var(--color-on-primary)" delay={0.5} />
            <ScatteredDots position="bottom-left" count={3} className="opacity-20" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <ScribbleLine color="var(--color-on-primary)" width={120} animate={false} />
            </div>

            <WordReveal
              text="Be the voice a child cannot yet speak."
              as="h2"
              className="font-headline text-headline-lg lg:text-headline-xl text-on-primary font-bold max-w-2xl leading-tight relative z-10"
              staggerDelay={0.05}
            />

            <div className="relative z-10">
              <Button href="/contact" variant="gold" size="lg">
                Get Involved
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </div>
          </div>
        </CurtainReveal>
      </div>
    </section>
  );
}
