<template>
  <Gallery :images="sortedByCategoryPaintings()" />
</template>

<script>
  import Gallery from '~/components/Gallery/Gallery.vue';
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        categoryPaintings: []
      }
    },
    computed: {
      ...mapGetters([
          'paintings'
      ])
    },
    methods: {
        sortedByCategoryPaintings() {
          if(this.$route.params.category === 'wszystkie') {
            return this.paintings;
          } else {
            const paintings = this.paintings.filter(painting => painting.category.toLowerCase() === this.$route.params.category); 
            return paintings;
          }
        }
    },
    components: {
        Gallery,
    },
  }
</script>