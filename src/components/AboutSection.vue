<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-16">
    <h2 class="text-2xl font-bold">{{ t('about.title') }}</h2>
    <p class="mt-4 max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">{{ t('about.body') }}</p>
  </section>
</template>
