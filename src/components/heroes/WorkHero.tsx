"use client";

import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface WorkHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function WorkHero({ eyebrow, title, subtitle, children }: WorkHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-xl">
            {/* Left: text content */}
            <div className="flex flex-col gap-space-lg max-w-3xl">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: 0, ease }}
                >
                  <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-secondary-container/30 text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-label-md text-label-md tracking-wider uppercase">
                      {eyebrow}
                    </span>
                  </span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.12, ease }}
              >
                <h1 className="font-headline text-headline-lg lg:text-headline-xl text-primary leading-[1.05] tracking-tight">
                  {title}
                </h1>
              </motion.div>

              {subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: 0.24, ease }}
                >
                  <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    {subtitle}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right: jump nav */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.36, ease }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <SoundwaveBottom />
    </section>
  );
}
