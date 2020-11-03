<template>
  <div>
    <div class="gallery">
      <div class="gallery__heading">
          <h2>Sklep</h2>
          <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.964294" y1="0.5" x2="100.964" y2="0.5" stroke="black"/>
          </svg>
      </div>
      <div class="gallery__box">
        <ImageShop
          v-for="image in images"
          :key="image.id"
          :id="image.id"
          :title="image.title"
          :cost="image.price"
          :thumbnail="image.mainImage.small"
        />
      </div>
      <!-- <div class="gallery__button">
        <button>Load more</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import ImageShop from '~/components/GalleryShop/ImageShop.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    ImageShop,
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
