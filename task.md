# Refactor: Enterprise-Grade Structure

Goal: Separate content, types, and presentation. Extract reusable UI primitives. Replace 5 static service folders with 1 dynamic `[slug]` route.

## Phase 1 — Foundation (additive, safe)

- [ ] 1.1 Create `types/index.ts` (shared interfaces)
- [ ] 1.2 Install `clsx` + `tailwind-merge`, create `lib/utils.ts` (`cn()`)
- [ ] 1.3 Create `lib/site.ts` (company/contact config)
- [ ] 1.4 Create `config/navigation.ts` (nav + footer links)
- [ ] 1.5 Create `content/*.ts` (8 files — extract inline arrays verbatim)
- [ ] 1.6 Create `components/ui/*.tsx` (7 primitives)
- [ ] Verify: `npx tsc --noEmit` passes

## Phase 2 — Migrate sections (modifies existing)

- [ ] 2.1 Move `components/sections/*` → `components/marketing/sections/*`
- [ ] 2.2 Rewrite sections to consume `content/` + `ui/`
- [ ] 2.3 Create `components/marketing/home/HomeSections.tsx`, update home page
- [ ] Verify: tsc + dev server renders identically

## Phase 3 — Page views + dynamic route (destructive)

- [ ] 3.1 Create `components/marketing/pages/*View.tsx` (6 files)
- [ ] 3.2 Create `app/(marketing)/services/[slug]/page.tsx`
- [ ] 3.3 Delete 5 static service folders
- [ ] 3.4 Rewrite 5 top-level pages as thin wrappers
- [ ] Verify: `npm run build`

## Phase 4 — Layout chrome + cleanup

- [ ] 4.1 Nav + Footer consume `config/navigation.ts` + `lib/site.ts`
- [ ] 4.2 Remove redundant `public/styles.css` import + delete stale CSS
- [ ] 4.3 Uninstall `framer-motion`
- [ ] 4.4 Update structure docs (NOT AGENTS.md without approval)
- [ ] Verify: `npm run build` clean
