<template>
  <section class="home pt-8 pb-16">
    <AppContainer class="grid gap-4">
      <div class="grid grid-cols-[.5fr,3fr] pt-14 items-center">
        <div class="grid grid-cols-[max-content] gap-y-4">
          <a
            v-for="social in socialLinks"
            :key="social.url"
            :href="social.url"
            target="_blank"
            class="text-xl text-primary hover:text-primary-dark"
          >
            <Component :is="social.icon" class="inline-block w-6 h-6" />
          </a>
        </div>

        <div class="home__img">
          <HomeImg class="text-primary" />
        </div>

        <div class="mt-4 col-start-1 col-end-3">
          <h1 class="mb-1 text-3xl">Hi, I'm Aditia</h1>
          <h3 class="mb-3 font-medium text-default text-lg">Web developer</h3>
          <p class="mb-8">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <AppButton el="a" href="#contact" class="inline-flex items-center">
            <span>Contact Me</span>
            <IconMessage class="ml-2 w-5 h-5 transition-all duration-300" />
          </AppButton>
        </div>

        <div class="hidden col-span-2">
          <ButtonScrollDown />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      socialLinks: [
        {
          url: "https://github.com/pikarin",
          icon: "IconGithub",
        },
        {
          url: "https://www.linkedin.com/in/aditiafirmansyah",
          icon: "IconLinkedin",
        },
      ],
    };
  },
};
</script>
