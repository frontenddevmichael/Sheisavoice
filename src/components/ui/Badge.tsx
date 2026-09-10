interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "coral" | "gold" | "plum-light" | "coral-light";
  className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-on-primary",
    coral: "bg-secondary text-on-secondary",
    gold: "bg-tertiary-fixed text-on-tertiary-fixed",
    "plum-light": "bg-primary-fixed text-on-primary-fixed",
    "coral-light": "bg-secondary-fixed text-on-secondary-fixed",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-space-md py-space-2xs rounded-full font-label-sm text-label-sm font-bold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
