# CLAUDE.md — TimeGPT Website

## What is this project?

A promo/landing page for **TimeGPT**, a Chrome extension that adds timestamps to ChatGPT. Built with Vite, React 19, Tailwind CSS 4, Motion (Framer Motion), and Lucide icons.

## Common tasks

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`

## About the extension

TimeGPT adds timestamps to ChatGPT's interface — something ChatGPT doesn't show natively, even though the data exists in its API.

**Current version**: 1.1.0

**Tagline**: "Adds timestamps to ChatGPT messages and conversations — because time matters."

### Key features

- **Message timestamps** — shows when each message (user or assistant) was sent, displayed inline next to the action toolbar (Copy, Edit, etc.)
- **Sidebar timestamps** — shows when each conversation was created, displayed next to conversation titles in the sidebar
- **Live timestamps** — timestamps appear in real-time as new messages stream in, not just on page load
- **6 format options**:
  - Relative ("5m ago", "2h ago", "3d ago")
  - Date + Time 24h ("2025-01-15 14:30")
  - Date + Time 12h ("Jan 15, 2025 2:30 PM")
  - Time only 24h ("14:30")
  - Time only 12h ("2:30 PM")
  - ISO 8601 ("2025-01-15T14:30:00")
- **Toggle controls** — users can independently show/hide message timestamps and sidebar timestamps
- **Settings popup** — clean popup UI accessed from the extension icon with radio buttons for format and toggle switches for visibility
- **Synced settings** — preferences sync across devices via Chrome's storage sync

### How it works (for copy/marketing purposes)

ChatGPT's backend API includes timestamps for every message and conversation, but the UI never displays them. TimeGPT intercepts these API responses transparently and renders the timestamps directly into ChatGPT's interface. It requires no API keys, no accounts, and no data leaves the browser — it simply surfaces information that's already there.

### Technical highlights (for trust/credibility messaging)

- Manifest V3 (latest Chrome extension standard)
- Zero data collection — everything stays in the browser
- No external network requests — only reads data ChatGPT already sends
- Lightweight — only two small scripts, no background service worker
- Only permission required: `storage` (for saving user preferences)

### Extension source code

The extension source lives in the sibling directory at `../timegpt/`. Reference it if you need exact details about features, settings, or behavior.
