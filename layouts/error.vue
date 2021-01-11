<template>
    <div class="error-main">
      <div class="ma-auto text-center">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <div v-else>
          <h1>{{ otherError.title }}</h1>
          <h2>{{ otherError.subtitle }}</h2>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    layout: 'error_layout',
    props: {
        error: {
        type: Object,
        default: null
        }
    },
    data () {
        return {
        pageNotFound: 'Nie znaleziono strony',
        otherError: {
            title: 'Przepraszamy, wystąpił nieoczekiwany błąd',
            subtitle: 'Zapraszamy ponownie później'
            }
        }
    },
    head () {
        const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
        title
        }
    }
}
</script>

<style lang="scss" scoped>
    .error-main {
        font-size: 1.5rem;
        margin: auto;
        color: $color-primary;
        text-align: center;

        h2 {
            color: $color-secondary;
        }
    }
</style>