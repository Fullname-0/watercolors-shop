<template>
  <div class="container">
    <h2>{{ loadedProduct.title }}</h2>
    <div class="box">
      <img src="~/static/img/pic1.jpg" :alt="'Photo number ' + loadedProduct.id">
      <div class="box__details">
        <p>{{ loadedProduct.description }}</p>
         <ul>
           <li>Wysokość: {{ loadedProduct.height }} cm</li>
           <li>Szerokość: {{ loadedProduct.width }} cm</li>
           <li>Cena: {{ loadedProduct.price }} zł</li>
         </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loadedProduct: []
    }
  },
  asyncData(context) {
    return axios.get("https://mojeakwarele.pl/api/v1/catalogue/paintings/" + context.params.id)
    .then(res => {
      return {
        loadedProduct: res.data
      }
    })
    .catch(e => context.error(e));
  },
  created() {
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/product.scss';
</style>