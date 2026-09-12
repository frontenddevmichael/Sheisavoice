"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/svgs/Logo";

function SoundwaveMini() {
  return (
    <div className="flex items-end gap-[2px] h-4 mx-3 opacity-40" aria-hidden="true">
      {[6, 10, 4, 12, 7, 9, 5].map((h, i) => (
        <span
          key={i}
          className="w-[2px] rounded-full bg-primary"
          style={{
            height: `${h}px`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ============================================
          DESKTOP: Artistic top bar (lg+)
          ============================================ */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/85 backdrop-blur-2xl shadow-[0_1px_24px_rgba(62,0,94,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* Gradient accent line at very top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-tertiary-fixed-dim via-secondary to-primary" />

        <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo + soundwave */}
            <Link href="/" className="shrink-0 group flex items-center">
              <Logo className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
              <SoundwaveMini />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} link={link} pathname={pathname} />
              ))}
            </nav>

            {/* CTA with gradient border */}
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 relative group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
              <span className="absolute inset-[1.5px] bg-on-primary rounded-full group-hover:bg-primary-container transition-colors duration-300" />
              <span className="relative z-10 text-primary group-hover:text-on-primary-container transition-colors duration-300 flex items-center gap-2">
                Contact/Support
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className={`h-px w-full transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>
          <div className="h-full bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
        </div>
      </header>

      {/* ============================================
          MOBILE: Top bar with hamburger (< lg)
          ============================================ */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Gradient accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-tertiary-fixed-dim via-secondary to-primary" />
        <div
          className={`flex items-center justify-between h-14 px-4 transition-all duration-300 ${
            scrolled || menuOpen
              ? "bg-surface/90 backdrop-blur-2xl shadow-[0_1px_16px_rgba(62,0,94,0.06)]"
              : "bg-transparent"
          }`}
        >
          <Link href="/" className="shrink-0 group flex items-center" onClick={closeMenu}>
            <Logo className="h-6 w-auto transition-transform duration-300 group-hover:scale-105" />
            {/* Mini soundwave */}
            <div className="flex items-end gap-[2px] h-3 ml-2 opacity-40" aria-hidden="true">
              {[6, 10, 4, 12, 7].map((h, i) => (
                <span key={i} className="w-[2px] rounded-full bg-primary" style={{ height: `${h * 0.5}px` }} />
              ))}
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-mid/60 transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[24px] text-on-surface transition-all duration-200">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* ============================================
          MOBILE: Full-screen menu overlay
          ============================================ */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Panel — slides down from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-surface min-h-screen transition-all duration-300 ease-out ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-outline-variant/10">
            <Link href="/" className="shrink-0" onClick={closeMenu}>
              <Logo className="h-6 w-auto" />
            </Link>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-mid/60 transition-colors duration-200"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px] text-on-surface">close</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-6 pt-6 pb-6" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                      className={`block px-4 py-4 rounded-2xl transition-all duration-200 relative group ${
                        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      } ${
                        isActive
                          ? "bg-primary/8 text-primary"
                          : "text-on-surface hover:bg-surface-mid/60"
                      }`}
                    >
                      <span className="font-headline text-[28px] font-bold tracking-tight">
                        {link.label}
                      </span>
                      {isActive && (
                        <span className="ml-3 inline-block w-2 h-2 rounded-full bg-primary align-middle" />
                      )}
                      {!isActive && (
                        <span className="absolute bottom-2 left-4 w-0 h-[2px] rounded-full bg-secondary group-hover:w-12 transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent" />

          {/* Contact/Support CTA with gradient border */}
          <div className="px-6 py-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 50}ms` : "0ms" }}
              className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-[16px] font-semibold transition-all duration-200 relative overflow-hidden ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl" />
              <span className="absolute inset-[1.5px] bg-on-primary rounded-2xl" />
              <span className="relative z-10 text-primary flex items-center gap-3">
                Contact/Support
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </span>
            </Link>
          </div>

          {/* Footer info */}
          <div className="px-6 pt-4 pb-12">
            <p className="text-[12px] text-on-surface-variant/50 text-center">
              SHEISAVOICE Global Children Advocacy Foundation
            </p>
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
      className={`relative px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 group ${
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
      {/* Hand-drawn underline on hover for non-active links */}
      {!isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-secondary group-hover:w-3/4 transition-all duration-300" />
      )}
    </Link>
  );
}
