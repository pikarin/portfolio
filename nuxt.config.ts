import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://pikarin.github.io/portfolio'
const description =
  'Muhammad Aditia Firmansyah, Laravel and Vue developer with 5+ years building web applications for startups, NGOs and public-sector teams.'

export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: '/portfolio',
    head: {
      title: 'M. Aditia Firmansyah',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Muhammad Aditia Firmansyah' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'theme-color', content: '#FBFBFE', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#131218', media: '(prefers-color-scheme: dark)' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'M. Aditia Firmansyah, Web Developer' },
        { property: 'og:description', content: description },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/img/aditia.png` },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@AditiaPikarin' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: siteUrl },
      ],
    },
  },

  css: ['~/assets/css/fonts.css', '~/assets/css/tailwind.css'],

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    download: true,
    display: 'swap',
    families: { Poppins: [400, 500, 600] },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      modulePreload: { polyfill: false },
    },
  },

  compatibilityDate: '2025-03-19',
})
