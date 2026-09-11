<template>
  <footer class="mt-24 border-t border-line lg:mt-32">
    <AppContainer class="grid gap-10 py-12 lg:grid-cols-12 lg:items-start">
      <div class="lg:col-span-5">
        <p class="text-xl font-semibold text-title">Aditia</p>
        <p class="mt-1 text-sm">Web developer</p>
      </div>

      <nav class="flex gap-6 text-sm font-medium lg:col-span-4" aria-label="Footer">
        <a href="#about" class="text-default hover:text-accent transition-colors">About</a>
        <a href="#skills" class="text-default hover:text-accent transition-colors">Skills</a>
        <a href="#services" class="text-default hover:text-accent transition-colors">Services</a>
        <a href="#portfolio" class="text-default hover:text-accent transition-colors">Portfolio</a>
      </nav>

      <div class="flex gap-5 lg:col-span-3 lg:justify-end">
        <a href="https://github.com/pikarin" target="_blank" rel="noopener" aria-label="GitHub" class="text-default hover:text-accent transition-colors">
          <PhGithubLogo :size="24" />
        </a>
        <a href="https://www.linkedin.com/in/aditiafirmansyah" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-default hover:text-accent transition-colors">
          <PhLinkedinLogo :size="24" />
        </a>
        <a href="https://www.facebook.com/aditia.pikarin" target="_blank" rel="noopener" aria-label="Facebook" class="text-default hover:text-accent transition-colors">
          <PhFacebookLogo :size="24" />
        </a>
        <a href="https://twitter.com/AditiaPikarin" target="_blank" rel="noopener" aria-label="Twitter" class="text-default hover:text-accent transition-colors">
          <PhTwitterLogo :size="24" />
        </a>
      </div>

      <p class="text-xs text-light lg:col-span-12">&copy; {{ year }} Muhammad Aditia Firmansyah</p>
    </AppContainer>
  </footer>
</template>

<script setup>
import { PhGithubLogo, PhLinkedinLogo, PhFacebookLogo, PhTwitterLogo } from '@phosphor-icons/vue'

const year = new Date().getFullYear()
</script>
