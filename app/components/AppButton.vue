<template>
  <Component :is="el" class="button">
    <slot />
  </Component>
</template>

<script setup>
defineProps({
  el: { type: String, default: 'button' },
})
</script>
