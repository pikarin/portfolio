<template>
  <section class="bg-primary">
    <AppContainer class="pt-12">
      <h2 class="text-2xl font-semibold text-white text-center">
        You have a new project
      </h2>
      <span class="mt-3 block text-sm text-white text-center">
        Contact me now to get started building your new amazing project.
      </span>

      <div class="mt-6 flex justify-center">
        <AppButton
          as="a"
          href="#contact"
          class="
            !bg-white
            !text-primary
            hover:!bg-white
            inline-flex
            items-center
          "
        >
          <span class="text-sm">Contact Me</span>
          <IconMessage class="w-5 h-5 ml-2" />
        </AppButton>
      </div>

      <div class="mt-8 pb-4">
        <IllustrationWebDevelopment class="w-full h-auto" />
      </div>
    </AppContainer>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>
