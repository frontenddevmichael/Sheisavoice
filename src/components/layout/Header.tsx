"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/svgs/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* Desktop: Floating pill navbar */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "pt-3"
            : "pt-5"
        }`}
      >
        <div
          className={`mx-auto max-w-[1000px] px-5 transition-all duration-300 ${
            scrolled
              ? "bg-surface/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(62,0,94,0.1)] rounded-full"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <Link href="/" className="shrink-0 group">
              <Logo className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} link={link} pathname={pathname} />
              ))}
            </nav>

            {/* Contact/Support CTA */}
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-on-primary text-[14px] font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 hover:shadow-[0_4px_20px_rgba(62,0,94,0.2)]"
            >
              Contact/Support
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile: Floating bar at bottom */}
      <header className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3">
        <div className="bg-surface/80 backdrop-blur-2xl shadow-[0_-4px_30px_rgba(62,0,94,0.1)] border border-outline-variant/20 rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="shrink-0">
              <Logo className="h-5 w-auto" />
            </Link>

            {/* Quick nav pills */}
            <div className="flex items-center gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:bg-surface-mid"
                    }`}
                  >
                    {link.label.split(" ")[0]}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger for full menu */}
            <button
              className="w-9 h-9 rounded-full bg-surface-mid/60 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-surface" onClick={closeMenu} />

        {/* Soundwave decoration */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-[3px] opacity-10 pointer-events-none" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-[2px] bg-primary rounded-full soundwave-bar"
              style={{
                height: `${6 + Math.sin(i * 0.4) * 14 + Math.cos(i * 0.3) * 8}px`,
                animationDelay: `${i * 0.04}s`,
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex flex-col">
          {/* Close */}
          <button
            onClick={closeMenu}
            className={`absolute top-5 right-5 z-[70] w-11 h-11 rounded-full bg-surface-mid/60 backdrop-blur-sm flex items-center justify-center transition-all duration-200 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "100ms" : "0ms" }}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[20px] text-on-surface">close</span>
          </button>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex-1 flex items-center justify-center relative overflow-hidden transition-all duration-200 ${
                    mobileOpen ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${i * 40 + 20}ms` : "0ms" }}
                >
                  <span className={`absolute inset-0 transition-all duration-200 ${
                    isActive ? "bg-primary" : "bg-surface group-hover:bg-surface-mid/60"
                  }`} />
                  <span className="absolute top-0 left-0 right-0 h-px bg-outline-variant/15" />
                  <span className={`relative font-headline text-4xl sm:text-5xl font-bold transition-colors duration-200 ${
                    isActive ? "text-on-primary" : "text-on-surface"
                  }`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent pointer-events-none" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className={`px-6 pb-8 pt-4 bg-surface transition-all duration-200 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 40 + 40}ms` : "0ms" }}>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-on-primary font-label-lg font-semibold transition-all duration-300 shadow-[0_2px_16px_rgba(62,0,94,0.15)] hover:shadow-[0_4px_24px_rgba(62,0,94,0.25)]"
            >
              Contact/Support
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  link,
  pathname,
}: {
  link: { href: string; label: string };
  pathname: string;
}) {
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className={`relative px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 ${
        isActive
          ? "text-on-primary"
          : "text-on-surface-variant hover:text-on-surface"
      }`}
    >
      {isActive && (
        <span className="absolute inset-0 bg-primary rounded-full" />
      )}
      {!isActive && (
        <span className="absolute inset-0 bg-surface-mid/0 hover:bg-surface-mid/60 rounded-full transition-colors duration-200 -z-10" />
      )}
      <span className="relative z-10">{link.label}</span>
    </Link>
  );
}
