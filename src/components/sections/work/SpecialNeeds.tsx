import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function SpecialNeeds() {
  return (
    <SectionWrapper id="special-needs" className="relative bg-surface-lowest py-space-5xl">
      <FloatingShapes variant="sparse" />

      <div className="relative z-10">
        <ScrollReveal animation="left">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-md mb-space-2xl">
            <div className="flex flex-col gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold w-fit">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                01 / Primary Clinical Advocacy
              </span>
              <h2 className="font-headline text-headline-lg lg:text-headline-xl text-primary">
                Special Needs Support
              </h2>
            </div>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed max-w-lg">
              Comprehensive therapeutic routing, developmental diagnostics, and community caregiver accompaniment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          <ScrollReveal className="lg:col-span-7" animation="left">
            <div className="rounded-3xl bg-surface-lowest p-space-xl shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-space-md mb-space-xl">
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  We advocate for children with special needs and support families navigating
                  developmental challenges such as autism, speech impairment, dyslexia, learning
                  difficulties, and related conditions. We partner with a network of qualified clinical
                  providers to connect children with therapy, treatment, and developmental care, and we
                  work to reduce stigma by helping communities better understand the needs, abilities,
                  and potential of children with special needs.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Every child communicates and develops at their own rhythm. Rather than treating
                  vulnerability as a deficit, our model pairs qualified pediatric therapists, speech
                  pathologists, and occupational clinicians directly with families who would otherwise
                  navigate these challenges in isolation.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Beyond direct clinical intervention, our community workshops and school partnerships
                  equip teachers and caregivers with practical sensory tools, non-stigmatizing
                  communication strategies, and dignified advocacy principles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-xl">
                {[
                  { icon: "neurology", title: "Autism & Neurodiversity", bg: "bg-secondary-fixed" },
                  { icon: "graphic_eq", title: "Speech & Language Therapy", bg: "bg-primary-fixed" },
                  { icon: "menu_book", title: "Dyslexia & Learning Support", bg: "bg-tertiary-fixed" },
                  { icon: "diversity_1", title: "Stigma Reduction", bg: "bg-secondary-container/20" },
                ].map((badge) => (
                  <div key={badge.title} className="flex items-center gap-space-sm">
                    <div className={`w-10 h-10 rounded-full ${badge.bg} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined text-[20px] text-primary">{badge.icon}</span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                      {badge.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-primary-container p-space-md text-on-primary mb-space-xl">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-lowest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline text-headline-sm text-on-primary">Zero Intermediary Burden on Families</h3>
                    <p className="font-body text-body-md text-on-primary/85 leading-relaxed">
                      Clinical partnerships are fully subsidized with dignity, ensuring no cost or
                      friction falls upon the caregiver.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-space-md">
                <Button variant="primary" size="md" href="/contact">
                  <span className="material-symbols-outlined text-[18px]">medical_services</span>
                  Partner as a Clinical Provider
                </Button>
                <Button variant="secondary" size="md" href="/contact">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Learn About Care Protocols
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" animation="right" delay={100}>
            <div className="rounded-card-lg bg-surface-lowest p-space-xl shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">Clinical Pathway</span>
                <span className="font-label-sm text-label-sm text-primary font-bold">Active Protocol</span>
              </div>
              <div className="flex flex-col gap-space-sm">
                {[
                  { step: "01", title: "Screening & Assessment", icon: "clinical_notes", color: "bg-primary" },
                  { step: "02", title: "Speech & Sensory Therapy", icon: "hearing", color: "bg-secondary" },
                  { step: "03", title: "Family Counseling", icon: "family_restroom", color: "bg-tertiary-fixed-dim" },
                  { step: "04", title: "Community Dignity Workshops", icon: "groups", color: "bg-primary-container" },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-mid">
                    <div className={`w-8 h-8 rounded-full ${item.color} text-on-primary flex items-center justify-center shrink-0`}>
                      <span className="font-label-sm text-label-sm font-bold">{item.step}</span>
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">{item.icon}</span>
                    <span className="font-body text-body-sm text-on-surface font-medium">{item.title}</span>
                    {i < 3 && <span className="material-symbols-outlined text-[14px] text-outline ml-auto">arrow_downward</span>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
