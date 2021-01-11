<template>
    <div class="box">
      <div class="box__main">
         <div class="box__main__header--tab">
            <h2>O mnie</h2>
        </div>
        <img class="box__main__img" src="~/static/img/about.jpg" alt="About"/>
        <div class="box__main__details">
            <div class="box__main__header--desktop">
                <h2>O mnie</h2>
            </div>
            <p class="box__main__details__paragraph">
              Mam na imię Natalia i&nbsp;zapraszam do&nbsp;świata Moich Akwareli.
            </p>
            <p class="box__main__details__paragraph">
              Moje zamiłowanie do poezji, piękna&nbsp;i natury zaklinam&nbsp;w każdym malowanym obrazie. Pragnę uchwycić&nbsp;w nich 
              zmysłowość&nbsp;i subtelność. W&nbsp;każdym pociągnięciu pędzla uwieczniam swoją pasję, serce&nbsp;i duszę. Dążę&nbsp;do 
              tego, aby&nbsp;patrzenie na Moje Akwarele stawało&nbsp;się nie tylko niezwykłym doznaniem estetycznym, ale również duchowym.
            </p>
            <p class="box__main__details__paragraph">
              Oprócz tworzenia, misją Moich Akwareli jest również pomaganie. Organizuję licytacje moich prac, z&nbsp;których 
              dochody przekazywane są na rzecz różnych fundacji.
            </p>
            <p class="box__main__details__paragraph">
              Zapraszam do zapoznania się z&nbsp;galerią Moich Akwareli, w&nbsp;której znajdą Państwo obrazy, zakładki i&nbsp;metryczki. 
              Jeśli nie&nbsp;znajdą Państwo upragnionego dzieła, wtedy zachęcam do&nbsp;kontaktu i&nbsp;złożenia indywidualnego zamówienia, 
              dostosowanego do&nbsp;Państwa upodobań.
            </p>
        </div>     
      </div>
        <div class="box__line"/>
        <p class="box__subtitle">
          Można mnie znaleźć również tutaj:
        </p>
        <Subscribe/>
    </div>
</template>

<script>
  import Subscribe from '~/components/WelcomePage/Subscribe.vue';
  export default {
    components: {
      Subscribe
    }  
  }
</script>

<style lang="scss" scoped>

    h2 {
        font-size: 2.6rem;
        font-weight: 300;
        padding: 0 0 .1rem 0;
    }

    .subscribe-box {
      padding-top: 3rem;
      padding-bottom: 0;
      width: 100%;
    }

    .box {
      width: 80%;
      margin: 5rem auto 5rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      @include respond(tab-port-small) {
        margin-top: 5rem;
      }

      &__subtitle {
        font-size: 2.5rem;
        font-family: $font-primary-sc;
        text-align: center;
      }

      &__line {
        border-top: 1px solid $color-secondary-light;
        width: 100%;
        margin: 5rem auto;
      }

        &__main{
          display: flex;
          justify-content: space-between;
          align-content: center;

          &__header--tab {
              display: none;
          }

          @include respond(tab-port-small) {
              flex-direction: column;

              &__header--tab {
                  display: block;
                  margin-bottom: 2rem;
              }

              &__header--desktop {
                  display: none;
              }
          }

          &__img {
            width: 35rem;
            height: 35rem;

            @include respond(tab-port) {
              width: 25rem;
              height: 25rem;
            }

            @include respond(tab-port-small) {
                width: 72vw;
                height: 72vw;
            }
          }

          &__details {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin-left: 10rem;

              @include respond(tab-port-small) {
                  margin: 0;
                  padding-top: 5rem;
              }

              &__paragraph {
                  text-align: justify;
                  padding: 1rem 0;
                  font-size: 1.8rem;
              }
          }
        }
      
    }
</style>
