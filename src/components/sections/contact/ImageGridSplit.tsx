import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export default function ImageGridSplit() {
  return (
    <SectionWrapper className="relative bg-surface-lowest py-space-5xl overflow-hidden">
      <NoiseOverlay />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <ScrollReveal animation="left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            {/* Image Side */}
            <div className="lg:col-span-5">
              <div className="relative rounded-card-lg overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary-container/20 via-secondary-container/10 to-tertiary-fixed/10 shadow-[var(--shadow-elevated)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-space-md text-on-surface-variant/30">
                    <span className="material-symbols-outlined text-[72px]">image</span>
                    <span className="font-label-md">Field presence imagery</span>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute bottom-space-lg left-space-lg right-space-lg">
                  <div className="bg-primary/90 backdrop-blur-md rounded-card p-space-lg shadow-lg grain">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-on-primary">groups</span>
                      <span className="font-label-sm text-on-primary font-bold uppercase tracking-wider">Clinical Impact</span>
                    </div>
                    <p className="font-headline text-headline-sm text-on-primary font-bold">
                      Over 480+ Clinical Hours
                    </p>
                    <p className="font-body text-body-sm text-on-primary/80">
                      Delivered through accredited therapy partners across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 flex flex-col gap-space-xl">
              <Badge variant="plum-light" className="w-fit">
                Ground Presence & Respect
              </Badge>

              <h2 className="font-headline text-headline-lg lg:text-[40px] text-primary tracking-tight leading-[1.1]">
                We partner with communities to spark enduring dignity.
              </h2>

              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                Our teams operate directly alongside families, local educators, and healthcare providers
                in underserved regions across Nigeria. By investing in tailored developmental spaces
                and legal protection pathways, we build self-sustaining protection ecosystems around
                every child.
              </p>

              <div className="flex flex-wrap gap-space-md mt-space-md">
                <Badge variant="plum-light">
                  <span className="material-symbols-outlined text-[16px]">child_care</span>
                  Child Centered Safeguarding
                </Badge>
                <Badge variant="coral-light">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  Holistic Inclusive Classrooms
                </Badge>
                <Badge variant="gold">
                  <span className="material-symbols-outlined text-[16px]">diversity_3</span>
                  Community Led Oversight
                </Badge>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
