<template>
  <AppSection class="pb-8" title="Contact Me" subtitle="Get in touch">
    <AppContainer class="mt-12">
      <div class="flex items-start">
        <IconEnvelope class="h-8 w-8 text-primary" />
        <div class="ml-4">
          <h3>Email</h3>
          <p class="mt-1">aditia.pikarin@gmail.com</p>
        </div>
      </div>

      <div class="mt-8 flex items-start">
        <IconTwitter class="h-8 w-8 text-primary" />
        <div class="ml-4">
          <h3>Twitter</h3>
          <p class="mt-1">
            <a href="https://twitter.com/AditiaPikarin" target="_blank">
              @AditiaPikarin
            </a>
          </p>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
export default {
  name: "Contact",
};
</script>
