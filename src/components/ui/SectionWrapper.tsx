interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">{children}</div>
    </section>
  );
}
