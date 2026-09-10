import type { Metadata } from "next";
import WorkHero from "@/components/heroes/WorkHero";
import SpecialNeeds from "@/components/sections/work/SpecialNeeds";
import UniversityEducation from "@/components/sections/work/UniversityEducation";
import GlobalVirtual from "@/components/sections/work/GlobalVirtual";
import FemaleVoice from "@/components/sections/work/FemaleVoice";
import SafeguardingBanner from "@/components/sections/work/SafeguardingBanner";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore SHEISAVOICE Foundation core initiatives — clinical developmental care for children with special needs, emergency academic lifelines for university students, and elevating the voices of girls and women across Africa.",
  openGraph: {
    title: "Our Work | SHEISAVOICE Foundation",
    description:
      "Action Rooted in Dignity. Care That Reaches. Our core programs supporting children and students across Africa.",
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
        <div className="flex flex-col gap-space-xs p-space-sm rounded-card-lg bg-surface-low shadow-sm">
          {JUMP_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-space-md py-space-xs rounded-full bg-surface text-primary font-label-sm hover:bg-primary-container hover:text-on-primary transition-all shadow-sm flex items-center gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${item.dot}`} />
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
