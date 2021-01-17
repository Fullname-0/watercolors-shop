<template>
      <form class="subscribe-box" @submit="joinNewsletter">
            <a href="https://www.instagram.com/mojeakwarele/" target="_blank" class="subscribe-box__instagram">
                <h3>Instagram</h3>
                <h4>@mojeakwarele</h4>
            </a>
            <div class="subscribe-box__newsletter">
                <h3>Newsletter</h3>
                <p>Dołącz do świata Moich Akwareli</p>
            </div>
            <div class="subscribe-box__input">
                <input type="email" v-model="email" placeholder="Twój e-mail" required>
            </div>

            <div class="subscribe-box__button">
                <button type="submit">Dołącz</button>
            </div>
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
      </form>
</template>

<script>
    import Modal from '~/components/Common/Modal.vue';

    export default {
        data() {
            return {
                email: '',
            }
        },
        methods: {
            joinNewsletter (e) {
                e.preventDefault();
                this.$store.commit('openModal');
            },
            onError() {
                this.$store.commit('closeModal');
                this.$notifier.showMessage({content: 'Wystąpił błąd. Spróbuj ponownie później'});
            },
            async onSuccess() {
                await this.$axios.$post('/mail/newsletter/join?email=' + this.email)
                    .then(() => {
                        setTimeout(() => {
                            this.$store.commit('closeModal');
                            this.$notifier.showMessage({content: 'Dziękujemy za dołączenie do newslettera'});
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
            }
        },   
    }
</script>

<style lang="scss" scoped>
    .subscribe-box {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr repeat(2, 1.5fr) 1fr;
        justify-items: center;
        align-items: center;
        padding: 10rem 0 10rem 0;
        margin: auto;

        @include respond(tab-port) {
            width: 60%;
            margin: auto;
            grid-template-columns: 1fr;
            padding: 5rem 0 5rem 0;
            gap: 2rem;
        }

        &__instagram {
            text-decoration: none;
            color: currentColor;
            width: 100%;
            border-right: 1px solid #000;

            @include respond(tab-port) {
                border-right: none;
                padding: 2rem;
                border-bottom: 1px solid $color-grey;
            }
            
            h3,
            h4 {
                @include respond(tab-port) {
                    text-align: center;
                }
            }

            h3 {
                @include h3-to-subscribe;
            }

            h4 {
                @include h4-and-p-to-subscribe;
            }

            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }

        &__newsletter {
            padding: 2rem;

            h3,
            h4 {
                @include respond(tab-port) {
                    text-align: center;
                }
            }

            & h3 {
                @include h3-to-subscribe;
            }

            & p {
                @include h4-and-p-to-subscribe;
                text-align: center;
            }
        }

        &__input {
            justify-self: stretch;
            display: flex;

            & input {
                width: 75%;
                margin: auto;
                border: none;
                border-bottom: 1px solid $color-primary;
                z-index: 1;
                padding: .8rem;
                opacity: 0.4;
                transition: all .3s;
                font-family: inherit;
                font-size: 1.5rem;
                text-align: center;

                @include respond(tab-port) {
                    justify-self: center;
                    width: 100%;
                }


                &:hover {
                    cursor: pointer;
                }
                
                &:focus {
                    width: 87%;
                    outline: none;
                    opacity: 1;

                    @include respond(tab-port) {
                        width: 100%;
                    }
                }
            }
        }

        &__button {
            justify-self: end;
            width: 80%;

                @include respond(tab-port) {
                    justify-self: center;
                    width: 100%;
                    margin: 3rem 0;
                }

            & button {
                width: 100%;
                border: 1px solid $color-primary;
                outline: none;
                padding: 1.5rem 2.5rem;
                background-color: $color-primary;
                color: $color-white;
                font-family: $font-primary-sc;
                font-size: 1.5rem;
                letter-spacing: 1px;
                transition: all .5s;

                @include respond(phone) {
                    transition: all .1s;
                }

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
    }

</style>