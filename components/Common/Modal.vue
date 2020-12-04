<template>
    <transition>
        <div class="modal-background" @click="close" v-if="$store.getters.isModalOpen">
            <div class="modal">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$store.commit('closeModal');
            }
        },   
    }
</script>

<style lang="scss" scoped>

    .modal-background{
        position: fixed;
        top: 0;
        left: 0;
        background-color: $modal-background;
        width: 100%;
        height: 100%;
        z-index: 999;
        display: flex;
    }

    .modal {
        background-color: $color-grey-light;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        margin: auto;
        z-index: 9991;
        box-shadow: $main-shadow;
    }

    .v-enter,
    .v-leave-to {
        opacity: 0;
    }

    .v-enter-to,
    .v-leave {
        opacity: 1;
    }

    .v-enter-active, 
    .v-leave-active{
        transition: opacity .2s ease;
    }

</style>