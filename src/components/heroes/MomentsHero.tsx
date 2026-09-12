"use client";

import { useState, useEffect } from "react";
import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface MomentsHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function MomentsHero({ eyebrow, title, subtitle }: MomentsHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between overflow-hidden bg-on-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-on-surface/80 to-secondary/40" />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-[15%] right-[10%] w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-[20%] left-[5%] w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.5" />
        </svg>
        <span className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-white/20" />
        <span className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-white/15" />
        <span className="absolute bottom-[35%] right-[8%] w-1.5 h-1.5 rounded-full bg-white/25" />
      </div>

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-space-lg max-w-2xl">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0, ease }}
              >
                <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-white/10 backdrop-blur-sm text-white/80">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
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
            >
              <h1 className="font-headline text-headline-lg lg:text-headline-xl text-white leading-[1.05] tracking-tight">
                {title}
              </h1>
            </motion.div>

            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.24, ease }}
              >
                <p className="font-body text-body-lg text-white/70 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <SoundwaveBottom dark />
    </section>
  );
}
