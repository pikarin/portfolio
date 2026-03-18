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
        { name: 'description', content: 'CV Aditia Firmansyah Laravel Developer' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Muhammad Aditia Firmansyah' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/fonts.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    families: { Poppins: true },
  },

  compatibilityDate: '2024-11-01',
})
