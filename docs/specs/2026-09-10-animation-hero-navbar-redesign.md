# Animation, Hero, Soundwave & Navbar Redesign

**Date:** 2026-09-10
**Status:** Approved

## Problem Statement

The current site has 5 core UX issues:
1. Scroll animations are uniform (same `fade-in-up` everywhere), shallow (only direct children stagger), and not noticeable
2. Hero sections are text-only with minimal visual energy
3. The soundwave brand motif exists in the logo but isn't leveraged as a signature element
4. The navbar is static, flat, and unremarkable
5. Wave decorations between sections don't reach their target positions (bottom of parent section)

## Scope

5 interconnected changes across CSS, components, and page composition.

---

## 1. Animation System Overhaul

### 1A. Deep Cascade Stagger

**Current:** `.stagger-children` only staggers direct children (nth-child selectors).

**New:** `.stagger-deep` class that recursively staggers ALL nested elements.

Implementation approach:
- Use a `useInView` + `MutationObserver` or recursive DOM walk in a `useEffect` to assign `data-depth` attributes to all children
- Each depth level gets an increasing `animation-delay`:
  - Depth 0 (wrapper): 0ms
  - Depth 1 (cards, headlines): 100ms
  - Depth 2 (card internals): 180ms  
  - Depth 3 (buttons, badges): 260ms
  - Depth 4+: capped at 340ms
- CSS: `[data-depth="N"].is-visible { animation-delay: calc(var(--base-delay, 0ms) + N * 80ms); }`

**Files to modify:**
- `src/hooks/useInView.ts` — add recursive depth assignment
- `src/components/ui/ScrollReveal.tsx` — add `stagger="deep"` option
- `src/app/globals.css` — add `.stagger-deep` rules

### 1B. Animation Variety Map

Each section gets a unique animation type. No two adjacent sections share the same type.

| Page | Section | Animation |
|------|---------|-----------|
| Homepage | HeroSection | `reveal-up` (text-reveal) |
| Homepage | WhatWeDo | `reveal-left` |
| Homepage | WhyItMatters | `reveal-right` |
| Homepage | ImpactStats | `reveal-scale` |
| Homepage | ClosingCTA | `reveal-blur` (NEW) |
| About | OurStory | `reveal-left` |
| About | FounderStory | `reveal-up` (slow) |
| About | MissionVision | `reveal-right` |
| About | RegistrationBlock | `reveal-scale` |
| Our Work | SpecialNeeds | `reveal-left` |
| Our Work | UniversityEducation | `reveal-right` |
| Our Work | GlobalVirtual | `reveal-up` |
| Our Work | FemaleVoice | `reveal-scale` |
| How We Work | PathwaySteps | `reveal-left` |
| How We Work | DignityGuardrails | `reveal-right` |
| How We Work | ActionCTA | `reveal-blur` |
| Contact | ImageGridSplit | `reveal-left` |
| Contact | ContactCards | `reveal-right` |
| Contact | DonationSection | `reveal-up` |
| Contact | ContactForms | `reveal-scale` |
| Moments | PhotoGrid | `reveal-up` |
| Moments | SafeguardingNotice | `reveal-blur` |

### 1C. New Animation Keyframes

Add to `globals.css`:

