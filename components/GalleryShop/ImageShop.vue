<template>
    <div class="gallery__image">
      <img :src="thumbnail" :alt="'Photo number ' + id" @click="onLoadProduct"/>
      <h3>{{ title }} - {{ cost + ' zł'}}</h3>
    </div>
</template>

<script>

export default {
  watchQuery: true,
  data() {
    return {
    }
  },
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
  components: {
  },
  methods: {
    onLoadProduct() {
      this.$router.push('/shop/' + this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/shopGallery.scss';
</style>