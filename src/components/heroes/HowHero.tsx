"use client";

import { useState, useEffect } from "react";
import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface HowHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  steps?: { label: string; icon: string }[];
}

export default function HowHero({ eyebrow, title, subtitle, steps = [] }: HowHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0, ease }}
              className="mb-space-lg"
            >
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-tertiary-fixed/20 text-on-tertiary-fixed">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wider uppercase">
                  {eyebrow}
                </span>
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mb-space-lg"
          >
            <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
              {title}
            </h1>
          </motion.div>

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="mb-space-2xl"
            >
              <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </motion.div>
          )}

          {steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.36, ease }}
              className="w-full max-w-3xl"
            >
              <div className="flex items-center justify-between relative gap-2 overflow-hidden">
                <div className="absolute top-3 left-0 right-0 h-px bg-outline-variant/40" />
                {steps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-space-xs relative z-10 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-tertiary-fixed-dim flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed">{step.icon}</span>
                    </span>
                    <span className="font-label-sm text-on-surface-variant text-center leading-tight">{step.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <SoundwaveBottom />
    </section>
  );
}
