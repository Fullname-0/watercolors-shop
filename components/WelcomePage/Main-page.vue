<template>
  <div class="container">
    <a href="#" class="container__pictures" v-scroll-to="{element: '#recommended', offset: -50}">
        <img src="~/static/img/pic2.jpg" alt="photo">
        <h2><span>Poznaj</span>Moje Akwarele</h2>
    </a>
    <div class="container__description">
        <h2>Robimy najlepsze akwarele bardzo smaczne</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa animi, 
          nemo voluptatum mollitia architecto, magni voluptate maxime molestiae facilis 
          quaerat sed qui illo commodi!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    &__pictures {
        position: relative;
        margin: 5% 0 2% 0;
        overflow: hidden;

        img {
            height: auto;
            width: 100%;
            filter: brightness(75%);
            transform: scale(1) scaleY(1.01);
            transition: all .8s cubic-bezier(.27,.53,.63,.95);

            &:hover {
                cursor: pointer;
                filter: brightness(70%);
                transform: scale(1.04);
            }
        }

        h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $color-primary;
            font-size: 6rem;
            font-weight: 300;
            letter-spacing: 2px;
            pointer-events: none;
            text-align: center;
            font-family: $font-primary-sc;
            z-index: 1;

            @include respond(tab-port) {
              font-size: 5rem;
            }

            @include respond(tab-port-small) {
              font-size: 4rem;
            }

            @include respond(phone) {
              font-size: 2rem;
            }

            span {
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: $color-secondary-light;
              text-transform: none;
              font-family: $font-secondary;
              font-size: 24rem;
              z-index: -1;

              @include respond(tab-port) {
                font-size: 20rem;
              }
              
              @include respond(tab-port-small) {
                font-size: 16rem;
              }
              
              @include respond(phone) {
                font-size: 8rem;
              }
            }
        }
    }

    &__description {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        padding: 5% 0 5% 0;

        h2 {
            font-size: 2.8rem;
            margin-bottom: 3%;
            font-weight: 300;
            text-align: center;
        }

        p {
            font-size: 1.6rem;
            font-weight: 300;
            text-align: center;
        }
    }
  }  
</style>