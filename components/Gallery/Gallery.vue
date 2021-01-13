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
      <div class="gallery__checkbox__box">
          <div class="gallery__checkbox">
            <svg v-if="!available" class="gallery__checkbox__icon"  @click="check()">
                <use xlink:href="~/static/icons/sprite.svg#icon-square"></use>
            </svg>
            <svg v-if="available" class="gallery__checkbox__icon"  :class="{'gallery__checkbox__checked' : available}" @click="check()">
                <use xlink:href="~/static/icons/sprite.svg#icon-check-square"></use>
            </svg>
            <div :class="{'gallery__checkbox__checked' : available}" @click="check()">dostępne od ręki</div>
        </div>
      </div>
      <div class="gallery__line--light"/>
      <div class="gallery__box">
        <ImageTile
          v-for="image in filteredImages"
          :key="image.id"
          :id="image.id"
          :title="image.title"
          :width="image.width"
          :height="image.height"
          :cost="image.price"
          :thumbnail="image.mainImage.small"
          :toOrder="image.availability === 'TO_ORDER'"
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
        available: false,
        tags: [],
        selectedTags: [],
        filteredImages: this.images
      }
    },
    methods: {
      select(tag) {
        if(tag) {
          if(this.selectedTags.includes(tag)) {
            this.selectedTags = this.selectedTags.filter(t => t != tag);
          } else {
            this.selectedTags.push(tag);
          }
        }
        this.filteredImages = this.images.filter(img => this.selectAvailable(img) && this.selectedTags.every(t => img.tags.includes(t)));
      },
      check() {
        this.available = !this.available;
        this.select();
      },
      selectAvailable(image) {
        console.log(this.available);
        if(this.available) {
          return image.availability === 'AVAILABLE';
        } else {
          return true;
        }
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

      &__checkbox{
        font-size: 1.8rem;
        margin: 1rem auto;
        color: $color-grey-medium;

        display: flex;
        align-items: center;

        &__box {
          width: 100%;
          display: flex;
          justify-content: center;

          :hover {
            cursor: pointer;
            color: $color-primary;
            font-weight: 700;
          }
        }

        &__checked {
          color: $color-primary;
          font-weight: 700;
        }

        &__icon {
          margin-right: 1rem;
          margin-top: .2rem;
          height: 1.9rem;
          width: 1.9rem;
          fill: currentColor;
        }
      }

      &__tags-box {
        margin: auto;
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem 0;

        @include respond(tab-port-small) {
          padding: 1rem 0;
        }

        @include respond(phone) {
          width: 100%;
        }
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
        padding: 1rem 2rem;
        color: $color-grey-medium;
        cursor: pointer;

        &:hover,
        &--selected{
          color: $color-grey-dark;
          font-weight: 700;
        }

        @include respond(phone) {
          padding: 0 1rem;
        }
      }

      &__box {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          align-items: start;
          justify-items: center;
          justify-content: space-between;
          padding-top: 3rem;

          @include respond(gallery-res) {
            justify-content: center;
          }

          @include respond(tab-port) {
            grid-template-columns: repeat(2, 1fr);
          }

          @include respond(phone) {
            grid-template-columns: repeat(1, 1fr);
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
