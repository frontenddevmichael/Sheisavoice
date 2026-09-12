# SHEISAVOICE Visual Enhancement Design Spec

**Date:** 2026-09-12
**Goal:** Transform SHEISAVOICE from a clean Next.js template into a warm, joyful, distinctly African nonprofit website with ankara-inspired patterns, immersive parallax, and premium micro-interactions.

---

## 1. Ankara Geometric Patterns

### 1.1 Pattern Library

Create `src/components/ui/AnkaraPatterns.tsx` with 4 SVG pattern components:

**AdireCircles** — Concentric overlapping circles (most iconic ankara motif)
- 3-5 concentric rings per cluster
- Multiple clusters scattered across a viewBox
- Stroke-based (no fill), configurable stroke color and width
- Use for: card backgrounds, section backgrounds

**KenteZigzag** — Angular zigzag lines stacked horizontally
- 3-5 parallel zigzag rows
- Sharp angular peaks (not wavy)
- Use for: section dividers, border accents

**AnkaraDiamonds** — Repeating diamond/eye shapes
- Diamond grid with small dots at intersections
- Inspired by the "eye" motif in ankara prints
- Use for: badge fills, card accent corners

**LeafFlow** — Organic flowing leaf-inspired curves
- Curved stems with leaf-like shapes branching off
- Flowing, asymmetric, organic feel
- Use for: hero background accents, section decorations

### 1.2 Pattern Configuration

Each pattern accepts:
```ts
{
  color?: string;       // stroke/fill color (default: currentColor)
  opacity?: number;     // 0-1 (default: 0.08 for backgrounds)
  scale?: number;       // size multiplier (default: 1)
  className?: string;   // positioning classes
}
```

### 1.3 Where Patterns Appear

| Location | Pattern | Opacity | Size |
|---|---|---|---|
| Card backgrounds | AdireCircles or AnkaraDiamonds | 5-8% | Full card |
| Hero section corners | LeafFlow | 10-15% | Large (300-400px) |
| Section backgrounds (every 2nd section) | AdireCircles | 3-5% | Full section width |
| Badge interiors | AnkaraDiamonds | 15-20% | Badge-sized |
| CTA card backgrounds | KenteZigzag | 8-12% | Full card |
| Footer background | AdireCircles + LeafFlow | 3-5% | Full footer |

### 1.4 Pattern + Parallax Integration

Background patterns in sections use `ParallaxY` with `speed: 20-30` so they drift slowly as user scrolls, creating depth.

---

## 2. Font Upgrade

### 2.1 New Font Stack

**Headlines: Fraunces** (Google Fonts, variable)
- Weights: 600, 700, 800, 900
- Optical sizing axis (opsz: 14-96) — larger sizes get more elegant proportions
- CSS variable: `--font-fraunces`
- Replace: Epilogue for all `font-headline` usage

**Body: Keep Manrope** (no change)
- Already excellent for readability

**Display/Accent: Playfair Display** (Google Fonts)
- Weights: 700, 800, 900
- CSS variable: `--font-playfair`
- Use ONLY for: StackedMonogram, hero pull quotes, large decorative text

### 2.2 Font Mapping

| Element | Before | After |
|---|---|---|
| All headlines (h1-h4) | Epilogue 600/700 | Fraunces 700/800/900 |
| Body text | Manrope 400/500/600/700 | Manrope (unchanged) |
| Labels/badges | Epilogue 600 | Manrope 600 (consistent) |
| StackedMonogram | Epilogue 700 | Playfair Display 900 |
| Hero pull quotes | Epilogue 700 | Playfair Display 700 |
| Navigation links | Manrope 600 | Manrope 600 (unchanged) |

### 2.3 CSS Changes

In `globals.css`:
- Update `--font-headline` to reference Fraunces
- Add `--font-playfair` for display usage
- Update all `font-headline` utility classes to use Fraunces
- Add `font-display` utility for Playfair Display

In `layout.tsx`:
- Import Fraunces and Playfair Display from `next/font/google`
- Add CSS variables

---

## 3. Heavy Parallax System

### 3.1 Parallax Layers Per Section

Each major section gets 3 parallax layers:

```
┌─────────────────────────────────┐
│  Layer 1: BACKGROUND            │  speed: 0.3x (drifts slowly)
│  - Ankara pattern               │
│  - Subtle gradient              │
│                                 │
│  Layer 2: MIDGROUND             │  speed: 0.6x (medium drift)
│  - Decorations (dots, stars)    │
│  - Blobs, circles               │
│                                 │
│  Layer 3: FOREGROUND            │  speed: 1x (normal)
│  - Text content                 │
│  - Cards                        │
│  - CTAs                         │
└─────────────────────────────────┘
```

### 3.2 New Parallax Components

**`ParallaxBackground`** — wraps section background with slow-drift parallax
```tsx
<ParallaxBackground speed={30} className="absolute inset-0">
  <AdireCircles opacity={0.05} />
</ParallaxBackground>
```

