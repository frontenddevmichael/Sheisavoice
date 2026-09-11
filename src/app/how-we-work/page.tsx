import type { Metadata } from "next";
import HowHero from "@/components/heroes/HowHero";
import PathwaySteps from "@/components/sections/how/PathwaySteps";
import DignityGuardrails from "@/components/sections/how/DignityGuardrails";
import ActionCTA from "@/components/sections/how/ActionCTA";
import CacBanner from "@/components/sections/how/CacBanner";

export const metadata: Metadata = {
  title: "How We Work | SHEISAVOICE Foundation",
  description:
    "A transparent, dignified pathway from application to ongoing support — every child safeguarded, every step accountable. Learn about our structured process.",
  alternates: {
    canonical: "https://sheisavoice.org/how-we-work",
  },
  openGraph: {
    title: "How We Work | SHEISAVOICE Foundation",
    description:
      "A structured, transparent, and repeatable process built to scale across Nigeria and beyond.",
    url: "https://sheisavoice.org/how-we-work",
  },
};

const STEPS = [
  { label: "Application", icon: "description" },
  { label: "Assessment", icon: "clinical_notes" },
  { label: "Allocation", icon: "person_add" },
  { label: "Delivery", icon: "medical_services" },
  { label: "Follow-up", icon: "monitoring" },
];

export default function HowWeWorkPage() {
  return (
    <>
      <HowHero
        eyebrow="Ethical, Scale-Ready Framework"
        title="How a Child or Student Gets Support"
        subtitle="A structured, transparent, and repeatable process built to scale across Nigeria and beyond: ensuring dignity, zero-intermediary burden, and continuous clinical and educational continuity."
        steps={STEPS}
      />
      <PathwaySteps />
      <DignityGuardrails />
      <ActionCTA />
      <CacBanner />
    </>
  );
}
