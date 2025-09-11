<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceList from '@/components/ExperienceList.vue'
import ProjectsGrid from '@/components/ProjectsGrid.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { experiences, projects } from '@/data/data.js'
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-neutral-900 focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-cyan-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
    <!-- Hero -->
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 opacity-20 dark:opacity-30">
        <div class="pointer-events-none h-full w-full bg-[radial-gradient(1200px_600px_at_50%_-200px,theme(colors.indigo.300/.6),transparent_70%)] dark:bg-[radial-gradient(1200px_600px_at_50%_-200px,theme(colors.indigo.600/.4),transparent_70%)]"></div>
      </div>
      <div class="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <NavBar />
        <HeroSection />
      </div>
    </header>

    <main id="main" class="max-w-6xl mx-auto px-6">
      <AboutSection />
      <ExperienceList :experiences="experiences" />
      <ProjectsGrid :projects="projects" />
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>
