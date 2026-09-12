"use client";

import { useState, useEffect } from "react";
import SoundwaveBottom from "@/components/ui/SoundwaveBottom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface AboutHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function AboutHero({ eyebrow, title, subtitle, children }: AboutHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between bg-surface overflow-hidden">
      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-5xl lg:pt-[8rem] pb-16 md:pb-20 lg:pb-[100px] w-full flex-1 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex gap-space-xl lg:gap-space-2xl items-start">
            <div className="hidden lg:flex flex-col items-center gap-space-xs pt-space-xs">
              <span className="w-px h-16 bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-px h-8 bg-outline-variant/40" />
            </div>

            <div className="flex flex-col gap-space-lg">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0, ease }}
                >
                  <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant">
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12, ease }}
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
                >
                  <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    {subtitle}
                  </p>
                </motion.div>
              )}

              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.36, ease }}
                >
                  {children}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SoundwaveBottom />
    </section>
  );
}
