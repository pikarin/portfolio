<script setup>
import { ref, computed } from 'vue'

// Simple i18n via URL prefix: /en (default) and /id
const supportedLocales = ['en', 'id']
const pathLocale = (() => {
  const seg = location.pathname.replace(/^\/+/, '').split('/')[0]
  return supportedLocales.includes(seg) ? seg : 'en'
})()

const currentLocale = ref(pathLocale)

// Keep locale reactive when user navigates with back/forward buttons
window.addEventListener('popstate', () => {
  const seg = location.pathname.replace(/^\/+/, '').split('/')[0]
  if (supportedLocales.includes(seg)) {
    currentLocale.value = seg
    document.documentElement.lang = seg
  }
})

function switchLocale(next) {
  if (!supportedLocales.includes(next) || next === currentLocale.value) return
  const segs = location.pathname.replace(/^\/+/, '').split('/')
  if (supportedLocales.includes(segs[0])) segs.shift()
  const basePath = '/' + segs.filter(Boolean).join('/')
  const target = `/${next}${basePath || ''}${location.search}${location.hash}`
  const current = location.pathname + location.search + location.hash
  if (target !== current) {
    // Update URL without reload and preserve scroll position
    history.pushState({ locale: next }, '', target)
    currentLocale.value = next
    document.documentElement.lang = next
  }
}

const t = computed(() => (key) => {
  const dict = {
    en: {
      nav: { projects: 'Projects', experience: 'Experience', about: 'About' },
      hero: {
        name: 'M. Aditia Firmansyah',
        title: 'Senior Web Developer · Bandung, Indonesia',
        lead:
          "I craft fast, accessible, and beautiful web experiences. I love Vue, modern tooling, and building products that people enjoy using.",
        ctaProjects: 'View Projects',
        ctaContact: 'Contact',
      },
      about: { title: 'About', body:
        "I’m a senior web developer based in Bandung with nearly a decade of experience building production‑grade applications. I focus on performance, developer experience, and clean UI. Outside of work, I enjoy exploring Bandung’s coffee culture and contributing to open source."
      },
      experience: { title: 'Work Experience' },
      contact: { title: 'Get in touch', body: 'Open to interesting projects and opportunities.' },
      footer: 'Built with Vue & Tailwind',
      lang: { en: 'English', id: 'Indonesian' },
      badge: 'Biggest experience: Laravel & its ecosystem',
    },
    id: {
      nav: { projects: 'Proyek', experience: 'Pengalaman', about: 'Tentang' },
      hero: {
        name: 'M. Aditia Firmansyah',
        title: 'Senior Web Developer · Bandung, Indonesia',
        lead:
          'Saya membangun pengalaman web yang cepat, aksesibel, dan indah. Saya menyukai Vue, tooling modern, dan membangun produk yang disukai pengguna.',
        ctaProjects: 'Lihat Proyek',
        ctaContact: 'Kontak',
      },
      about: { title: 'Tentang', body:
        'Saya seorang senior web developer yang berbasis di Bandung dengan hampir satu dekade pengalaman membangun aplikasi produksi. Fokus pada performa, pengalaman developer, dan UI yang rapi. Di luar kerja, saya suka mengeksplorasi kopi Bandung dan berkontribusi ke open source.'
      },
      experience: { title: 'Pengalaman Kerja' },
      contact: { title: 'Hubungi saya', body: 'Terbuka untuk proyek dan peluang menarik.' },
      footer: 'Dibuat dengan Vue & Tailwind',
      lang: { en: 'Inggris', id: 'Indonesia' },
      badge: 'Pengalaman terbesar: Laravel & ekosistemnya',
    },
  }
  const locale = supportedLocales.includes(currentLocale.value) ? currentLocale.value : 'en'
  const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict[locale])
  return val ?? key
})

