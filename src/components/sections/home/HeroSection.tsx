"use client";

import Button from "@/components/ui/Button";
import FloatingElements from "@/components/ui/FloatingElements";
import { WordReveal, SplitReveal } from "@/components/ui/Motion";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Layer 1: Floating geometric elements — scattered across full hero */}
      <FloatingElements />

      {/* Layer 2: Content */}
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-3xl lg:pt-[10rem] pb-[80px] lg:pb-[120px] w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <SplitReveal delay={0.2}>
            <div className="mb-space-xl">
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wide">
                  SHEISAVOICE Global Children Advocacy Foundation
                </span>
              </span>
            </div>
          </SplitReveal>

          {/* Headline — word by word */}
          <div className="mb-space-lg">
            <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
              <span className="sr-only">Amplifying the Voice of the Unheard</span>
              <span aria-hidden="true" className="flex flex-wrap">
                {["Amplifying", "the", "Voice", "of", "the", "Unheard"].map((word, i) => (
                  <span key={i} className="overflow-hidden mr-[0.3em]">
                    <motion.span
                      className={`inline-block ${word === "Unheard" ? "text-secondary relative" : ""}`}
                      initial={{ y: "110%", rotateX: -40 }}
                      whileInView={{ y: "0%", rotateX: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {word}
                      {word === "Unheard" && (
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/20" fill="none" viewBox="0 0 200 12" preserveAspectRatio="none">
                          <path d="M0 6C35 2 65 10 100 6C135 2 165 10 200 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <SplitReveal delay={0.7}>
            <div className="mb-space-2xl">
              <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                SHEISAVOICE is a social impact and advocacy organization committed to supporting
                children with special needs and students facing financial hardship, giving them access
                to care, education, and opportunity across Africa.
              </p>
            </div>
          </SplitReveal>

          {/* CTAs */}
          <SplitReveal delay={0.8}>
            <div className="mb-space-3xl">
              <div className="flex flex-wrap items-center gap-space-md">
                <Button href="/contact" variant="primary" size="lg">
                  Support Our Work
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Button>
                <Button href="/our-work" variant="secondary" size="lg">
                  See Our Programs
                </Button>
              </div>
            </div>
          </SplitReveal>

          {/* Trust indicators */}
          <SplitReveal delay={0.9}>
            <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant text-label-md font-medium">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                Qualified Clinical Providers
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">shield</span>
                Non-Identifiable Safeguarding
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                Pan-African Direct Reach
              </span>
            </div>
          </SplitReveal>
        </div>
      </div>
    </section>
  );
}
