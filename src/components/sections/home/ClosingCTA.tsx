import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-surface pb-space-3xl lg:pb-space-5xl pt-space-md">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <ScrollReveal animation="blur">
          <div className="relative w-full rounded-card-lg bg-gradient-to-br from-primary via-primary-container to-secondary p-space-2xl lg:p-space-3xl text-center flex flex-col items-center justify-center gap-space-xl shadow-[var(--shadow-elevated)] overflow-hidden grain">
            {/* Decorative wave inside */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-10" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
                <path d="M0,100 C240,20 480,180 720,80 C960,0 1200,120 1440,60 L1440,200 L0,200 Z" fill="white" />
              </svg>
            </div>

            <h2 className="font-headline text-headline-lg lg:text-headline-xl text-on-primary font-bold max-w-3xl leading-snug relative z-10">
              Together, we can build a world where no child is left behind and no student&apos;s
              education ends because of what they cannot afford.
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-space-md relative z-10">
              <Button href="/contact" variant="gold" size="lg">
                Get Involved
                <span className="material-symbols-outlined text-[20px]">group_add</span>
              </Button>
              <Button href="/how-we-work" variant="ghost" size="lg" className="text-on-primary hover:bg-on-primary/20">
                Read Safeguarding Standards
              </Button>
            </div>

            <p className="font-body text-body-sm text-on-primary/75 relative z-10">
              SHEISAVOICE operates in full alignment with international child protection and
              non-stigmatizing protocols.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
