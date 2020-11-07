<template>
<div>
    <Menu/>
    <Header/>
    <Nuxt/>
    <Footer/>
</div>
</template>

<script>
  import Header from '~/components/Header-Footer/Header.vue';
  import Menu from '~/components/Header-Footer/Menu.vue';
  import Footer from '~/components/Header-Footer/Footer.vue';
  
  export default {
      components: {
          Header,
          Footer,
          Menu
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
  } 

  body {
      font-weight: 400;
      font-family: $font-primary;
      width: 90%;
      margin: auto;
  }

</style>