<template>
  <AppSection title="Skills">
    <div class="mt-8 divide-y divide-line border-y border-line lg:mt-10">
      <div
        v-for="(skill, i) in skills"
        :key="skill.title"
        v-reveal="i * 60"
        class="grid gap-4 py-7 lg:grid-cols-12 lg:gap-8 lg:py-8"
      >
        <div class="flex items-start gap-3 lg:col-span-4">
          <Component :is="skill.icon" :size="28" class="shrink-0 text-accent" />
          <div>
            <h3 class="text-lg font-medium" v-text="skill.title" />
            <p class="text-sm text-light" v-text="skill.subtitle" />
          </div>
        </div>

        <ul class="flex flex-wrap gap-2 lg:col-span-8 lg:pl-0">
          <li v-for="item in skill.list" :key="item" class="chip" v-text="item" />
        </ul>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { PhBracketsCurly, PhBrowser, PhHardDrives } from '@phosphor-icons/vue'

const skills = [
  {
    title: 'Backend',
    subtitle: 'More than 5 years',
    icon: PhBracketsCurly,
    list: ['Laravel', 'PHP', 'Node.js'],
  },
  {
    title: 'Frontend',
    subtitle: 'More than 4 years',
    icon: PhBrowser,
    list: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vue', 'React', 'Alpine.js'],
  },
  {
    title: 'DevOps',
    subtitle: '1 year experience',
    icon: PhHardDrives,
    list: ['Git', 'Docker', 'Jenkins', 'AWS'],
  },
]
</script>
