<template>
  <div>
    <div class="gallery">
      <div class="gallery__heading">
          <h2>Galeria</h2>
          <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.964294" y1="0.5" x2="100.964" y2="0.5" stroke="black"/>
          </svg>
      </div>
      <div class="gallery__box">
        <ImageTile
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
  import ImageTile from '~/components/Gallery/ImageTile.vue';

  export default {
    components: {
      ImageTile,
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

  .gallery {
      width: 70vw;
      margin: auto;
      padding-top: 2%;

      &__heading {
          width: 100%;
          text-align: center;
          padding-bottom: 40px;

          & h2 {
              font-size: 28px;
              font-weight: 300;
          }
      }

      &__box {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
          grid-auto-rows: 360px;
          align-items: center; 
          justify-items: center;
      }

      &__button {
          text-align: center;
          padding: 4% 0 4% 0;

          & button {
              padding: 7px;
              border: 1px solid black;
              background-color: #fff;

              &:hover {
                  cursor: pointer;
              }
          }
      }
  }
</style>
