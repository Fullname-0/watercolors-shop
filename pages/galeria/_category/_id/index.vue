<template>
    <div class="box">
        <div class="box__header--tab">
            <h2>{{ loadedProduct.title }}</h2>
            <p class="box__details__size">{{ loadedProduct.height }} x {{ loadedProduct.width }} cm</p>
        </div>
        <ImageSlider :images="productImages"/>
        <div class="box__details">
            <div class="box__header--desktop">
                <h2>{{ loadedProduct.title }}</h2>
                <p class="box__details__size">{{ loadedProduct.height }} x {{ loadedProduct.width }} cm</p>
            </div>
            <p class="box__details__paragraph">Cena: <b>{{ loadedProduct.price }} zł</b></p>
            <p class="box__details__paragraph">{{ loadedProduct.description }}.</p>
            <div class="box__button">
                <button @click="orderRequest">Zamów</button>
            </div>
            <p class="box__details__comment">To nie hurtownia tylko wykwintna galeria... Jak chcesz obraz to napisz maila, a ja się zastanowię</p>
        </div>
    </div>
</template>

<script>
import ImageSlider from '~/components/Gallery/ImageSlider.vue'

export default {
    data() {
        return {
            loadedProduct: [],
            productImages: [],
        }
    },
    methods: {
        orderRequest() {
            this.$router.push(`/zamówienie?title=${this.loadedProduct.title}`)
        }
    },
    async asyncData({ params, $axios }) {
        const loadedProduct = await $axios.$get(`/catalogue/paintings/${params.id}`)
        return { loadedProduct }
    },
    components: {
        ImageSlider
    },
    created() {
        this.productImages = this.loadedProduct.images.flatMap(img => img.original);
    }
}
</script>

<style lang="scss" scoped>

    h2 {
        font-size: 2.6rem;
        font-weight: 300;
        padding: 0 0 .1rem 0;
    }

    .box {
        width: 80%;
        margin: 10rem auto;
        display: flex;
        justify-content: space-between;
        align-content: center;

        &__header--tab {
            display: none;
        }

        @include respond(tab-port-small) {
            flex-direction: column;
            margin: 5rem auto;

            &__header--tab {
                display: block;
                margin-bottom: 2rem;
            }

            &__header--desktop {
                display: none;
            }
        }

        button {
            width: 100%;
            border: 1px solid $color-primary;
            margin-top: 5rem;
            outline: none;
            padding: 1rem 2.5rem;
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

        &__details {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 10rem;

            @include respond(tab-port-small) {
                margin: 0;
            }

            &__size {
                color: $color-secondary;
                font-size: 2rem;
                padding-top: 0;
                margin-top: -.9rem;
            }

            &__comment {
                text-align: justify;
                color: $color-grey-dark;
                font-size: 1.6rem;
                padding-top: .5rem;
            }

            &__paragraph {
                text-align: justify;
                padding: 2rem 0;
                font-size: 1.8rem;
            }

            & ul {
                list-style-type: none;
                width: 90%;
                padding: 10% 0;
                font-size: 1.8rem;
                font-weight: 300;

                li:not(:first-child) {
                    margin-top: 1rem;
                }
            }
        }
    }
</style>
