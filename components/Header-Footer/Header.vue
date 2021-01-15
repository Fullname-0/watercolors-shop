<template>
  <nav class="header" id="header">
        <Logo/>
        <input type="checkbox" v-model="drawer" class="menu__checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu__button" @click="handleDrawer">
            <span class="menu__icon">&nbsp;</span>
        </label>
        <transition>
            <ul class="header__list" :class="{'header__list--expanded':$store.getters.isDrawerExpanded}">
                <DropMenu :drawer="true"/>
                <li><nuxt-link to='/omnie' exact>O mnie</nuxt-link></li>
                <li><nuxt-link to='/kontakt' exact>Kontakt</nuxt-link></li>
                <!--
                <li>
                    <nuxt-link to='/basket' exact>Koszyk</nuxt-link>
                    <span class="header__list__notification">8</span>
                </li>
                -->
            </ul>
        </transition>
  </nav>
</template>

<script>
    import Logo from '~/components/Common/Logo.vue';
    import DropMenu from '~/components/Header-Footer/DropMenu.vue';

    export default {
        data() {
            return {
                dropMenu: false,
                drawer: false,
            }
        },
        methods: {
            away() {
                this.dropMenu = false;
            },
            handleDrawer() {
                this.$store.commit('changeDrawerState');
            }
        },
        watch:{
            $route (to, from){
                this.dropMenu = false;
                if(this.$store.getters.isDrawerExpanded) {
                    this.$store.commit('changeDrawerState');
                }
                this.drawer = false;
            }
        }, 
        components: {
            Logo
        },
    }
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1% 0;
        border-bottom: 1px solid $color-grey;

        &__drawer-button {
            display: none;

            @include respond(tab-port-small) {
                position: absolute;
                top: .5rem;
                right: 5%;
                display: block;
                padding: 1.5rem 0 1.5rem 1.5rem;
                width: 5rem;
                height: 5rem;
                z-index: 5000;

                &:hover {
                    opacity: 0.7;
                    cursor: pointer;
                }
            }
        }

        &__list {
            position: relative;
            display: flex;
            font-size: 2.2rem;
            font-weight: 300;
            list-style-type: none;
            z-index: 1;
            background-color: $color-white;

            @include respond(tab-port-small) {
                position: fixed;
                top: 0;
                right: -100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: $font-primary;
                margin-left: 1rem;
                width: 100%;
                height: 100%;
                background-color: $color-secondary-light;
                box-shadow: 0 1rem 2rem $color-primary;
                z-index: 5000;
                transition: all .5s;

                &--expanded {
                    right: 0;
                }

                &__container--expanded {
                    position: fixed;
                    top: 0;
                    right: 0;
                }
            }   

            &__notification {
                padding-top: .2rem;
                font-size: 1.1rem;
                height: 1.6rem;
                width: 1.6rem;
                border-radius: 50%;
                background-color: $color-grey-dark;
                color: $color-white;
                position: absolute;
                top: 1.7rem;
                right: -1rem;
                z-index: 3;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &__icon {
                height: 1.6rem;
                width: 1.6rem;
                position: absolute;
                top: 1.4rem;
                right: -1.2rem;
                z-index: 3;
                fill: $color-primary;
                transform: scale(0.8);
                transition: all .2s ease-out;

                &--rotate {
                    transform: translateY(.3rem) scale(0.8) rotateX(180deg);
                }
            }

            li {
                position: relative;
                text-align: center;

                @include respond(tab-port-small) {
                    font-size: 3rem;
                    padding: 2.5rem 0;
                }

                @include respond(phone) {
                    font-size: 2.5rem;
                    padding: 2rem 0;
                }

                &::before {
                    transform: scaleX(0);
                    transform-origin: 100% 50%;
                    transition: transform .5s cubic-bezier(.28,.38,0,.81);

                    @media only screen and (min-width: 56.25em) {
                            @include link-underscore;
                    }

                    @include respond(tab-port-small) {
                        transform: scaleX(1);
                    }
                }

                &:not(:last-child) {
                    margin-right: 5rem;

                    @include respond(tab-port-small) {
                        margin-right: 0;
                    }
                }

                &:hover {
                    cursor: pointer;
                    
                    &::before {
                        transform-origin: 0% 50%;
                        transform: scaleX(1);
                    }
                }

                & a:link,
                & a:visited,
                & a:active {
                    text-decoration: none;
                    color: $color-primary;
                }

                .active-link::before,
                .exact-link::before {
                    @include link-underscore;

                    @include respond(tab-port-small) {
                        background-color: transparent;
                    }
                }
            }
        } 
  }

    .menu {

        &__checkbox {
            display: none;
        }

        @include respond(tab-port-small) {

            &__button {
                z-index: 5001;
                margin-top: 1.2rem;
                cursor: pointer;
            }
            
            &__checkbox:checked ~ &__background {
                transform: scale(80);
            }

            &__checkbox:checked ~ &__nav {
                opacity: 1;
                width: 100%;
            }

            &__icon {
                position: relative;

                &,
                &::before,
                &::after {
                    width: 3rem;
                    height: 1px;
                    background-color: $color-grey-dark;
                    display: inline-block;
                 
                    @include respond(phone) {
                        width: 2.5rem;
                        height: 1px;
                    }
                } 

                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    transition: all .2s;
                }

                &::before {
                    top: -0.8rem;
                }
                
                &::after {
                    top: 0.8rem
                }
            }

            &__checkbox:checked + &__button &__icon {
                background-color: transparent;
                position: fixed;
                                top: 3rem;
                right: 5%;
            }
            
            &__checkbox:checked + &__button &__icon::after {
                transform: rotate(135deg);
                top: 0;
            }

            &__checkbox:checked + &__button &__icon::before {
                transform: rotate(-315deg);
                top: 0;
            }
        }
    }

    @include drop-menu-animation;

    @include respond(tab-port-small) {
        .v-enter,
        .v-leave-to {
            transform: translateX(100%);
        }

        .v-enter-to,
        .v-leave {
            transform: transalteX(0);
        }

        .v-enter-active, 
        .v-leave-active{
            transition: transform .7s ease-out;
        }
    }

</style>