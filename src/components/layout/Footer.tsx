import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Logo from "@/components/svgs/Logo";
import StackedMonogram from "@/components/ui/StackedMonogram";
import SoundwaveStrip from "@/components/ui/SoundwaveStrip";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-surface-low to-surface-mid">
      {/* Soundwave strip */}
      <SoundwaveStrip />

      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 pt-space-2xl pb-space-2xl">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl pb-space-2xl">
          {/* Monogram + mission */}
          <div className="md:col-span-5 flex flex-col gap-space-lg">
            <StackedMonogram className="w-fit" />
            <p className="font-body text-body-md text-on-surface-variant max-w-sm mt-space-sm">
              Building a legacy of dignity, reform, and lifelong support.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-headline text-headline-sm text-primary">Quick Navigation</h4>
            <ul className="flex flex-col gap-space-xs font-body text-body-sm text-on-surface-variant">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <h4 className="font-headline text-headline-sm text-primary">Get in Touch</h4>
            <div className="flex flex-col gap-space-xs font-body text-body-sm text-on-surface-variant">
              <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                {SITE.email}
              </a>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                {SITE.address}
              </span>
            </div>

            {/* Linked To */}
            <div className="mt-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                Linked To
              </span>
              <p className="font-body text-body-sm text-on-surface-variant mt-1">
                Independent child welfare advocacy institution. Not a subsidiary or affiliate of any
                private or government agency.
              </p>
            </div>
          </div>
        </div>

        {/* Safeguarding badge */}
        <div className="rounded-card-lg bg-surface/80 backdrop-blur-sm border border-outline-variant/20 p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
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
            <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-xs text-xs font-bold">
              Special Needs Advocacy
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-xs text-xs font-bold">
              Equitable Protection
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <Logo className="h-5 w-auto" />
            <p className="font-body text-body-sm text-on-surface-variant text-center sm:text-left">
              &copy; {SITE.copyright} {SITE.fullName}. All rights reserved.
            </p>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant text-center sm:text-right">
            Incorporated with the Corporate Affairs Commission of Nigeria in {SITE.incorporatedYear}.
          </p>
        </div>
      </div>
    </footer>
  );
}
