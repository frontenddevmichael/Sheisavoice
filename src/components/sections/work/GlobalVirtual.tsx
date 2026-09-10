"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export default function GlobalVirtual() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    childAge: "",
    supportType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper
      id="global-support"
      className="relative bg-surface-low py-space-5xl overflow-hidden"
    >
      <NoiseOverlay />
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative z-10">
        <div className="flex items-center gap-space-xs mb-space-lg">
          <span className="inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
            03 / Continental &amp; Diaspora Reach
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          {/* Left: Narrative (6 cols) */}
          <ScrollReveal className="lg:col-span-6" animation="up">
            <div className="flex flex-col gap-space-lg">
              <h2 className="font-headline text-headline-lg text-primary">
                Support for Families Outside Nigeria
              </h2>

              <div className="flex flex-col gap-space-md">
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Our vision is continental and global: to ensure that families anywhere in the world
                  can access dignified, specialized support for children with developmental needs
                  and university students facing financial barriers, regardless of geographic
                  location.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  Through our Global Virtual Support program, we are building pathways for
                  telehealth consultations, virtual therapy coordination, and family guidance
                  services that extend our mission beyond Nigeria and across the African diaspora.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  If you are a family, caregiver, or student outside Nigeria seeking support, join
                  our waitlist and we will reach out as virtual services become available in your
                  region.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-space-sm">
                <Badge variant="primary">Telehealth Consultations</Badge>
                <Badge variant="coral">Virtual Therapy Coordination</Badge>
                <Badge variant="gold">Diaspora Family Guidance</Badge>
                <Badge variant="plum-light">Continental Expansion</Badge>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Waitlist Form (6 cols) */}
          <ScrollReveal className="lg:col-span-6" animation="right" delay={100}>
            <div className="rounded-card-lg bg-surface-lowest p-space-xl lg:p-space-2xl shadow-[var(--shadow-card)]">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-space-lg py-space-xl">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline text-headline-sm text-primary">
                      You&apos;re on the Waitlist
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                      Thank you, {formData.fullName}. We have received your information and will
                      contact you at {formData.email} as virtual support services become available
                      in your region.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        country: "",
                        childAge: "",
                        supportType: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-mid text-primary hover:bg-surface-high transition-all text-label-md font-label-md"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-space-sm mb-space-lg">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">public</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-headline-sm text-primary">
                        Global Waitlist
                      </h3>
                      <p className="font-body text-body-sm text-on-surface-variant">
                        Join the queue for virtual support services
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="global-fullName" className="font-label-md text-label-md text-on-surface font-semibold">
                        Full Name
                      </label>
                      <input
                        id="global-fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="global-email" className="font-label-md text-label-md text-on-surface font-semibold">
                        Email
                      </label>
                      <input
                        id="global-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-2xs">
                        <label htmlFor="global-country" className="font-label-md text-label-md text-on-surface font-semibold">
                          Country
                        </label>
                        <input
                          id="global-country"
                          name="country"
                          type="text"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="e.g. United Kingdom"
                        />
                      </div>
                      <div className="flex flex-col gap-space-2xs">
                        <label htmlFor="global-childAge" className="font-label-md text-label-md text-on-surface font-semibold">
                          Child&apos;s Age
                        </label>
                        <input
                          id="global-childAge"
                          name="childAge"
                          type="text"
                          value={formData.childAge}
                          onChange={handleChange}
                          className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="e.g. 7"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="global-supportType" className="font-label-md text-label-md text-on-surface font-semibold">
                        Support Type
                      </label>
                      <select
                        id="global-supportType"
                        name="supportType"
                        required
                        value={formData.supportType}
                        onChange={handleChange}
                        className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="" disabled>Select the type of support needed</option>
                        <option value="special-needs">Special Needs Therapy</option>
                        <option value="speech-therapy">Speech &amp; Language Therapy</option>
                        <option value="occupational">Occupational Therapy</option>
                        <option value="university">University Education Support</option>
                        <option value="family-counseling">Family Counseling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="global-message" className="font-label-md text-label-md text-on-surface font-semibold">
                        Message
                      </label>
                      <textarea
                        id="global-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        placeholder="Tell us about your situation..."
                      />
                    </div>

                    <p className="font-body text-body-sm text-on-surface-variant leading-snug">
                      Your information is kept strictly confidential and used only to assess and
                      coordinate support. We do not share personal data with third parties.
                    </p>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary-container text-surface-lowest hover:bg-primary transition-all duration-300 shadow-[0_12px_28px_rgba(62,0,94,0.22)] hover:-translate-y-0.5 font-label-md text-label-md"
                    >
                      <span>Join the Waitlist</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
