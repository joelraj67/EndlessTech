# Refactor: Enterprise-Grade Structure

Goal: Separate content, types, and presentation. Extract reusable UI primitives. Replace 5 static service folders with 1 dynamic `[slug]` route.

## Phase 1 — Foundation (additive, safe) ✅ DONE

- [x] 1.1 Create `types/index.ts` (shared interfaces)
- [x] 1.2 Install `clsx` + `tailwind-merge`, create `lib/utils.ts` (`cn()`)
- [x] 1.3 Create `lib/site.ts` (company/contact config + hero metric)
- [x] 1.4 Create `config/navigation.ts` (nav + footer links)
- [x] 1.5 Create `content/*.ts` (9 files — extracted inline arrays verbatim)
- [x] 1.6 Create `components/ui/*.tsx` (8 primitives incl. TerminalBlock signature)
- [x] Fix: tailwind.config.ts content globs now scan content/ + lib/ + config/
- [x] Verify: `npx tsc --noEmit` passes clean

## Phase 2 — Migrate sections (modifies existing) ✅ DONE

- [x] 2.0 Move `components/sections/*` → `components/marketing/sections/*` (8 files, via git mv)
- [x] 2.1 Rewrite HeroSection — terminal CLI thesis (signature element) + single hero metric w/ provenance
- [x] 2.2 Rewrite ServicesSection, WhyChooseUsSection, TrainingSection (consume content/ + ui/)
- [x] 2.3 Rewrite TechStackSection, ConsultingSection, TestimonialsSection, CTASection
- [x] 2.4 Create `components/marketing/home/HomeSections.tsx`, slim down home page.tsx
- [x] Verify: `npx tsc --noEmit` clean + dev server HTTP 200 + hero terminal renders
- Notes: numbering KEPT only in ConsultingSection (genuine sequence); removed from services

## Phase 3 — Page views + dynamic route (destructive) ✅ DONE

- [x] 3.0 Create shared `PageHero` primitive (replaces 7 hand-built hero blocks); export BadgeTone
- [x] 3.1 Create 6 view components: AboutView, ContactView, TrainingView, ConsultingView, ServicesView, ServiceDetailView
- [x] 3.2 Create `app/(marketing)/services/[slug]/page.tsx` w/ generateStaticParams + generateMetadata
- [x] 3.3 Delete 5 static service folders (git rm) — replaced by [slug]
- [x] 3.4 Rewrite 5 top-level pages as thin wrappers over views
- [x] Verify: `npx tsc --noEmit` clean + `npm run build` succeeds
- Result: 5 folders → 1 dynamic route (SSG), URLs preserved, all 14 routes static

## Phase 4 — Layout chrome + cleanup ✅ DONE

- [x] 4.1 Navigation + Footer consume `config/navigation.ts` + `lib/site.ts`
- [x] 4.2 ROICalculator + FAQAccordion consume `content/` (were last holdouts w/ inline data)
- [x] 4.3 Remove redundant `public/styles.css` import from layout; delete stale CSS (styles/output/test-out)
- [x] 4.4 Uninstall `framer-motion` (unused dependency)
- [x] 4.5 Add `eyebrowIcon` prop to SectionHeading (FAQ uses it)
- [x] 4.6 Update Design.md (Layout/Button/Primitives/Patterns sections) — AGENTS.md NOT touched
- [x] Verify: `npx tsc --noEmit` clean + `npm run build` succeeds (14 routes static)
- Bonus: removed banned word "Empowering" from Footer (AGENTS.md anti-slop rule)

## Phase 5 — Re-skin: warm editorial (Vinny.io v2) ✅ DONE

Source: Open Design project `89398dc1` — `tokens-v2.css` + `design-system-v2.html`.
Sanctioned divergence from PRD §7 cool-blue palette (Precedence #1: user request
for richer, serif-led typography + smoothness). Structure, content, props, and
the `endless` CLI signature preserved — only the visual skin swapped.

- [x] 5.1 Rewrite `app/globals.css` — warm editorial token layer (paper/ink/
      terracotta + OKLCH upgrades), warm shadows, accent-italic utility,
      `prefers-reduced-motion`, `.terminal-surface` for the one dark panel
- [x] 5.2 Rewrite `tailwind.config.ts` — token-driven theme (`bg-paper`,
      `text-ink`, `text-accent`, `border-line`, `font-display`/`font-body`/
      `font-mono`); `font-sans` aliased to body for legacy refs
