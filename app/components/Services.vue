<template>
  <AppSection title="Services">
    <div class="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-line">
      <div
        v-for="(service, i) in services"
        :key="service.title"
        v-reveal="i * 80"
        class="lg:px-8 lg:first:pl-0 lg:last:pr-0"
      >
        <Component :is="service.icon" :size="32" class="text-accent" />
        <h3 class="mt-5 text-lg font-medium" v-text="service.title" />
        <p class="mt-2 max-w-[36ch] leading-relaxed" v-text="service.description" />
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { PhBracketsCurly, PhBrowser, PhHardDrives } from '@phosphor-icons/vue'

const services = [
  {
    icon: PhBracketsCurly,
    title: 'Backend Development',
    description: 'Laravel applications and APIs: data models, auth, queues, payments and third-party integrations.',
  },
  {
    icon: PhBrowser,
    title: 'Frontend Development',
    description: 'Responsive interfaces in Vue or React with Tailwind CSS, wired to the backend they run on.',
  },
  {
    icon: PhHardDrives,
    title: 'DevOps',
    description: 'Docker setups, Jenkins pipelines and AWS deployments so releases are repeatable.',
  },
]
</script>