**`ParallaxDecorations`** — wraps decoration layer with medium-speed parallax
```tsx
<ParallaxDecorations speed={60}>
  <ScatteredDots position="top-right" />
  <StarBurst className="..." />
</ParallaxDecorations>
```

### 3.3 Hero Parallax Effects

**Background gradient shift:**
- As user scrolls, hero background gradient shifts hue slightly
- Use `useScroll` + `useTransform` to map scroll progress to gradient colors

**Soundwave compression:**
- `SoundwaveBottom` bars compress vertically as user scrolls past hero
- Use `useTransform(scrollYProgress, [0, 0.5], [1, 0.6])` on scaleY

**Headline scale:**
- Hero headline subtly scales from 1.0 to 0.97 as user scrolls
- Creates "receding into distance" feel

**Floating elements drift:**
- Existing `FloatingElements` already has parallax — enhance with more layers
- Add 2-3 more elements per hero for richer depth

### 3.4 Section Overlap

Sections use negative margins to overlap slightly:
- Each section has `mt-[-2rem]` or `mt-[-3rem]`
- Creates stacked-card effect
- Z-index managed so content stays clickable
- Overlap area uses gradient fade for smooth transition

---

## 4. Micro-Interactions

### 4.1 Hover Reveals

**Card tilt (mouse-follow):**
- New `useMousePosition` hook tracks cursor position within card
- Card rotates `rotateX` and `rotateY` based on cursor offset from center
- Max tilt: 3-4 degrees
- Smooth transition: `transition: transform 0.15s ease-out`
- Reset to flat on mouse leave

**Card image zoom:**
- On hover, card image scales to 1.05
- Parent has `overflow: hidden`
- Transition: 0.4s ease

**Link underline draw:**
- Existing `.link-underline` class — enhance with smoother animation
- Underline draws from left to right on hover
- Color matches link color

**Icon bounce:**
- On hover, icons do a subtle bounce (translateY -3px, back to 0)
- Use CSS `@keyframes icon-bounce`

**Button gradient shift:**
- Primary button gradient angle shifts on hover (135deg → 150deg)
- Creates subtle "living" feel

### 4.2 Click Ripples

**Button ripple effect:**
- New `RippleButton` component (or enhance existing Button)
- On click, expanding circle from click point
- Circle color: white at 30% opacity
- Expands to cover full button, then fades
- Duration: 0.6s

**Card pulse on click:**
- Brief scale pulse (1.0 → 0.98 → 1.0) on click
- Duration: 0.2s

**Nav link highlight:**
- On click, brief background flash (primary color at 10% opacity)
- Fades out over 0.3s

### 4.3 Scroll Progress Indicator

- Thin 3px line at very top of viewport (above header)
- Fills left-to-right as user scrolls
- Color: gradient from primary to secondary to tertiary
- Use `useScroll` + `useTransform` to map scroll to width

---

## 5. Implementation Priority

### Phase 1: Foundation (do first)
1. Font upgrade (Fraunces + Playfair Display)
2. Ankara pattern library (4 SVG components)
3. Scroll progress indicator

### Phase 2: Parallax (do second)
4. ParallaxBackground component
5. Hero parallax enhancements (gradient shift, soundwave compression, headline scale)
6. Section overlap with negative margins

### Phase 3: Micro-interactions (do third)
7. Card tilt on hover (useMousePosition hook)
8. Button ripple effect
9. Link underline draw enhancement
10. Icon bounce animations

### Phase 4: Polish (do last)
11. Ankara patterns integrated into cards, badges, sections
12. Section background ankara with parallax
13. Final timing/opacity adjustments

---

## 6. Files to Create/Modify

### New Files
- `src/components/ui/AnkaraPatterns.tsx` — 4 SVG pattern components
- `src/components/ui/ParallaxBackground.tsx` — slow-drift parallax wrapper
- `src/components/ui/RippleButton.tsx` — button with click ripple
- `src/hooks/useMousePosition.ts` — cursor tracking for card tilt

### Modified Files
- `src/app/globals.css` — new fonts, new keyframes (icon-bounce, ripple), card tilt styles
- `src/app/layout.tsx` — import Fraunces + Playfair Display
- `src/components/ui/Motion.tsx` — add ZoomReveal variant
- `src/components/ui/Button.tsx` — integrate ripple effect
- `src/components/ui/Card.tsx` — add tilt hover effect
- `src/components/ui/FloatingElements.tsx` — enhance with more parallax layers
- `src/components/ui/StackedMonogram.tsx` — switch to Playfair Display
- `src/components/ui/SoundwaveBottom.tsx` — add scroll-linked compression
- `src/components/heroes/*.tsx` — hero parallax enhancements, ankara accents
- `src/components/sections/**/*.tsx` — ankara backgrounds, parallax layers, card tilt
- `src/components/layout/Header.tsx` — nav link highlight on click
- `src/components/layout/Footer.tsx` — ankara background pattern
