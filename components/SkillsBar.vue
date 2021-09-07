<template>
  <div class="h-[5px] rounded bg-primary-lighter overflow-hidden">
    <span
      :style="`width: ${percentage}%`"
      class="block h-full rounded bg-primary"
    ></span>
  </div>
</template>

<script>
export default {
  name: "SkillsBar",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
};
</script>
