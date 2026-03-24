# Muhammad Aditia Firmansyah — Portfolio

Personal portfolio site with 5+ years of experience across 20+ projects and 5+ companies. Built with Nuxt 4 and Tailwind CSS, deployed to GitHub Pages.

**Live:** [pikarin.github.io/portfolio](https://pikarin.github.io/portfolio)

## What's Inside

- Hero section with GitHub and LinkedIn links
- About section with downloadable CV/resume
- Skills breakdown — Backend (Laravel, PHP, Node.js), Frontend (HTML, CSS, JavaScript, Vue, React), DevOps (Git, Docker, Jenkins, AWS)
- Services: Backend Development, Frontend Development, DevOps
- Portfolio carousel featuring projects like Stokmedia, IGCN Help Desk, Evaluasi KLA, and more
- Contact section

## Tech Stack

- [Nuxt 4](https://nuxt.com) — static SPA (`ssr: false`)
- [Tailwind CSS v3](https://tailwindcss.com) — utility-first styling with custom theme
- [Nuxt Swiper](https://nuxt.com/modules/swiper) — carousel/slider components
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
tailwind.config.js   # Tailwind theme & plugins
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
