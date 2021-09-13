<template>
  <AppSection title="Services" subtitle="What I offer">
    <AppContainer class="grid grid-cols-2 gap-5 mt-12">
      <div
        v-for="service in services"
        :key="service.title"
        class="rounded shadow-md bg-white px-6 pb-5 pt-10"
      >
        <Component :is="service.icon" class="w-7 h-7 text-primary" />

        <h3
          class="mt-4 text-lg font-medium text-title"
          v-text="service.title"
        />

        <a
          href="#"
          class="mt-4 inline-flex items-center text-primary"
          @click.prevent.stop
        >
          <span class="text-sm font-medium">View more</span>
          <IconArrowRight class="w-5 h-5" />
        </a>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          icon: "IconBracketsCurly",
          title: "Backend Developer",
          link: "",
        },
        {
          icon: "IconArrow",
          title: "Frontend Developer",
          link: "",
        },
        {
          icon: "IconServerConnection",
          title: "DevOps",
          link: "",
        },
      ],
    };
  },
};
</script>
