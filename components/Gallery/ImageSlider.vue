<template>
    <div class="slider">
        <div class="slider__box" :class="{'slider__box--fullscreen': fullScreen}">
            <div class="slider__image" 
            :class="{'slider__image--current': currentImage === image}" 
            v-for="image in images" 
            :key="image" 
            :style="getImageUrl(image)"
            @click="toggleFullScreen"/>
        </div>
        <div class="slider__nav" :class="{'slider__nav--fullscreen': fullScreen}">
            <div class="slider__nav__icon__box">
                <svg class="slider__nav__icon" @click="changeImage(true)">
                    <use xlink:href="~/static/icons/sprite.svg#icon-chevron-thin-left"></use>
                </svg>
            </div>
            <div class="slider__nav__icon__box" v-if="!play" @click="playPause">
                <svg class="slider__nav__icon">
                    <use xlink:href="~/static/icons/sprite.svg#icon-controller-play"></use>
                </svg>
            </div>
            <div class="slider__nav__icon__box" v-if="play" @click="playPause">
                <svg class="slider__nav__icon">
                    <use xlink:href="~/static/icons/sprite.svg#icon-controller-paus"></use>
                </svg>
            </div>
            <div class="slider__nav__icon__box" @click="changeImage(false)">
                <svg class="slider__nav__icon">
                    <use xlink:href="~/static/icons/sprite.svg#icon-chevron-thin-right"></use>
                </svg>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentImage: '',
                currentIndex: 0,
                play: '',
                fullScreen: false
            }
        },
        props: {
            images: {
                type: Array,
                default: []
            },                
        },
        methods: {
            getImageUrl(image) {
                return `background-image: url("${image}");`
            },
            changeImage(previous) {
                if(this.play) {
                    this.playPause();
                }
                if(previous) {
                    this.currentIndex++;
                    if(this.currentIndex > (this.images.length - 1)) {
                        this.currentIndex = 0;
                    }
                    this.currentImage = this.images[this.currentIndex];
                } else {
                    this.currentIndex--;
                    if(this.currentIndex < 0) {
                        this.currentIndex = this.images.length - 1;
                    }
                    this.currentImage = this.images[this.currentIndex]; 
                }
            },
            toggleFullScreen() {
                this.fullScreen = !this.fullScreen;
            },
            setIndex() {
                this.currentIndex++;
                if(this.currentIndex > (this.images.length - 1)) {
                    this.currentIndex = 0;
                }
                this.currentImage = this.images[this.currentIndex];
            },
            playPause() {
                if(!this.play) {
                    this.setIndex();
                    this.play = setInterval(() => {
                        this.setIndex();
                    }, 3000);
                } else {
                    clearInterval(this.play);
                    this.play = '';
                }
            }
        },
        mounted() {
            this.playPause();
            this.currentImage = this.images[0];
        }
    }
</script>

<style lang="scss" scoped>

.slider {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__box {
        width: 50rem;
        height: 50rem;
        background-color: $color-grey-light;
        position: relative;

        @include respond(tab-land) {
            width: 45rem;
            height: 45rem;
        }
        
        @include respond(tab-port) {
            width: 35rem;
            height: 35rem;
        }

        @include respond(tab-port-small) {
            width: 72vw;
            height: 72vw;
        }

        &--fullscreen {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left:0;
            background-color: $modal-background;
            z-index: 99999;
        }


    }

    &__image {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity .5s ease-out;

        &--current {
            opacity: 1;
        }
    }

    &__nav {
        width: 40%;
        height: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;

        &--fullscreen {
            width: 20%;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 999999;
        }

        &__icon {
            fill: $color-grey-medium;
            height: 2rem;
            width: 2rem;

            &__box {
                background-color: rgba($color-grey-light, 0.8);
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover{
                    background-color: rgba($color-grey, 0.8);

                    :first-child {
                        fill: $color-primary;
                    }
                }
            }
        }
    }

}

</style>