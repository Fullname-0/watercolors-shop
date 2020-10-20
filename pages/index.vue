<template>
  <div>
    <Main />
    <FirstPageGallery />
    <Subscribe />
  </div>
</template>

<script>
import Main from '~/components/Main-page.vue';
import FirstPageGallery from '~/components/First-page-gallery.vue';
import Subscribe from '~/components/Subscribe.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    Main,
    FirstPageGallery,
    Subscribe,
  },
}
</script>

<style>

</style>
