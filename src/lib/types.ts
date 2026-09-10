export interface NavLink {
  label: string;
  href: string;
}

export interface ProgramPillar {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
}

export interface ImpactPlacement {
  label: string;
  percent: number;
  color: "primary" | "secondary" | "tertiary";
}

export interface MomentData {
  id: number;
  category: string;
  categoryLabel: string;
  badgeBg: string;
  caption: string;
  date: string;
  location: string;
  note: string;
  alt: string;
  imgSrc: string;
}

export interface PathwayStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  badgeBg: string;
  accentBg: string;
  meta: {
    icon: string;
    label: string;
    sublabel: string;
  };
}
