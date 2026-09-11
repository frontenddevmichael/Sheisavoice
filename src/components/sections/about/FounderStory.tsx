"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

export default function FounderStory() {
  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-lowest overflow-hidden" id="founder-story">
      <FloatingShapes variant="sparse" />
      <BackgroundPattern variant="dots" />
      <div className="relative max-w-[var(--max-w-content)] mx-auto">
        {/* Header */}
        <ScrollReveal animation="up">
          <div className="flex flex-col items-center text-center mb-space-3xl">
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[16px]">mic_external_on</span>
              <span className="font-label-md text-label-md font-bold">Founder&apos;s Voice</span>
            </span>
            <h2 className="font-headline text-headline-lg lg:text-headline-xl text-primary tracking-tight">
              The Story Behind the Name
            </h2>
          </div>
        </ScrollReveal>

        {/* Main content — two-column editorial on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          {/* Left: main text */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                I&apos;ve often wondered how getting the right support as a child would have shaped me. Whether I would have understood myself sooner. Whether I would have found my voice earlier.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                I can&apos;t go back and answer that for myself. But I can answer it for a child standing where I once stood.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                I spent time outside Nigeria and saw what happens when children with special needs get the support they need. Systems built to help them learn, communicate and take part in life. Therapists who knew what to look for. Families who did not have to carry every challenge alone.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                Then I thought about children back home. Children who communicate in ways the world is not always patient enough to hear. Girls with something inside them and no room to say it. Families doing their best with no map and no help.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                These children were never without a voice. Their voices were unheard, misunderstood or unsupported. That is a different problem, and it is a solvable one.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface leading-[1.9]">
                The name came later, and it came suddenly. I was on my way to catch a train when a question I had carried for years rose in me again. <span className="font-semibold text-primary">Who am I?</span>
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up">
              <p className="font-body text-body-lg text-on-surface-variant italic leading-[1.9]">
                The answer arrived quietly.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: decorative elements + pull quote */}
          <div className="lg:col-span-5 flex flex-col gap-space-2xl lg:sticky lg:top-32">
            {/* Large pull quote */}
            <ScrollReveal animation="right">
              <div className="relative overflow-hidden">
                {/* Decorative quote mark */}
                <span className="absolute -top-8 -left-4 text-[80px] md:text-[100px] lg:text-[120px] font-headline text-primary/[0.06] leading-none select-none pointer-events-none">
                  &ldquo;
                </span>
                <div className="relative bg-gradient-to-br from-primary via-primary-container to-secondary p-space-2xl rounded-3xl shadow-[var(--shadow-elevated)]">
                  <span className="block font-headline text-headline-xl text-on-primary font-bold leading-[1.1] tracking-tight">
                    She is a voice.
                  </span>
                  {/* Soundwave decoration */}
                  <div className="flex items-end gap-[3px] mt-space-lg h-6" aria-hidden="true">
                    {[12, 18, 8, 22, 14, 20, 10, 16, 24, 12, 18, 8, 14, 20, 16].map((h, i) => (
                      <div
                        key={i}
                        className="w-[3px] bg-on-primary/30 rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Author attribution */}
            <ScrollReveal animation="right">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-primary">person</span>
                </div>
                <div>
                  <span className="block font-headline text-headline-sm text-primary">Shola Amaraibi</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Founder, Poet &amp; Advocate</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom continuation — full width */}
        <div className="mt-space-3xl flex flex-col gap-space-xl max-w-3xl mx-auto">
          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              Not you are. She. The answer did not come in my own voice, and it was not only about me. It was personal, but it was bigger than me. It was not only telling me who I was. It was showing me what to do with who I was.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              In May 2020 I began the work of SHEISAVOICE. In 2022 it was registered with Nigeria&apos;s Corporate Affairs Commission. But it did not begin with registration papers. It began with a question, a whisper and a decision.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              I was already a poet. I started asking more of my poetry. I did not want it only to move people for the length of a performance. I wanted it to leave something behind.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              I wanted my voice to do more than speak. I wanted it to <span className="font-semibold text-primary">help</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              So I began using my performances to raise funds for children with special needs. Not income from another show. Therapy for a child. A need a family could not meet alone. Room for a child to learn, participate and be seen.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              Voice is not only spoken words. A child may communicate through movement, behaviour, expression or technology. Every child has something to say. Every child deserves to be recognised, supported and given the chance to live with dignity.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface leading-[1.9]">
              What began as a question about myself became a commitment to children and families.
            </p>
          </ScrollReveal>

          {/* Second pull quote */}
          <ScrollReveal animation="up">
            <div className="py-space-2xl text-center">
              <span className="block font-headline text-headline-lg text-secondary italic tracking-tight">
                &ldquo;She is a voice.&rdquo;
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <p className="font-body text-body-lg text-on-surface font-semibold text-center leading-[1.9]">
              I found mine. Now I use it to help others find theirs.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
