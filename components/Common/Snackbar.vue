<template>
  <transition>
    <div class="snackbar" v-if="show"> 
      {{ message }}
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        message: '',
      }
    },

    created () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'showMessage') {
          this.message = state.snackbar.content;
          this.show = true;
        }

        setTimeout(() => {
          this.show = false;
        }, 7000);
      });
      

    },
  }
</script>

<style lang="scss" scoped>

  .snackbar {
    position: fixed;
    font-size: 2.5rem;
    font-family: $font-primary-sc;
    padding: 2rem 3rem;
    color: $color-white;
    background-color: $color-secondary;
    bottom: 2rem;
    right: 3rem;
    box-shadow: $main-shadow;
    z-index: 9991;

    @include respond(tab-port-small) {
      font-size: 2rem;
    }

    @include respond(phone) {
      font-size: 1.6rem;
      padding: 1rem 2rem;
    }
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(5%);
  }

  .v-enter-to,
  .v-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .v-enter-active, 
  .v-leave-active{
    transition: all .5s ease-out;
  }
  
</style>