<template>
  <section class="bg-primary text-white">
    <AppContainer class="flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
      <div v-reveal>
        <h2 class="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
          Have a project in mind?
        </h2>
        <p class="mt-3 max-w-[48ch] text-white/85">
          Tell me what you are building and I will get back to you.
        </p>
      </div>

      <div v-reveal="80" class="shrink-0">
        <a href="#contact" class="button button--inverse">
          <span>Contact Me</span>
          <PhChatCircle :size="20" />
        </a>
      </div>
    </AppContainer>
  </section>
</template>

<script setup>
import { PhChatCircle } from '@phosphor-icons/vue'
</script>
