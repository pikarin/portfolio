<template>
  <header>
    <AppContainer
      el="nav"
      class="
        flex
        items-center
        justify-between
        max-w-[968px]
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
          bg-body
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
          @menuClicked="isOpen = false"
        />

        <button
          class="absolute right-4 bottom-4 text-primary hover:text-primary-dark"
          @click="isOpen = false"
        >
          <IconClose class="h-7 w-7" />
        </button>
      </div>

      <div>
        <button class="hover:text-primary" @click="isOpen = true">
          <IconMenu class="h-6 w-6" />
        </button>
      </div>
    </AppContainer>
  </header>
</template>

<script>
import IconSuitCase from "./IconSuitCase.vue";
export default {
  components: { IconSuitCase },
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
