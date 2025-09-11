<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 py-8 mt-8">
    <div class="max-w-6xl mx-auto px-6 text-sm text-slate-500">© {{ new Date().getFullYear() }} Muhammad Aditia Firmansyah · {{ t('footer') }}</div>
  </footer>
</template>
