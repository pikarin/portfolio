import {computed, ref} from 'vue'

// Singleton i18n composable for simple URL-based locales
const supportedLocales = ['en', 'id']

function detectPathLocale() {
  try {
    const seg = location.pathname.replace(/^\/+/, '').split('/')[0]
    return supportedLocales.includes(seg) ? seg : 'en'
  } catch {
    return 'en'
  }
}

const currentLocale = ref(detectPathLocale())

let popstateBound = false

function bindPopstateOnce() {
  if (popstateBound) return
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      const seg = location.pathname.replace(/^\/+/, '').split('/')[0]
      if (supportedLocales.includes(seg)) {
        currentLocale.value = seg
        document.documentElement.lang = seg
      }
    })
    popstateBound = true
  }
}

function switchLocale(next) {
  if (!supportedLocales.includes(next) || next === currentLocale.value) return
  const segs = location.pathname.replace(/^\/+/, '').split('/')
  if (supportedLocales.includes(segs[0])) segs.shift()
  const basePath = '/' + segs.filter(Boolean).join('/')
  const target = `/${next}${basePath || ''}${location.search}${location.hash}`
  const current = location.pathname + location.search + location.hash
  if (target !== current) {
    history.pushState({locale: next}, '', target)
    currentLocale.value = next
    document.documentElement.lang = next
  }
}

const DICT = {
  en: {
    nav: {projects: 'Projects', experience: 'Experience', about: 'About'},
    hero: {
      name: 'M. Aditia Firmansyah',
      title: 'Senior Web Developer · Bandung, Indonesia',
      lead: "I craft fast, accessible, and beautiful web experiences. I love Vue, modern tooling, and building products that people enjoy using.",
      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
    },
    about: {
      title: 'About',
      body: "I’m a senior web developer based in Bandung with nearly a decade of experience building production‑grade applications. I focus on performance, developer experience, and clean UI. Outside of work, I enjoy exploring Bandung’s coffee culture and contributing to open source."
    },
    experience: {title: 'Work Experience'},
    contact: {title: 'Get in touch', body: 'Open to interesting projects and opportunities.'},
    footer: 'Built with Vue & Tailwind',
    lang: {en: 'English', id: 'Indonesian'},
    badge: 'Biggest experience: Laravel & its ecosystem',
  },
  id: {
    nav: {projects: 'Proyek', experience: 'Pengalaman', about: 'Tentang'},
    hero: {
      name: 'M. Aditia Firmansyah',
      title: 'Senior Web Developer · Bandung, Indonesia',
      lead: 'Saya membangun pengalaman web yang cepat, aksesibel, dan indah. Saya menyukai Vue, tooling modern, dan membangun produk yang disukai pengguna.',
      ctaProjects: 'Lihat Proyek',
      ctaContact: 'Kontak',
    },
    about: {
      title: 'Tentang',
      body: 'Saya seorang senior web developer yang berbasis di Bandung dengan hampir satu dekade pengalaman membangun aplikasi produksi. Fokus pada performa, pengalaman developer, dan UI yang rapi. Di luar kerja, saya suka mengeksplorasi kopi Bandung dan berkontribusi ke open source.'
    },
    experience: {title: 'Pengalaman Kerja'},
    contact: {title: 'Hubungi saya', body: 'Terbuka untuk proyek dan peluang menarik.'},
    footer: 'Dibuat dengan Vue & Tailwind',
    lang: {en: 'Inggris', id: 'Indonesia'},
    badge: 'Pengalaman terbesar: Laravel & ekosistemnya',
  },
}

const t = computed(() => (key) => {
  const locale = supportedLocales.includes(currentLocale.value) ? currentLocale.value : 'en'
  const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), DICT[locale])
  return val ?? key
})

export function useI18n() {
  bindPopstateOnce()
  return {
    supportedLocales,
    currentLocale,
    switchLocale,
    t,
  }
}
