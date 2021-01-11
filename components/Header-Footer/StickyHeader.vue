<template>
    <transition>
        <nav v-if="isExpanded" class="sticky-header">
            <div class="sticky-header-container">
                <Logo :mini="true"/>
                <ul class="sticky-header__list">
                    <DropMenu :mini="true"/>
                    <li><nuxt-link to='/omnie' exact>O mnie</nuxt-link></li>
                    <li><nuxt-link to='/kontakt' exact>Kontakt</nuxt-link></li>
                    <!--
                    <li>
                        <nuxt-link to='/basket' exact>Koszyk</nuxt-link>
                        <span class="sticky-header__list__notification">8</span>
                    </li>
                    -->
                </ul>
            </div>
        </nav>
    </transition>
</template>

<script>
    import Logo from '~/components/Common/Logo.vue';
    import DropMenu from '~/components/Header-Footer/DropMenu.vue';

    export default {
        data() {
            return {
                isExpanded: false,
            }
        },
        methods: {
            handleScroll () {
                if (process.client && !this.$store.getters.isDrawerExpanded) { 
                    this.isExpanded = window.scrollY >= 200;
                }
            }
        },
        mounted () {
            if (process.client) { 
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        destroyed () {
            if (process.client) { 
                window.removeEventListener('scroll', this.handleScroll);
            }
        },
        components: {
            Logo
        }   
    }
</script>

<style lang="scss" scoped>

    .sticky-header {
        position: fixed;
        transform: translateX(-5%);
        width: 100%;
        margin: 0;
        height: 5rem;
        background-color: $color-white;
        box-shadow: $main-shadow;
        margin-bottom: 2rem;
        z-index: 50;
        transition: all .5s;

        &-container {
            width: 72%;
            margin: auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 50;

            @include respond(tab-port-small) {
                width: 90%;
            }

            @include respond(phone) {
                justify-content: center;
            }
        }

        &__logo {
            height: 3rem;
            width: 12rem;
            cursor: pointer;
        }

        &__list {
            position: relative;
            display: flex;
            font-size: 1.7rem;
            font-weight: 300;
            list-style-type: none;

                @include respond(phone) {
                    width: 90%;
                    justify-content: space-between;
                    font-size: 1.8rem;
                }

                &__notification {
                    padding-top: .2rem;
                    font-size: 1rem;
                    height: 1.5rem;
                    width: 1.5rem;
                    border-radius: 50%;
                    background-color: $color-grey-dark;
                    color: $color-white;
                    position: absolute;
                    top: 1.2rem;
                    right: -1rem;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

            li {
                position: relative;

                @include respond(phone) {
                    align-self: center;
                    text-align: center;
                }

                &::before {
                    @include link-underscore;

                    transform: scaleX(0);
                    transform-origin: 100% 50%;
                    transition: transform .5s cubic-bezier(.28,.38,0,.81);
                }

                &:not(:last-child) {
                    margin-right: 5rem;
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

    .v-enter,
    .v-leave-to {
        transform: translateX(-5%) translateY(-5rem);
    }

    .v-enter-to,
    .v-leave {
        transform: translateX(-5%) translateY(0);
    }

    .v-enter-active, 
    .v-leave-active{
        transition: all .5s ease-out;
    }  

</style>