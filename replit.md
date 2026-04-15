# Joe's Dumpsters Website

## Overview

Frontend-only React + Vite website for Joe's Dumpsters — a dumpster rental and junk removal business based in Austin, TX. All files live at the repo root, ready for Vercel deployment.

## Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
/src           — React source code (pages, components, hooks)
/attached_assets — Business photos and logo used in the slideshow
/dist          — Production build output (generated)
package.json
vite.config.ts
index.html
vercel.json    — Vercel deployment config (SPA rewrites)
.gitignore
```

## Key Commands

- `npm run dev` — Start development server on port 5000
- `npm run build` — Production build to /dist
- `npm run serve` — Preview the production build

## Pages

- `/` — Home with background slideshow, reviews, services overview
- `/services` — Full services detail page
- `/about` — Family-owned story and values
- `/contact` — Phone, email, hours, service area

## Deployment

Vercel-ready via `vercel.json` at the root:
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites: all routes → index.html
