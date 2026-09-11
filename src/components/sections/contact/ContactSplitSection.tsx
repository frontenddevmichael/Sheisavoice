"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function ContactSplitSection() {
  // Message form state
  const [messageForm, setMessageForm] = useState({
    name: "", email: "", phone: "", interest: "", message: "",
  });
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "", email: "", phone: "", areaOfInterest: "", volunteerOutreach: "", messagePosition: "",
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Donation state
  const [activeTab, setActiveTab] = useState<"nigeria" | "international">("nigeria");
  const [copied, setCopied] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSubmitted(true);
    setMessageForm({ name: "", email: "", phone: "", interest: "", message: "" });
    setTimeout(() => setMessageSubmitted(false), 4000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setVolunteerForm({ name: "", email: "", phone: "", areaOfInterest: "", volunteerOutreach: "", messagePosition: "" });
    setTimeout(() => setVolunteerSubmitted(false), 4000);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(SITE.bankAccount).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputClasses =
    "w-full px-space-lg py-space-sm rounded-card bg-surface-mid border border-outline-variant/30 font-body text-base text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-surface-low transition-all duration-200";
  const radioClasses =
    "flex items-center gap-space-sm px-space-md py-space-sm rounded-card bg-surface-mid border border-outline-variant/30 font-body text-body-sm text-on-surface-variant cursor-pointer hover:border-primary/40 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary-fixed/30 has-[:checked]:text-on-surface";

  return (
    <SectionWrapper className="bg-surface-lowest py-space-5xl relative">
      <FloatingShapes variant="sparse" />
      <ScrollReveal stagger="children" animation="up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          {/* LEFT: Forms (60%) */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <div>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-md">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-md text-label-md tracking-wider uppercase">Direct Engagement</span>
              </span>
              <h2 className="font-headline text-headline-lg lg:text-[40px] text-primary tracking-tight">
                Connect With Our <span className="text-secondary">Team</span>
              </h2>
            </div>

            <div className="flex flex-col gap-space-xl">
              {/* Send a Message */}
              <Card accent="plum">
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
                      <label htmlFor="msg-name" className="font-label-sm text-on-surface-variant font-semibold">Full Name</label>
                      <input id="msg-name" type="text" required value={messageForm.name}
                        onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                        placeholder="Your full name" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-email" className="font-label-sm text-on-surface-variant font-semibold">Email</label>
                      <input id="msg-email" type="email" required value={messageForm.email}
                        onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                        placeholder="you@example.com" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone</label>
                      <input id="msg-phone" type="tel" value={messageForm.phone}
                        onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-interest" className="font-label-sm text-on-surface-variant font-semibold">How would you like to help?</label>
                      <select id="msg-interest" required value={messageForm.interest}
                        onChange={(e) => setMessageForm({ ...messageForm, interest: e.target.value })}
                        className={inputClasses}>
                        <option value="" disabled>Select your interest</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="donate">Donate</option>
                        <option value="partner">Partner</option>
                        <option value="advocacy">Child therapy advocacy</option>
                        <option value="community">Community awareness</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="msg-message" className="font-label-sm text-on-surface-variant font-semibold">Message</label>
                      <textarea id="msg-message" required rows={3} value={messageForm.message}
                        onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                        placeholder="Tell us how you'd like to get involved..."
                        className={`${inputClasses} resize-none`} />
                    </div>
                    <button type="submit"
                      className="w-full mt-space-xs px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-md font-semibold tracking-wide hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
                      Send Message
                    </button>
                  </form>
                )}
              </Card>

              {/* Volunteer */}
              <Card accent="coral">
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
                      <label htmlFor="vol-name" className="font-label-sm text-on-surface-variant font-semibold">Name or Organization</label>
                      <input id="vol-name" type="text" required value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        placeholder="Your name or organization" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-email" className="font-label-sm text-on-surface-variant font-semibold">Email</label>
                      <input id="vol-email" type="email" required value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        placeholder="you@example.com" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone / WhatsApp</label>
                      <input id="vol-phone" type="tel" value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label htmlFor="vol-area" className="font-label-sm text-on-surface-variant font-semibold">Area of Interest</label>
                      <select id="vol-area" required value={volunteerForm.areaOfInterest}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, areaOfInterest: e.target.value })}
                        className={inputClasses}>
                        <option value="" disabled>Select your area of interest</option>
                        <option value="therapy">Child therapy advocacy</option>
                        <option value="community">Community awareness</option>
                        <option value="volunteering">Strategic volunteering</option>
                        <option value="corporate">Corporate partnerships</option>
                      </select>
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
                      className="w-full mt-space-xs px-7 py-3.5 rounded-xl bg-gradient-to-r from-secondary to-secondary-fixed text-on-secondary font-label-md font-semibold tracking-wide hover:shadow-[0_4px_20px_rgba(200,100,50,0.18)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
                      Submit Registration
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>

          {/* RIGHT: Donation (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-space-xl">
            <div>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-md">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md tracking-wider uppercase">Support Our Work</span>
              </span>
              <h2 className="font-headline text-headline-md text-primary tracking-tight">
                Make a <span className="text-secondary">Difference</span>
              </h2>
            </div>

            {/* Tab switcher */}
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

            {activeTab === "nigeria" ? (
              <Card accent="plum" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-primary">credit_card</span>
                  <h3 className="font-headline text-headline-sm text-primary">Online Contribution</h3>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Secure one-time or recurring contribution via Paystack. All major Nigerian debit cards, USSD, and bank transfers accepted.
                </p>
                <Button href="https://paystack.com" external variant="primary" size="md">
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
                      <button onClick={handleCopyAccount} className="p-1 rounded-full hover:bg-surface-high transition-colors" aria-label="Copy">
                        <span className="material-symbols-outlined text-[16px] text-primary">{copied ? "check_circle" : "content_copy"}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-body text-body-xs text-on-surface-variant/60">
                  {copied ? "Copied!" : "Tap copy icon to copy account number."}
                </p>
              </Card>
            ) : (
              <Card accent="coral" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-secondary">public</span>
                  <h3 className="font-headline text-headline-sm text-secondary">International Donation</h3>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Contribute securely via Paystack with Visa or Mastercard. All transactions processed in your local currency with full exchange rate transparency.
                </p>
                <Button href="https://paystack.com" external variant="secondary" size="md">
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

            {/* Accountability */}
            <div className="rounded-card bg-primary-fixed/20 border border-primary-fixed/30 p-space-md flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
              <p className="font-body text-body-sm text-on-surface">
                100% of donations support clinical therapy, education, and verified community programs.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
