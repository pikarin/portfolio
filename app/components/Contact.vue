<template>
  <AppSection title="Contact Me">
    <div class="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12">
      <p v-reveal class="max-w-[44ch] text-lg leading-relaxed text-title lg:col-span-5">
        Email is the fastest way to reach me. Twitter works too.
      </p>

      <ul class="grid gap-6 sm:grid-cols-2 lg:col-span-7">
        <li v-for="(channel, i) in channels" :key="channel.label" v-reveal="80 + i * 60" class="flex items-start gap-4">
          <Component :is="channel.icon" :size="28" class="shrink-0 text-accent" />
          <div>
            <h3 class="text-base font-medium" v-text="channel.label" />
            <a
              :href="channel.href"
              :target="channel.external ? '_blank' : undefined"
              :rel="channel.external ? 'noopener' : undefined"
              class="link-inline mt-1 break-all"
              v-text="channel.value"
            />
          </div>
        </li>
      </ul>
    </div>
  </AppSection>
</template>

<script setup>
import { PhEnvelopeSimple, PhTwitterLogo } from '@phosphor-icons/vue'

const channels = [
  {
    label: 'Email',
    value: 'aditia.pikarin@gmail.com',
    href: 'mailto:aditia.pikarin@gmail.com',
    icon: PhEnvelopeSimple,
    external: false,
  },
  {
    label: 'Twitter',
    value: '@AditiaPikarin',
    href: 'https://twitter.com/AditiaPikarin',
    icon: PhTwitterLogo,
    external: true,
  },
]
</script>
