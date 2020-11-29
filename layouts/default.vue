<template>
<div>
    <StickyHeader/>
    <Header/>
    <Nuxt/>
    <Footer/>
    <Snackbar/>
</div>
</template>

<script>
  import Header from '~/components/Header-Footer/Header.vue';
  import StickyHeader from '~/components/Header-Footer/StickyHeader.vue';
  import Footer from '~/components/Header-Footer/Footer.vue';
  import Snackbar from '~/components/Common/Snackbar.vue';
  
  export default {
      components: {
          Header,
          Footer,
          StickyHeader,
          Snackbar
      },
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @include respond(tab-land) {
      font-size: 50%;
    }
  } 

  body {
      font-weight: 400;
      font-family: $font-primary;
      width: 90%;
      margin: auto;

      h1,
      h2,
      h3,
      h4 {
        font-family: $font-primary-sc;
      }
  }

</style>