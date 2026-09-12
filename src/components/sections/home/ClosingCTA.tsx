import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-surface-lowest pb-space-3xl lg:pb-space-5xl pt-space-md">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <ScrollReveal animation="blur">
          <div className="relative w-full rounded-card-lg bg-primary p-space-2xl lg:p-space-3xl text-center flex flex-col items-center justify-center gap-space-lg overflow-hidden">
            <h2 className="font-headline text-headline-lg lg:text-headline-xl text-on-primary font-bold max-w-2xl leading-tight relative z-10">
              Be the voice a child cannot yet speak.
            </h2>

            <div className="relative z-10">
              <Button href="/contact" variant="gold" size="lg">
                Get Involved
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
