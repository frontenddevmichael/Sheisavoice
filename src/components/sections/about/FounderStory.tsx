"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useParallax from "@/hooks/useParallax";

export default function FounderStory() {
  const { ref: decorRef, offset } = useParallax(0.1);

  return (
    <SectionWrapper className="relative py-space-5xl bg-surface-mid overflow-hidden grain" id="founder-story">
      {/* Parallax decorative quote mark */}
      <div
        ref={decorRef}
        className="parallax-layer absolute -left-8 top-1/4 opacity-[0.03] pointer-events-none"
        style={{ transform: `translateY(${offset}px)` }}
        aria-hidden="true"
      >
        <svg width="200" height="260" viewBox="0 0 200 260" fill="none">
          <path d="M80 100C80 60 110 20 160 0L180 30C140 50 120 70 120 100H160V200H80V100Z" fill="currentColor" className="text-primary" />
          <path d="M0 100C0 60 30 20 80 0L100 30C60 50 40 70 40 100H80V200H0V100Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center">
        <ScrollReveal animation="slow">
          <div className="flex flex-col items-center text-center mb-space-2xl">
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-lowest shadow-sm mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[16px]">mic_external_on</span>
              <span className="font-label-md text-label-md text-primary font-bold">
                Founder&apos;s Spoken Word Sanctuary
              </span>
            </span>
            <p className="font-label-lg text-label-lg text-on-surface-variant tracking-wide uppercase">
              Words from our Founder, Shola Amaraibi &bull; Poet, Advocate &amp; Visionary
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slow">
          <div className="w-full max-w-[620px] mx-auto bg-surface-lowest rounded-3xl p-space-xl sm:p-space-2xl shadow-[var(--shadow-card)]">
            <div className="flex flex-col gap-space-lg text-on-surface font-body text-body-lg text-left">
              <p className="leading-[1.85]">
                I&apos;ve often wondered how getting the right support as a child would have shaped me. Whether I would have understood myself sooner. Whether I would have found my voice earlier.
              </p>
              <p className="leading-[1.85]">
                I can&apos;t go back and answer that for myself. But I can answer it for a child standing where I once stood.
              </p>
              <p className="leading-[1.85]">
                I spent time outside Nigeria and saw what happens when children with special needs get the support they need. Systems built to help them learn, communicate and take part in life. Therapists who knew what to look for. Families who did not have to carry every challenge alone.
              </p>
              <p className="leading-[1.85]">
                Then I thought about children back home. Children who communicate in ways the world is not always patient enough to hear. Girls with something inside them and no room to say it. Families doing their best with no map and no help.
              </p>
              <p className="leading-[1.85]">
                These children were never without a voice. Their voices were unheard, misunderstood or unsupported. That is a different problem, and it is a solvable one.
              </p>
              <p className="leading-[1.85]">
                The name came later, and it came suddenly. I was on my way to catch a train when a question I had carried for years rose in me again. Who am I?
              </p>
              <p className="leading-[1.85]">
                The answer arrived quietly.
              </p>

              <div className="py-space-xl my-space-xs text-center">
                <span className="block font-headline text-headline-lg text-primary italic tracking-tight select-none">
                  &ldquo;She is a voice.&rdquo;
                </span>
                <div className="w-16 h-1 bg-secondary-container mx-auto mt-space-xs rounded-full" />
              </div>

              <p className="leading-[1.85]">
                Not you are. She. The answer did not come in my own voice, and it was not only about me. It was personal, but it was bigger than me. It was not only telling me who I was. It was showing me what to do with who I was.
              </p>
              <p className="leading-[1.85]">
                In May 2020 I began the work of SHEISAVOICE. In 2022 it was registered with Nigeria&apos;s Corporate Affairs Commission. But it did not begin with registration papers. It began with a question, a whisper and a decision.
              </p>
              <p className="leading-[1.85]">
                I was already a poet. I started asking more of my poetry. I did not want it only to move people for the length of a performance. I wanted it to leave something behind.
              </p>
              <p className="leading-[1.85]">
                I wanted my voice to do more than speak. I wanted it to help.
              </p>
              <p className="leading-[1.85]">
                So I began using my performances to raise funds for children with special needs. Not income from another show. Therapy for a child. A need a family could not meet alone. Room for a child to learn, participate and be seen.
              </p>
              <p className="leading-[1.85]">
                Voice is not only spoken words. A child may communicate through movement, behaviour, expression or technology. Every child has something to say. Every child deserves to be recognised, supported and given the chance to live with dignity.
              </p>
              <p className="leading-[1.85]">
                What began as a question about myself became a commitment to children and families.
              </p>

              <div className="py-space-xl my-space-xs text-center">
                <span className="block font-headline text-headline-lg text-secondary italic tracking-tight select-none">
                  &ldquo;She is a voice.&rdquo;
                </span>
                <div className="w-16 h-1 bg-tertiary-fixed-dim mx-auto mt-space-xs rounded-full" />
              </div>

              <p className="leading-[1.85] font-semibold text-primary">
                I found mine. Now I use it to help others find theirs.
              </p>

              <div className="pt-space-xl flex flex-col items-start gap-1">
                <span className="font-headline text-headline-sm text-primary tracking-tight">
                  Shola Amaraibi
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                  Founder, Poet &amp; Advocate
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
