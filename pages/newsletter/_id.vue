<template>
  <div class="container">
    <h2>Dziękujemy za dotychczasową współpracę.</h2>
    <p>Twój mail został usunięty z naszej bazy newslettera, pozdrawiamy!</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      const deleteUrl = 'https://api.mojeakwarele.pl/mail/newsletter?id=' + this.$route.params.id;
      this.$axios.$delete(deleteUrl);
    },
  }
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8% 0;

  h2 {
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 4%;
  }

  p {
    font-size: 20px;
    font-weight: 300;
  }
}
</style>