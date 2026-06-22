# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server.
- `npm run build` — production build; runs `next build && next-sitemap` (sitemap + robots.txt are generated for `siteUrl` in `next-sitemap.config.js`, currently `https://www.gaganchatu.com`).
- `npm run start` — serve the production build (`next start`).
- `npm run lint` — ESLint over the repo (`eslint .`). This is the only check the CI workflow (`.github/workflows/sanity-check.yml`) runs on every push.

There is **no test runner configured**. `@testing-library/*` is present in devDependencies but no script, config, or test files exist — do not assume tests run as part of CI.

## Architecture

This is a personal portfolio site built on **Next.js 15 (App Router)** with **React 18**, **TypeScript**, **Tailwind CSS v4** (via `@tailwindcss/postcss`, configured in `postcss.config.mjs` — no `tailwind.config.js`), and **Material UI** (`@mui/material` + `@emotion`). Styling is a deliberate mix: MUI components for layout/structure (`Grid`, `Container`, `Card`, `Menu`) and Tailwind utility classes for theming/spacing/animations.

### Routing & pages

App Router routes live in `src/app/`, with each route as a directory containing `page.tsx`:

- `/` (`src/app/page.tsx`) — Home / about-me hero
- `/Projects` (`src/app/Projects/page.tsx`)
- `/Skills` (`src/app/Skills/page.tsx`)
- `/Certification` (`src/app/Certification/page.tsx`) — note the singular route segment

Route directory names are **case-sensitive** (`/Projects`, `/Skills`, `/Certification`). `NavigationBar` (`src/app/Components/NavigationBar.tsx`) links to these exact paths and is rendered for every route via the root layout. `not-found.tsx` is the 404 page.

Pages are **Server Components** (App Router default). Each route's `page.tsx` is an `async` function that fetches its JSON from the Vercel Blob store on the server via the shared helpers in `src/lib/content.ts` (cached with `next: { revalidate: 3600 }`), so content ships in the initial HTML for SEO. Routes that need client interactivity (MUI `Grow` animations) delegate rendering to a sibling client `*View.tsx` component (e.g. `HomeView`, `ProjectsView`, `SkillsView`) that receives the fetched data as props. `Certification/page.tsx` renders directly with no client component.

### Data source: Vercel Blob (content is remote, not in-repo)

All site content is fetched on the server from a **Vercel Blob store** (`BLOB_BASE` constant in `src/lib/content.ts`), hard-coded as the host `https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com` (also allow-listed in `next.config.js` image `remotePatterns`). There are no local data/JSON files — `src/lib/content.ts` exposes typed helpers that `fetch()` these blob URLs server-side with ISR caching (`next: { revalidate: 3600 }`):

- `aboutme.json` → Home (`{ body: { greeting, heading, description } }`)
- `project-list.json` → Projects (array; fields `id`, `name`, `description`, `project-link`, `project-demo`, `tools` — `tools` is a comma-separated string parsed by `ProjectCard`)
- `skill-list.json` → Skills (`{ languages, databases, tools, frameworks }`, each an array of `{ id, name, icon }`)
- `certifications.json` → Certifications (`{ id, badge, title, issuer, date, link }`)

To change site copy or content, edit the JSON in the Vercel Blob store — **not** the code. Static assets (background image, profile pic, skill-card illustrations, project placeholder SVG) also come from this blob host. `next.config.js` also allow-lists `brm-workforce.oracle.com` for remote images.

### Components

`src/app/Components/` holds shared UI: `NavigationBar`, `Socials` (external profile links, used on Home), `ProjectCard`, `SkillCard`, `CustomChip` (shared tag chip used by both cards with a staggered `fadeInUp` animation), and `Loading`.

### Path alias

`@/*` maps to `./src/*` (see `tsconfig.json`). New code should import via `@/...`.

### Metadata / SEO / analytics

`src/app/layout.tsx` exports the Next.js `metadata` object (title, description, OpenGraph) and injects JSON-LD `Person` + `WebSite` structured data. Analytics/tracking are wired in the layout: `@vercel/analytics`, `@vercel/speed-insights`, and Google Analytics (`@next/third-parties/google`, GA ID `G-BL54PMFQ4X`). The body applies a fixed background image and `backdrop-blur` wrapper around `{children}`.

## Build & deployment

- `next.config.js` sets `output: "standalone"`, which the `dockerfile` consumes (multi-stage build copying `.next/standalone` + `.next/static`, runs as non-root `nextjs` user, exposes port 80). This is the Docker/self-host path.
- The production site is deployed on **Vercel** (live at `https://www.gaganchatu.com` / `https://my-portfolio-gagan-c.vercel.app`).
- Code quality is tracked by **SonarQube Cloud** (`sonar-project.properties` → project `Gagan-C_MyPortfolio`, org `gagan-c`). Recent commits reference fixing SonarQube findings.