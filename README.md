# Pouria Ebrahimzadeh — Personal Career Site

A personal portfolio site built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**, deployed on **Vercel**.

## Phase 1 — Foundation (current)

A clean landing page with hero, nav, and footer. No backend yet.

Upcoming phases will add: an About page, project gallery + case studies, an AI chatbot grounded in my résumé, and live AI demos.

---

## First-time setup (one-off, ~15 minutes)

You only need to do this once on your machine.

### 1. Install Node.js (the JavaScript runtime)

Download the **LTS** (Long-Term Support) version from <https://nodejs.org/>. Run the installer with default options. This also installs `npm` (the package manager).

To verify, open a **new** terminal in VS Code (`Terminal` > `New Terminal`) and run:

```bash
node --version
npm --version
```

Both should print version numbers (e.g. `v22.x.x` and `10.x.x`).

### 2. Install Git (for version control + GitHub)

Download from <https://git-scm.com/download/win>. Run the installer with default options.

Verify:

```bash
git --version
```

Then tell git who you are (this gets attached to every commit you make):

```bash
git config --global user.name "Pouria Ebrahimzadeh"
git config --global user.email "pouriaebzhd@gmail.com"
```

### 3. Install project dependencies

In VS Code, open this folder (`File` > `Open Folder...` > select `My Career website`). Then in the terminal:

```bash
npm install
```

This downloads Next.js, React, Tailwind, and friends into a `node_modules/` folder. It can take 1-2 minutes the first time.

---

## Daily workflow

### Run the site locally

```bash
npm run dev
```

Then open <http://localhost:3000> in your browser. The page hot-reloads when you save any file.

Press `Ctrl+C` in the terminal to stop the dev server.

### Build for production (sanity check before deploying)

```bash
npm run build
```

This catches errors that wouldn't show up in dev mode.

---

## Project structure

```
.
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Wraps every page (fonts, metadata, <html>)
│   ├── page.tsx          # The homepage you see at /
│   └── globals.css       # Tailwind import + theme tokens
├── public/               # Static files served as-is (photos, CV PDF, favicon)
├── package.json          # Dependencies + npm scripts
├── tsconfig.json         # TypeScript config
├── postcss.config.mjs    # Tailwind v4 PostCSS plugin
├── next.config.mjs       # Next.js config
└── README.md             # You are here
```

---

## Design system (locked in 2026-05-01)

- **Base style:** clean & minimal
- **Typography:** Inter for body/UI, Fraunces serif for major headings (the `.heading-serif` class)
- **Accent colour:** coral `#D85A30` (used for hovers, CTAs, brand moments)
- **Layout:** generous whitespace, max content width 1024px, mobile-first

All design tokens live in `app/globals.css` under `@theme`. Change them there and the whole site updates.

---

## Deployment

Push to GitHub, connect the repo to Vercel, done. Step-by-step instructions are in the chat — we'll do this together once `npm run dev` works locally.
