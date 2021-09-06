<template>
  <ul>
    <li v-for="menu in items" :key="menu.url">
      <a
        :href="menu.url"
        class="flex flex-col items-center text-sm hover:text-primary"
        @click="menuClickedHandler"
      >
        <Component :is="menu.iconComponent" class="h-6 w-6" />
        <span v-text="menu.name"></span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    menuClickedHandler(e) {
      this.$emit("menu-clicked");
    },
  },
};
</script>
