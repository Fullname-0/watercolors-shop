<template>
  <div>
    <Main/>
    <FirstPageGallery/>
    <Subscribe/>
  </div>
</template>

<script>
  import Main from '~/components/WelcomePage/Main-page.vue';
  import FirstPageGallery from '~/components/WelcomePage/FirstPageGallery.vue';
  import Subscribe from '~/components/WelcomePage/Subscribe.vue';

  export default {
    components: {
      Main,
      FirstPageGallery,
      Subscribe,
    },
  }
</script>