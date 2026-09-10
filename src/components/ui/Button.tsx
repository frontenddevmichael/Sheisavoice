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
    "inline-flex items-center justify-center gap-2 transition-all duration-200";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-container to-primary text-on-primary rounded-2xl shadow-[0_2px_16px_rgba(62,0,94,0.12)] hover:shadow-[0_4px_24px_rgba(62,0,94,0.18)] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-transparent text-primary rounded-2xl border-[1.5px] border-outline-variant/40 hover:bg-surface-mid hover:border-outline-variant/60",
    ghost: "bg-transparent text-primary rounded-xl hover:bg-surface-mid",
    gold: "bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed text-primary rounded-2xl shadow-[0_2px_12px_rgba(200,150,50,0.12)] hover:shadow-[0_4px_20px_rgba(200,150,50,0.18)] hover:scale-[1.02] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-label-sm font-semibold tracking-wide",
    md: "px-7 py-3.5 text-label-md font-semibold tracking-wide",
    lg: "px-8 py-4 text-label-lg font-semibold tracking-wide",
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
