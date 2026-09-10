"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactForms() {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    volunteerOutreach: "",
    financialSupport: "",
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSubmitted(true);
    setMessageForm({ name: "", email: "", phone: "", interest: "", message: "" });
    setTimeout(() => setMessageSubmitted(false), 4000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setVolunteerForm({ name: "", email: "", phone: "", volunteerOutreach: "", financialSupport: "" });
    setTimeout(() => setVolunteerSubmitted(false), 4000);
  };

  const inputClasses =
    "w-full px-space-lg py-space-sm rounded-card bg-surface-mid border border-outline-variant/30 font-body text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-surface-low transition-all duration-200";
  const radioClasses =
    "flex items-center gap-space-sm px-space-md py-space-sm rounded-card bg-surface-mid border border-outline-variant/30 font-body text-body-sm text-on-surface-variant cursor-pointer hover:border-primary/40 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary-fixed/30 has-[:checked]:text-on-surface";

  return (
    <SectionWrapper className="bg-surface py-space-5xl">
      <ScrollReveal stagger="children" animation="scale">
      <div className="flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-lg">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-md text-label-md tracking-wider uppercase">Direct Engagement</span>
          </span>
          <h2 className="font-headline text-headline-lg lg:text-[44px] text-primary tracking-tight mb-space-md">
            Connect With Our <span className="text-secondary">Team</span>
          </h2>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {/* Form 1: Send a Message */}
          <Card accent="plum">
            <h3 className="font-headline text-headline-sm text-primary mb-space-xl">
              Send a Message
            </h3>
            {messageSubmitted ? (
              <div className="flex flex-col items-center justify-center py-space-3xl gap-space-md text-center">
                <span className="material-symbols-outlined text-[48px] text-primary">check_circle</span>
                <p className="font-headline text-headline-sm text-primary font-bold">Message Sent!</p>
                <p className="font-body text-body-md text-on-surface-variant">
                  Thank you for reaching out. Our team will get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="msg-name" className="font-label-sm text-on-surface-variant font-semibold">Full Name</label>
                  <input
                    id="msg-name"
                    type="text"
                    required
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="msg-email" className="font-label-sm text-on-surface-variant font-semibold">Email Address</label>
                  <input
                    id="msg-email"
                    type="email"
                    required
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="msg-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone Number</label>
                  <input
                    id="msg-phone"
                    type="tel"
                    value={messageForm.phone}
                    onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                    placeholder="+234 XXX XXX XXXX"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="msg-interest" className="font-label-sm text-on-surface-variant font-semibold">Area of Interest</label>
                  <select
                    id="msg-interest"
                    required
                    value={messageForm.interest}
                    onChange={(e) => setMessageForm({ ...messageForm, interest: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Donate</option>
                    <option value="partner">Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="msg-message" className="font-label-sm text-on-surface-variant font-semibold">Message</label>
                  <textarea
                    id="msg-message"
                    required
                    rows={4}
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    placeholder="Tell us how you'd like to get involved..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-space-sm px-space-xl py-space-sm rounded-full bg-primary-container text-surface-lowest font-label-md font-bold hover:bg-primary transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </Card>

          {/* Form 2: Volunteer & Partner Network */}
          <Card accent="coral">
            <h3 className="font-headline text-headline-sm text-secondary mb-space-xl">
              Volunteer & Partner Network
            </h3>
            {volunteerSubmitted ? (
              <div className="flex flex-col items-center justify-center py-space-3xl gap-space-md text-center">
                <span className="material-symbols-outlined text-[48px] text-secondary">check_circle</span>
                <p className="font-headline text-headline-sm text-secondary font-bold">Registration Received!</p>
                <p className="font-body text-body-md text-on-surface-variant">
                  Thank you for your interest. We will review your submission and reach out to
                  discuss the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="vol-name" className="font-label-sm text-on-surface-variant font-semibold">Full Name or Organization</label>
                  <input
                    id="vol-name"
                    type="text"
                    required
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    placeholder="Your name or organization"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="vol-email" className="font-label-sm text-on-surface-variant font-semibold">Email Address</label>
                  <input
                    id="vol-email"
                    type="email"
                    required
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-space-2xs">
                  <label htmlFor="vol-phone" className="font-label-sm text-on-surface-variant font-semibold">Phone / WhatsApp</label>
                  <input
                    id="vol-phone"
                    type="tel"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    placeholder="+234 XXX XXX XXXX"
                    className={inputClasses}
                  />
                </div>

                <fieldset className="flex flex-col gap-space-sm border-0 p-0 m-0">
                  <legend className="font-label-sm text-on-surface-variant font-semibold">Available for volunteer outreach?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    {["Yes", "Open to discuss", "Not at this time"].map((option) => (
                      <label key={option} className={radioClasses}>
                        <input
                          type="radio"
                          name="volunteerOutreach"
                          value={option}
                          checked={volunteerForm.volunteerOutreach === option}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, volunteerOutreach: e.target.value })}
                          className="accent-primary"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="flex flex-col gap-space-sm border-0 p-0 m-0">
                  <legend className="font-label-sm text-on-surface-variant font-semibold">Open to providing financial support?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    {["Yes", "Monthly pledge", "When specific needs arise", "Outreach only"].map((option) => (
                      <label key={option} className={radioClasses}>
                        <input
                          type="radio"
                          name="financialSupport"
                          value={option}
                          checked={volunteerForm.financialSupport === option}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, financialSupport: e.target.value })}
                          className="accent-secondary"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="w-full mt-space-sm px-space-xl py-space-sm rounded-full bg-secondary text-on-secondary font-label-md font-bold hover:bg-secondary/90 transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
