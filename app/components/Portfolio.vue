<template>
  <AppSection title="Portfolio">
    <div class="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
      <article
        v-for="(project, i) in projects"
        :key="project.title"
        v-reveal="(i % 2) * 80"
        :class="i === 0 ? 'lg:col-span-2' : ''"
      >
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="block overflow-hidden rounded-lg border border-line bg-surface"
          :class="i === 0 ? 'aspect-[21/9]' : 'aspect-video'"
        >
          <img
            :src="`${baseURL}/img/${project.image}`"
            :alt="`Screenshot of ${project.title}`"
            width="1920"
            height="1081"
            loading="lazy"
            class="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
          />
        </a>
        <div
          v-else
          class="overflow-hidden rounded-lg border border-line bg-surface"
          :class="i === 0 ? 'aspect-[21/9]' : 'aspect-video'"
        >
          <img
            :src="`${baseURL}/img/${project.image}`"
            :alt="`Screenshot of ${project.title}`"
            width="1920"
            height="1081"
            loading="lazy"
            class="h-full w-full object-cover object-top"
          />
        </div>

        <div class="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div>
            <h3 class="text-lg font-medium" v-text="project.title" />
            <p class="mt-1 max-w-[60ch]" v-text="project.description" />
          </div>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="link-inline shrink-0 sm:mt-1"
          >
            <span>Visit</span>
            <PhArrowUpRight :size="18" />
          </a>
        </div>
      </article>
    </div>
  </AppSection>
</template>

<script setup>
import { PhArrowUpRight } from '@phosphor-icons/vue'

const baseURL = useRuntimeConfig().app.baseURL

const projects = [
  {
    image: 'porto-stokmedia.jpeg',
    title: 'Stokmedia',
    description: 'Stock photo marketplace. Laravel, Tailwind CSS and Vue.',
    url: 'https://www.stokmedia.com',
  },
  {
    image: 'porto-snapinn.jpg',
    title: 'Snapinn',
    description: 'Property brokerage web app for agents. Laravel, Tailwind CSS and Alpine.js.',
    url: null,
  },
  {
    image: 'porto-bisnisham.png',
    title: 'IGCN Help Desk Bisnis dan HAM',
    description: 'Help desk site for business and human rights, built for every screen size.',
    url: 'https://bisnisdanham.id',
  },
  {
    image: 'porto-evaluasikla.jpeg',
    title: 'Evaluasi KLA',
    description: 'Survey platform rating how child-friendly Indonesian cities are. Laravel.',
    url: 'https://evaluasikla.id',
  },
  {
    image: 'porto-holahalo.jpeg',
    title: 'HolaHalo Indonesia',
    description: 'Travel marketplace. Laravel, Bootstrap 4 and Vue.',
    url: null,
  },
]
</script>
