<template>
  <header
    class="
      fixed inset-x-0 bottom-0 z-20 border-t border-line bg-body/95 backdrop-blur
      lg:sticky lg:top-0 lg:bottom-auto lg:border-t-0 lg:border-b
    "
  >
    <AppContainer el="nav" class="flex h-14 items-center justify-between lg:h-16" aria-label="Main">
      <a href="#home" class="font-semibold text-title hover:text-accent transition-colors">Aditia</a>

      <ul class="hidden items-center gap-8 text-sm font-medium lg:flex">
        <li v-for="menu in menuLinks.filter((m) => m.url !== '#contact')" :key="menu.url">
          <a :href="menu.url" class="text-default hover:text-accent transition-colors" v-text="menu.name" />
        </li>
      </ul>

      <a href="#contact" class="button hidden py-2 text-sm lg:inline-flex">Contact Me</a>

      <button
        class="text-title hover:text-accent lg:hidden"
        aria-label="Open menu"
        :aria-expanded="isOpen"
        aria-controls="nav-menu"
        @click="isOpen = true"
      >
        <PhList :size="24" />
      </button>
    </AppContainer>
  </header>

  <!-- Mobile drawer. Sibling of <header>: backdrop-filter there would make it the containing block. -->
  <div
    id="nav-menu"
    class="
      fixed inset-x-0 -bottom-full z-30 rounded-t-3xl bg-body px-6 pt-8 pb-16 shadow-top
      invisible transition-[bottom,visibility] duration-300 ease-out lg:hidden
    "
    :class="{ 'bottom-0! visible': isOpen }"
    :aria-hidden="!isOpen"
  >
    <ul class="grid grid-cols-3 gap-8">
      <li v-for="menu in menuLinks" :key="menu.url">
        <a
          :href="menu.url"
          class="flex flex-col items-center gap-1 text-sm text-default hover:text-accent"
          @click="isOpen = false"
        >
          <Component :is="menu.icon" :size="24" />
          <span v-text="menu.name" />
        </a>
      </li>
    </ul>

    <button
      class="absolute right-4 bottom-4 text-accent hover:text-primary-dark"
      aria-label="Close menu"
      @click="isOpen = false"
    >
      <PhX :size="28" />
    </button>
  </div>
</template>

<script setup>
import { PhList, PhX, PhHouse, PhUser, PhFileText, PhBriefcase, PhImages, PhChatCircle } from '@phosphor-icons/vue'

const isOpen = ref(false)

const menuLinks = [
  { name: 'Home', url: '#home', icon: PhHouse },
  { name: 'About', url: '#about', icon: PhUser },
  { name: 'Skills', url: '#skills', icon: PhFileText },
  { name: 'Services', url: '#services', icon: PhBriefcase },
  { name: 'Portfolio', url: '#portfolio', icon: PhImages },
  { name: 'Contact Me', url: '#contact', icon: PhChatCircle },
]
</script>
