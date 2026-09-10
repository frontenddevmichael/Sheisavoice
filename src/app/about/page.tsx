import type { Metadata } from "next";
import AboutHero from "@/components/heroes/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import FounderStory from "@/components/sections/about/FounderStory";
import MissionVision from "@/components/sections/about/MissionVision";
import RegistrationBlock from "@/components/sections/about/RegistrationBlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SHEISAVOICE Foundation — a voice-forward advocacy sanctuary rooted in Nigeria, dedicated to the protection, dignity, and potential of children with special needs across Africa.",
  openGraph: {
    title: "About SHEISAVOICE Foundation",
    description:
      "Built on a Quiet Truth. Carried by Purpose. Learn about our mission to amplify the voice of the unheard.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        eyebrow="About SHEISAVOICE"
        title={<>Built on a Quiet Truth. <span className="text-secondary">Carried by Purpose.</span></>}
        subtitle="A voice-forward advocacy sanctuary rooted in Nigeria and reaching across Africa, dedicated to the protection, unconditional dignity, and boundless potential of children with special needs, capable students, and the voices of girls and women."
      />
      <OurStory />
      <FounderStory />
      <MissionVision />
      <RegistrationBlock />
    </>
  );
}
