import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import WhyItMatters from "@/components/sections/home/WhyItMatters";
import ImpactStats from "@/components/sections/home/ImpactStats";
import ClosingCTA from "@/components/sections/home/ClosingCTA";

export const metadata: Metadata = {
  title: "SHEISAVOICE | Amplifying the Voice of the Unheard",
  description:
    "SHEISAVOICE is a social impact and advocacy organization committed to supporting children with special needs and students facing financial hardship, giving them access to care, education, and opportunity across Africa.",
  alternates: {
    canonical: "https://sheisavoice.org",
  },
  openGraph: {
    title: "SHEISAVOICE | Amplifying the Voice of the Unheard",
    description:
      "Supporting children with special needs and students facing financial hardship across Africa through clinical care, education, and advocacy.",
    url: "https://sheisavoice.org",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <WhyItMatters />
      <ImpactStats />
      <ClosingCTA />
    </>
  );
}
