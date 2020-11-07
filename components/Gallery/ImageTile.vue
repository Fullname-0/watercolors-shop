<template>
    <div class="gallery__image">
      <img :src="thumbnail" :alt="'Photo number ' + id" @click="onLoadProduct"/>
      <h3>{{ title }} - {{ cost + ' zł'}}</h3>
    </div>
</template>

<script>

  export default {
    watchQuery: true,
    name: 'Images',
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
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
        this.$router.push('/shop/' + this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .gallery__image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 450px;
    overflow: hidden;

    & img {
        width: 450px;
        height: 300px;
        object-fit: cover;
        filter: brightness(85%);
        transition: all .8s cubic-bezier(.27,.53,.63,.95);
        background-color: grey;

        &:hover {
            cursor: pointer;
            filter: brightness(100%);
        }
    }

    & h3 {
        font-size: 24px;
        font-weight: 300;
        pointer-events: none;
        padding-top: 10px;
    }
  }
  
</style>