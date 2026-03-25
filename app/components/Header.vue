<template>
  <header>
    <AppContainer
      el="nav"
      class="
        flex
        items-center
        justify-between
        max-w-[480px]
        h-12
        text-title
        font-medium
      "
    >
      <a href="#" class="hover:text-primary">Aditia</a>

      <div
        id="nav-menu"
        class="
          fixed
          left-0
          w-full
          -bottom-full
          bg-surface
          pt-8
          pb-16
          px-6
          shadow-top
          rounded-t-3xl
          transition-all
          duration-300
        "
        :class="{ '!bottom-0': isOpen }"
      >
        <NavMenu
          class="grid gap-8 grid-cols-3"
          :items="menuLinks"
          @menu:clicked="isOpen = false"
        />

        <button
          class="absolute right-4 bottom-4 text-primary hover:text-primary-dark"
          @click="isOpen = false"
        >
          <IconClose class="h-7 w-7" />
        </button>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="hover:text-primary transition-colors duration-300"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleColorMode"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
        <button class="hover:text-primary" @click="isOpen = true">
          <IconMenu class="h-6 w-6" />
        </button>
      </div>
    </AppContainer>
  </header>
</template>

<script setup>
const { toggle: toggleColorMode, isDark } = useColorMode()
</script>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      menuLinks: [
        {
          name: "Home",
          url: "#home",
          iconComponent: "IconHome",
        },
        {
          name: "About",
          url: "#about",
          iconComponent: "IconUser",
        },
        {
          name: "Skills",
          url: "#skills",
          iconComponent: "IconFile",
        },
        {
          name: "Services",
          url: "#services",
          iconComponent: "IconSuitCase",
        },
        {
          name: "Portfolio",
          url: "#portfolio",
          iconComponent: "IconPicture",
        },
        {
          name: "Contact Me",
          url: "#contact",
          iconComponent: "IconMessage",
        },
      ],
    };
  },
};
</script>
