<template>
  <GalleryShop :images="paintings" />
</template>

<script>
  import GalleryShop from '~/components/Gallery/GalleryShop.vue';
  import {mapGetters} from 'vuex';

  export default {
      computed: {
          ...mapGetters([
              'paintings'
          ])
      },
      components: {
          GalleryShop,
      },
  }
</script>