```css
@keyframes fade-in-blur {
  from { opacity: 0; filter: blur(8px); }
  to { opacity: 1; filter: blur(0); }
}

@keyframes fade-in-rotate {
  from { opacity: 0; transform: rotate(-2deg) translateY(20px); }
  to { opacity: 1; transform: rotate(0) translateY(0); }
}

@keyframes fade-in-up-strong {
  from { opacity: 0; transform: translateY(50px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

### 1D. Stronger Motion Defaults

- Travel distance: 30px → 45px for `reveal-up`
- Duration: 0.6s → 0.7s base, 0.8s → 1.0s for `reveal-slow`
- Cards get subtle `scale(1.01)` overshoot at 50% keyframe
- Easing: keep `cubic-bezier(0.16, 1, 0.3, 1)` (Apple-like)

---

## 2. Hero Reimagining

### Three-Layer Composition

**Layer 1: Animated Soundwave SVG**
- Position: absolute, right 5% (desktop), centered background (mobile)
- Size: ~400px wide, ~300px tall
- Color: `var(--color-secondary)` at opacity 0.08 (subtle, not competing with text)
- Animation: bars animate from 0 to full height in a wave pattern (left-to-right stagger)
- Implementation: inline SVG with 24 bars, each bar's `height` animated via CSS `@keyframes` with per-bar `animation-delay`

**Layer 2: Floating Geometric Elements**
- 5-6 elements: stars (from logo shape), circles, small dots
- Each has unique:
  - Position (absolute, spread across hero)
  - Parallax speed (0.05 to 0.15 via `useParallax` hook)
  - Animation: `subtle-drift` with unique `animation-duration` (8s to 15s)
  - Size: 8px to 40px
  - Color: brand colors at very low opacity (0.06 to 0.12)
- Implementation: `<FloatingElements>` component rendered inside hero

**Layer 3: Content (Split Layout)**
- Desktop: `grid-cols-12` with `col-span-7` (text) and `col-span-5` (soundwave visual)
- Mobile: stacked, soundwave moves to background
- Content: eyebrow, headline (text-reveal), subtitle, CTAs, trust indicators — same content, new layout
- Headline uses text-reveal line-by-line animation with staggered delays (0ms, 120ms, 240ms, 360ms, 480ms)

---

## 3. Soundwave Signature System

### 3A. Logo Integration

**File:** `src/components/svgs/Logo.tsx`

- Add `stroke-dasharray` and `stroke-dashoffset` to the 3 soundwave arc paths
- On hover: bars pulse outward with staggered timing (0ms, 80ms, 160ms)
- On page load: arcs draw themselves in using CSS animation
- Implementation: wrap logo arcs in a `<g>` with class `logo-arcs`, animate via CSS

```css
.logo-arcs path {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: draw-arc 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.logo-arcs path:nth-child(2) { animation-delay: 0.15s; }
.logo-arcs path:nth-child(3) { animation-delay: 0.3s; }
```

### 3B. Hero Soundwave (see Section 2, Layer 1)

### 3C. Section Soundwave Divider

**New component:** `src/components/ui/SoundwaveDivider.tsx`

- Compact version: full-width, 40px tall
- 16 bars, animated in a gentle wave pattern (CSS animation, infinite, subtle)
- Color: `var(--color-primary)` at opacity 0.05
- Used between 2-3 key sections on homepage (after WhatWeDo, before ImpactStats)
- Implementation: SVG with CSS `@keyframes` for bar height animation

---

## 4. Navbar Redesign

### 4A. Glass Morphism

**Current:** `bg-surface/90 backdrop-blur-md border-b border-outline-variant/30`

**New:**
```css
bg-surface/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_3px_rgba(0,0,0,0.05)]
```

- More transparent, more blur, lighter border
- On scroll: opacity increases to 0.92, border becomes more visible, shadow deepens

### 4B. Magnetic Hover Effect (Desktop)

- Each nav link has a subtle `translate` toward the cursor on hover
- Implementation: `onMouseMove` handler that calculates cursor position relative to element center, applies `transform: translate(dx * 0.15, dy * 0.15)`
- Returns to center on `onMouseLeave`

### 4C. Active State Morph

- Active nav item has a pill background that slides between items
- Implementation: `<motion.div layoutId="nav-pill"` from framer-motion (or manual CSS transition)
- Since we're not using framer-motion, implement with:
  - Track active item's `offsetLeft` and `offsetWidth`
  - Render a sliding background `<div>` that transitions `left` and `width`

### 4D. Mobile Menu

**Hamburger → X morph:**
- Three bars transform: top rotates 45deg + translates down, middle fades out, bottom rotates -45deg + translates up
- Same as current but with smoother easing and slightly larger size

**Fullscreen overlay:**
- Background: `bg-surface/95 backdrop-blur-2xl`
- Nav items stagger in from left with scale + fade:
  - Item 1: delay 0ms, translateX(-20px) → 0, opacity 0 → 1
  - Item 2: delay 60ms
  - Item 3: delay 120ms
  - Item 4: delay 180ms
  - Item 5: delay 240ms
  - CTA button: delay 300ms, slides up from bottom
- Each item has `font-size` increase on entrance (from 0.9em to 1em)

### 4E. Scroll Behavior

- `useEffect` with scroll listener:
  - `scrollY > 50`: compact mode (h-16), border opacity 0.4, shadow increases
  - `scrollY === 0`: full mode (h-20), border opacity 0.2, no shadow
  - Transition: `transition-all duration-300`

---

## 5. Wave Positioning Fix

### Problem

Waves are inside sections with `overflow-hidden` or wrong margins, so they don't reach the section boundary.

### Solution

1. **Parent section** must NOT have `overflow-hidden` — move `overflow-hidden` to an inner wrapper div
2. **Wave position:** `absolute bottom-0 left-0 right-0` within the parent section
3. **Overlap:** Wave uses `translate-y-[1px]` (or `mb-[-1px]` on the wave container) to overlap into the next section by 1px minimum
4. **Color matching:** Wave's `fill` color = next section's `bg` color (passed via prop or hardcoded per instance)
5. **Z-index:** Wave sits between sections at `z-10`, content at `z-20`

### Updated WaveDecoration Props

```typescript
interface WaveDecorationProps {
  className?: string;
  flip?: boolean;
  color?: string;        // fill color (defaults to next section's bg)
  opacity?: number;       // SVG opacity (default 0.06)
  overlap?: boolean;      // whether to overlap into next section (default true)
}
```

When `overlap={true}`:
- Container gets `absolute bottom-0 left-0 right-0 translate-y-full`
- Parent section needs `relative` positioning
- Parent section's inner content needs `relative z-20`

---

## Implementation Order

1. **Animation system** (CSS + ScrollReveal + useInView) — foundation for everything else
2. **Wave positioning fix** — quick fix, immediate visual improvement
3. **Soundwave signature system** — new components (SoundwaveDivider, Logo animation)
4. **Hero reimagining** — builds on animation system + soundwave components
5. **Navbar redesign** — independent, can be done in parallel

## Files to Modify

### Core
- `src/app/globals.css` — new keyframes, stagger-deep rules, animation defaults
- `src/hooks/useInView.ts` — recursive depth assignment
- `src/components/ui/ScrollReveal.tsx` — `stagger="deep"` support

### New Components
- `src/components/ui/SoundwaveDivider.tsx` — section divider
- `src/components/ui/FloatingElements.tsx` — hero floating shapes
- `src/components/ui/AnimatedSoundwave.tsx` — large hero soundwave SVG

### Modified Components
- `src/components/svgs/Logo.tsx` — arc draw animation
- `src/components/layout/Header.tsx` — glass morphism, magnetic hover, mobile menu
- `src/components/ui/WaveDecoration.tsx` — overlap positioning
- All section components — animation type variety assignment

### Pages
- `src/app/page.tsx` — animation variety map for homepage
- `src/app/about/page.tsx` — animation variety map for about
- `src/app/our-work/page.tsx` — animation variety map for our work
- `src/app/how-we-work/page.tsx` — animation variety map for how we work
- `src/app/contact/page.tsx` — animation variety map for contact
- `src/app/moments/page.tsx` — animation variety map for moments
