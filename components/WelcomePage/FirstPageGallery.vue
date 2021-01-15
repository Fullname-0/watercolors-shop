<template>
  <div class="gallery" id="recommended">
    <div class="gallery__heading"> 
        <h2>Polecane</h2>
        <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.964294" y1="0.5" x2="100.964" y2="0.5" stroke="black"/>
        </svg>
    </div>
    <div class="gallery__box">
        <CategoryTile v-for="(tile, index) in tiles" 
            :key="index"
            :imageUrl="`/img/${tile.imageUrl}`" 
            :link="tile.link"
            :title="tile.title"/>
    </div>
  </div>
</template>

<script>
    import CategoryTile from '~/components/WelcomePage/CategoryTile.vue';

    export default {
        data() {
            return {
                tiles: [
                    {
                        title: 'Obrazy',
                        imageUrl: 'leaves.jpg',
                        link: '/galeria/obrazy'
                    },
                    {
                        title: 'Metryczki',
                        imageUrl: 'shelf.jpg',
                        link: '/galeria/metryczki'
                    },
                    {
                        title: 'Zakładki',
                        imageUrl: 'books.jpg',
                        link: '/galeria/zakladki'
                    },
                    {
                        title: 'Indywidualne',
                        imageUrl: 'scorpio.jpg',
                        link: '/galeria/indywidualne'
                    },
                ]
            }
        },
        components: {
            CategoryTile
        }
    }
</script>

<style lang="scss" scoped>
  
  .gallery {
      padding-top: 2%;

      &__heading {
          width: 100%;
          text-align: center;
          padding-bottom: 4rem;

          & h2 {
              font-size: 2.8rem;
              font-weight: 300;
              font-family: $font-primary-sc;
          }

            & svg {
                margin-top: .9rem;
            }
      }

      &__box {
          width: 80%;
          height: auto;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 5rem;
          align-items: center; 
          justify-items: center;
          overflow: hidden;

          @include respond(phone) {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
      }
  }
</style>