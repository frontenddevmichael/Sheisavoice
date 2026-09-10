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

  return (
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

      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <Logo className="h-7 lg:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 relative">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-container text-on-primary font-label-md font-semibold hover:bg-primary transition-all duration-300 shadow-[var(--shadow-button)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(62,0,94,0.2)]"
          >
            Support Our Work
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          {/* Morphing hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — fullscreen glass overlay with staggered items */}
      <div
        className={`lg:hidden fixed inset-0 top-0 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface/95 backdrop-blur-3xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Decorative soundwave in mobile menu */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-1 opacity-10 pointer-events-none" aria-hidden="true">
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

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center items-center px-8">
          <nav className="flex flex-col items-center gap-3">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-2xl font-headline font-bold transition-all duration-300 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`mt-6 px-8 py-3 rounded-full bg-primary-container text-on-primary font-label-lg font-semibold transition-all duration-300 shadow-lg ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${NAV_LINKS.length * 60 + 100}ms` : "0ms",
              }}
            >
              Support Our Work
            </Link>
          </nav>
        </div>
      </div>
    </header>
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
      {/* Active pill background */}
      {isActive && (
        <span className="absolute inset-0 bg-primary rounded-full shadow-md" />
      )}
      {/* Hover pill background */}
      {!isActive && (
        <span className="absolute inset-0 bg-surface-mid/0 hover:bg-surface-mid rounded-full transition-colors duration-200 -z-10" />
      )}
      <span className="relative z-10">{link.label}</span>
    </Link>
  );
}
