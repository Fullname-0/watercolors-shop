<template>
<div class="error-container">
    <Header/>
    <Nuxt/>
    <Footer/>
</div>
</template>

<script>
  import Header from '~/components/Header-Footer/Header.vue';
  import Footer from '~/components/Header-Footer/Footer.vue';
  
  export default {
      components: {
          Header,
          Footer,
      },
  }
</script>

<style lang="scss">

    .error-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>