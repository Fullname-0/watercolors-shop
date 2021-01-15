<template>
      <div class="box">
         <div class="box__header--tab">
            <h2>{{painting ? 'Zamówienie' : 'Kontakt'}}</h2>
        </div>
        <div class="box__left">
          <div class="box__left__img">
            <h2 v-if="!painting">Zapraszam</h2>
            <img v-if="isPaintingAvailable" class="box__left__img" :src="painting.mainImage.small" alt="Kontakt"/>
            <div v-if="painting" class="box__left__details">
              <p>Zapytanie dotyczy {{paintingCategory}}:</p>
              <p class="box__left__details--title">{{painting.title}}</p>
              <p>{{painting.width}} x {{painting.height}} cm</p>
              <p class="box__left__details--price">{{painting.price}} zł</p>
            </div>
          </div>
          <p v-if="painting"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, velit natus. Sint, voluptate minus nihil optio magni cupiditate tempore beatae eligendi fugiat ipsum! Incidunt similique dicta, iste totam officiis dolorem!</p>
        </div>
        <form class="box__details" ref="form" @submit="send">
          <div class="box__header--desktop">
            <h2>{{painting ? 'Zamówienie' : 'Kontakt'}}</h2>
          </div>

          <div class="box__details__personal">
            <div class="box__details__name">
              <input placeholder="Imię" type="text" v-model="name" name="user_name" id="name" required>
              <label for="name">Imię</label>
            </div>
            <div class="box__details__mail">
              <input placeholder="Adres e-mail" v-model="email" type="email" id="mail" name="user_email" required>
              <label for="mail" >Adres e-mail</label>
            </div>
          </div>

          <textarea placeholder="Wiadomość" v-model="message" name="message" rows="15" required></textarea>
          <label>Wiadomość</label>
          <div class="button__send">
            <button type="submit">
              Wyślij
            </button>
          </div>
        </form>
        <Modal>
          <recaptcha
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"/>
          <div>
              This site is protected by reCAPTCHA and the Google <br>
              <a href="https://policies.google.com/privacy">Privacy Policy</a> and 
              <a href="https://policies.google.com/terms">Terms of Service</a> apply
          </div>
        </Modal>
  </div> 
</template>

<script>
import Modal from '~/components/Common/Modal.vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  props: {
      painting:{
          type: Object,
          required: false
      }
  },
  methods: {
      send(e) {
        e.preventDefault();
        this.$store.commit('openModal');
      },
      onError() {
          this.$store.commit('closeModal');
          this.$notifier.showMessage({content: 'Wystąpił błąd. Spróbuj ponownie później'});
      },
      async onSuccess() {
          const message = this.createMessage();
          await this.$axios.$post('/mail/send', message)
            .then(() => {
              setTimeout(() => {
                  this.$store.commit('closeModal');
                  this.$notifier.showMessage({content: 'Wiadomość została wysłana. Dziękujemy za zainteresowanie!'});
              }, 900);
            })
            .catch(error => {
              this.$store.commit('closeModal');
              this.$notifier.showMessage({content: 'Wystąpił błąd. Spróbuj ponownie później'});
            })
      },
      onExpired() {
          this.$store.commit('closeModal');
          this.$notifier.showMessage({content: 'Wystąpił błąd. Spróbuj ponownie później'});
      },
      createMessage() {
        return {
          category: this.painting ? this.painting.category : this.painting,
          email: this.email,
          message: this.message,
          name: this.name,
          painting: this.painting ? this.painting.title : this.painting,
          subject: this.painting ? 'ORDER' : 'CONTACT'
        }
      }
  },
  computed:{
    orderMessage() {
      return `Dzień dobry, \njestem zainteresowana/ny obrazem "${this.painting.title}". \n\nProszę o kontakt. \n\nPozdrawiam`
    },
    paintingCategory() {
      const category = this.painting.category.toLowerCase();

      switch(category) {
        case 'obrazy': {
          return 'obrazu';
        }
        case 'zakładki': {
          return 'zakładki';
        }
        case 'metryczki': {
          return 'metryczki';
        }
        case 'zamówienia indywidualne': {
          return 'zamówienia idywidualnego';
        }
        default: {
          return ''
        }
      }
    },
    isPaintingAvailable() {
        return this.painting && this.painting.mainImage && this.painting.mainImage.small
    }
  },
  mounted() {
    if(this.painting) {
        this.message = this.orderMessage;
    }
  }
}
</script>

