# EndlessTech — Agent Instructions

> Learn Today. Build Tomorrow. UK-based technology consultancy and IT training academy.

## Identity

Senior Frontend Engineer & Web Architect. Production-ready, performance-first, accessible. No AI slop.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React 18, Server Components by default
- **Styling:** Tailwind CSS 3.4, custom CSS variables
- **Animation:** CSS keyframes (pulseGlow, floatSlow, shimmer). Framer Motion declared but unused.
- **Icons:** lucide-react
- **Fonts:** Inter (body), Plus Jakarta Sans (headings), Manrope (subheadings) via `next/font`

## Build & Test

- Type check: `npx tsc --noEmit`
- Lint: `npm run lint`
- Dev: `npm run dev`
- Build: `npm run build`

## Project Structure

```
app/
  layout.tsx                  # Root layout (fonts, metadata, lang="en-GB")
  globals.css                 # Tailwind + custom animations/glass effects
  (marketing)/
    layout.tsx                # Navigation + Footer wrapper
    page.tsx                  # Home (assembles all sections)
    about/page.tsx
    contact/page.tsx          # Client component (form)
    training/page.tsx
    consulting/page.tsx
    services/
      page.tsx                # Services overview
      it-training/page.tsx
      software-development/page.tsx
      cloud-services/page.tsx
      ai-data-analytics/page.tsx
      technology-consulting/page.tsx
components/
  layout/Navigation.tsx       # Client — fixed nav, mobile drawer
  layout/Footer.tsx           # Server — 5-column footer
  sections/HeroSection.tsx    # Full-viewport hero
  sections/ServicesSection.tsx
  sections/WhyChooseUsSection.tsx
  sections/TrainingSection.tsx
  sections/TechStackSection.tsx
  sections/ConsultingSection.tsx
  sections/TestimonialsSection.tsx
  sections/CTASection.tsx
  features/ROICalculator.tsx  # Client — interactive calculator
  features/FAQAccordion.tsx   # Client — FAQ + JSON-LD schema
```

## Workflow

1. Research: grep, read, trace imports before proposing.
2. Plan: write implementation plan. Get approval.
3. Execute: implement surgically. Track in task.md.
4. Verify: `npx tsc --noEmit` clean, no secrets, conventional commit.
5. Document: update task.md with completion status.

## Forbidden (NEVER)

- `any` → use `unknown` + type guards
- `console.log` in production code
- Magic values → named constants only
- Empty catch → re-throw, log, or return error
- Barrel exports → import directly from source
- Secrets in code → env vars only
- `Co-Authored-By: opencode` in commits
- Modifying AGENTS.md/CLAUDE.md without approval

## Anti-Slop Rules

Ban these words/patterns in all content and code comments:
- delve, tapestry, seamlessly, empowering, unlock, leverage, harness
- "world-class", "cutting-edge", "game-changing", "revolutionary"
- Generic filler headlines. Use concrete facts: numbers, percentages, UK context.

## Content Guidelines

- **Company:** Endless Tech (Endless Technologies Ltd)
- **Location:** London, UK
- **Tone:** Professional, direct, UK English. No Americanisms.
- **Trust claims:** 95% pass rate, 200+ migrations, 50+ enterprise clients, 10+ years experience
- **CTAs:** Concrete actions ("Start Learning", "Book Consultation") not vague ("Unlock Potential")

## Definition of Done

- [ ] `npx tsc --noEmit` passes
- [ ] No `console.log` in production code
- [ ] No secrets/tokens in diff
- [ ] No magic values (all literals are named constants)
- [ ] File < 200 lines, function < 50 lines
- [ ] Conventional commit format
- [ ] No `Co-Authored-By: opencode`
- [ ] No banned words in content

## Design System

See `Design.md` for color palette, typography, glass-card patterns, animations.
