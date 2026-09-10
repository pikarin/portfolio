<template>
  <AppSection title="About Me">
    <div class="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-12">
      <div v-reveal class="lg:col-span-5">
        <img
          src="~/assets/img/about2.png"
          alt="Aditia Firmansyah"
          width="830"
          height="811"
          loading="lazy"
          class="w-full max-w-[280px] rounded-lg lg:max-w-none"
        />
      </div>

      <div v-reveal="80" class="lg:col-span-7">
        <p class="max-w-[60ch] text-lg leading-relaxed text-title">
          I build backend systems in Laravel and interfaces in Vue and React. Most of my work has been product teams
          shipping to real users: property brokerage, stock photography, travel e-commerce and public-sector surveys.
        </p>

        <dl class="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-8">
          <div v-for="exp in experiences" :key="exp.title">
            <dt class="text-sm text-light" v-text="exp.title" />
            <dd class="mt-1 text-3xl font-semibold text-title" v-text="exp.number" />
          </div>
        </dl>

        <a download href="/RESUME-ADITIA-DEVELOPER.pdf" class="button mt-8">
          <span>Download CV</span>
          <PhDownloadSimple :size="20" />
        </a>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { PhDownloadSimple } from '@phosphor-icons/vue'

const experiences = [
  { number: '5+', title: 'Years experience' },
  { number: '20+', title: 'Completed projects' },
  { number: '5+', title: 'Companies' },
]
</script>
