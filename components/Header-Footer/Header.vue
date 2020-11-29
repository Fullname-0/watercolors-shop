<template>
  <nav class="header" id="header">
        <Logo/>
        <img src="~/static/icons/menu.svg" alt="Menu button" class="header__drawer-button" @click="handleDrawer">
        <div class="header__list__container" :class="{'header__list__container--expanded' : $store.getters.isDrawerExpanded}" @click="handleDrawer"> 
            <ul class="header__list" :class="{'header__list--expanded' : $store.getters.isDrawerExpanded}">
                <DropMenu/>
                <li><nuxt-link to='/about' exact>O mnie</nuxt-link></li>
                <li><nuxt-link to='/contact' exact>Kontakt</nuxt-link></li>
                <!--
                <li>
                    <nuxt-link to='/basket' exact>Koszyk</nuxt-link>
                    <span class="header__list__notification">8</span>
                </li>
                -->
            </ul>
        </div>
  </nav>
</template>

<script>
    import Logo from '~/components/Common/Logo.vue';
    import DropMenu from '~/components/Header-Footer/DropMenu.vue';

    export default {
        data() {
            return {
                dropMenu: false
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
                flex-direction: column;
                padding: 20% 0;
                justify-content: space-around;
                align-items: center;
                font-family: $font-primary;
                margin-left: 1rem;
                right: -100%;
                width: 30rem;
                height: 100%;
                background-color: $color-white;
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
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color-white, 0.6);
                    z-index: 4000;
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
                }

                &::before {
                    @include link-underscore;

                    transform: scaleX(0);
                    transform-origin: 100% 50%;
                    transition: transform .5s cubic-bezier(.28,.38,0,.81);

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
                }
            }
        } 

  }

    @include drop-menu-animation;

</style>