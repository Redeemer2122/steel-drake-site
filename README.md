# Steel Drake — Premium Portfolio & Creative Showcase Website

> A high-performance, cinematic portfolio web application for a multidisciplinary creative studio.  
> Built with precision, restraint, and an uncompromising commitment to dark luxury aesthetics.

---

## Overview

**Steel Drake** is a modern, production-grade portfolio and creative showcase website built on **Next.js App Router** with **TypeScript**. It serves as the digital identity of Steel Drake — a multidisciplinary cinematic design studio working across industrial design, automotive concepts, branding, motion, architecture, and speculative future products.

The application is architected for scalability and future growth, with a clean separation between data, presentation, and routing layers. It includes a built-in **internationalization (i18n)** foundation, enabling seamless multi-language expansion without structural refactoring. Every component, animation, and layout decision is guided by a strict visual identity system: dark, editorial, cinematic, precise.

---

## Key Features

### Modern Architecture
Built entirely on the **Next.js App Router** with full **TypeScript** strict mode. Component-driven, modular, and maintainable — designed to scale from a single portfolio page to a full multi-locale content platform.

### Global Ready — Internationalization (i18n)
Includes a dedicated `/i18n` architecture layer, laying the groundwork for RU/EN (and beyond) multi-language support. Locale routing is planned via `/app/[locale]` structure, ensuring clean URL handling and future CMS integration without breaking changes.

### Cinematic Design System
A custom design token system enforces the studio's visual identity at every level:
- `#0a0a0a` base / `#111111` surface / `#1a1a1a` elevated backgrounds
- `#00d4ff` selective cyan accent
- **Unbounded** (display) + **Space Grotesk** (body) via `next/font/google`
- Film grain overlay, glassmorphism, and scroll-driven parallax
- Custom cursor with lerp-smoothing and `mix-blend-mode: difference`
- Neon scroll progress indicator

### Utility-First Responsive Styling
**Tailwind CSS v4** with a custom theme extension — semantic color aliases (`accent`, `surface`, `elevated`), editorial `clamp()`-based fluid type scales (`text-hero`, `text-section`), and font family tokens wired to CSS variables. Pixel-perfect on all screen sizes.

### Premium Motion Layer
**Framer Motion** powers all entrance animations, staggered reveals, Bento Grid transitions, and scroll-triggered parallax effects. Motion is intentional and controlled — never decorative noise.

### AI-Enhanced Development Workflow
The project was developed under a structured multi-agent workflow, guided by `AGENTS.md` and `CLAUDE.md` conventions. Each development phase was executed atomically, ensuring clean git history, reviewable diffs, and reproducible build states.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | `16.2.4` |
| Language | TypeScript | `^5` |
| UI Library | React | `19.2.4` |
| Styling | Tailwind CSS | `^4` |
| CSS Processing | @tailwindcss/postcss | `^4` |
| Animation | Framer Motion | `^12.38.0` |
| Icons | Lucide React | `^1.11.0` |
| Fonts | next/font/google (Unbounded, Space Grotesk) | built-in |
| Linting | ESLint + eslint-config-next | `^9` / `16.2.4` |
| Deployment | Vercel | — |
| Package Manager | npm | — |

---

## Project Structure

```
steel-drake-site/
├── app/                        # Next.js App Router — pages, layouts, routing
│   ├── layout.tsx              # Root layout: fonts, CustomCursor, ScrollProgress
│   ├── page.tsx                # Homepage — Hero, About, Works, Services, Contact
│   └── globals.css             # Design tokens, base styles, film grain
│
├── components/
│   ├── ui/                     # Primitives: Button, GlassCard, SectionLabel,
│   │                           #   RevealOnScroll, CustomCursor, ScrollProgress,
│   │                           #   ParallaxWrapper
│   └── sections/               # Page sections: Hero, About, Works, Services, Contact,
│                               #   Navbar, Footer
│
├── data/                       # Decoupled data layer
│   └── works.ts                # Portfolio project definitions (title, tags, size, etc.)
│
├── i18n/                       # Internationalization architecture layer
│                               # (RU/EN locale routing foundation)
│
├── public/                     # Static assets
│   └── video/                  # Background video assets for Hero section
│
├── AGENTS.md                   # Multi-agent workflow conventions
├── CLAUDE.md                   # AI assistant guidelines (references AGENTS.md)
├── RULES.md                    # Visual identity, tech stack, and architecture rules
├── PROGRESS.md                 # Step-by-step build log and completion status
├── START_HERE.md               # Onboarding guide for contributors and AI agents
├── next.config.ts              # Next.js configuration (image remotePatterns, optimizations)
├── tailwind.config.ts          # Tailwind theme extension (tokens, fluid type, fonts)
├── tsconfig.json               # TypeScript strict config with path aliases (@/*)
├── postcss.config.mjs          # PostCSS pipeline for Tailwind v4
└── package.json                # Dependencies and npm scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18.x` recommended
- **npm** (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/steel-drake-site.git
cd steel-drake-site
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads on file changes.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Design System Reference

The visual identity is enforced through CSS custom properties defined in `app/globals.css`:

```css
:root {
  --bg-primary:   #0a0a0a;
  --bg-surface:   #111111;
  --bg-elevated:  #1a1a1a;
  --accent:       #00d4ff;
  --text-primary: #f0f0f0;
  --text-muted:   #555555;
  --text-secondary: #999999;
  --font-display: "Unbounded", sans-serif;
  --font-body:    "Space Grotesk", sans-serif;
  --grain-opacity: 0.035;
  --glow:         0 0 40px rgba(0, 212, 255, 0.15);
}
```

All Tailwind utilities (`accent`, `surface`, `elevated`, `font-display`, `font-body`, `text-hero`, `text-section`) are mapped to these tokens in `tailwind.config.ts`.

---

## Deployment

This project is optimized for **[Vercel](https://vercel.com)** deployment.

Push to your connected Git repository and Vercel will automatically build and deploy. No additional configuration is required beyond what is already set in `next.config.ts`.

For manual deployment, run `npm run build` and serve the `.next` output with `npm run start` or any Node.js-compatible hosting environment.

---

## Roadmap

- [ ] RU/EN bilingual routing via `/app/[locale]`
- [ ] Individual project pages `/app/[locale]/projects/[slug]`
- [ ] CMS integration for content management
- [ ] Overlay/modal project transitions
- [ ] Advanced cinematic storytelling blocks
- [ ] SEO master pass (meta, OG, structured data)
- [ ] Motion architecture layer refinement

---

## Contributing

This project follows a structured, step-by-step development contract. All architectural changes must be proposed before implementation. See `RULES.md` for the full visual identity guidelines, tech stack restrictions, and contribution standards. See `PROGRESS.md` for the current build state.

---

## License

All design, content, and visual identity belong to **Steel Drake Studio**.  
Code is available for reference. Redistribution requires explicit permission.
