import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function ContactCards() {
  const contacts = [
    {
      icon: "mail",
      label: "Email Coordination",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      description: "Inquiries & Official Petitions",
      accent: "plum" as const,
    },
    {
      icon: "location_on",
      label: "Nigeria Operations",
      value: `${SITE.address} · Continental Network`,
      href: null,
      description: "Federal Capital Territory Hub",
      accent: "coral" as const,
    },
    {
      icon: "schedule",
      label: "Office Schedule",
      value: "Mon-Fri, 9am-5pm WAT",
      href: null,
      description: "West Africa Time Standard",
      accent: "gold" as const,
    },
  ];

  return (
    <SectionWrapper className="relative bg-surface-lowest py-space-5xl overflow-hidden">
      <FloatingShapes variant="sparse" />

      <div className="relative z-10">
        <ScrollReveal animation="right">
          <div className="flex flex-col gap-space-2xl">
            {/* Large email CTA */}
            <div className="bg-gradient-to-br from-primary via-primary-container to-secondary rounded-card-lg p-space-2xl lg:p-space-3xl text-center grain relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <svg className="absolute top-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-space-lg">
                <span className="material-symbols-outlined text-[48px] text-on-primary/80">mail</span>
                <h3 className="font-headline text-headline-lg text-on-primary">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="font-body text-body-lg text-on-primary/80 max-w-xl">
                  Whether you&apos;re a family seeking support, a clinical provider, or a partner — we&apos;re here to help.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-surface/90 backdrop-blur-sm text-primary font-label-lg font-semibold tracking-wide hover:bg-white hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {SITE.email}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
              {contacts.map((item, i) => (
                <ScrollReveal key={i} animation="up" delay={i * 100}>
                  <Card
                    accent={item.accent}
                    className="flex flex-col gap-space-md pressable h-full"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.accent === "plum" ? "bg-primary-fixed" : item.accent === "coral" ? "bg-secondary-fixed" : "bg-tertiary-fixed"
                    }`}>
                      <span className="material-symbols-outlined text-[24px] text-primary">{item.icon}</span>
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <span className="font-label-sm text-on-surface-variant font-bold uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="font-body text-body-lg text-on-surface font-semibold hover:text-primary transition-colors link-underline">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-body text-body-lg text-on-surface font-semibold">{item.value}</span>
                      )}
                      <span className="font-body text-body-sm text-on-surface-variant/70 mt-space-xs">{item.description}</span>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Safeguarding Banner */}
            <div className="bg-primary-container rounded-card-lg p-space-2xl lg:p-space-3xl shadow-lg grain relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <svg className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10L60 40L90 45L65 65L70 95L50 75L30 95L35 65L10 45L40 40Z" fill="currentColor" className="text-surface-lowest" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-space-xl text-center md:text-left">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-[48px] text-surface-lowest">shield</span>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <h3 className="font-headline text-headline-sm text-surface-lowest font-bold">
                    Child Safeguarding & Ethical Governance
                  </h3>
                  <p className="font-body text-body-md text-surface-lowest/85 leading-relaxed">
                    Strict Child Safeguarding & Privacy Protocol Honored. Official Entity CAC Registration
                    Number #{SITE.cacReg}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