- [x] 5.3 Rewrite `app/layout.tsx` — Newsreader (serif) + Inter (body) +
      JetBrains Mono (labels) via `next/font/google`; Newsreader uses
      `adjustFontFallback: false` (opsz axes not in Next's metrics table)
- [x] 5.4 Rewrite UI primitives: Container, Section (tones paper/surface/
      surface-alt/panel), GlassCard, Badge, GradientButton, GradientText
      (accent-italic), SectionHeading, PageHero, HeroTerminal, TerminalBlock
- [x] 5.5 Rewrite Navigation + Footer (paper nav, tinted ink-panel footer)
- [x] 5.6 Rewrite 8 home sections + 2 features (ROICalculator, FAQAccordion)
- [x] 5.7 Rewrite 6 page views (About, Services, ServiceDetail, Training,
      Consulting, Contact) — `Section tone` contract migrated off `navy`/`navy-deep`
- [x] 5.8 Update HomeSections composition for new Section tones
- [x] 5.9 Update Design.md as the skin source of truth (AGENTS.md untouched)
- [x] Verify: `npx tsc --noEmit` clean · `npm run build` clean (14 routes static,
      no font warnings) · `npm run lint` clean · 7 routes HTTP 200 in dev ·
      Newsreader/Inter/JetBrains Mono served via next/font · zero old-palette
      hex / old font class names remaining in app+components

## Phase 6 — Feature-sliced layered restructure ✅ DONE

Goal: migrate the flat `components/` + `content/` + `config/` + `lib/` + `types/`
layout into a layered, feature-sliced architecture under `src/` with a clean
one-directional dependency flow. No barrel exports (honours AGENTS.md — direct
imports only). Structure, content, props, route logic, and the `endless` CLI
signature preserved; only file locations + import paths changed.

Layer map:
- `src/app/`           — Next.js App Router routes only (thin wrappers)
- `src/shared/`         — kernel: `ui/` (8 primitives) · `lib/` (utils, site) ·
                         `config/` (navigation) · `types/` (contracts)
- `src/features/`      — vertical slices, each with `ui/` + optional `model/`:
    layout · hero · services · training · consulting · about · contact ·
    home · roi-calculator · faq · shared-sections

Dependency invariant (verified acyclic):
  app → features → shared  (one direction only)
  `features/home` is the sanctioned homepage composition root (composes other
  features' sections top-down; nothing depends back into `home`).
  `shared/ui/terminal-block` is shared by both `features/hero` (HeroTerminal)
  and `features/services` (ServiceDetailView) — generic CLI panel primitive.

- [x] 6.1 Kill 21 stray node processes holding locks on app/ + .next/
- [x] 6.2 `git mv` all 49 source files into `src/` (route layer + shared
      kernel + 11 feature slices); content co-located per feature (`model/`)
- [x] 6.3 Update `tsconfig.json` paths `@/*` → `./src/*`
- [x] 6.4 Update `tailwind.config.ts` content globs → `./src/**`
- [x] 6.5 Remap every `@/` import (47 distinct paths) via ordered sed script;
      fix the one broken relative import (`./terminal-block` → PascalCase
      `./TerminalBlock` then → `@/shared/ui/terminal-block`)
- [x] 6.6 Move `TerminalBlock` from `features/hero` → `shared/ui` (resolves
      cross-feature dependency: services detail depends on the generic CLI
      panel, not on the hero feature)
- [x] 6.7 Verify: `npx tsc --noEmit` clean · `npm run lint` clean ·
      `npm run build` clean (14 routes static, First Load JS 86.9 kB shared) ·
      7 routes HTTP 200 in dev · Newsreader/Inter/JetBrains Mono served via
      next/font (21 @font-face rules) · zero old-palette hex / old font class
      names / banned words remaining in src/
- [x] 6.8 Unstage `tsconfig.tsbuildinfo` build artifact (in .gitignore but
      tracked at HEAD — left unstaged; `git rm --cached` deferred to a
      follow-up commit so the restructure diff stays pure)
- [x] 6.9 Stage all 89 restructure changes (52 A · 28 D · 9 M · 1 R) via git
- [x] 6.10 Flag: AGENTS.md "Project Structure" section now stale (cannot
      modify without approval) — documents `components/` + `content/` paths
      → RESOLVED: AGENTS.md synced with the new src/ feature-sliced layout
      in commit 924d0b0 (user-approved follow-up). Stack section also updated
      (Framer Motion removed; fonts → Newsreader + Inter + JetBrains Mono).