<style lang="scss" scoped>

  h2 {
      font-size: 2.6rem;
      font-weight: 300;
      padding: 0 0 .1rem 0;
  }

  p {
    font-size: 1.8rem;
    text-align: justify;
  }

  .box {
    margin: 5rem auto 5rem auto;
    width: 80%;
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

    &__left {

      p {
        margin-top: 2rem;
        width: 35rem;

        @include respond(tab-port) {
          width: 25rem;
        }

        @include respond(tab-port-small) {
          width: 72vw;
        }
      }

    &__details {
      min-height: 100%;
      min-width: 35rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba($color-white, 0.8);

      &--title {
        font-family: $font-primary-sc;
        font-size: 2rem;
      }

      &--price {
        font-size: 2rem;
      }

      p {
        margin: 1rem 0 1rem 1rem;
        padding-right: 2rem;
      }

    }
    
    &__img {
        min-height: 35rem;
        max-height: 35rem;
        min-width: 35rem;
        max-width: 35rem;
        background-color: $color-secondary-light;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        h2 {
        text-align: center;
        color: $color-white;
        font-size: 6rem;
        font-family: $font-secondary;
        }

        @include respond(tab-port) {
            max-width: 25rem;
            max-height: 25rem;
            min-width: 25rem;
            min-height: 25rem;

            h2 {
                font-size: 4rem;
            }
        }

        @include respond(tab-port-small) {
            max-width: 72vw;
            max-height: 72vw;
        }
      }
    }

    &__details {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        margin-left: 10rem;
        font-family: inherit;

        p {
          margin-left: 2.5%;
        }

        label {
          font-size: 1.5rem;
          transition: all .3s;
          align-self: center;
        }
        
        textarea {
          resize: none;
          overflow: hidden;
          max-height: 19rem;
          width: 95%;
          align-self: center;

            @include respond(tab-land) {
                max-height: 16rem;
            }

            @include respond(tab-port-small) {
                max-height: 25rem;
            }

            &:not(:empty) {
                text-align: left;
            }
        }

        input {
          width: 90%;
          text-align: center;
        }

        textarea,
        input {
          outline: none;
          margin-top: 4rem;
          border: transparent;
          border-bottom: 1px solid $color-primary;
          opacity: 0.4;
          transition: all .5s;
          font-family: inherit;
          font-size: 2rem;
          flex: 1 1 50%;
          padding-bottom: .5rem;

            @include respond(tab-land) {
                margin-top: 2rem;
            }

            @include respond(phone) {
                // width: 100%;
            }

            &::placeholder {
                text-align: center;
                font-family: $font-primary;
            }

            &:focus {
                width: 100%;
                outline: none;
                opacity: 1;
            }
        }

      textarea:placeholder-shown + label,
      input:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
      }

      @include respond(tab-port-small) {
          margin: 0;
          padding-top: 5rem;
      }

      &__personal {
        display: flex;
        justify-content: space-between;

        @include respond(tab-land) {
            flex-flow: column;
        }

        * {
          display: flex;
          flex-flow: column;
          align-items: center;
          flex: 1 1 50%;
        }
      }
    }
  }
    
    .button__send {
      align-self: flex-end;
      width: 30%;
      
      @include respond(tab-port-small) {
        width: 100%;
      }
    
      button {
        border: 1px solid $color-primary;
        outline: none;
        padding: 1.5rem 0;
        margin: 5rem 0;
        background-color: $color-primary;
        color: $color-white;
        font-family: $font-primary-sc;
        font-size: 1.5rem;
        letter-spacing: 1px;
        transition: all .5s;
        text-align: center;
        width: 100%;

        &:hover {
          cursor: pointer;
          background-color: $color-white;
          color: $color-primary;

          @include respond(phone) {
            background-color: $color-primary;
            color: $color-white;
          }
        }

        &:active {
          background-color: $color-primary;
          color: $color-white;

          @include respond(phone) {
            background-color: $color-white;
            color: $color-primary;
          }
        }
    }
}
</style>