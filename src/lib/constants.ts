export const SITE = {
  name: "SHEISAVOICE",
  fullName: "SHEISAVOICE Global Children Advocacy Foundation",
  tagline: "Amplifying the Voice of the Unheard",
  description:
    "SHEISAVOICE is a social impact and advocacy organization committed to supporting children with special needs and students facing financial hardship, giving them access to care, education, and opportunity across Africa.",
  email: "contact@sheisavoice.org",
  phone: "+234 800 000 0000",
  address: "Abuja, Nigeria",
  cacReg: "180464",
  foundedYear: 2020,
  incorporatedYear: 2022,
  bankAccount: "5403445942",
  bankName: "Providus Bank",
  bankAccountName: "SHEISAVOICE Global Children Advocacy Foundation",
  paystackUrl: "https://paystack.shop/pay/9slrcw1z0u",
  copyright: "2026",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Moments", href: "/moments" },
] as const;

export const IMPACT_STATS = {
  childrenCount: 65,
  lastUpdated: "September 2026",
  therapyPlacements: [
    { label: "Speech & Developmental Therapy", percent: 100, color: "primary" as const },
    { label: "Occupational & Sensory Support", percent: 86, color: "secondary" as const },
    { label: "Caregiver Direct Counseling", percent: 92, color: "tertiary" as const },
  ],
};

export const MOMENTS_DATA = [
  {
    id: 1,
    category: "special-needs",
    categoryLabel: "Special Needs Outreach",
    badgeBg: "bg-primary text-on-primary",
    caption: "Community Therapy Awareness Day",
    date: "14 March 2024",
    location: "Lagos, Nigeria",
    note: "Caregivers, developmental therapists, and community advocates gathering to share inclusive home strategies.",
    alt: "Wide-angle atmospheric documentary photograph of an African community workshop in Lagos Nigeria, gathering of diverse adult caregivers, healthcare facilitators, and community partners seated in a warm bright community hall learning together, soft natural lighting, respectful, authentic, no close-up child portraits, dignified community health advocacy gathering",
    imgSrc: "/images/moments/therapy-awareness.jpg",
  },
  {
    id: 2,
    category: "education",
    categoryLabel: "Education Support",
    badgeBg: "bg-tertiary-container text-on-tertiary",
    caption: "University Education Support Program, Scholarship Handover",
    date: "18 October 2024",
    location: "Abuja, Nigeria",
    note: "Undergraduate scholars and academic mentors celebrating degree continuity and zero-debt grant funding.",
    alt: "Wide shot documentary photo of a Nigerian university hall event in Abuja, young adult university scholars and academic mentors holding folders and congratulatory documents at a dignified scholarship handover ceremony, warm ambient lighting, collegiate setting, inspiring and collegiate atmosphere",
    imgSrc: "/images/moments/scholarship-handover.jpg",
  },
  {
    id: 3,
    category: "female-voice",
    categoryLabel: "Female Voice Events",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    caption: "Girl Child Speaking Workshop",
    date: "22 June 2024",
    location: "Ibadan, Nigeria",
    note: "Intergenerational dialogue and leadership circles creating fearless spaces for young women to speak up.",
    alt: "Wide environmental shot of a community leadership workshop for girls and young women in Nigeria, circle of participants seated together listening intently in an airy modern studio hall with natural daylight, engaged group discussion, uplifting, dignified, no individual identifiable closeups",
    imgSrc: "/images/moments/girl-child-workshop.jpg",
  },
  {
    id: 4,
    category: "partnerships",
    categoryLabel: "Community Partnerships",
    badgeBg: "bg-primary-fixed text-on-primary-fixed",
    caption: "Partner Clinic Visit and Volunteer Training Day",
    date: "05 November 2024",
    location: "Enugu, Nigeria",
    note: "Clinical facilitators and community health volunteers aligning on dignified, non-stigmatizing screening protocols.",
    alt: "Wide documentary photograph of healthcare practitioners, clinic staff, and adult community volunteers in training in a modern African clinical facility, collaborative group standing around workshop boards, warm clinical setting, respectful and professional partnership atmosphere",
    imgSrc: "/images/moments/partner-clinic.jpg",
  },
] as const;

export const PATHWAY_STEPS = [
  {
    number: "01",
    phase: "Phase I: Intake",
    title: "Application",
    description:
      "A family or student submits an intake form with background, needs, and current circumstances.",
    icon: "edit_document",
    badge: "Dignified Intake • Confidential Review • Zero Upfront Cost",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    accentBg: "bg-primary",
    meta: { icon: "lock", label: "Safeguarded Portal", sublabel: "Encrypted submission" },
  },
  {
    number: "02",
    phase: "Phase II: Validation",
    title: "Verification",
    description:
      "Our team reviews the application, confirms the need, and where relevant, confirms diagnosis or academic standing with the appropriate professional or institution.",
    icon: "fact_check",
    badge: "Professional Assessment • Institutional Coordination • High Safeguarding",
    badgeBg: "bg-secondary-fixed text-on-secondary-fixed",
    accentBg: "bg-primary-container",
    meta: { icon: "verified_user", label: "Institutional Link", sublabel: "Direct clinical triage" },
  },
  {
    number: "03",
    phase: "Phase III: Alignment",
    title: "Matching",
    description:
      "The child or student is connected with a vetted clinical or educational partner suited to their specific need.",
    icon: "handshake",
    badge: "Tailored Clinical Routing • Individualized Care • Accredited Specialists",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    accentBg: "bg-secondary",
    meta: { icon: "hub", label: "Specialist Sync", sublabel: "Zero mismatched care" },
  },
  {
    number: "04",
    phase: "Phase IV: Progression",
    title: "Ongoing Support",
    description:
      "Sessions or funding begin, with regular check-ins and progress tracking so families and donors can see real movement, not just a one-time transaction.",
    icon: "trending_up",
    badge: "Caregiver Accompaniment • Milestones & Progress • Transparent Movement",
    badgeBg: "bg-secondary-fixed text-on-secondary-fixed",
    accentBg: "bg-tertiary",
    meta: { icon: "monitoring", label: "Live Accountability", sublabel: "Continuous accompaniment" },
  },
  {
    number: "05",
    phase: "Phase V: Expansion",
    title: "Growing the Network",
    description:
      "As SHEISAVOICE grows, this process is designed to extend beyond our current partners and current location, so the same structure of applying, verifying, and matching can support children and students wherever they are.",
    icon: "public",
    badge: "Pan-African Scalability • Diaspora & Virtual Outreach • Replicable Standards",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    accentBg: "bg-primary",
    meta: { icon: "share_location", label: "Continental Radius", sublabel: "Scale-ready blueprint" },
  },
] as const;
