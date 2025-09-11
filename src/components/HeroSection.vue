<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<template>
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
</template>
