import Link from "next/link";
import Card from "@/components/ui/Card";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

const PROGRAMS = [
  {
    number: "01",
    label: "Primary Focus",
    icon: "medical_services",
    title: "Special Needs Support",
    description:
      "We help children with autism, speech impairment, dyslexia, and other developmental challenges get the therapy and care they need, in partnership with qualified clinical providers.",
    footer: "Comprehensive Clinical Ecosystem",
    accent: "plum" as const,
    iconBg: "bg-secondary-fixed",
  },
  {
    number: "02",
    label: "Academic Lifeline",
    icon: "school",
    title: "University Education Support",
    description:
      "We support students facing financial hardship with access to funds, resources, and guidance so a lack of money doesn't end an education.",
    footer: "Scholarship Desk",
    accent: "gold" as const,
    iconBg: "bg-tertiary-fixed",
  },
  {
    number: "03",
    label: "Advocacy",
    icon: "campaign",
    title: "Amplifying the Female Voice",
    description:
      "We create platforms for girls and women to build confidence, speak up, and lead.",
    footer: "Leadership Forums",
    accent: "coral" as const,
    iconBg: "bg-primary-fixed",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-surface-lowest py-space-5xl overflow-hidden" id="what-we-do">

      <div className="relative max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <MotionSection preset="left">
          <div className="max-w-2xl mb-space-3xl">
            <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary font-bold">
              WHAT WE DO
            </span>
            <h2 className="font-headline text-headline-lg text-primary mt-space-xs">
              Targeted support where the barriers are highest.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mt-space-sm">
              We focus our resources where intervention creates lasting stability and dignity.
            </p>
          </div>
        </MotionSection>

        <MotionSection stagger>
          <MotionChild>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {PROGRAMS.map((program) => (
                <Card key={program.number} className="flex flex-col gap-space-md pressable">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-space-2xs rounded-full bg-surface-mid text-primary font-label-sm text-label-sm font-semibold">
                      {program.number} / {program.label}
                    </span>
                    <div className={`w-10 h-10 rounded-full ${program.iconBg} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-[20px] text-primary">{program.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-headline text-headline-sm text-primary">{program.title}</h3>
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-auto pt-space-sm border-t border-outline-variant/20">
                    <span className="font-label-sm text-on-surface-variant/80">{program.footer}</span>
                  </div>
                </Card>
              ))}
            </div>
          </MotionChild>
        </MotionSection>

        {/* Global Virtual Support callout */}
        <MotionSection preset="up" delay={0.2}>
          <div className="mt-space-2xl text-center">
            <p className="font-body text-body-md text-on-surface-variant">
              Outside Nigeria?{" "}
              <Link href="/our-work#global-support" className="text-primary font-semibold hover:underline">
                Learn about our Global Virtual Support waitlist.
              </Link>
            </p>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
