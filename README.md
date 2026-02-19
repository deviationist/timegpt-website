# TimeGPT Website

Promo/landing page for **TimeGPT** — a Chrome extension that adds timestamps to ChatGPT messages and conversations.

## What's in here

A single-page site built with React, featuring:

- **Hero** — headline, tagline, and CTA to the Chrome Web Store
- **Features** — overview of what TimeGPT does (message timestamps, sidebar timestamps, format options, etc.)
- **How It Works** — explains that ChatGPT already has timestamp data, TimeGPT just surfaces it
- **Privacy** — zero data collection, no external requests, minimal permissions
- **FAQ** — common questions
- **Changelog** — version history
- **Support** — contact info

## Tech stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion) for animations
- [Lucide](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start dev server with HMR          |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Preview the production build       |
| `npm run lint`      | Run ESLint                         |

## Project structure

```
src/
├── App.tsx                 # Main app, composes all sections
├── main.tsx                # Entry point
└── components/
    ├── Hero.tsx
    ├── Features.tsx
    ├── HowItWorks.tsx
    ├── Privacy.tsx
    ├── FAQ.tsx
    ├── Changelog.tsx
    ├── Support.tsx
    └── Logo.tsx
```
