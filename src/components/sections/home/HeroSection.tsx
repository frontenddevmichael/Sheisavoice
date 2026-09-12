"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import FloatingElements from "@/components/ui/FloatingElements";
import { LeafFlow } from "@/components/ui/AnkaraPatterns";
import { motion } from "framer-motion";

const ease = [0.33, 1, 0.68, 1] as const;

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative w-full bg-surface min-h-[85vh] flex flex-col justify-between overflow-hidden">
      <LeafFlow
        color="var(--color-primary)"
        opacity={0.08}
        className="absolute top-0 right-0 w-[400px] h-[400px] -translate-y-1/4 translate-x-1/4"
      />
      <FloatingElements />

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-3xl lg:pt-[10rem] pb-[80px] lg:pb-[120px] w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            className="mb-space-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
              <span className="font-label-md text-label-md tracking-wide">
                SHEISAVOICE Global Children Advocacy Foundation
              </span>
            </span>
          </motion.div>

          {/* Headline — word by word, state-based */}
          <div className="mb-space-lg">
            <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
              <span className="sr-only">Amplifying the Voice of the Unheard</span>
              <span aria-hidden="true" className="flex flex-wrap">
                {["Amplifying", "the", "Voice", "of", "the", "Unheard"].map((word, i) => (
                  <span key={i} className="overflow-hidden mr-[0.3em]">
                    <motion.span
                      className={`inline-block ${word === "Unheard" ? "text-secondary relative" : ""}`}
                      initial={{ y: "110%" }}
                      animate={mounted ? { y: "0%" } : {}}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.07, ease }}
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
          <motion.div
            className="mb-space-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease }}
          >
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              SHEISAVOICE is a social impact and advocacy organization committed to supporting
              children with special needs and students facing financial hardship, giving them access
              to care, education, and opportunity across Africa.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mb-space-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.95, ease }}
          >
            <div className="flex flex-wrap items-center gap-space-md">
              <Button href="/contact" variant="primary" size="lg">
                Support Our Work
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
              <Button href="/our-work" variant="secondary" size="lg">
                See Our Programs
              </Button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1, ease }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
