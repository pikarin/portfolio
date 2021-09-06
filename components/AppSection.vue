<template>
  <section>
    <h2 class="text-2xl font-semibold text-title text-center" v-text="title" />
    <span class="block text-sm text-light text-center" v-text="subtitle" />

    <slot />
  </section>
</template>

<script>
export default {
  name: "AppSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
