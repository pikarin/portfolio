<template>
  <AppSection title="Portfolio" subtitle="Most recent work">
    <AppContainer class="mt-12">
      <div id="swiper" class="relative -mx-4">
        <swiper-container
          slides-per-view="1"
          space-between="40"
          loop="true"
          navigation="true"
          pagination-clickable="true"
        >
          <swiper-slide
            v-for="(portfolio, i) in portfolios"
            :key="portfolio.title"
            class="px-10 pb-10"
            :class="`slide--${i}`"
          >
            <div
              class="
                aspect-video
                rounded-lg
                overflow-hidden
                shadow-lg
                border border-gray-200
              "
            >
              <img
                class="w-full h-full object-center object-cover"
                :src="`${baseURL}/img/${portfolio.image}`"
                :alt="portfolio.name"
              />
            </div>
            <div class="mt-4">
              <h3 v-text="portfolio.title" />
              <p class="mt-2" v-html="portfolio.description" />
              <AppButton
                v-if="portfolio.url"
                el="a"
                :href="portfolio.url"
                target="_blank"
                class="mt-3 inline-flex items-center font-medium"
              >
                <span>Visit</span>
                <IconArrowRight class="ml-1 w-5 h-5" />
              </AppButton>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL
</script>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolios: [
        {
          image: "porto-snapinn.jpg",
          title: "Snapinn",
          description: `
            Responsive brokerage (Agent Property) web application. <br />
            Build with Laravel, Tailwind CSS and Alpine.js.
          `,
          // url: "https://www.snapinn.com",
        },
        {
          image: "porto-stokmedia.jpeg",
          title: "Stokmedia",
          description: `
            Responsive website for selling photos. <br />
            Build with Laravel, Tailwind CSS and Vue.js.
          `,
          url: "https://www.stokmedia.com",
        },
        {
          image: "porto-bisnisham.png",
          title: "IGCN | Help Desk Bisnis dan HAM",
          description: `Website adaptable to all devices, with ui components and animated interactions.`,
          url: "https://bisnisdanham.id",
        },
        {
          image: "porto-evaluasikla.jpeg",
          title: "Evaluasi KLA",
          description: `Survey website for evaluate the feasibility of the city in Indonesia for childrens. Build with Laravel`,
          url: "https://evaluasikla.id",
        },
        {
          image: "porto-holahalo.jpeg",
          title: "HolaHalo Indonesia Travel Marketplace",
          description: `E-commerce website for Traveling. Build with Laravel, Bootstrap 4 and Vue.js`,
          url: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
#swiper {
  container-type: inline-size;
}
</style>

<!-- unscoped so variables pierce shadow DOM -->
<style>
#swiper {
  --swiper-navigation-size: 24px;
  --swiper-navigation-top-offset: calc((100cqw - 5rem) * 9 / 32);
  --swiper-theme-color: #6c55e0;
  --swiper-navigation-color: #6c55e0;
}
</style>
