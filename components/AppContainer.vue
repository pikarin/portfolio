<template>
  <Component :is="el" class="container px-4 mx-auto">
    <slot />
  </Component>
</template>

<script>
export default {
  name: "AppContainer",
  props: {
    el: {
      type: String,
      default: "div",
    },
  },
};
</script>
