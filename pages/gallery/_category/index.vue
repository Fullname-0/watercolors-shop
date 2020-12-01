<template>
  <Gallery :images="sortedByCategoryPaintings" />
</template>

<script>
  import Gallery from '~/components/Gallery/Gallery.vue';
  import {mapGetters} from 'vuex';

  export default {
      computed: {
          ...mapGetters([
              'paintings'
          ]),
          sortedByCategoryPaintings() {
            if(this.$route.params.category === 'all') {
              return this.paintings;
            }
            return this.paintings.filter(painting => painting.category === this.$route.params.category);
          }
      },
      components: {
          Gallery,
      },
  }
</script>