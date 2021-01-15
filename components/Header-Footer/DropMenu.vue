<template>
    <li>
        <div class="main-button">
            <nuxt-link  to='/gallery' :event="' '" @click.native="dropMenu = !dropMenu">Galeria</nuxt-link>
            <svg class="icon" :class="{'icon--rotate': dropMenu, 'icon--mini': mini}">
                <use xlink:href="~/static/icons/sprite.svg#icon-chevron-small-down"></use>
            </svg>
        </div>
        <transition>
            <ul class="drop-menu" :class="{'drop-menu--mini': mini,'drop-menu--drawer': drawer}" v-if="dropMenu" v-on-clickaway="away">
                <li class="drop-menu__item" :class="{'drop-menu__item--drawer': drawer}"> 
                    <nuxt-link to='/galeria/obrazy'>Obrazy</nuxt-link>
                </li>
                <li class="drop-menu__item" :class="{'drop-menu__item--drawer': drawer}">
                    <nuxt-link to='/galeria/metryczki'>Metryczki</nuxt-link>
                </li>
                <li class="drop-menu__item" :class="{'drop-menu__item--drawer': drawer}">
                    <nuxt-link to='/galeria/zakladki'>Zakładki</nuxt-link>
                </li>
                <li class="drop-menu__item" :class="{'drop-menu__item--drawer': drawer}">
                    <nuxt-link to='/galeria/indywidualne'>Indywidualne</nuxt-link>
                </li>
                <li class="drop-menu__item" :class="{'drop-menu__item--drawer': drawer}">
                    <nuxt-link to='/galeria/wszystkie'>Wszystkie</nuxt-link>
                </li>
            </ul>
        </transition>
    </li>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        data() {
            return {
                dropMenu: false
            }
        },
        props: {
            mini: {
                type: Boolean,
                default: false
            },
            drawer: {
                type: Boolean,
                default: false
            }
        },
        mixins: [clickaway],
        methods: {
            away() {
                this.dropMenu = false;
            },
        },
        watch:{
            $route (to, from){
                this.dropMenu = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

    li {
        a:link,
        a:visited,
        a:active {
            text-decoration: none;
            color: $color-primary;
        }
    }

    .main-button {
        display: flex;
        align-items: center;

        @include respond(tab-port) {
            justify-content: center;
        }

        @media only screen and (min-width: 56.25em) {
            .active-link::before,
            .exact-link::before {
                @include link-underscore;
            }
        }

    }

    .drop-menu {
        position: absolute;
        top: 3rem;
        font-size: 1.8rem;
        font-weight: 300;
        padding: 0;
        margin-top: .5rem;
        list-style-type: none;
        background-color: $color-white;
        display: flex;
        z-index: -1;
        flex-direction: column;
        align-items: stretch;
        box-shadow: 0 .5rem .5rem $color-grey-dark;

        &--mini {
            font-size: 1.5rem;
            margin-top: 1rem;
            top: 2.5rem;
        }

        &--drawer{
            @include respond(tab-port-small) {
                top: 2rem;
                position: relative;
                align-items: center;
                background-color: transparent;
                z-index:1;
                box-shadow: none;
            }

            @include respond(phone) {
                top: 1rem;
            }
        }    



        &__item {

            &:hover {
                background-color: $color-grey-light;
            }

            &:last-child {
                margin-bottom: 1rem; 
            }

            a:link,
            a:visited,
            a:active {
                padding: 1rem 5rem 1rem 2rem;
                display: block;
                text-align: left;
            }

            &--drawer {

                @include respond(tab-port-small) {

                    &:hover {
                        background-color: transparent;
                    }

                    a:link,
                    a:visited,
                    a:active {
                        padding: 1rem 0;
                    }

                    a:active {
                        background-color: $color-secondary;
                    }

                }
            }
        }
    }

    @include drop-menu-animation;

    .icon {
        height: 1.9rem;
        width: 1.9rem;
        z-index: 3;
        fill: $color-primary;
        transform: scale(0.9);
        transition: all .2s ease-out;

        &--mini {
            top: 1rem;
        }

        &--rotate {
            transform: scale(0.9) rotateX(180deg);
        }

        @include respond(tab-land) {
            transform: scale(0.6);

            &--rotate {
                transform: translateY(.2rem) scale(0.6) rotateX(180deg);
            }
        }

    }

</style>