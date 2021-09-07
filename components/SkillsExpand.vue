<template>
  <div>
    <div @click="toggle" class="flex items-center justify-between">
      <slot name="header" v-bind="{ isOpen }" />

      <IconAngleDown
        class="
          w-7
          h-7
          text-primary
          transition-transform
          transform
          duration-500
          ease-in-out
        "
        :class="{ 'rotate-180': isOpen }"
      />
    </div>

    <transition name="expand" mode="in-out">
      <div v-show="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SkillsExpand",
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.opened,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;

      this.$emit("toggle", this.isOpen);
    },
  },
};
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition-property: max-height;
  transition-duration: 0.5s;
}

.expand-enter {
  max-height: 0px;
}

.expand-enter-to {
  max-height: 24rem;
}

.expand-leave {
  max-height: 24rem;
}

.expand-leave-to {
  max-height: 0px;
}
</style>
