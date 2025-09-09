# M. Aditia Firmansyah — Portfolio

A beautiful personal portfolio built with Vue 3, Vite, and Tailwind CSS.

## Tech
- Vue 3 + Vite
- Tailwind CSS v4 (@tailwindcss/vite)

## Getting Started

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Customize Content
The main content lives in `src/App.vue` as simple arrays you can edit:
- `experiences`: list of roles with company, period, location, and bullet points.
- `projects`: title, description, tags, and external link.

You can also update:
- Page title and SEO tags in `index.html`.
- Contact links in the Contact section within `src/App.vue`.

## Notes
- Tailwind v4 is already configured through the Vite plugin. Global styles are imported from `src/assets/main.css`.
- The design supports dark mode automatically based on the OS preference.
- Language switcher: visit `/en` (default) or `/id`. If you open `/`, it redirects to `/en`. Use the EN/ID buttons in the navbar to switch languages — it updates the URL path via the History API (no full page refresh) and preserves your current scroll position. Refreshing the page keeps the selected language.
