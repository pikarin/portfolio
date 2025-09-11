<script setup>
import { useI18n } from '@/composables/useI18n'
const { t, switchLocale } = useI18n()
</script>

<template>
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
</template>
