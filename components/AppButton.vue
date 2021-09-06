<template>
  <Component
    :is="el"
    class="
      bg-primary
      hover:bg-primary-dark
      text-white
      p-4
      rounded-lg
      font-medium
      transition
      duration-300
      ease-in-out
    "
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    el: {
      type: String,
      default: "button",
    },
  },
};
</script>
