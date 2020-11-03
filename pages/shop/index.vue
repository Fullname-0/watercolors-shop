<template>
  <GalleryShop :images="loadedImages.paintings"/>
</template>

<script>
import GalleryShop from '~/components/GalleryShop/GalleryShop.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  },
  computed: {
    loadedImages() {
      return this.$store.getters.titlesPaintings;
    }
  },
  components: {
    GalleryShop,
  },
  props: {
    images: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/shopGallery.scss';
</style>
