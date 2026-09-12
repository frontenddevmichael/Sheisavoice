"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { WordReveal, SplitReveal, ScaleBlur, CurtainReveal } from "@/components/ui/Motion";
import { useFormValidation } from "@/hooks/useFormValidation";

export default function ContactSplitSection() {
  // Message form state
  const [messageForm, setMessageForm] = useState({
    name: "", email: "", phone: "", interest: "", message: "",
  });
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [messageSubmitting, setMessageSubmitting] = useState(false);

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "", email: "", phone: "", areaOfInterest: "", volunteerOutreach: "", messagePosition: "",
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);

  // Donation state
  const [activeTab, setActiveTab] = useState<"nigeria" | "international">("nigeria");
  const [copied, setCopied] = useState(false);

  // Validation
  const messageValidation = useFormValidation({
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    interest: { required: true },
    message: { required: true, minLength: 10 },
  });

  const volunteerValidation = useFormValidation({
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    areaOfInterest: { required: true },
  });

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageValidation.validate(messageForm)) return;
    setMessageSubmitting(true);
    setTimeout(() => {
      setMessageSubmitted(true);
      setMessageSubmitting(false);
      setMessageForm({ name: "", email: "", phone: "", interest: "", message: "" });
      messageValidation.clearAllErrors();
    }, 800);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerValidation.validate(volunteerForm)) return;
    setVolunteerSubmitting(true);
    setTimeout(() => {
      setVolunteerSubmitted(true);
      setVolunteerSubmitting(false);
      setVolunteerForm({ name: "", email: "", phone: "", areaOfInterest: "", volunteerOutreach: "", messagePosition: "" });
      volunteerValidation.clearAllErrors();
    }, 800);
  };

  const handleCopyAccount = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(SITE.bankAccount).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        fallbackCopy(SITE.bankAccount);
      });
    } else {
      fallbackCopy(SITE.bankAccount);
    }
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail
    }
    document.body.removeChild(textarea);
  };

  const inputClasses =
    "w-full px-space-lg py-space-sm rounded-card bg-surface-mid border font-body text-base text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-surface-low transition-all duration-200";
  const inputErrorClasses = "border-red-400 focus:ring-red-300/40 focus:border-red-400";
  const inputNormalClasses = "border-outline-variant/30";
  const radioClasses =
    "flex items-center gap-space-sm px-space-md py-space-sm rounded-card bg-surface-mid border border-outline-variant/30 font-body text-body-sm text-on-surface-variant cursor-pointer hover:border-primary/40 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary-fixed/30 has-[:checked]:text-on-surface";

  return (
    <SectionWrapper className="bg-surface-lowest py-space-5xl relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
        {/* LEFT: Forms (60%) */}
        <div className="lg:col-span-7 flex flex-col gap-space-xl">
          <div>
            <SplitReveal delay={0.1}>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-md">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-md text-label-md tracking-wider uppercase">Direct Engagement</span>
              </span>
            </SplitReveal>
            <WordReveal
              text="Connect With Our Team"
              as="h2"
              className="font-headline text-headline-lg text-primary tracking-tight"
              staggerDelay={0.06}
            />
          </div>

          <div className="flex flex-col gap-space-xl">
            {/* Send a Message — scale blur */}
            <ScaleBlur delay={0.2} scale={0.96} blur={3}>
              <Card>
                <h3 className="font-headline text-headline-sm text-primary mb-space-lg">
                  Send a Message
                </h3>
                {messageSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-space-2xl gap-space-md text-center">
                    <span className="material-symbols-outlined text-[40px] text-primary">check_circle</span>
                    <p className="font-headline text-headline-sm text-primary font-bold">Message Sent!</p>
                    <p className="font-body text-body-sm text-on-surface-variant">
                      Our team will get back to you within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-name" className="font-label-sm text-on-surface-variant font-semibold">
                        Full Name <span className="text-secondary">*</span>
                      </label>
                      <input id="msg-name" type="text" required value={messageForm.name}
                        onChange={(e) => { setMessageForm({ ...messageForm, name: e.target.value }); messageValidation.clearError("name"); }}
                        placeholder="Your full name" className={`${inputClasses} ${messageValidation.errors.name ? inputErrorClasses : inputNormalClasses}`} />
                      {messageValidation.errors.name && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {messageValidation.errors.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-email" className="font-label-sm text-on-surface-variant font-semibold">
                        Email <span className="text-secondary">*</span>
                      </label>
                      <input id="msg-email" type="email" required value={messageForm.email}
                        onChange={(e) => { setMessageForm({ ...messageForm, email: e.target.value }); messageValidation.clearError("email"); }}
                        placeholder="you@example.com" className={`${inputClasses} ${messageValidation.errors.email ? inputErrorClasses : inputNormalClasses}`} />
                      {messageValidation.errors.email && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {messageValidation.errors.email}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone</label>
                      <input id="msg-phone" type="tel" value={messageForm.phone}
                        onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX" className={`${inputClasses} ${inputNormalClasses}`} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-interest" className="font-label-sm text-on-surface-variant font-semibold">
                        How would you like to help? <span className="text-secondary">*</span>
                      </label>
                      <div className="relative">
                        <select id="msg-interest" required value={messageForm.interest}
                          onChange={(e) => { setMessageForm({ ...messageForm, interest: e.target.value }); messageValidation.clearError("interest"); }}
                          className={`${inputClasses} appearance-none pr-10 ${messageValidation.errors.interest ? inputErrorClasses : inputNormalClasses}`}>
                          <option value="" disabled>Select your interest</option>
                          <option value="volunteer">Volunteer</option>
                          <option value="donate">Donate</option>
                          <option value="partner">Partner</option>
                          <option value="advocacy">Child therapy advocacy</option>
                          <option value="community">Community awareness</option>
                          <option value="other">Other</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </span>
                      </div>
                      {messageValidation.errors.interest && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {messageValidation.errors.interest}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-message" className="font-label-sm text-on-surface-variant font-semibold">
                        Message <span className="text-secondary">*</span>
                      </label>
                      <textarea id="msg-message" required rows={3} value={messageForm.message}
                        onChange={(e) => { setMessageForm({ ...messageForm, message: e.target.value }); messageValidation.clearError("message"); }}
                        placeholder="Tell us how you'd like to get involved..."
                        className={`${inputClasses} resize-none ${messageValidation.errors.message ? inputErrorClasses : inputNormalClasses}`} />
                      {messageValidation.errors.message && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {messageValidation.errors.message}
                        </span>
                      )}
                    </div>
                    <button type="submit"
                      disabled={messageSubmitting}
                      className="w-full mt-space-xs px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-md font-semibold tracking-wide hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                      {messageSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </Card>
            </ScaleBlur>

            {/* Volunteer — scale blur with delay */}
            <ScaleBlur delay={0.35} scale={0.96} blur={3}>
              <Card>
                <h3 className="font-headline text-headline-sm text-secondary mb-space-lg">
                  Volunteer & Partner
                </h3>
                {volunteerSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-space-2xl gap-space-md text-center">
                    <span className="material-symbols-outlined text-[40px] text-secondary">check_circle</span>
                    <p className="font-headline text-headline-sm text-secondary font-bold">Received!</p>
                    <p className="font-body text-body-sm text-on-surface-variant">
                      We will reach out to discuss next steps.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-name" className="font-label-sm text-on-surface-variant font-semibold">
                        Name or Organization <span className="text-secondary">*</span>
                      </label>
                      <input id="vol-name" type="text" required value={volunteerForm.name}
                        onChange={(e) => { setVolunteerForm({ ...volunteerForm, name: e.target.value }); volunteerValidation.clearError("name"); }}
                        placeholder="Your name or organization" className={`${inputClasses} ${volunteerValidation.errors.name ? inputErrorClasses : inputNormalClasses}`} />
                      {volunteerValidation.errors.name && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {volunteerValidation.errors.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-email" className="font-label-sm text-on-surface-variant font-semibold">
                        Email <span className="text-secondary">*</span>
                      </label>
                      <input id="vol-email" type="email" required value={volunteerForm.email}
                        onChange={(e) => { setVolunteerForm({ ...volunteerForm, email: e.target.value }); volunteerValidation.clearError("email"); }}
                        placeholder="you@example.com" className={`${inputClasses} ${volunteerValidation.errors.email ? inputErrorClasses : inputNormalClasses}`} />
                      {volunteerValidation.errors.email && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {volunteerValidation.errors.email}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone / WhatsApp</label>
                      <input id="vol-phone" type="tel" value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX" className={`${inputClasses} ${inputNormalClasses}`} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-area" className="font-label-sm text-on-surface-variant font-semibold">
                        Area of Interest <span className="text-secondary">*</span>
                      </label>
                      <div className="relative">
                        <select id="vol-area" required value={volunteerForm.areaOfInterest}
                          onChange={(e) => { setVolunteerForm({ ...volunteerForm, areaOfInterest: e.target.value }); volunteerValidation.clearError("areaOfInterest"); }}
                          className={`${inputClasses} appearance-none pr-10 ${volunteerValidation.errors.areaOfInterest ? inputErrorClasses : inputNormalClasses}`}>
                          <option value="" disabled>Select your area of interest</option>
                          <option value="therapy">Child therapy advocacy</option>
                          <option value="community">Community awareness</option>
                          <option value="volunteering">Strategic volunteering</option>
                          <option value="corporate">Corporate partnerships</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </span>
                      </div>
                      {volunteerValidation.errors.areaOfInterest && (
                        <span className="flex items-center gap-1 text-red-500 text-[13px] font-body mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">error</span>
                          {volunteerValidation.errors.areaOfInterest}
                        </span>
                      )}
                    </div>
                    <fieldset className="flex flex-col gap-space-xs border-0 p-0 m-0">
                      <legend className="font-label-sm text-on-surface-variant font-semibold">Available for volunteer outreach collaboration?</legend>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                        {["Yes", "Open to discuss", "Not now"].map((option) => (
                          <label key={option} className={radioClasses}>
                            <input type="radio" name="volunteerOutreach" value={option}
                              checked={volunteerForm.volunteerOutreach === option}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, volunteerOutreach: e.target.value })}
                              className="accent-primary" />
                            {option}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-message" className="font-label-sm text-on-surface-variant font-semibold">Message or Position</label>
                      <textarea id="vol-message" rows={3} value={volunteerForm.messagePosition}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, messagePosition: e.target.value })}
                        placeholder="Tell us about your interest or proposed role..."
                        className={`${inputClasses} resize-none`} />
                    </div>
                    <button type="submit"
                      disabled={volunteerSubmitting}
                      className="w-full mt-space-xs px-7 py-3.5 rounded-xl bg-gradient-to-r from-secondary to-secondary-fixed text-on-secondary font-label-md font-semibold tracking-wide hover:shadow-[0_4px_20px_rgba(200,100,50,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                      {volunteerSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-on-secondary/30 border-t-on-secondary rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : "Submit Registration"}
                    </button>
                  </form>
                )}
              </Card>
            </ScaleBlur>
          </div>
        </div>

        {/* RIGHT: Donation (40%) */}
        <div className="lg:col-span-5 flex flex-col gap-space-xl">
          <div>
            <SplitReveal delay={0.15}>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-md">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wider uppercase">Support Our Work</span>
              </span>
            </SplitReveal>
            <WordReveal
              text="Make a Difference"
              as="h2"
              className="font-headline text-headline-md text-primary tracking-tight"
              staggerDelay={0.06}
            />
          </div>

          {/* Tab switcher */}
          <SplitReveal delay={0.25}>
            <div className="inline-flex bg-surface-mid rounded-full p-1 shadow-sm w-fit" role="tablist">
              <button role="tab" aria-selected={activeTab === "nigeria"}
                onClick={() => setActiveTab("nigeria")}
                className={`px-space-lg py-space-xs rounded-full font-label-sm transition-all duration-300 ${
                  activeTab === "nigeria" ? "bg-primary text-on-primary shadow-md" : "text-on-surface-variant hover:text-primary"
                }`}>
                Nigeria
              </button>
              <button role="tab" aria-selected={activeTab === "international"}
                onClick={() => setActiveTab("international")}
                className={`px-space-lg py-space-xs rounded-full font-label-sm transition-all duration-300 ${
                  activeTab === "international" ? "bg-primary text-on-primary shadow-md" : "text-on-surface-variant hover:text-primary"
                }`}>
                International
              </button>
            </div>
          </SplitReveal>

          {/* Donation cards — scale blur */}
          <ScaleBlur delay={0.3} scale={0.96} blur={3}>
            {activeTab === "nigeria" ? (
              <Card className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-primary">credit_card</span>
                  <h3 className="font-headline text-headline-sm text-primary">Online Contribution</h3>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Secure one-time or recurring contribution via Paystack. All major Nigerian debit cards, USSD, and bank transfers accepted.
                </p>
                <Button href={SITE.paystackUrl} external variant="primary" size="md" aria-label="Donate now via Paystack">
                  Donate Now
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </Button>

                <div className="h-px bg-outline-variant/20" />

                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-primary">account_balance</span>
                  <h3 className="font-headline text-headline-sm text-primary">Bank Transfer</h3>
                </div>
                <div className="bg-surface-mid rounded-card p-space-md flex flex-col gap-space-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Bank</span>
                    <span className="font-body text-body-sm font-semibold text-on-surface">{SITE.bankName}</span>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Account Name</span>
                    <span className="font-body text-body-sm font-semibold text-on-surface text-right max-w-[180px]">{SITE.bankAccountName}</span>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Account No.</span>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-body text-body-md font-bold text-primary">{SITE.bankAccount}</span>
                      <button onClick={handleCopyAccount} className="p-1 rounded-full hover:bg-surface-high transition-colors" aria-label="Copy account number to clipboard">
                        <span className="material-symbols-outlined text-[16px] text-primary">{copied ? "check_circle" : "content_copy"}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-body text-body-xs text-on-surface-variant/80">
                  {copied ? "Copied!" : "Tap copy icon to copy account number."}
                </p>
              </Card>
            ) : (
              <Card className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-secondary">public</span>
                  <h3 className="font-headline text-headline-sm text-secondary">International Donation</h3>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Contribute securely via Paystack with Visa or Mastercard. All transactions processed in your local currency with full exchange rate transparency.
                </p>
                <Button href={SITE.paystackUrl} external variant="secondary" size="md" aria-label="Donate internationally via Paystack">
                  Donate Internationally
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </Button>

                <div className="h-px bg-outline-variant/20" />

                <div className="flex flex-col gap-space-sm">
                  {[
                    { icon: "medical_services", title: "Specialized Therapy", desc: "Direct clinical hours for children with developmental needs." },
                    { icon: "school", title: "School Inclusion Aid", desc: "Educational subsidies and classroom resources." },
                    { icon: "emergency", title: "Emergency Provisions", desc: "Rapid-response funding for urgent health and nutritional needs." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-space-sm items-start">
                      <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">{item.icon}</span>
                      <div>
                        <h4 className="font-body text-body-sm font-semibold text-on-surface">{item.title}</h4>
                        <p className="font-body text-body-xs text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </ScaleBlur>

          {/* Accountability */}
          <SplitReveal delay={0.4}>
            <div className="rounded-card bg-primary-fixed/20 border border-primary-fixed/30 p-space-md flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
              <p className="font-body text-body-sm text-on-surface">
                100% of donations support clinical therapy, education, and verified community programs.
              </p>
            </div>
          </SplitReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
