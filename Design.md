# EndlessTech — Design System (Warm Editorial / Vinny.io v2)

> **Skin authority.** The visual skin is the Vinny.io **warm editorial** design
> system (Open Design project `89398dc1`, `tokens-v2.css` / `design-system-v2.html`).
> This is a sanctioned divergence from the original PRD §7 cool-blue palette —
> Precedence #1: explicit user request for "clean and simple, rich typography,
> more smoothness". Every component reads from the token layer below; no raw hex
> lives outside `app/globals.css`.

## Color tokens

All tokens are CSS custom properties in `:root` (`app/globals.css`) with OKLCH
upgrades in an `@supports` block. Tailwind maps them via `tailwind.config.ts`.

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| Background (paper) | `#FAF8F4` | `bg-paper` | Page background — dominant canvas |
| Surface | `#FFFFFF` | `bg-surface` | Cards, inputs, nav bar |
| Surface alt | `#F3EFE7` | `bg-surface-alt` | Recessed sections, code blocks, chips |
| Foreground (ink) | `#1B1815` | `text-ink` | Primary text on light |
| Muted | `#6B655C` | `text-muted` | Secondary text, captions |
| Border | `#E8E2D6` | `border-line` | Hairline borders |
| Border strong | `#D9D1C0` | `border-line-strong` | Emphasized borders, input borders |
| Accent (terracotta) | `#B0552E` | `text-accent` / `bg-accent` | Single high-signal accent — CTAs, links, focus |
| Accent hover | `#974626` | `bg-accent-hover` | Primary button hover |
| Accent active | `#7E3A1F` | `text-accent-active` | Primary button active |
| Accent soft | `#F4E6DA` | `bg-accent-soft` | Tinted backgrounds, soft chips |
| Panel (ink) | `#2A2420` | `bg-panel` | Tinted dark surface — footer + terminal only |
| Success | `#4A7C59` | `text-success` | Status only |
| Warning | `#B0832E` | `text-warning` | Status (large text/icons only) |
| Danger | `#B23B3B` | `text-danger` | Errors, destructive |
| Info | `#3D6B8C` | `text-info` | Informational |

### Posture rules

1. Warm paper `#FAF8F4` is the dominant canvas; surfaces alternate pure white and recessed `#F3EFE7`.
2. Terracotta `#B0552E` is the **single high-signal accent** — primary CTAs, links, focus rings, icon strokes. The only large accent wash is the CTA band. Never decorate with it.
3. A tinted dark panel (`#2A2420`) is reserved for the **footer** and the **terminal** only — never a global dark theme.
4. Hairline 1px borders, generous whitespace, restrained radius.
5. Status colours are earthy and reserved for status — never decoration.

## CSS variables

```css
--color-bg:           #FAF8F4;
--color-surface:      #FFFFFF;
--color-surface-alt:  #F3EFE7;
--color-fg:           #1B1815;
--color-muted:        #6B655C;
--color-border:       #E8E2D6;
--color-border-strong:#D9D1C0;
--color-accent:        #B0552E;
--color-accent-hover:  #974626;
--color-accent-active: #7E3A1F;
--color-accent-soft:   #F4E6DA;
--color-panel:         #2A2420;
--color-focus:         #B0552E;
```

## Typography

A three-family system — the "rich typography" lives in the serif/sans/mono interplay.

| Role | Font | Tailwind | Weight | Notes |
|---|---|---|---|---|
| Display (h1–h3) | Newsreader | `font-display` | 500 (italic accent word) | Serif; loaded via `next/font/google` with `adjustFontFallback: false` |
| Body / UI / subheads | Inter | `font-body` (`font-sans` alias) | 400, 500, 600 | Sans; `next/font/google` |
| Labels / eyebrows / terminal | JetBrains Mono | `font-mono` | 400, 500 | Mono; `next/font/google` |

- Serif carries every headline; subheads (h4–h6) shift to sans — the v2 tonal interplay.
- The italic accent word (`<GradientText>`) replaces gradient-clipped headline spans (a top AI tell).
- Font loading: `next/font/google` in `app/layout.tsx`, `display: 'swap'`, with declared fallback stacks.

## Radius

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| sm | 4px | `rounded-sm` | Tags, badges |
| md | 6px | `rounded-md` | Buttons, inputs |
| lg | 10px | `rounded-lg` | Cards |
| xl / 2xl | 14px | `rounded-xl` | Hero/CTA panels |

Editorial restraint — controls stay tight (6px); cards breathe a little more (10–14px). Never pill-everything.

## Shadow

Soft, warm-tinted, and layered — built on a warm-ink base so shadows never read as cold grey.

