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
          switch(this.$route.params.category) {
            case 'wszystkie': {
              return this.paintings;
            }
            case 'obrazy': {
              return this.paintings.filter(painting => painting.category.toLowerCase() === 'obrazy'); 
            }
            case 'metryczki': {
              return this.paintings.filter(painting => painting.category.toLowerCase() === 'metryczki'); 
            }
            case 'zakladki': {
              return this.paintings.filter(painting => painting.category.toLowerCase() === 'zakładki'); 
            }
            case 'indywidualne': {
              return this.paintings.filter(painting => painting.category.toLowerCase() === 'zamówienia idywidualne'); 
            }
          }
        }
    },
    components: {
        Gallery,
    },
  }
</script>