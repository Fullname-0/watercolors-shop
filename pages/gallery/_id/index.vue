<template>
<div class="container">
    <h2>{{ loadedProduct.title }}</h2>
    <div class="box">
        <client-only>
            <vue-flux
            :options="vfOptions"
            :images="productImages"
            :transitions="vfTransitions">
                <template v-slot:controls>
                    <flux-controls />
                </template>
                <template v-slot:pagination>
                    <flux-pagination />
                </template>
            </vue-flux>
        </client-only>
        <div class="box__details">
            <p>{{ loadedProduct.description }}.</p>
            <ul>
                <li>Wysokość: {{ loadedProduct.height }} cm</li>
                <li>Szerokość: {{ loadedProduct.width }} cm</li>
                <li>Cena: {{ loadedProduct.price }} zł</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { VueFlux, FluxControls, FluxPagination } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
import 'vue-flux/dist-ssr/vue-flux.css';

export default {
    data() {
        return {
            loadedProduct: [],
            loadedProductImages: [],
            productImages: [],
            vfTransitions: [ 'fade' ],
            vfOptions: {
                allowFullscreen: true,
                autoplay: true,
            },
        }
    },
    async asyncData({ params, $axios }) {
      const loadedProduct = await $axios.$get(`/catalogue/paintings/${params.id}`)
      return { loadedProduct }
    },
    components: {
        VueFlux,
        FluxControls,
        FluxPagination
    },
    mounted() {
        for (let i = 0; i < this.loadedProduct.images.length; i++) { 
            this.loadedProductImages.push(this.loadedProduct.images[i])
        }

        for (let n in this.loadedProductImages) {
            if (this.loadedProductImages[n].original) {
                this.productImages.push(this.loadedProductImages[n].original);
            }
        }
        
        console.log(this.productImages)
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        font-size: 26px;
        font-weight: 300;
        padding-top: 4%;
    }

    & .box {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 4%;
        justify-content: center;
        align-content: center;

        & .vue-flux {
            height: 400px;
            width: 500px;

            &:hover {
                cursor: pointer;
            }
        }

        &__details {
            width: 60%;
            display: flex;
            flex-direction: column;
            padding: 4% 0 0 8%;

            p {
                text-align: justify;
                font-size: 18px;
                font-weight: 300;
            }

            & ul {
                list-style-type: none;
                width: 90%;
                padding-top: 10%;
                font-size: 18px;
                font-weight: 300;

                & li:not(:first-child) {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
