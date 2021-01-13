<template>
  <Contact
    :painting="painting"/>
</template>

<script>
import Contact from '~/components/Contact/Contact.vue'

export default {
  created() {
    const title = this.$route.query.title;
    if(title) {
      this.painting = this.$store.getters.paintingByTitle(title);
    }
  },
  components:{
    Contact
  }
}
</script>