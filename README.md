# Muhammad Aditia Firmansyah — Portfolio

Personal portfolio site with 5+ years of experience across 20+ projects and 5+ companies. Built with Nuxt 4 and Tailwind CSS, deployed to GitHub Pages.

**Live:** [pikarin.github.io/portfolio](https://pikarin.github.io/portfolio)

## What's Inside

- Hero section with GitHub and LinkedIn links
- About section with downloadable CV/resume
- Skills grouped by area — Backend (Laravel, PHP, Node.js), Frontend (HTML, CSS, Tailwind, JavaScript, Vue, React, Alpine.js), DevOps (Git, Docker, Jenkins, AWS)
- Services: Backend Development, Frontend Development, DevOps
- Portfolio grid featuring projects like Stokmedia, IGCN Help Desk, Evaluasi KLA, and more
- Contact section

## Tech Stack

- [Nuxt 4](https://nuxt.com) — static SPA (`ssr: false`)
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling, light/dark tokens via `light-dark()`
- [Phosphor Icons](https://phosphoricons.com) — single icon family via `@phosphor-icons/vue`
- [Google Fonts](https://nuxt.com/modules/google-fonts) — Poppins (downloaded at build time)

## Project Structure

```
app/
  app.vue            # root component
  pages/             # file-based routing
  components/        # auto-imported Vue components
  assets/
    css/             # Tailwind & font stylesheets
    fonts/           # local font files
    img/             # images
public/              # static files (favicon, resume PDF)
nuxt.config.ts       # Nuxt configuration
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev          # start dev server at localhost:3000
```

## Build & Deploy

```bash
npm run generate     # generate static site to .output/public/
npm run deploy       # publish .output/public/ to gh-pages branch
```

The site is deployed to GitHub Pages under the `/portfolio` base path.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
