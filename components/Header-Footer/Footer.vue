<template>
  <footer>
        <div class="footer-box">
            <div class="footer-box__menu">
                <ul>
                    <li><nuxt-link to='/kontakt' exact>Kontakt</nuxt-link></li>
                    <li><nuxt-link to='/polityka-prywatności' exact>Polityka prywatności</nuxt-link></li>
                    <!-- <li><nuxt-link to='/' exact>Regulamin</nuxt-link></li> -->
                </ul>
            </div>
            <div class="footer-box__logo">
                    <Logo :footer="true"/>      
            </div>
            <div class="footer-box__description">
                <p>&#169; Moje akwarele</p>
                <p>Wszystkie prawa zastrzeżone</p>
            </div>
        </div>
  </footer>
</template>

<script>
    import Logo from '~/components/Common/Logo.vue';

    export default {

        components: {
            Logo
        },
    }
</script>


<style lang="scss" scoped>
    footer {
        border-top: 1px solid $color-grey;
    }

    .footer-box {
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        align-items: stretch;
        padding: 3rem 0 3rem 0;
        font-weight: 300;

        @include respond(tab-port) {
            width: 100%;
            padding: 1.5rem 0 1.5rem 0;
        }

        @include respond(phone) {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        &__menu ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @include respond(phone) {
                flex-direction: row;
                justify-content: center;
            }

            li {
                list-style: none;

                &:nth-child(2) {
                    padding-top: 1rem;

                    @include respond(phone) {
                        padding: 0 0;
                    }
                }

                &:nth-child(1) {

                    @include respond(phone) {
                        padding: 0 2rem;
                    }
                }

                > * {
                    text-decoration: none;
                    font-size: 1.5rem;
                    color: $color-primary;
                }

                &:hover {
                    cursor: pointer;
                    opacity: 0.7;
                }
            }
        }

        &__logo {
            padding: 2rem;
            justify-self: center;

                @include respond(tab-port) {
                    padding: 0;
                    width: 50%;
                }

                @include respond(tab-port-small) {
                    padding: 0;
                    width: 7rem;
                    height: 7rem;
                    align-self: center;
                }

                @include respond(phone) {
                    padding: 0;
                    width: 4rem;
                    height: 4rem;
                }

            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }

        &__description {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-end;
            font-size: 1.5rem;
            
            @include respond(phone) {
                align-items: center;
            }

            & p {
                line-height: 1.6;
            }
        }
    }
</style>
