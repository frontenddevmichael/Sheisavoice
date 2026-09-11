import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-surface-lowest pb-space-3xl lg:pb-space-5xl pt-space-md overflow-hidden">
      <FloatingShapes variant="sparse" />
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <ScrollReveal animation="blur">
          <div className="relative w-full rounded-card-lg bg-gradient-to-br from-primary via-primary-container to-secondary p-space-2xl lg:p-space-3xl text-center flex flex-col items-center justify-center gap-space-lg shadow-[var(--shadow-elevated)] overflow-hidden grain">
            {/* Decorative wave inside */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-10" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
                <path d="M0,100 C240,20 480,180 720,80 C960,0 1200,120 1440,60 L1440,200 L0,200 Z" fill="white" />
              </svg>
            </div>

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