| Token | Value |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(27,24,21,0.05)` |
| `shadow-md` | `0 4px 12px rgba(27,24,21,0.06), 0 1px 3px rgba(27,24,21,0.04)` |
| `shadow-lg` | `0 12px 32px rgba(27,24,21,0.08), 0 2px 6px rgba(27,24,21,0.04)` |
| `shadow-xl` | `0 24px 56px rgba(27,24,21,0.10), 0 4px 12px rgba(27,24,21,0.05)` |

## Motion

Slow durations (300–700ms) paired with ease-out-quint — the "smoothness".

| Token | Value |
|---|---|
| `--ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint, signature) |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--duration-fast` | 150ms |
| `--duration-normal` | 300ms |
| `--duration-slow` | 500ms |

`prefers-reduced-motion` disables every transition globally.

## Card system

```css
.glass-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
.glass-card-hover:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-strong);
  transform: translateY(-4px);
}
```

The `GlassCard` primitive name is retained for stability; it now renders a warm paper card, not the old glassmorphic surface. Set `interactive` for the hover-lift treatment.

## Accent text

```css
.gradient-text { color: var(--color-accent); font-style: italic; }
```

The `GradientText` primitive name is retained; it now renders the terracotta italic serif accent word, not gradient-clipped text. Both `tone="blue"` and `tone="purple"` resolve to the single accent (the system is single-accent).

## Background patterns

```css
/* Quiet warm dot grid for hero/section backgrounds */
.bg-grid-pattern {
  background-image: radial-gradient(rgba(27, 24, 21, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

## Layout conventions

- **Max width:** `max-w-content` (1280px) centered with `mx-auto px-6` via `<Container>`.
- **Section spacing:** `py-32` default, alternating `paper` / `surface` / `surface-alt` tones via `<Section>`. `panel` reserved for the footer/terminal.
- **Grid:** Tailwind responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Nav:** Fixed top, paper surface with backdrop blur, hairline border.
- **Footer:** Tinted dark panel (`bg-panel`), 5-column grid on desktop, stacked on mobile.

## Button styles

- **Primary** (`<GradientButton variant="primary">`): `bg-accent` white text, `rounded-md`, `active:scale-[0.97]` press feedback, 200ms ease-out, keyboard focus ring (3px accent + 2px offset).
- **Secondary** (`variant="secondary"`): surface bg, line-strong border; hover lifts to accent border + accent text.
- **Ghost** (`variant="ghost"`): transparent; hover fills with `accent-soft`.
- CTAs always carry concrete action text ("Book Consultation", "Explore Our Services").

## UI primitives (`src/shared/ui/`)

Reusable building blocks — the single source for each visual pattern. Never copy-paste the underlying class strings into sections; import the primitive.

| Primitive | Replaces | Purpose |
|---|---|---|
| `Container` | ~21× `max-w-content mx-auto px-6` | Centered max-width wrapper |
| `Section` | per-section bg + py | `py-32` rhythm + `paper`/`surface`/`surface-alt`/`panel` tones + optional `id` |
| `GlassCard` | 9× card class blocks | Warm paper surface; `interactive` for hover-lift |
| `Badge` | ~15× pill badges | Mono eyebrow/tag chip; tones: accent/success/warning/danger/info/neutral |
| `GradientButton` | CTA link/button pairs | Terracotta button w/ press feedback + focus ring; variants primary/secondary/ghost |
| `GradientText` | headline accent spans | Terracotta italic serif accent word |
| `SectionHeading` | ~15× header blocks | Eyebrow + serif display title + subtitle |
| `PageHero` | 7× interior-page heroes | Shared hero (glow + badge + h1 + subtitle) for all non-home pages |
| `HeroTerminal` / `TerminalBlock` | signature motif | **Signature element** — `endless` CLI surface (prompts + output + status chips). The one dark panel. |

## Design direction

The signature element is the **`endless` CLI terminal vernacular** — preserved through the skin change. It grounds the brand in its real world (cloud infra, certification, deployment) and is what distinguishes EndlessTech from templated competitors. The terminal keeps its tinted ink panel (`#2A2420`) with terracotta prompts and warm-tinted status chips.

## Component patterns

- Server Components by default. Add `'use client'` only for interactivity (forms, drawers, accordions, calculators).
- **Content is co-located per feature:** marketing copy lives in `src/features/<feature>/model/*.ts` (single source of truth), consumed by that feature's `ui/` components. Editing copy never touches JSX. The flat `content/` folder no longer exists.
- **Pages are thin route adapters:** each `src/app/(marketing)/*/page.tsx` delegates to a `src/features/<feature>/ui/*View.tsx` component. Route logic (metadata, static params) stays in the route file.
- **Layered, feature-sliced architecture:** `src/app/` (routes) → `src/features/<slice>/` (vertical feature: `ui/` + optional `model/`) → `src/shared/` (`ui/` · `lib/` · `config/` · `types/`). One-directional dependency flow; no barrel exports (direct imports only, per AGENTS.md). `src/features/home` is the homepage composition root; `src/shared/ui/terminal-block` is shared by the hero + services features.
- **Dynamic detail routes** use `[slug]` + `generateStaticParams` (fully static SSG) instead of one folder per item.
- All pages use the `(marketing)` route group layout with Navigation + Footer.
- **Company config** (name, contact, trust metrics) lives in `src/shared/lib/site.ts`; **nav links** in `src/shared/config/navigation.ts` — both consumed by Navigation + Footer.
