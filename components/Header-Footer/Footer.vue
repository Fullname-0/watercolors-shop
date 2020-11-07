<template>
  <footer>
        <div class="footer-box">
            <div class="footer-box__menu">
                <ul>
                    <li><nuxt-link to='/contact' exact>Kontakt</nuxt-link></li>
                    <li><nuxt-link to='/' exact>Polityka prywatności</nuxt-link></li>
                    <li><nuxt-link to='/' exact>Regulamin</nuxt-link></li>
                </ul>
            </div>
            <div class="footer-box__social">
                    <img class="menu__logo" src="~/static/img/loginio.jpg" alt="Logo sklepu" @click="logoClick">        
            </div>
            <div class="footer-box__description">
                <p>&#169; Moje akwarele</p>
                <p>Wszystkie prawa zastrzeżone</p>
            </div>
        </div>
  </footer>
</template>

<script>
    export default {
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
    footer {
        border-top: 1px solid $color-grey-light;
    }

    .footer-box {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding: 3rem 0 3rem 0;
        font-weight: 300;

        &__menu ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            li {
                list-style: none;

                > * {
                    text-decoration: none;
                    font-size: 1.5rem;
                    color: $color-black;
                }

                &:hover {
                    cursor: pointer;
                    opacity: 0.7;
                }
            }
        }

        &__social {
            padding: 20px;

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

            & p {
                line-height: 1.6;
            }
        }
    }
</style>
