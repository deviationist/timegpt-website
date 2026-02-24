# TimeGPT Website

Promo/landing page for **TimeGPT** — a Chrome extension that adds timestamps to ChatGPT messages and conversations.

## What's in here

A multi-page site built with Next.js, featuring:

- **Hero** — headline, tagline, and CTA to the Chrome Web Store
- **Features** — overview of what TimeGPT does (message timestamps, sidebar timestamps, format options, etc.)
- **How It Works** — explains that ChatGPT already has timestamp data, TimeGPT just surfaces it
- **Privacy** — zero data collection, no external requests, minimal permissions
- **FAQ** — common questions
- **Changelog** — version history
- **Support** — contact info and bug reporting
- **Privacy Policy** — full privacy policy page

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion) for animations
- [Lucide](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server                    |
| `npm run build`   | Build for production                |
| `npm run start`   | Start production server             |
| `npm run lint`    | Run ESLint                          |

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, structured data
│   ├── page.tsx                # Home page (landing)
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── manifest.ts             # Web app manifest
│   ├── privacy-policy/page.tsx
│   └── support/page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Privacy.tsx
│   ├── FAQ.tsx
│   ├── Changelog.tsx
│   ├── Support.tsx
│   ├── Layout.tsx
│   ├── Logo.tsx
│   └── JsonLd.tsx
├── hooks/
│   ├── useDarkMode.ts
│   └── useReducedMotion.ts
└── views/
    ├── LandingPage.tsx
    ├── SupportPage.tsx
    └── PrivacyPolicyPage.tsx
```
