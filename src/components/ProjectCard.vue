<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <a :href="props.project.link" target="_blank" rel="noopener" class="group block rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition">
    <h3 class="font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{{ props.project.title }}</h3>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ props.project.description }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="t in props.project.tags" :key="t" class="text-xs rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 px-2 py-1">{{ t }}</span>
    </div>
  </a>
</template>
