<template>
  <section class="pt-10 lg:pt-24">
    <AppContainer class="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      <div class="order-2 lg:order-1 lg:col-span-7">
        <h1 class="enter text-4xl font-semibold tracking-tight text-title lg:text-6xl lg:leading-none">
          Hi, I'm Aditia
        </h1>
        <p class="enter mt-3 text-lg font-medium text-accent" style="--enter-delay: 80ms">
          Web developer
        </p>
        <p class="enter mt-5 max-w-[48ch] leading-relaxed" style="--enter-delay: 160ms">
          Laravel and Vue developer with 5+ years shipping web apps for startups, NGOs and public-sector teams in Indonesia.
        </p>

        <div class="enter mt-8 flex flex-wrap items-center gap-6" style="--enter-delay: 240ms">
          <AppButton el="a" href="#contact">
            <span>Contact Me</span>
            <PhChatCircle :size="20" />
          </AppButton>

          <div class="flex items-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.url"
              :href="social.url"
              target="_blank"
              rel="noopener"
              :aria-label="social.label"
              class="text-accent hover:text-primary-dark transition-colors"
            >
              <Component :is="social.icon" :size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="enter order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end" style="--enter-delay: 120ms">
        <HomeImg class="w-[220px] text-primary lg:w-[340px]" />
      </div>
    </AppContainer>
  </section>
</template>

<script setup>
import { PhChatCircle, PhGithubLogo, PhLinkedinLogo } from '@phosphor-icons/vue'

const socialLinks = [
  { url: 'https://github.com/pikarin', icon: PhGithubLogo, label: 'GitHub' },
  { url: 'https://www.linkedin.com/in/aditiafirmansyah', icon: PhLinkedinLogo, label: 'LinkedIn' },
]
</script>
