<template>
  <footer class="pt-8">
    <div class="bg-primary pt-8 pb-12 text-white">
      <AppContainer class="space-y-14">
        <div>
          <h1 class="text-white text-2xl font-semibold">Aditia</h1>
          <h3 class="text-white text-sm font-normal mt-1">Web developer</h3>
        </div>

        <nav class="flex flex-col gap-y-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
        </nav>

        <div class="flex gap-x-8">
          <a href="https://www.facebook.com/aditia.pikarin" target="_blank">
            <IconFacebook class="w-6 h-6" />
          </a>
          <a href="https://twitter.com/AditiaPikarin" target="_blank">
            <IconTwitter class="w-6 h-6" />
          </a>
        </div>

        <div class="flex items-center justify-center text-light">
          <span>&copy;</span>
          <span class="ml-1 text-xs">Muhammad Aditia Firmansyah</span>
        </div>
      </AppContainer>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
