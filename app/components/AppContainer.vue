<template>
  <Component :is="el" class="mx-auto w-full max-w-6xl px-5 lg:px-8">
    <slot />
  </Component>
</template>

<script setup>
defineProps({
  el: { type: String, default: 'div' },
})
</script>
