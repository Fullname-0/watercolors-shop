<template>
    <footer v-if="isOpen">
        <p>
            W ramach naszej witryny stosujemy pliki cookies w&nbsp;celu świadczenia Państwu usług na&nbsp;najwyższym poziomie, 
            dostosowując serwis do&nbsp;Państwa indywidualnych potrzeb. Korzystanie z&nbsp;witryny bez zmiany ustawień dotyczących 
            cookies oznacza, że&nbsp;będą one zapisywane w&nbsp;Państwa urządzeniu końcowym. W&nbsp;każdym momencie możecie Państwo
            dokonać zmiany ustawień dotyczących cookies. Więcej szczegółów w&nbsp;naszej „Polityce prywatności”.
        </p>
        <div class="cookie__button">
            <button @click="close">Zamknij</button>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        getGDPR() {
            if (process.browser) {
                return localStorage.getItem("GDPR:accepted", true);
            } else {
                return false;
            }
        },
        close() {
            if (process.browser) {
                this.isOpen = false;
                localStorage.setItem("GDPR:accepted", true);
            }
        }
    },
    mounted() {
        if (!this.getGDPR() === true) {
            this.isOpen = true;
        }
    },
}
</script>


<style lang="scss" scoped>

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        padding: 5rem;

        display: flex;
        align-items: center;

        background-color: $color-white;
        border-top: 1px solid $color-grey;

        @include respond(phone) {
            flex-direction: column;
        }
    }

    p {
        font-size: 1.8rem;
        font-weight: 300;
        margin-right: 5rem;
        text-align: justify;

        @include respond(phone) {
            margin: 0;
        }
    }
        
    .cookie__button {
        justify-self: end;
        width: 30%;

        @include respond(phone) {
            margin-top: 5rem;
            width: 50%;
        }

        & button {
            width: 100%;
            border: 1px solid $color-primary;
            outline: none;
            padding: 1.5rem 2.5rem;
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
    }

</style>