"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export default function DonationSection() {
  const [activeTab, setActiveTab] = useState<"nigeria" | "international">("nigeria");
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(SITE.bankAccount).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <SectionWrapper className="relative bg-surface py-space-5xl overflow-hidden">
      <NoiseOverlay />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10">
        <ScrollReveal animation="up">
        <div className="flex flex-col gap-space-2xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-mid text-primary shadow-sm mb-space-lg">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md tracking-wider uppercase">Support Our Work</span>
            </span>
            <h2 className="font-headline text-headline-lg lg:text-[44px] text-primary tracking-tight mb-space-md">
              Make a <span className="text-secondary">Difference</span> Today
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Every contribution helps us provide therapy hours, educational subsidies, and direct
              support to children and families across Nigeria.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex bg-surface-mid rounded-full p-1 shadow-sm" role="tablist" aria-label="Donation options">
              <button
                role="tab"
                aria-selected={activeTab === "nigeria"}
                onClick={() => setActiveTab("nigeria")}
                className={`px-space-xl py-space-sm rounded-full font-label-md transition-all duration-300 ${
                  activeTab === "nigeria"
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Donate from Nigeria
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "international"}
                onClick={() => setActiveTab("international")}
                className={`px-space-xl py-space-sm rounded-full font-label-md transition-all duration-300 ${
                  activeTab === "international"
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Donate from Outside Nigeria
              </button>
            </div>
          </div>

          {/* Nigeria Panel */}
          {activeTab === "nigeria" && (
            <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
              <Card accent="plum" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">credit_card</span>
                  <h3 className="font-headline text-headline-md text-primary">Online Instant Contribution</h3>
                </div>
                <p className="font-body text-body-md text-on-surface-variant">
                  Make a secure one-time or recurring contribution instantly via our payment gateway.
                  We accept all major Nigerian debit cards, USSD transfers, and direct bank transfers.
                </p>
                <div className="flex items-center gap-space-md">
                  <Button href="https://paystack.com" external variant="primary" size="md">
                    Donate Now
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </Button>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant/70 mt-auto">
                  Secured by Paystack. Your card details are encrypted and never stored.
                </p>
              </Card>

              <Card accent="plum" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">account_balance</span>
                  <h3 className="font-headline text-headline-md text-primary">Providus Bank Transfer</h3>
                </div>
                <p className="font-body text-body-md text-on-surface-variant">
                  You can also transfer directly to our organization account. Please use your name as
                  the transfer reference for proper documentation.
                </p>
                <div className="bg-surface-mid rounded-card p-space-lg flex flex-col gap-space-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Bank Name</span>
                    <span className="font-body text-body-md font-semibold text-on-surface">{SITE.bankName}</span>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Account Name</span>
                    <span className="font-body text-body-md font-semibold text-on-surface text-right max-w-[220px]">
                      {SITE.bankAccountName}
                    </span>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div className="flex justify-between items-center">
                    <span className="font-body text-body-sm text-on-surface-variant">Account Number</span>
                    <div className="flex items-center gap-space-sm">
                      <span className="font-body text-body-lg font-bold text-primary">{SITE.bankAccount}</span>
                      <button
                        onClick={handleCopyAccount}
                        className="p-1.5 rounded-full hover:bg-surface-high transition-colors"
                        aria-label="Copy account number"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          {copied ? "check_circle" : "content_copy"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant/70">
                  {copied ? "Account number copied to clipboard!" : "Tap the copy icon to copy the account number."}
                </p>
              </Card>
            </div>
          )}

          {/* International Panel */}
          {activeTab === "international" && (
            <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
              <Card accent="coral" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <span className="material-symbols-outlined text-[32px] text-secondary">public</span>
                  <h3 className="font-headline text-headline-md text-secondary">Donate from Outside Nigeria</h3>
                </div>
                <p className="font-body text-body-md text-on-surface-variant">
                  International donors can contribute securely via Paystack with Visa or Mastercard.
                  All transactions are processed in your local currency with full exchange rate
                  transparency displayed before you confirm.
                </p>
                <div className="flex items-center gap-space-md">
                  <Button href="https://paystack.com" external variant="secondary" size="md">
                    Donate Internationally
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </Button>
                </div>
                <div className="flex items-center gap-space-sm mt-auto">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">shield</span>
                  <p className="font-body text-body-sm text-on-surface-variant/70">
                    Secure international payment gateway with real-time exchange rates.
                  </p>
                </div>
              </Card>

              <Card accent="coral" className="flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <span className="material-symbols-outlined text-[32px] text-secondary">volunteer_activism</span>
                  <h3 className="font-headline text-headline-md text-secondary">How Global Gifts Work</h3>
                </div>
                <p className="font-body text-body-md text-on-surface-variant mb-space-md">
                  Your international donation is allocated with full transparency to our core
                  programmatic priorities:
                </p>
                <div className="flex flex-col gap-space-md">
                  {[
                    { icon: "medical_services", title: "Specialized Therapy Sessions", desc: "Funding direct clinical hours for children with developmental needs." },
                    { icon: "school", title: "School Inclusion Aid", desc: "Covering educational subsidies and classroom resources for underserved students." },
                    { icon: "emergency", title: "Emergency Nutritional & Medical Provisions", desc: "Rapid-response funding for urgent health and nutritional needs." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-space-md items-start">
                      <span className="material-symbols-outlined text-[24px] text-secondary mt-0.5">{item.icon}</span>
                      <div>
                        <h4 className="font-body text-body-md font-semibold text-on-surface">{item.title}</h4>
                        <p className="font-body text-body-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Accountability Ribbon */}
          <Card className="bg-surface-mid border border-outline-variant/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
              <div className="flex items-center gap-space-md">
                <span className="material-symbols-outlined text-[28px] text-primary">verified</span>
                <p className="font-body text-body-md text-on-surface max-w-xl">
                  100% of public donations directly support clinical therapy hours, educational subsidies,
                  and verified community programs.
                </p>
              </div>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm font-bold whitespace-nowrap">
                CAC Reg #{SITE.cacReg}
              </span>
            </div>
          </Card>
        </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
