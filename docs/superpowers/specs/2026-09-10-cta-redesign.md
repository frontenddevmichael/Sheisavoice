# CTA Redesign — Premium Hybrid Approach

**Date:** 2026-09-10
**Status:** Approved
**Scope:** Visual redesign of all CTAs across the site. Text labels unchanged.

## Problem
All 38 CTAs use `rounded-full` pill buttons with the same shape and spacing. They feel generic and don't match the Apple-level design quality of the rest of the site.

## Solution: Contextual Premium CTAs
Different visual treatments depending on CTA purpose. Hybrid of Apple.com warmth and modern SaaS sharpness.

## Design Specifications

### 1. Hero CTAs (Homepage, Section headers)
- **Shape:** `rounded-2xl` (16px radius)
- **Primary:** `bg-gradient-to-r from-primary-container to-primary`, `shadow-[0_2px_16px_rgba(62,0,94,0.12)]`, `hover:scale-[1.02]`
- **Secondary:** `border-2 border-outline-variant/40`, transparent fill, `hover:bg-surface-mid`
- **Padding:** `px-8 py-4`
- **Typography:** `font-semibold tracking-wide`
- **Transition:** `transition-all duration-300`

### 2. Form Submit Buttons
- **Shape:** `rounded-xl` (12px radius)
- **Style:** Solid fill, no gradient, no heavy shadow
- **Primary:** `bg-primary text-on-primary`
- **Secondary:** `bg-secondary text-on-secondary`
- **Hover:** `hover:-translate-y-0.5`
- **Transition:** `transition-all duration-200`

### 3. Nav CTA ("Support Our Work" in header)
- **Shape:** `rounded-full` (keep pill — works in nav context)
- **Style:** Glassmorphism — `bg-primary-container/80 backdrop-blur-md border border-primary/10`
- **Padding:** `px-5 py-2` (tighter)
- **Hover:** `hover:bg-primary hover:shadow-lg`

### 4. Section CTAs (SpecialNeeds, ActionCTA, SafeguardingBanner)
- **Shape:** `rounded-xl` (12px radius)
- **Primary:** Solid fill, fine shadow
- **Secondary:** Border outline, transparent fill
- **Ghost:** No border, no fill, text + hover underline

### 5. Jump Nav (Our Work hero)
- Remove pill containers — clean text links
- Left accent bar (2px, colored per section) on hover
- Subtle scale on hover
- Transition: `transition-all duration-200`

### 6. Footer/Utility CTAs
- Keep as-is — plain text links, subtle and understated

## Files to Modify
- `src/components/ui/Button.tsx` — Update variant styles
- `src/components/sections/home/HeroSection.tsx` — Hero CTAs
- `src/components/sections/home/ClosingCTA.tsx` — Closing CTAs
- `src/components/sections/work/SpecialNeeds.tsx` — Section CTAs
- `src/components/sections/work/SafeguardingBanner.tsx` — Safeguarding CTA
- `src/components/sections/how/ActionCTA.tsx` — How We Work CTAs
- `src/components/sections/contact/ContactSplitSection.tsx` — Form submits
- `src/components/sections/work/GlobalVirtual.tsx` — Form submit
- `src/components/layout/Header.tsx` — Nav CTA
- `src/app/our-work/page.tsx` — Jump nav
