<template>
  <div>
    <div class="gallery">
      <div class="gallery__heading">
          <h2>{{ getCategoryTitle }}</h2>
      </div>
      <div class="gallery__line"/>
      <div class="gallery__tags-box">
        <div class="gallery__tag" :class="{'gallery__tag--selected': selectedTags.includes(tag)}" v-for="tag in tags" :key="tag" @click="select(tag)">
          {{ tag }}
        </div>
      </div>
      <div class="gallery__line--light"/>
      <div class="gallery__box">
        <ImageTile
          v-for="image in filteredImages"
          :key="image.id"
          :id="image.id"
          :title="image.title"
          :cost="image.price"
          :thumbnail="image.mainImage.small"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ImageTile from '~/components/Gallery/ImageTile.vue';

  export default {
    data() {
      return {
        tags: [],
        selectedTags: [],
        filteredImages: this.images
      }
    },
    methods: {
      select(tag) {
        if(this.selectedTags.includes(tag)) {
          this.selectedTags = this.selectedTags.filter(t => t != tag);
        } else {
          this.selectedTags.push(tag);
        }
        this.filteredImages = this.images.filter(img => this.selectedTags.every(t => img.tags.includes(t)));
      }
    },
    components: {
      ImageTile,
    },
    props: {
      images: {
        type: Array,
        required: true,
      }
    },
    computed: {
      getCategoryTitle() {
        switch(this.$route.params.category) {
          case('paintings'):
            return 'Obrazy';
          case('birthstats'):
            return 'Metryczki';
          case('bookmarks'):
            return 'Zakładki';
          case('individual'):
            return 'Zamówienia indywidualne';
          default:
            return 'Galeria';
        }
      }
    },
    mounted() {
              this.images.forEach(image => {
              image.tags.forEach(tag => {
                  if(!this.tags.includes(tag)) {
                      this.tags.push(tag);
                  }
              });
          });
    }
  }
</script>

<style lang="scss" scoped>

  .gallery {
      max-width: 80%;
      margin: auto;
      padding: 5rem 0;

      &__heading {
          width: 100%;
          text-align: center;
          padding-bottom: 1rem;

          & h2 {
              font-size: 2.8rem;
              font-weight: 300;
          }
      }

      &__tags-box {
        margin: auto;
        width: 60%;
        display: flex;
        justify-content: center;
        padding: 3rem 0;
      }

      &__line{
        border-top: 1px solid $color-primary;
        width: 10%;
        margin: 1rem auto;

        &--light {
          border-top: 1px solid $color-secondary-light;
          width: 10%;
          margin: 1rem auto;
        }
      }

      &__tag {
        font-size: 1.8rem;
        padding: 0 2rem;
        color: $color-grey-medium;
        cursor: pointer;

        &:hover,
        &--selected{
          color: $color-grey-dark;
          font-weight: 700;
        }
      }

      &__box {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
          // gap: 5rem;
          align-items: center; 
          justify-items: center;
          justify-content: space-between;
          padding-top: 3rem;
          // overflow: hidden;

          @include respond(tab-land) {
            justify-content: center;
          }
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
