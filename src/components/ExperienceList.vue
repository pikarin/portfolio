<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <section id="experience" class="py-16">
    <h2 class="text-2xl font-bold">{{ t('experience.title') }}</h2>
    <ol class="mt-6 space-y-8">
      <li v-for="(exp, i) in props.experiences" :key="i" class="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/50 backdrop-blur">
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
</template>
