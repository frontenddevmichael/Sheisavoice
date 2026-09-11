import type { Metadata } from "next";
import WorkHero from "@/components/heroes/WorkHero";
import SpecialNeeds from "@/components/sections/work/SpecialNeeds";
import UniversityEducation from "@/components/sections/work/UniversityEducation";
import GlobalVirtual from "@/components/sections/work/GlobalVirtual";
import FemaleVoice from "@/components/sections/work/FemaleVoice";
import SafeguardingBanner from "@/components/sections/work/SafeguardingBanner";

export const metadata: Metadata = {
  title: "Our Work | SHEISAVOICE Foundation",
  description:
    "Explore SHEISAVOICE Foundation core initiatives — clinical developmental care for children with special needs, emergency academic lifelines for university students, and elevating the voices of girls and women across Africa.",
  alternates: {
    canonical: "https://sheisavoice.org/our-work",
  },
  openGraph: {
    title: "Our Work | SHEISAVOICE Foundation",
    description:
      "Action Rooted in Dignity. Care That Reaches. Our core programs supporting children and students across Africa.",
    url: "https://sheisavoice.org/our-work",
  },
};

const JUMP_NAV = [
  { label: "01 Special Needs", href: "#special-needs", dot: "bg-secondary-container" },
  { label: "02 University Education", href: "#university-education", dot: "bg-tertiary-fixed-dim" },
  { label: "03 Global Virtual", href: "#global-support", dot: "bg-primary-fixed-dim" },
  { label: "04 Female Voice", href: "#female-voice", dot: "bg-secondary" },
];

export default function OurWorkPage() {
  return (
    <>
      <WorkHero
        eyebrow="Our Core Initiatives"
        title={<>Action Rooted in Dignity. <span className="text-secondary">Care That Reaches.</span></>}
        subtitle="We focus our resources where systemic barriers are steepest: providing clinical developmental care for children with special needs, emergency academic lifelines for university students, and elevating the voices of girls and women."
      >
        <div className="flex flex-col gap-1 p-space-sm rounded-card-lg bg-surface-low/60 backdrop-blur-sm border border-outline-variant/10">
          {JUMP_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group px-space-md py-space-xs rounded-xl text-on-surface-variant font-label-sm hover:text-primary hover:bg-surface-mid/60 transition-all duration-200 flex items-center gap-3 relative overflow-hidden"
            >
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-full ${item.dot} transition-all duration-200 rounded-full`} />
              <span className={`w-2 h-2 rounded-full ${item.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
              {item.label}
            </a>
          ))}
        </div>
      </WorkHero>

      <SpecialNeeds />
      <UniversityEducation />
      <GlobalVirtual />
      <FemaleVoice />
      <SafeguardingBanner />
    </>
  );
}
