interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "plum" | "coral" | "gold" | "none";
}

export default function Card({ children, className = "", accent = "none" }: CardProps) {
  const accents = {
    plum: "border-t-[1.5px] border-t-primary",
    coral: "border-t-[1.5px] border-t-secondary",
    gold: "border-t-[1.5px] border-t-tertiary-fixed-dim",
    none: "",
  };

  return (
    <div
      className={`rounded-card bg-surface-lowest p-space-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 ${accents[accent]} ${className}`}
    >
      {children}
    </div>
  );
}
