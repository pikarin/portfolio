<template>
  <div
    id="portfolio"
    class="max-w-[480px] lg:bg-white lg:rounded-xl lg:shadow container mx-auto"
  >
    <Header class="fixed w-full bottom-0 left-0 z-10 bg-body" />

    <main class="space-y-16">
      <Home id="home" />

      <About id="about" />

      <Skills id="skills" />

      <Qualification />

      <Services id="services" />

      <Portfolio id="portfolio" />

      <Projects id="projects" />

      <Testimonial />

      <Contact id="contact" />
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  //
};
</script>
