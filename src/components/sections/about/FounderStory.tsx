"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { WordReveal, SplitReveal, ScaleBlur, CurtainReveal, ParallaxY } from "@/components/ui/Motion";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/useOnScreen";

export default function FounderStory() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-lowest overflow-hidden" id="founder-story">

      <div className="relative max-w-[var(--max-w-content)] mx-auto">
        {/* Header — word reveal */}
        <div className="flex flex-col items-center text-center mb-space-3xl">
          <SplitReveal delay={0.1}>
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[16px]">mic_external_on</span>
              <span className="font-label-md text-label-md font-bold">Founder&apos;s Voice</span>
            </span>
          </SplitReveal>
          <WordReveal
            text="The Story Behind the Name"
            as="h2"
            className="font-headline text-headline-lg lg:text-headline-xl text-primary tracking-tight"
            staggerDelay={0.05}
          />
        </div>

        {/* Main content — two-column editorial on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          {/* Left: main text — each paragraph reveals from different direction */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            {[
              "I&apos;ve often wondered how getting the right support as a child would have shaped me. Whether I would have understood myself sooner. Whether I would have found my voice earlier.",
              "I can&apos;t go back and answer that for myself. But I can answer it for a child standing where I once stood.",
              "I spent time outside Nigeria and saw what happens when children with special needs get the support they need. Systems built to help them learn, communicate and take part in life. Therapists who knew what to look for. Families who did not have to carry every challenge alone.",
              "Then I thought about children back home. Children who communicate in ways the world is not always patient enough to hear. Girls with something inside them and no room to say it. Families doing their best with no map and no help.",
              "These children were never without a voice. Their voices were unheard, misunderstood or unsupported. That is a different problem, and it is a solvable one.",
            ].map((text, i) => (
              <SplitReveal key={i} delay={0.15 + i * 0.08}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  {text}
                </p>
              </SplitReveal>
            ))}

            <SplitReveal delay={0.55}>
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                The name came later, and it came suddenly. I was on my way to catch a train when a question I had carried for years rose in me again. <span className="font-semibold text-primary">Who am I?</span>
              </p>
            </SplitReveal>

            <SplitReveal delay={0.6}>
              <p className="font-body text-body-lg text-on-surface-variant italic leading-[1.9]">
                The answer arrived quietly.
              </p>
            </SplitReveal>
          </div>

          {/* Right: pull quote — scale blur + curtain */}
          <div className="lg:col-span-5 flex flex-col gap-space-2xl lg:sticky lg:top-32">
            {/* Large pull quote — curtain reveal */}
            <CurtainReveal delay={0.2}>
              <div className="relative overflow-hidden">
                <span className="absolute -top-8 -left-4 text-[80px] md:text-[100px] lg:text-[120px] font-headline text-primary/[0.06] leading-none select-none pointer-events-none">
                  &ldquo;
                </span>
                <div className="relative bg-primary p-space-2xl rounded-card-lg">
                  <span className="block font-headline text-headline-xl text-on-primary font-bold leading-[1.1] tracking-tight">
                    She is a voice.
                  </span>
                  {/* Soundwave decoration — floating */}
                  <SoundwaveBars />
                </div>
              </div>
            </CurtainReveal>

            {/* Author attribution — scale blur */}
            <ScaleBlur delay={0.4} scale={0.9}>
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-primary">person</span>
                </div>
                <div>
                  <span className="block font-headline text-headline-sm text-primary">Shola Amaraibi</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Founder, Poet &amp; Advocate</span>
                </div>
              </div>
            </ScaleBlur>
          </div>
        </div>

        {/* Bottom continuation — parallax + staggered reveals */}
        <div className="mt-space-3xl flex flex-col gap-space-xl max-w-3xl mx-auto">
          <ParallaxY speed={10}>
            <div className="flex flex-col gap-space-xl">
              <SplitReveal delay={0.1}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  Not you are. She. The answer did not come in my own voice, and it was not only about me. It was personal, but it was bigger than me. It was not only telling me who I was. It was showing me what to do with who I was.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.18}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  In May 2020 I began the work of SHEISAVOICE. In 2022 it was registered with Nigeria&apos;s Corporate Affairs Commission. But it did not begin with registration papers. It began with a question, a whisper and a decision.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.26}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  I was already a poet. I started asking more of my poetry. I did not want it only to move people for the length of a performance. I wanted it to leave something behind.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.34}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  I wanted my voice to do more than speak. I wanted it to <span className="font-semibold text-primary">help</span>.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.42}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  So I began using my performances to raise funds for children with special needs. Not income from another show. Therapy for a child. A need a family could not meet alone. Room for a child to learn, participate and be seen.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.5}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  Voice is not only spoken words. A child may communicate through movement, behaviour, expression or technology. Every child has something to say. Every child deserves to be recognised, supported and given the chance to live with dignity.
                </p>
              </SplitReveal>

              <SplitReveal delay={0.58}>
                <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                  What began as a question about myself became a commitment to children and families.
                </p>
              </SplitReveal>
            </div>
          </ParallaxY>

          {/* Second pull quote — scale blur */}
          <ScaleBlur delay={0.1}>
            <div className="py-space-2xl text-center">
              <span className="block font-headline text-headline-lg text-secondary italic tracking-tight">
                &ldquo;She is a voice.&rdquo;
              </span>
            </div>
          </ScaleBlur>

          <SplitReveal delay={0.2}>
            <p className="font-body text-body-lg text-on-surface font-semibold text-center leading-[1.9]">
              I found mine. Now I use it to help others find theirs.
            </p>
          </SplitReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SoundwaveBars() {
  const { ref, visible } = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className="flex items-end gap-[3px] mt-space-lg h-6"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.8 }}
    >
      {[12, 18, 8, 22, 14, 20, 10, 16, 24, 12, 18, 8, 14, 20, 16].map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-on-primary/30 rounded-full"
          initial={{ height: 0 }}
          animate={visible ? { height: h } : { height: 0 }}
          transition={{ delay: 0.9 + i * 0.03, duration: 0.4 }}
        />
      ))}
    </motion.div>
  );
}