const experiences = ref([
  {
    company: 'Tech Nusantara',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    location: 'Bandung · Hybrid',
    points: [
      'Led migration to Vue 3 + Vite and established a scalable component system using Tailwind CSS.',
      'Improved Core Web Vitals (LCP 4.2s → 1.8s) through code-splitting, preloading, and image optimization.',
      'Mentored 5 engineers; introduced code review guidelines and CI linting/formatting pipelines.',
      'Biggest experience in Laravel and its ecosystem (Forge, Vapor, Nova, Livewire, Filament).'
    ]
  },
  {
    company: 'Bandung Digital Labs',
    role: 'Full‑Stack Web Developer',
    period: '2019 — 2022',
    location: 'Bandung',
    points: [
      'Built end‑to‑end features with Vue, Node.js, and PostgreSQL for B2B dashboards and internal tools.',
      'Designed RESTful APIs, implemented authentication/authorization, and wrote integration tests.',
      'Collaborated with designers to ship pixel‑perfect UIs with accessibility in mind.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2016 — 2019',
    location: 'Remote',
    points: [
      'Delivered modern landing pages and e‑commerce customizations for SMEs around West Java.',
      'Optimized Lighthouse scores and set up analytics & SEO foundations.'
    ]
  }
])

const projects = ref([
  {
    title: 'SundaCart',
    description: 'Headless e‑commerce starter built with Vue 3, Pinia, and Tailwind. Supports SSR and Stripe.',
    tags: ['Vue 3', 'Pinia', 'Tailwind', 'Stripe'],
    link: 'https://example.com/sundacart'
  },
  {
    title: 'KopiFinder',
    description: 'Progressive web app to discover Bandung coffee shops with offline caching and map clustering.',
    tags: ['PWA', 'Vite', 'Mapbox', 'Workbox'],
    link: 'https://example.com/kopifinder'
  },
  {
    title: 'UI Toolkit',
    description: 'Accessible Vue component library with theming and dark mode, published to npm.',
    tags: ['Vue', 'TypeScript', 'Storybook'],
    link: 'https://example.com/ui-toolkit'
  }
])
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-neutral-900 focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-cyan-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
    <!-- Hero -->
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 opacity-20 dark:opacity-30">
        <div class="pointer-events-none h-full w-full bg-[radial-gradient(1200px_600px_at_50%_-200px,theme(colors.indigo.300/.6),transparent_70%)] dark:bg-[radial-gradient(1200px_600px_at_50%_-200px,theme(colors.indigo.600/.4),transparent_70%)]"></div>
      </div>
      <div class="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <nav class="flex items-center justify-between">
          <div class="font-semibold tracking-tight">MAF</div>
          <div class="flex items-center gap-3 text-sm">
            <a href="#projects" class="hover:text-indigo-600 dark:hover:text-indigo-400">{{ t('nav.projects') }}</a>
            <a href="#experience" class="hover:text-indigo-600 dark:hover:text-indigo-400">{{ t('nav.experience') }}</a>
            <a href="#about" class="hover:text-indigo-600 dark:hover:text-indigo-400">{{ t('nav.about') }}</a>
            <div class="h-5 w-px bg-slate-300/60 dark:bg-slate-700/60 mx-1"></div>
            <button class="px-2 py-1 rounded border border-slate-300/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800" @click="switchLocale('en')">EN</button>
            <button class="px-2 py-1 rounded border border-slate-300/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800" @click="switchLocale('id')">ID</button>
          </div>
        </nav>
        <div class="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">{{ t('hero.name') }}</h1>
            <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">{{ t('hero.title') }}</p>
            <p class="mt-6 max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">{{ t('hero.lead') }}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#projects" class="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">{{ t('hero.ctaProjects') }}</a>
              <a href="#contact" class="inline-flex items-center gap-2 rounded-lg border border-sky-300 dark:border-slate-600 px-4 py-2 hover:bg-sky-100 dark:hover:bg-slate-800">{{ t('hero.ctaContact') }}</a>
            </div>
            <p class="mt-4 inline-flex items-center gap-2 text-sm rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 px-3 py-1">
              <span class="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>{{ t('badge') }}
            </p>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-400/25 via-pink-400/20 to-cyan-400/25 ring-2 ring-indigo-200 dark:ring-slate-800"></div>
          </div>
        </div>
      </div>
    </header>

    <main id="main" class="max-w-6xl mx-auto px-6">
      <!-- About -->
      <section id="about" class="py-16">
        <h2 class="text-2xl font-bold">{{ t('about.title') }}</h2>
        <p class="mt-4 max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">{{ t('about.body') }}</p>
      </section>

      <!-- Experience -->
      <section id="experience" class="py-16">
        <h2 class="text-2xl font-bold">{{ t('experience.title') }}</h2>
        <ol class="mt-6 space-y-8">
          <li v-for="(exp, i) in experiences" :key="i" class="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/50 backdrop-blur">
            <div class="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold">{{ exp.role }} · <span class="text-indigo-600 dark:text-indigo-400">{{ exp.company }}</span></h3>
                <p class="text-sm text-slate-500">{{ exp.location }}</p>
              </div>
              <time class="text-sm text-slate-500">{{ exp.period }}</time>
            </div>
            <ul class="mt-4 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
              <li v-for="(p, j) in exp.points" :key="j">{{ p }}</li>
            </ul>
          </li>
        </ol>
      </section>

      <!-- Projects -->
      <section id="projects" class="py-16">
        <h2 class="text-2xl font-bold">{{ t('nav.projects') }}</h2>
        <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a v-for="(p, i) in projects" :key="i" :href="p.link" target="_blank" rel="noopener" class="group block rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition">
            <h3 class="font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ p.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="t in p.tags" :key="t" class="text-xs rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 px-2 py-1">{{ t }}</span>
            </div>
          </a>
        </div>
      </section>

      <!-- Contact / Footer -->
      <section id="contact" class="py-16">
        <h2 class="text-2xl font-bold">{{ t('contact.title') }}</h2>
        <p class="mt-4 text-slate-700 dark:text-slate-300">{{ t('contact.body') }}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="mailto:hello@aditia.dev" class="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300">Email</a>
          <a href="https://www.linkedin.com/in/aditia" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-sky-300 dark:border-slate-600 px-4 py-2 hover:bg-sky-100 dark:hover:bg-slate-800">LinkedIn</a>
          <a href="https://github.com/aditia" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-sky-300 dark:border-slate-600 px-4 py-2 hover:bg-sky-100 dark:hover:bg-slate-800">GitHub</a>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-200 dark:border-slate-800 py-8 mt-8">
      <div class="max-w-6xl mx-auto px-6 text-sm text-slate-500">© {{ new Date().getFullYear() }} M. Aditia Firmansyah · {{ t('footer') }}</div>
    </footer>
  </div>
</template>
