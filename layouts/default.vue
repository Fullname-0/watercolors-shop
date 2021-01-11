<template>
<div>
    <StickyHeader/>
    <Header/>
    <Cookie/>
    <Nuxt/>
    <Footer/>
    <Snackbar/>
</div>
</template>

<script>
  import Header from '~/components/Header-Footer/Header.vue';
  import StickyHeader from '~/components/Header-Footer/StickyHeader.vue';
  import Footer from '~/components/Header-Footer/Footer.vue';
  import Cookie from '~/components/Header-Footer/Cookie.vue';
  import Snackbar from '~/components/Common/Snackbar.vue';
  
  export default {
      components: {
          Header,
          Footer,
          Cookie,
          StickyHeader,
          Snackbar
      },
  }
</script>