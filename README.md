# Endless Tech — Enterprise Technology Consultancy & IT Training Academy

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-f472b6?style=flat-square&logo=framer)](https://www.framer.com/motion/)

**Endless Tech** (Endless Technologies) is a premier UK-based technology consultancy and IT training academy based in London, United Kingdom. We help professionals and enterprise teams across the UK build future-ready engineering skills and deploy production-grade cloud, software, and AI infrastructure.

---

## 🌟 Key Features & Architectural Highlights

- **Aura Enterprise Design System**: A dark-mode aesthetic featuring deep space canvas tones (`#060e20`), smoked obsidian glass cards, high-contrast AAA typography, and glowing terracotta amber and sky blue accents.
- **Interactive Live CLI Terminal**: An authentic, interactive terminal simulator in the hero section displaying live deployment logs and interactive tab switching.
- **Asymmetrical Bento Grid**: A magazine-style capabilities catalog layout on `/services` that highlights flagship enterprise services alongside specialized offerings.
- **Physics-Based UI Primitives**:
  - `<TextReveal>`: Kinetic staggered typography powered by Framer Motion spring physics.
  - `<SpotlightCard>`: Mouse-tracking radial gradient glow cards.
  - `<MagneticButton>`: Magnetic attraction CTA buttons that pull smoothly toward the user's cursor.
  - `<InfiniteMarquee>`: 60fps CSS keyframe scrolling tech stack marquee.
- **Problem-First Conversion Section**: Strategic SaaS landing page structure that mirrors enterprise pain points (technical debt, talent gap, cloud security) before presenting technical solutions.
- **Automated E2E Test Suite**: Custom Playwright test runner (`e2e-runner.mjs`) verifying visual integrity, form submissions, and routing across every route.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router, React Server Components) |
| **Language** | TypeScript 5 (Strict Type Checking) |
| **Styling** | Tailwind CSS v3, Custom CSS Variables, PostCSS |
| **Animations** | Framer Motion v12, Custom Keyframes |
| **Icons** | Lucide React |
| **Utilities** | `clsx`, `tailwind-merge` |
| **Testing** | Playwright E2E Suite, Vitest |

---

## 📁 Repository Structure

```
EndlessTech/
├── e2e-runner.mjs               # Complete Playwright E2E test runner
├── Design.md                    # Design System Specification & Tokens
├── README.md                    # Official Project Documentation
├── tailwind.config.ts           # Extended Tailwind configuration & keyframes
├── src/
│   ├── app/                     # Next.js App Router (Layouts, Pages, Global CSS)
│   │   ├── (marketing)/         # Marketing routes (Home, About, Services, Training, Contact)
│   │   ├── globals.css          # Aura Enterprise design system tokens & layers
│   │   └── layout.tsx           # Root layout & Google Fonts (Manrope, Inter, JetBrains Mono)
│   ├── features/                # Feature-sliced modules
│   │   ├── hero/                # Hero section & Interactive CLI Terminal
│   │   ├── services/            # Services overview, Bento Grid & detail views
│   │   ├── training/            # IT Training academy syllabus & course views
│   │   ├── consulting/          # Advisory services & consulting view
│   │   ├── contact/             # Interactive contact form & company info
│   │   ├── shared-sections/     # ProblemFirst, TechStack, WhyChooseUs, CTA, Testimonials
│   │   └── roi-calculator/      # Interactive Enterprise ROI Calculator
│   └── shared/                  # Shared primitives, UI components, & utilities
│       ├── ui/                  # SpotlightCard, MagneticButton, TextReveal, Badge, etc.
│       ├── lib/                 # Tailwind utility `cn()` and site metadata
│       └── config/              # Navigation config & route definitions
```

---

## 🚀 Getting Started & Scripts

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Installation
```bash
# Clone repository
git clone https://github.com/endlesstech/endlesstech.git

# Install dependencies
npm install
```

### Development & Verification Commands

```bash
# Run local dev server (http://localhost:3000)
npm run dev

# Run TypeScript type check
npm run type-check

# Run production build
npm run build

# Start production server
npm run start

# Run full Playwright E2E test suite across all screens
node e2e-runner.mjs
```

---

## 🏢 Company Information

- **Company Name:** Endless Tech (Endless Technologies)
- **Headquarters:** London, United Kingdom
- **Email:** info@endlesstech.io
- **Phone:** +44 (0) 20 7946 0920
- **Status:** Registered UK Technology Consultancy & Training Academy
