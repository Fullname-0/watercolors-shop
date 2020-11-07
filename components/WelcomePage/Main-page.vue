<template>
  <div class="container">
    <a href="#" class="container__pictures" v-scroll-to="'#recommended'">
        <img src="~/static/img/pic1.jpg" alt="photo">
        <h2>Poznaj moje akwarele</h2>
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

        & img {
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

        & h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 32px;
            text-transform: uppercase;
            font-weight: 300;
            letter-spacing: 2px;
            pointer-events: none;
            text-align: center;
        }
    }

    &__description {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        padding: 5% 0 5% 0;

        & h2 {
            font-size: 28px;
            margin-bottom: 3%;
            font-weight: 300;
            text-align: center;
        }

        & p {
            font-size: 16px;
            font-weight: 300;
            text-align: center;
        }
    }
  }  
</style>