<template>
  <AppSection title="Portfolio" subtitle="Most recent work">
    <AppContainer class="mt-12">
      <div
        id="swiper"
        v-swiper="swiperOption"
        class="relative -mx-4"
        :loadtheme="false"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(portfolio, i) in portfolios"
            :key="portfolio.title"
            class="swiper-slide px-10 pb-10"
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
                :src="require(`~/assets/img/${portfolio.image}`)"
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
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Portfolio",
  directives: {
    swiper: directive,
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
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
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
