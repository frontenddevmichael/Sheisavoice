import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Logo from "@/components/svgs/Logo";
import StackedMonogram from "@/components/ui/StackedMonogram";
import SoundwaveStrip from "@/components/ui/SoundwaveStrip";
import { AdireCircles } from "@/components/ui/AnkaraPatterns";

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary/[0.04] overflow-hidden">
      <AdireCircles
        color="var(--color-primary)"
        opacity={0.04}
        className="absolute inset-0 w-full h-full"
      />
      {/* Full-width soundwave */}
      <div className="border-b border-outline-variant/15">
        <SoundwaveStrip />
      </div>

      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-3xl pb-space-xl">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl pb-space-2xl">
          {/* Monogram + mission */}
          <div className="md:col-span-5 flex flex-col gap-space-lg">
            <StackedMonogram className="w-fit" />
            <p className="font-body text-body-md text-on-surface-variant/80 max-w-sm leading-relaxed">
              Building a legacy of dignity, reform, and lifelong support for every child and student across Africa.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-headline text-headline-sm font-bold text-on-surface">Quick Navigation</h4>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-space-xs">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-body text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <h4 className="font-headline text-headline-sm font-bold text-on-surface">Get in Touch</h4>
            <div className="flex flex-col gap-space-sm font-body text-body-sm text-on-surface-variant">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 hover:text-primary transition-colors duration-200"
                aria-label={`Send email to ${SITE.email}`}
              >
                <span className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                </span>
                {SITE.email}
              </a>
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
                </span>
                {SITE.address}
              </span>
            </div>

            {/* Linked To */}
            <div className="mt-space-xs pt-space-sm border-t border-outline-variant/15">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">
                Linked To
              </span>
              <p className="font-body text-body-xs text-on-surface-variant/70 mt-1 leading-relaxed">
                Independent child welfare advocacy institution. Not a subsidiary or affiliate of any
                private or government agency.
              </p>
            </div>
          </div>
        </div>

        {/* Safeguarding trust strip */}
        <div className="relative rounded-card-lg overflow-hidden">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-card-lg bg-gradient-to-r from-primary/20 via-secondary/15 to-tertiary-fixed-dim/20 p-px">
            <div className="w-full h-full rounded-card-lg bg-surface-lowest" />
          </div>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-space-md px-space-lg py-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Child Safeguarding
                </span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  Strict privacy protocol honored. CAC Reg #{SITE.cacReg}.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary-container/80 text-on-primary-container font-label-xs text-xs font-bold">
                Special Needs Advocacy
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary-container/80 text-on-secondary-container font-label-xs text-xs font-bold">
                Equitable Protection
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <Logo className="h-5 w-auto opacity-60" />
            <p className="font-body text-body-sm text-on-surface-variant/60 text-center sm:text-left">
              &copy; {SITE.copyright} {SITE.fullName}. All rights reserved.
            </p>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant/60 text-center sm:text-right">
            Incorporated with the Corporate Affairs Commission of Nigeria in {SITE.incorporatedYear}.
          </p>
        </div>
      </div>
    </footer>
  );
}
