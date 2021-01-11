<template>
    <div class="gallery__image">
      <img :src="thumbnail" :alt="'Photo number ' + id" @click="onLoadProduct"/>
      <h2 v-if="toOrder">Na zamówienie</h2>
      <div class="gallery__image__title">
        <div class="gallery__image__details">
          <h3>{{ title }}</h3>
          <h3>{{ cost }}&nbsp;zł</h3>
        </div>
          <p>{{ height }} x {{ width }}</p>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'Images',
    props: {
      toOrder: {
        type: Boolean,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      height: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      cost: {
        type: Number,
        required: true
      },
      thumbnail: {
        type: String,
        required: true,
      }
    },
    methods: {
      onLoadProduct() {
        this.$router.push('/galeria/' + this.$route.params.category + '/' + this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .gallery__image {
    display: block;
    position: relative;
    overflow: hidden;

    & img {
        width: 100%;
        object-fit: fill;
        filter: brightness(85%);
        transition: all .8s cubic-bezier(.27,.53,.63,.95);

        &:hover {
            cursor: pointer;
            filter: brightness(100%);
        }
    }

    h2 {
      position: absolute;
      top: 0;
      left: 0;
      color: $color-grey-light;
      padding: 1rem;
      background-color: rgba($color-grey-light, 0.2);
    }

    &__details {
      display: flex;
      width: 100%;
      justify-content: space-between;

      & h3 {
        font-size: 2.2rem;
        font-weight: 300;
      }
    }

    &__title {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      width: 100%;
      
      & p {
        margin-top: -1rem;
        font-size: 2rem;
        color: $color-secondary;
      }
    }
  }
  
</style>