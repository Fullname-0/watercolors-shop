<template>
<div class="container">
    <h2>{{ loadedProduct.title }}</h2>
    <div class="box">
        <img src="~/static/img/pic1.jpg" :alt="'Photo number ' + loadedProduct.id">
        <div class="box__details">
            <p>{{ loadedProduct.description }}</p>
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
export default {
    data() {
        return {
            loadedProduct: []
        }
    },
    asyncData(context) {
        return $axios.$get('/catalogue/paintings/' + context.params.id)
            .then(res => {
                return {
                    loadedProduct: res.data
                }
            })
            .catch(e => context.error(e));
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    & h2 {
        font-size: 26px;
        font-weight: 300;
    }

    & .box {
        width: 80%;
        display: flex;
        flex-direction: row;
        padding: 4%;
        justify-content: center;
        align-content: center;

        & img {
            height: 400px;
            width: 500px;
        }

        &__details {
            width: 60%;
            display: flex;
            flex-direction: column;
            padding: 4% 0 0 8%;

            & p {
                text-align: justify;
                font-size: 18px;
                font-weight: 300;
            }

            & ul {
                list-style-type: none;
                width: 90%;
                padding-top: 8%;
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
