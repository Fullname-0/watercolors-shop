<template>
    <nuxt-link :to="link" class="image-tile">
        <img :src="imageUrl" alt="Category tile">
        <h3>{{ title }}</h3>
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            imageUrl: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            }
        }   
    }
</script>

<style lang="scss" scoped>

    .image-tile {
        position: relative;
        height: 30rem;
        width: 100%;
        overflow: hidden;

        @include respond(phone) {
            height: 20rem;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(85%);
            transform: scale(1);
            transition: all .8s cubic-bezier(.27,.53,.63,.95);

            &:hover {
                cursor: pointer;
                filter: brightness(65%);
                transform: scale(1.05);
            }
        }

        & h3 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3.6rem;
            color: $color-white;
            font-weight: 300;
            pointer-events: none;
        }
    }

</style>