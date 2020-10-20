<template>
  <div>
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import Footer from '~/components/Footer.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    Menu,
    Footer,
  },
}
</script>

<style>

</style>
