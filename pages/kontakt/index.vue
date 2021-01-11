<template>
  <div>
    <div class="container">
      <h1>Kontakt do mnie, proszę napisz!</h1>
      <div class="container__details">
        <ul>
          <li>Email: natalia@gmail.com</li>
          <li>Telefon: 888-888-888</li>
          <li>Toruń &hearts;</li>
        </ul>
      </div>
    </div>
    <form class="contact-form" @submit.prevent="sendEmail">
      <input class="input__name" placeholder="Imię" type="text" name="user_name" id="name" required>
      <label for="name" class="label__name">{{ name }}</label>
      <input class="input__mail" placeholder="Adres e-mail" type="email" id="mail" name="user_email" required>
      <label for="mail" class="label__mail">{{ email }}</label>
      <textarea class="input__textarea" placeholder="Wiadomość" name="message" rows="15" required></textarea>
      <label class="label__textarea">{{ message }}</label>
      <input class="button__send" type="submit" value="Wyślij">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Imię',
      email: 'Adres e-mail',
      message: 'Wiadomość',
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 3rem;

    @include respond(phone) {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  ul {
    border-left: 1px solid black;

    li {
      list-style-type: none;
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
}

.contact-form {
  display: flex;
  flex-flow: column;
  align-items: center;

    .label__name {
      font-size: 1.5rem;
      margin-top: 1rem;
      display: block;
      transition: all .3s;
    }

    .input__name {
      display: block;
      padding: 1.5rem;
      width: 30%;
      outline: none;
      margin-top: 2rem;
      border: transparent;
      border-bottom: 1px solid $color-primary;
      opacity: 0.4;
      text-align: center;
      transition: all .5s;

      @include respond(tab-port) {
        width: 35%;
      }

      @include respond(phone) {
        width: 55%;
      }

        &::placeholder {
          text-align: center;
          font-family: $font-primary;
          font-size: 1.7rem;
        }

        &:focus {
          width: 40%;
          outline: none;
          opacity: 1;

          @include respond(tab-port) {
            width: 45%;
          }

          @include respond(phone) {
            width: 65%;
          }
        }

        &:placeholder-shown + .label__name {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4rem);
        }
    }

    .label__mail {
      font-size: 1.5rem;
      display: block;
      transition: all .3s;
      margin-top: 1rem;
    }

    .input__mail {
      display: block;
      padding: 1.5rem;
      width: 30%;
      outline: none;
      margin-top: 2rem;
      border: transparent;
      border-bottom: 1px solid $color-primary;
      opacity: 0.4;
      text-align: center;
      transition: all .5s;

      @include respond(tab-port) {
        width: 35%;
      }

      @include respond(phone) {
        width: 55%;
      }

        &::placeholder {
          text-align: center;
          font-family: $font-primary;
          font-size: 1.7rem;
        }

        &:focus {
          width: 40%;
          outline: none;
          opacity: 1;

          @include respond(tab-port) {
            width: 45%;
          }

          @include respond(phone) {
            width: 65%;
          }
        }

        &:placeholder-shown + .label__mail {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4rem);
        }
    }

    .label__textarea {
        font-size: 1.5rem;
        margin-top: 1rem;
        display: block;
        transition: all .3s;
    }

    .input__textarea {
      display: block;
      padding: 1.5rem;
      width: 30%;
      outline: none;
      margin-top: 2rem;
      border: transparent;
      border-bottom: 1px solid $color-primary;
      opacity: 0.4;
      transition: all .5s;

      @include respond(tab-port) {
        width: 40%;
      }

      @include respond(phone) {
        width: 55%;
      }

        &:focus {
          width: 50%;
          outline: none;
          opacity: 1;

          @include respond(tab-port) {
            width: 60%;
          }

          @include respond(phone) {
            width: 65%;
          }
        }

        &::placeholder {
          text-align: center;
          font-family: $font-primary;
          font-size: 1.7rem;
        }

        &:placeholder-shown + .label__textarea {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-4rem);
        }
    }

    .button__send {
      border: 1px solid $color-primary;
      outline: none;
      padding: 1.5rem 4rem;
      margin: 5rem 0;
      background-color: $color-primary;
      color: $color-white;
      font-family: $font-primary-sc;
      font-size: 1.5rem;
      letter-spacing: 1px;
      transition: all .5s;

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
