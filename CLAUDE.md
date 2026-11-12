# CLAUDE.md — Tarkan Company Website

Marketing site for Be Unstoppable 365 / Tarkan Salar.
Production: https://tarkan-company-website.vercel.app (Vercel, deployed from `main`).

## Stack
- Next.js 15 (App Router, `app/`) + React 19 + TypeScript 5
- Tailwind CSS 4 via `@tailwindcss/postcss` (`postcss.config.mjs`). There is no `tailwind.config.js`:
  theme tokens live in the `@theme` block of `app/globals.css`
  (fonts `font-space` / `font-inter` / `font-syne`; colors `neon`, `supporting`, `dark-bg`, `darker-bg`, `card-bg`).
- Fonts: Google Fonts (Space Grotesk, Inter, Syne) loaded in `app/layout.tsx`.
- `chart.js` for the quiz/score charts.
- Path alias `@/*` -> repo root (`@/components/...`, `@/features/...`, `@/lib/...`).

## Commands (npm)
```
npm install          # first time / after package.json changes
npm run dev          # http://localhost:3000
npm run build        # must pass before every push
npm run start        # serve the production build on :3000
npm run lint
```
Local env: copy `.env.local.example` to `.env.local` (gitignored) only if you need the lead webhook locally.

Screenshots (optional): `node screenshot.mjs http://localhost:3000/<path> [label]` uses the
`puppeteer` devDependency and writes to `temporary screenshots/` (gitignored).
Always screenshot localhost or a Preview URL, never `file:///`. Check mobile (375px) and desktop.

## Folder structure
```
app/                    routes only - thin page.tsx files that compose feature sections
  page.tsx              /            main landing ($499 Blue Ocean Code) -> features/blue-ocean-code
  offer/                /offer       -> features/offer
  webinar/              /webinar     -> features/webinar-main
  quiz/                 /quiz        Complexity Score quiz -> features/complexity-score
  audit-quiz/           /audit-quiz  -> features/audit-quiz
  ai-audit/             /ai-audit    -> features/ai-audit
  privacy/, terms/      legal pages  -> features/legal
  archive/              superseded pages, still reachable, not linked in nav
    80-20/ -> features/landing · quiz/ -> features/quiz · webinar/ -> features/webinar
  api/lead/route.ts     POST: forwards quiz leads to GoHighLevel (server-side)
  layout.tsx, globals.css
features/<page>/        one folder per page
  sections/             page sections (Hero, Problem, ...)
  components/           components used only by that page
  data/                 copy, lists, image/video URLs (data/images.ts)
  *App.tsx, types.ts, config.ts   entry + types for the quiz-style apps
components/
  layout/               Header, Footer (shared)
  widgets/              BrandLockup, FloatingChat, RafeyVideo (shared)
lib/constants.ts        shared URLs and values: booking calendar, WhatsApp, webinar date/seats,
                        checkout URL, route paths. Change them here, not inline.
public/                 favicon + static fallbacks only
```
New page = new `features/<name>/` folder + a thin `app/<route>/page.tsx`. Anything used by
two or more pages goes in `components/`, not copied between features.

## Rules
- Assets (images, logo, video) come from the Supabase Storage bucket `tarkan-company-asset`
  through its public URL:
  `https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/<file>`
  - Keep the URLs in the feature's `data/images.ts` (or a shared constant), not scattered through JSX.
  - Use `/object/public/` URLs. Do not add `/object/sign/...?token=` URLs; they expire.
  - Never put Supabase keys (anon or service_role) in frontend code. Uploading new assets is a Backend task.
  - Any new external image host must be added to `images.remotePatterns` in `next.config.ts`.
- Quiz leads: the browser POSTs to `/api/lead`, and the route forwards them to `process.env.GHL_WEBHOOK_URL`.
  - `GHL_WEBHOOK_URL` is set in the Vercel project env (and in `.env.local` locally). Never hardcode it,
    never expose it to the client (no `NEXT_PUBLIC_` prefix), never commit `.env*` files.
  - If it is unset, the route returns 501 and the quiz must still show the score.
- Workflow: branch from `main` -> commit -> push -> Vercel builds a Preview URL -> review on the Preview.
  Never push directly to `main`. Merging to `main` (= production deploy) is done by the reviewer.
- Before committing: `npm run build` passes, and `git diff --cached` contains no secrets.
- Do not invent business claims, prices, testimonials or stats. Leave a visible `[TUAN ISI]`
  placeholder and flag it instead.

## Design conventions
- Dark site: black / `dark-bg` surfaces, `neon` (#c8ff00) accent, `supporting` grey for secondary copy.
  Use the theme tokens. Do not use default Tailwind blue/indigo as a primary color.
- Headings in Space Grotesk / Syne, body text in Inter.
- Mobile-first; every page must work at 375px.
- Animate only `transform` and `opacity`. No `transition-all`.
- Every clickable element needs hover, focus-visible and active states.
