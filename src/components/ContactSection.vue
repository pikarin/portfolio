<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="py-16">
    <h2 class="text-2xl font-bold">{{ t('contact.title') }}</h2>
    <p class="mt-4 text-slate-700 dark:text-slate-300">{{ t('contact.body') }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a href="mailto:hello@aditia.dev" class="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300">Email</a>
      <a href="https://www.linkedin.com/in/aditia" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-sky-300 dark:border-slate-600 px-4 py-2 hover:bg-sky-100 dark:hover:bg-slate-800">LinkedIn</a>
      <a href="https://github.com/aditia" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-sky-300 dark:border-slate-600 px-4 py-2 hover:bg-sky-100 dark:hover:bg-slate-800">GitHub</a>
    </div>
  </section>
</template>
