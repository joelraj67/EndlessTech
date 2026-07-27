# Design System Specification: Aura Enterprise (EndlessTech)

Official Design System & Aesthetics Guidelines for Endless Tech — Premier UK-based Technology Consultancy & IT Training Academy.

---

## 1. Brand Identity & Aesthetic Philosophy: "Dark Space Editorial"

A hybrid of **Ultra-Modern Dark Minimalism**, **Precision Glassmorphism**, and **Kinetic Micro-Interactions**:
- **Canvas:** Deep Space Canvas (`#060e20`) background with subtle radial mesh gradients.
- **Typography:** Manrope ExtraBold/Bold display headings (`font-display`) with tight tracking (`-0.03em`), Inter body (`font-body`), and JetBrains Mono (`font-mono`) for technical CLI prompts, metrics, and eyebrow badges. High-contrast typography satisfies **WCAG AAA** standards.
- **Glassmorphism:** Smoked Obsidian (`#0f1930`) and Recessed Glass (`#141f38`) surfaces with 20px backdrop blurs and hairline white borders (`rgba(255, 255, 255, 0.12)`).
- **Vibrant Accents:** High-contrast Terracotta Amber (`#fb923c`) for primary CTAs and terminal prompt glyphs (`>`), Sky Blue (`#38bdf8`) for technical badges and links, and Emerald Green (`#34d399`) for operational status indicators.

---

## 2. Color Palette & Tokens

### Core Canvas & Surfaces
- **Deep Space Canvas (`#060e20` / `var(--color-bg)`):** Primary page background.
- **Smoked Obsidian Surface (`#0f1930` / `var(--color-surface)`):** Main card and container surface.
- **Recessed Smoked Glass (`#141f38` / `var(--color-surface-alt)`):** Secondary recessed containers and alt sections.
- **Terminal Panel (`#0a1124` / `var(--color-panel)`):** Deep black CLI terminal and code containers.

### Typography & Contrast
- **Solid White (`#ffffff`):** Headings (`h1`, `h2`, `h3`) for maximum visual pop.
- **Slate 50 (`#f8fafc` / `var(--color-fg)`):** Primary body text.
- **Slate 300 (`#cbd5e1` / `var(--color-muted)`):** Subtitles, descriptions, and secondary metadata.

### Accents & Signal Colors
- **Terracotta Amber (`#fb923c` / `var(--color-accent)`):** Primary action buttons, CTA highlights, active indicators.
- **Sky Blue (`#38bdf8` / `var(--color-info)` / `--color-cerulean`):** Tech badges, links, spotlight highlights.
- **Emerald Green (`#34d399` / `var(--color-success)`):** Operational status badges, feature checkmarks.
- **Rose Red (`#fb7185` / `var(--color-danger)`):** Dilemma/problem statement badges.

---

## 3. High-Performance Animated Primitives

1. **`<TextReveal>`**: Staggered character & word reveals powered by Framer Motion spring physics (`type: 'spring'`, `damping: 12`, `stiffness: 100`).
2. **`<SpotlightCard>`**: Interactive mouse-tracking card component casting a radial gradient spotlight (`rgba(56, 189, 248, 0.15)`) on cursor hover.
3. **`<MagneticButton>`**: Physics-based magnetic attraction button wrapper that pulls smoothly toward the user's cursor.
4. **`<InfiniteMarquee>`**: 60fps CSS keyframe marquee for seamless auto-scrolling tech stack logos and framework titles with fading edge masks.

---

## 4. Layout Architecture Standards

- **Asymmetrical Bento Grid:** Applied in `/services` to showcase capabilities in a magazine-style grid, with primary services taking `col-span-2` and secondary services taking `col-span-1`.
- **Problem-First Layout:** Applied on the Homepage (`<ProblemFirstSection>`) to lead with enterprise pain points before presenting solutions.
- **Section Rhythm:** `py-20` to `py-24` with hairline border dividers (`border-white/10`).
- **Container Constraints:** `max-w-[1280px]` content container with responsive padding (`px-4 sm:px-6 lg:px-8`).
