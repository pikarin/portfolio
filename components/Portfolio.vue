<template>
  <AppSection title="Portfolio" subtitle="Most recent work">
    <AppContainer class="mt-12">
      <div id="swiper" class="relative -mx-4">
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="40"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
        >
          <SwiperSlide
            v-for="(portfolio, i) in portfolios"
            :key="portfolio.title"
            class="px-10 pb-10"
            :class="`slide--${i}`"
          >
            <div
              class="
                aspect-w-16 aspect-h-9
                rounded-lg
                overflow-hidden
                shadow-lg
                border border-gray-200
              "
            >
              <img
                class="w-full h-full object-center object-cover"
                :src="`/img/${portfolio.image}`"
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
          </SwiperSlide>
        </Swiper>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
import { Navigation, Pagination } from 'swiper/modules'

export default {
  name: "Portfolio",
  setup() {
    return { Navigation, Pagination }
  },
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
  --swiper-navigation-size: 24px;
  --swiper-theme-color: #6c55e0;
}
</style>
