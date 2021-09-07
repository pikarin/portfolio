<template>
  <AppSection title="Services" subtitle="My technical level">
    <AppContainer class="grid grid-cols-2 gap-5 mt-12">
      <div
        v-for="service in services"
        :key="service.title"
        class="rounded shadow-md bg-white px-6 pb-5"
      >
        <span>icon-here</span>
        <h3 class="text-xl font-bold">Backend Developer</h3>
        <a href="#" @click.prevent.stop>View more</a>
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
          icon: "",
          title: "Backend Developer",
          link: "#",
        },
        {
          icon: "",
          title: "Frontend Developer",
          link: "#",
        },
        {
          icon: "",
          title: "DevOps",
          link: "#",
        },
      ],
    };
  },
};
</script>
