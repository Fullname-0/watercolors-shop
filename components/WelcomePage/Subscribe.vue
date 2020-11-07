<template>
      <div class="subscribe-box">
          <a href="https://www.instagram.com/mojeakwarele/" target="_blank" class="subscribe-box__instagram">
              <h3>Instagram</h3>
              <h4>@mojeakwarele</h4>
          </a>
          <div class="subscribe-box__newsletter">
              <h3>Newsletter</h3>
              <p>dołącz, jeżeli lubisz niespodzianki.</p>
          </div>
          <div class="subscribe-box__input">
                <input id="subscribe" type="email" placeholder="Twój e-mail">
          </div>
          <div class="subscribe-box__button">
              <button type="submit" value="Subscribe">Dołącz</button>
          </div>
      </div>
</template>

<style lang="scss" scoped>
    .subscribe-box {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr repeat(2, 1.5fr) 1fr;
        justify-items: center;
        align-items: center;
        padding: 10rem 0 10rem 0;
        margin: auto;

        &__instagram {
            text-decoration: none;
            color: currentColor;
            width: 100%;
            border-right: 1px solid #000;
            
            & h3 {
                @include h3-to-subscribe;
            }

            & h4 {
                @include h4-and-p-to-subscribe;

            }

            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }

        &__newsletter {
            padding: 2rem;

            & h3 {
                @include h3-to-subscribe;
            }

            & p {
                @include h4-and-p-to-subscribe;
            }
        }

        &__input {
            justify-self: stretch;
            display: flex;

            & input {
                width: 75%;
                margin: auto;
                border: none;
                border-bottom: 1px solid $color-black;
                z-index: 1;
                padding: .8rem;
                opacity: 0.4;
                transition: all .3s;
                font-family: inherit;
                font-size: 1.5rem;
                text-align: center;


                &:hover {
                    cursor: pointer;
                }
                
                &:focus {
                    width: 87%;
                    outline: none;
                    opacity: 1;
                }
            }
        }

        &__button {
            justify-self: end;
            width: 80%;

            & button {
                width: 100%;
                border: 1px solid $color-black;
                outline: none;
                padding: 1.5rem 2.5rem;
                background-color: $color-black;
                color: $color-white;
                font-family: 'Josefin Sans', sans-serif;
                font-size: 1.2rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all .5s;

                &:hover {
                    cursor: pointer;
                    background-color: $color-white;
                    color: $color-black;
                }

                &:active {
                    background-color: $color-black;
                    color: $color-white;
                }
            }
        }
    }

</style>