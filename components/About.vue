<template>
  <AppSection class="about section" title="About Me" subtitle="My introduction">
    <AppContainer class="mt-7 grid">
      <img
        src="~/assets/img/about2.png"
        alt="Aditia Firmansyah"
        class="w-[200px] rounded-lg justify-self-center self-center"
      />

      <div class="mt-4">
        <p class="text-center mb-10">
          Web developer, with extensive knowledge and years of experience,
          working in web technologies, delivering quality work.
        </p>

        <div class="flex justify-evenly mb-10">
          <div v-for="exp in experiences" :key="exp.title">
            <span
              class="block text-center text-xl font-semibold text-title"
              v-text="exp.number"
            />
            <span class="block text-center text-xs" v-html="exp.title" />
          </div>
        </div>

        <div class="about__buttons flex justify-center">
          <a download="" href="#" class="button inline-flex items-center">
            <span>Download CV</span>
            <IconDownload class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      experiences: [
        {
          number: "05+",
          title: "Years <br/> experience",
        },
        {
          number: "20+",
          title: "Completed <br/> projects",
        },
        {
          number: "5+",
          title: "Companies <br/> worked",
        },
      ],
    };
  },
};
</script>
