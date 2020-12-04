<template>
    <div>
        <div v-if="!footer" class="header__logo" :class="{'header__logo--mini':mini}" @click="logoClick">
            Moje Akwarele
        </div>
        <picture v-if="footer" @click="logoClick">
            <source  class="footer__logo" media="(max-width: 750px)" srcset="~/static/img/logo-small.png"> 
            <source class="footer__logo" media="(min-width: 751px)" srcset="~/static/img/logo.png"> 
            <img class="footer__logo" src="~/static/img/logo-small.png" alt="logo"> 
        </picture>
    </div>
</template>

<script>
    export default {
        props: {
            footer: {
                type: Boolean,
                default: false
            },
            mini: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            logoClick() {
                if($nuxt.$route.path === '/') {
                    this.$scrollTo('#header');
                } else {
                    this.$router.push('/');
                }
            }
        }   
    }
</script>

<style lang="scss" scoped>

    .header__logo {
        height: 7rem;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: .8rem;
        color: $color-primary;
        font-weight: 300;
        font-family: $font-primary-sc;
        cursor: pointer;

        @include respond(tab-port) {
            height: 5rem;
            font-size: 3.5rem;
        }

        @include respond(phone) {
            font-size: 2.5rem;
        }

        &--mini {
            font-size: 2.5rem;

            @include respond(tab-port-small) {
                font-size: 2rem;
            }

            @include respond(phone) {
                display: none;
            }
        }
    }

    .footer__logo {
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }

</style>