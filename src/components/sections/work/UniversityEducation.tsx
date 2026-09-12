import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function UniversityEducation() {
  return (
    <SectionWrapper id="university-education" className="relative bg-surface-lowest py-space-5xl overflow-hidden">

      <div className="relative z-10">
        <ScrollReveal animation="right">
          <span className="inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold mb-space-lg">
            02 / Academic Continuity
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          <ScrollReveal className="lg:col-span-7 order-1 lg:order-1" animation="left" delay={60}>
            <div className="flex flex-col gap-space-lg">
              <h2 className="font-headline text-headline-lg text-primary">
                University Education Support Program
              </h2>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                A safety net safeguarding scholars near completion from catastrophic academic disruption.
              </p>
              <div className="flex flex-col gap-space-md">
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  We support university students facing financial hardship with access to funds,
                  resources, and guidance so they can complete their education. Every application is
                  assessed individually, based on need.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Too many brilliant, hardworking minds in Nigeria and across the continent are forced
                  to abandon their degrees in their final semesters due to unforeseen financial
                  emergencies, tuition surges, or sudden loss of family support. We step in precisely
                  at this tipping point.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Support is delivered with complete transparency and unconditional dignity: direct
                  semester tuition relief, laboratory and examination subsidies, and dedicated academic
                  mentorship that walks with students all the way to graduation.
                </p>
              </div>

              <Card className="mt-space-md">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline text-headline-sm text-primary">
                      Education Without Financial Exit
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                      Our grants are designed to cover the critical final stretch, ensuring that no
                      student walks away from their degree because of a temporary financial crisis.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5 order-2 lg:order-2" animation="right" delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {[
                { icon: "account_balance", title: "Direct Subsidies", desc: "Semester tuition relief, capstone project funding, and examination fees covered promptly." },
                { icon: "fact_check", title: "Need-Based Review", desc: "Personal evaluations prioritizing students at imminent risk of degree abandonment." },
                { icon: "school", title: "Academic Mentorship", desc: "One-on-one professional guidance ensuring students navigate academic milestones smoothly." },
                { icon: "savings", title: "Zero Debt Burden", desc: "All grants are non-repayable gifts of solidarity designed to liberate, not indebt." },
              ].map((item) => (
                <div key={item.title} className="rounded-card bg-surface-low p-space-md flex flex-col gap-space-xs pressable">
                  <span className="material-symbols-outlined text-[24px] text-tertiary-fixed-dim">{item.icon}</span>
                  <span className="font-label-lg text-label-lg text-primary font-semibold">{item.title}</span>
                  <span className="font-body text-body-sm text-on-surface-variant leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
