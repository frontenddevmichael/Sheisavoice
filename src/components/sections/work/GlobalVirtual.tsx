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
      className="relative bg-surface-lowest py-space-5xl overflow-hidden"
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
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                A continental and diaspora bridge for families seeking guidance.
              </p>

              <div className="flex flex-col gap-space-md">
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  SHEISAVOICE was built with a global vision. While our in-person therapy partnerships
                  are currently based in Nigeria, we are building toward virtual consultation and
                  support options for special needs families anywhere in the diaspora or beyond.
                </p>
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  If you are outside Nigeria and would like guidance, a virtual consultation, or to
                  be notified when direct support opens in your region, register your interest below
                  and our team will reach out.
                </p>
              </div>

              <p className="font-body text-body-sm text-on-surface-variant/80 pt-space-sm">
                Privacy safeguarded. All family information remains strictly confidential and non-public.
              </p>
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
                      Thank you. Your family has been securely placed on our international consultation list.
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
                    className="px-7 py-3 rounded-xl bg-surface-mid text-on-surface font-label-md font-semibold hover:bg-surface-high transition-all duration-200"
                  >
                    Submit Another Registration
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-space-lg">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">public</span>
                      </div>
                      <div>
                        <h3 className="font-headline text-headline-sm text-primary">
                          Global Consultation Waitlist
                        </h3>
                        <p className="font-body text-body-sm text-on-surface-variant">
                          Early registration for international telehealth coordination
                        </p>
                      </div>
                    </div>
                    <Badge variant="gold">Waitlist Only</Badge>
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
                        Email Address
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
                          Country of Residence
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
                          required
                          value={formData.childAge}
                          onChange={handleChange}
                          className="w-full px-space-md py-space-sm rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="e.g. 7"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="global-supportType" className="font-label-md text-label-md text-on-surface font-semibold">
                        Type of Support Needed
                      </label>
                      <div className="relative">
                        <select
                          id="global-supportType"
                          name="supportType"
                          required
                          value={formData.supportType}
                          onChange={handleChange}
                          className="w-full px-space-md py-space-sm pr-10 rounded-xl border border-outline-variant/40 bg-surface-low text-on-surface font-body text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                        >
                          <option value="" disabled>Select the type of support needed</option>
                          <option value="speech">Speech therapy guidance</option>
                          <option value="autism">Autism resources and sensory coordination</option>
                          <option value="sensory">Sensory &amp; behavioral support</option>
                          <option value="general">General developmental consultation</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </span>
                      </div>
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

                    <button
                      type="submit"
                      className="w-full px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md font-semibold tracking-wide hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                    >
                      Join the Global Waitlist
                    </button>

                    <p className="font-body text-body-xs text-on-surface-variant/80 text-center">
                      Not a live booking flow. This registers your interest for future virtual services.
                    </p>
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
