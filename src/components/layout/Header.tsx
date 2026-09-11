"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/svgs/Logo";

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
          DESKTOP: Full-width top bar (lg+)
          ============================================ */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/85 backdrop-blur-2xl shadow-[0_1px_24px_rgba(62,0,94,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="shrink-0 group">
              <Logo className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>

            <nav className="flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} link={link} pathname={pathname} />
              ))}
            </nav>

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

      {/* ============================================
          MOBILE: Top bar with hamburger (< lg)
          ============================================ */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div
          className={`flex items-center justify-between h-14 px-4 transition-all duration-300 ${
            scrolled || menuOpen
              ? "bg-surface/90 backdrop-blur-2xl shadow-[0_1px_16px_rgba(62,0,94,0.06)]"
              : "bg-transparent"
          }`}
        >
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Logo className="h-6 w-auto" />
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
                      className={`block px-4 py-4 rounded-2xl transition-all duration-200 ${
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
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Divider */}
          <div className="mx-6 h-px bg-outline-variant/15" />

          {/* Contact/Support CTA */}
          <div className="px-6 py-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 50}ms` : "0ms" }}
              className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-on-primary text-[16px] font-semibold transition-all duration-200 shadow-[0_4px_24px_rgba(62,0,94,0.18)] ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Contact/Support
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
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
