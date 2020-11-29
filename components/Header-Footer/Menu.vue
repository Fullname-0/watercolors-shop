<template>
    <div class="menu-container">
        <div class="menu__logo">
            <Logo/>
        </div>
        <ul class="menu__list">
            <li><nuxt-link to='/gallery' exact>Galeria</nuxt-link></li>
            <li><nuxt-link to='/about' exact>O mnie</nuxt-link></li>
            <li><nuxt-link to='/contact' exact>Kontakt</nuxt-link></li>
            <li>
                <nuxt-link to='/basket' exact>Koszyk</nuxt-link>
                <span class="menu__list__notification">8</span>
            </li>
        </ul>
</template>

<script>
    import Logo from '~/components/Common/Logo.vue';

    export default {
        components: {
            Logo
        }   
    }
</script>

<style lang="scss" scoped>
    .menu {
        &-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 50;
        }

        &__logo {
            height: 10rem;
            width: 20rem;
            cursor: pointer;
        }

        &__list {
            position: relative;
            display: flex;
            font-size: 1.5rem;
            font-weight: 300;
            list-style-type: none;

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
</style>