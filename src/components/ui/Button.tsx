import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300";

  const variants = {
    primary:
      "bg-primary-container text-on-primary hover:bg-primary shadow-[var(--shadow-button)] hover:-translate-y-0.5",
    secondary:
      "bg-surface-low text-primary hover:bg-surface-high border border-outline-variant/30",
    ghost: "bg-transparent text-primary hover:bg-surface-mid",
    gold: "bg-tertiary-fixed-dim text-primary hover:bg-tertiary-fixed shadow-[var(--shadow-button)] hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-5 py-2 text-label-md font-semibold",
    md: "px-7 py-3 text-label-md font-semibold",
    lg: "px-9 py-4 text-label-lg font-semibold",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
