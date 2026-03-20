<template>
  <div>
    <div class="flex items-center justify-between">
      <h3 class="" v-text="name" />
      <span class="text-title" v-text="`${percentage}%`" />
    </div>
    <SkillsBar :percentage="percentage" />
  </div>
</template>

<script>
export default {
  name: "SkillsListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
};
</script>
