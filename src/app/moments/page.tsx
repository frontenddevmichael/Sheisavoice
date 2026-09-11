import type { Metadata } from "next";
import MomentsHero from "@/components/heroes/MomentsHero";
import PhotoGrid from "@/components/sections/moments/PhotoGrid";
import SafeguardingNotice from "@/components/sections/moments/SafeguardingNotice";

export const metadata: Metadata = {
  title: "Moments | SHEISAVOICE Foundation",
  description:
    "A visual record of care, community gatherings, and advocacy in action across Nigeria and partner regions. All photography honors non-identifiable representation and community consent.",
  alternates: {
    canonical: "https://sheisavoice.org/moments",
  },
  openGraph: {
    title: "Moments From Our Work | SHEISAVOICE Foundation",
    description:
      "Documenting dignified action — care, community gatherings, and advocacy across Nigeria.",
    url: "https://sheisavoice.org/moments",
  },
};

export default function MomentsPage() {
  return (
    <>
      <MomentsHero
        eyebrow="Documenting Dignified Action"
        title="Moments From Our Work"
        subtitle="A visual record of care, community gatherings, and advocacy in action across Nigeria and partner regions. In strict accordance with our child safeguarding principles, all photography honors non-identifiable representation and community consent."
      />
      <PhotoGrid />
      <SafeguardingNotice />
    </>
  );
}
