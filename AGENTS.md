# EndlessTech — Agent Instructions

> Learn Today. Build Tomorrow. UK-based technology consultancy and IT training academy.

## Identity

Senior Frontend Engineer & Web Architect. Production-ready, performance-first, accessible. No AI slop.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React 18, Server Components by default
- **Styling:** Tailwind CSS 3.4, custom CSS variables
- **Animation:** CSS keyframes (pulseGlow, floatSlow, shimmer).
- **Icons:** lucide-react
- **Fonts:** Newsreader (display/headings), Inter (body/UI), JetBrains Mono (labels/terminal) via `next/font/google`

## Build & Test

- Type check: `npx tsc --noEmit`
- Lint: `npm run lint`
- Dev: `npm run dev`
- Build: `npm run build`

## Project Structure

Layered, feature-sliced architecture under `src/`. One-directional dependency
flow: `app/` → `features/` → `shared/`. No barrel exports — import directly
from source (see Forbidden). See `Design.md` for the full component map.

```
src/
  app/                        # Next.js App Router — routes only (thin wrappers)
    layout.tsx                # Root layout (fonts, metadata, lang="en-GB")
    globals.css               # Tailwind + warm-editorial token layer + animations
    (marketing)/
      layout.tsx              # Navigation + Footer wrapper
      page.tsx                # Home → renders features/home/ui/HomeSections
      about/page.tsx
      contact/page.tsx         # Client component (form)
      training/page.tsx
      consulting/page.tsx
      services/
        page.tsx               # Services overview
        [slug]/page.tsx        # Dynamic detail route (SSG via generateStaticParams)
  shared/                      # Kernel — depended on by everything, depends on nothing
    ui/                        # Primitives: container, section, glass-card, badge,
                               #   gradient-button, gradient-text, section-heading,
                               #   page-hero, terminal-block
    lib/                       # utils.ts (cn), site.ts (company config + trust metrics)
    config/                   # navigation.ts (nav + footer links)
    types/                     # index.ts (shared contracts)
  features/                    # Vertical slices — each with ui/ + optional model/
    layout/ui/                 #   Navigation (client), Footer (server)
    hero/ui/                   #   HeroSection, HeroTerminal (signature CLI motif)
    services/{ui,model}/       #   ServicesSection, ServicesView, ServiceDetailView + services.ts
    training/{ui,model}/       #   TrainingSection, TrainingView + courses.ts
    consulting/{ui,model}/     #   ConsultingSection, ConsultingView + advisory-steps.ts
    about/{ui,model}/          #   AboutView + about.ts
    contact/ui/                #   ContactView
    home/ui/                   #   HomeSections (homepage composition root)
    roi-calculator/{ui,model}/ #   ROICalculator (client) + roi-pathways.ts
    faq/{ui,model}/            #   FAQAccordion (client, JSON-LD) + faqs.ts
    shared-sections/{ui,model}/#   WhyChooseUs, TechStack, Testimonials, CTA + models
```

Dependency invariant: `features/home` is the homepage composition root (composes
other features' sections top-down; nothing depends back into `home`).
`shared/ui/terminal-block` is shared by the hero + services features.

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
