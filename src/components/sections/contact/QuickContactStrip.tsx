import { SITE } from "@/lib/constants";

export default function QuickContactStrip() {
  return (
    <div className="w-full bg-surface-mid border-y border-outline-variant/20">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 py-space-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-space-sm font-body text-body-md text-on-surface hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
            {SITE.email}
          </a>
          <span className="hidden sm:block w-px h-5 bg-outline-variant/40" />
          <span className="flex items-center gap-space-sm font-body text-body-md text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px] text-secondary">pin_drop</span>
            {SITE.address}
          </span>
          <span className="hidden sm:block w-px h-5 bg-outline-variant/40" />
          <span className="flex items-center gap-space-sm font-body text-body-md text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">schedule</span>
            Mon - Fri, 9am - 5pm WAT
          </span>
        </div>
      </div>
    </div>
  );
}
