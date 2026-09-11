<template>
  <section>
    <AppContainer>
      <h2 v-reveal class="section-title" v-text="title" />
      <slot />
    </AppContainer>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
