import type { Metadata } from "next";
import ContactHero from "@/components/heroes/ContactHero";
import QuickContactStrip from "@/components/sections/contact/QuickContactStrip";
import ContactSplitSection from "@/components/sections/contact/ContactSplitSection";
import ContactCards from "@/components/sections/contact/ContactCards";

export const metadata: Metadata = {
  title: "Contact | SHEISAVOICE Foundation",
  description:
    "Connect with SHEISAVOICE Foundation. Reach out to volunteer, donate, or learn how we support children with special needs across Nigeria.",
  alternates: {
    canonical: "https://sheisavoice.org/contact",
  },
  openGraph: {
    title: "Contact SHEISAVOICE Foundation",
    description:
      "Reach out for partnerships, volunteering, or inquiries. Every donation funds direct clinical care for children with special needs.",
    url: "https://sheisavoice.org/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero
        eyebrow="Direct Support & Collaboration"
        title={<>Support the Work. <span className="text-secondary">Reach Out.</span></>}
        subtitle="Every donation funds direct clinical care for children with special needs and emergency tuition grants for students in Nigeria. Reach our team directly for partnerships, volunteering, or inquiries."
      />
      <QuickContactStrip />
      <ContactSplitSection />
      <ContactCards />
    </>
  );
}
