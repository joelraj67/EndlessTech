# EndlessTech — Design System

## Color Palette

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| Deep Navy | `#071A2B` | `bg-deep-navy` | Primary background, body text |
| Tech Blue | `#0066FF` | `text-tech-blue` | Primary accent, buttons, links |
| Electric Blue | `#00D4FF` | `text-electric-blue` | Gradient endpoints, hover states |
| Soft Purple | `#8B5CF6` | `text-soft-purple` | Secondary accent, purple gradients |
| Light Grey | `#F8FAFC` | `bg-light-grey` | Light section backgrounds |
| Medium Grey | `#64748B` | `text-medium-grey` | Muted text, secondary content |
| White | `#FFFFFF` | `text-white` | Headings on dark backgrounds |

## CSS Variables

```css
--primary-deep-navy: #071A2B;
--primary-tech-blue: #0066FF;
--primary-white: #FFFFFF;
--accent-electric-blue: #00D4FF;
--accent-soft-purple: #8B5CF6;
--bg-light-grey: #F8FAFC;
--text-medium-grey: #64748B;
```

## Typography

| Role | Font | Tailwind | Weight |
|---|---|---|---|
| Body | Inter | `font-sans` | 400, 500, 600 |
| Headings (h1-h3) | Plus Jakarta Sans | `font-heading` | 600, 700 |
| Subheadings (h4-h6) | Manrope | `font-subheading` | 500, 600 |

- Letter spacing on headings: `-0.025em`
- Font loading: `next/font/google` in root layout

## Glass Card System

```css
/* Base glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Interactive glass card */
.glass-card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.glass-card-hover:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.2);
  transform: translateY(-4px);
}
```

**Usage:** All service cards, feature cards, testimonials, dashboard mockups.

## Gradient Text

```css
/* Blue gradient text */
.gradient-text {
  background: linear-gradient(135deg, #FFFFFF 0%, #00D4FF 50%, #0066FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Purple gradient text */
.gradient-text-purple {
  background: linear-gradient(135deg, #FFFFFF 0%, #C084FC 50%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Animations

| Name | Class | Duration | Effect |
|---|---|---|---|
| Pulse Glow | `animate-pulse-glow` | 6s infinite | Subtle scale + opacity pulse |
| Float Slow | `animate-float-slow` | 5s infinite | Gentle vertical float |
| Shimmer | N/A (CSS only) | 3s | Background position sweep |

## Background Patterns

```css
/* Dot grid pattern for hero/section backgrounds */
.bg-grid-pattern {
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

## Layout Conventions

- **Max width:** `max-w-7xl` (1280px) centered with `mx-auto`
- **Section spacing:** `py-20` or `py-24` between sections
- **Grid:** Tailwind responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- **Nav:** Fixed top, z-50, glassmorphic background
- **Footer:** Dark background, 5-column grid on desktop, stacked on mobile

## Button Styles

- **Primary:** `bg-tech-blue hover:bg-blue-700` with white text, rounded-lg, px-6 py-3
- **Secondary:** `border border-white/20 hover:border-electric-blue/50` glass outline
- **CTAs:** Always concrete action text ("Start Learning", "Book Consultation", "Get Started")

## Component Patterns

- Server Components default. Add `'use client'` only for interactivity (forms, drawers, accordions, calculators)
- Section components accept no props — content is hardcoded (no CMS yet)
- All pages use `(marketing)` route group layout with Navigation + Footer
