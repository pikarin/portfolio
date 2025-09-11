<script setup>
import { useI18n } from '@/composables/useI18n'
import ProjectCard from '@/components/ProjectCard.vue'
const { t } = useI18n()

const props = defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <section id="projects" class="py-16">
    <h2 class="text-2xl font-bold">{{ t('nav.projects') }}</h2>
    <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="(p, i) in props.projects" :key="i" :project="p" />
    </div>
  </section>
</template>
