"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

  // Lock body scroll when mobile menu is open
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-2xl border-b border-outline-variant/25 shadow-[0_4px_30px_rgba(62,0,94,0.06)] h-16"
            : "bg-surface/50 backdrop-blur-2xl border-b border-outline-variant/10 h-20"
        }`}
      >
        {/* Subtle soundwave accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden" aria-hidden="true">
          <div className="h-full bg-gradient-to-r from-transparent via-secondary-container/40 to-transparent" />
        </div>

        <div className="max-w-[var(--max-w-content)] mx-auto px-4 sm:px-5 lg:px-12 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Logo className="h-7 lg:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 relative">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} link={link} pathname={pathname} />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-primary-container/80 backdrop-blur-md border border-primary/10 text-on-primary font-label-sm sm:font-label-md font-semibold hover:bg-primary hover:shadow-lg transition-all duration-300"
            >
              Support Our Work
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </Link>

            {/* Morphing hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] relative"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-5 h-[1.5px] bg-on-surface transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-on-surface transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-on-surface transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — OUTSIDE header, fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface"
          onClick={closeMenu}
        />

        {/* Close button */}
        <button
          onClick={closeMenu}
          className={`absolute top-5 right-5 z-[70] w-12 h-12 rounded-full bg-surface-mid flex items-center justify-center transition-all duration-300 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: mobileOpen ? "200ms" : "0ms" }}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-[22px] text-on-surface">close</span>
        </button>

        {/* Decorative soundwave */}
        <div className="absolute bottom-12 sm:bottom-20 left-0 right-0 flex justify-center gap-1 opacity-10 pointer-events-none" aria-hidden="true">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full"
              style={{
                height: `${8 + Math.sin(i * 0.4) * 12 + Math.cos(i * 0.3) * 8}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Menu content — centered links, no card */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 sm:px-8">
          {/* Vertical accent line running through links */}
          <div className={`absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent transition-all duration-700 ${
            mobileOpen ? "h-[60%] opacity-100" : "h-0 opacity-0"
          }`} style={{ transitionDelay: mobileOpen ? "200ms" : "0ms" }} />

          <nav className="relative flex flex-col items-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center justify-center py-3 sm:py-3.5 transition-all duration-300 ${
                    mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 55 + 60}ms` : "0ms",
                  }}
                >
                  {/* Hover background */}
                  <span className={`absolute inset-x-0 -inset-y-1 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-primary/8"
                      : "bg-transparent group-hover:bg-surface-mid/40"
                  }`} />

                  {/* Dot on the vertical line */}
                  <span className={`absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary scale-125 shadow-[0_0_8px_rgba(62,0,94,0.3)]"
                      : "bg-outline-variant/40 scale-100 group-hover:bg-primary/50 group-hover:scale-110"
                  }`} />

                  {/* Link text */}
                  <span className={`relative font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent"
                      : "text-on-surface group-hover:text-on-surface/80"
                  }`}>
                    {link.label}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`relative mt-10 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg font-semibold transition-all duration-300 shadow-[0_2px_16px_rgba(62,0,94,0.15)] hover:shadow-[0_4px_24px_rgba(62,0,94,0.25)] hover:scale-[1.02] active:scale-[0.98] ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 55 + 100}ms` : "0ms",
            }}
          >
            Support Our Work
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
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
  const ref = useRef<HTMLAnchorElement>(null);
  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});
  const isActive = pathname === link.href;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHoverStyle({
      transform: `translate(${x * 0.2}px, ${y * 0.2}px)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverStyle({});
  }, []);

  return (
    <Link
      ref={ref}
      href={link.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-current={isActive ? "page" : undefined}
      className={`relative px-4 py-2 rounded-full text-label-md font-medium transition-all duration-200 ${
        isActive
          ? "text-on-primary"
          : "text-on-surface-variant hover:text-on-surface"
      }`}
      style={hoverStyle}
    >
      {isActive && (
        <span className="absolute inset-0 bg-primary rounded-full shadow-md" />
      )}
      {!isActive && (
        <span className="absolute inset-0 bg-surface-mid/0 hover:bg-surface-mid rounded-full transition-colors duration-200 -z-10" />
      )}
      <span className="relative z-10">{link.label}</span>
    </Link>
  );
}
