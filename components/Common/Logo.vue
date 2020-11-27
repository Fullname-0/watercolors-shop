<template>
    <div class="logo">
        <img v-if="!footer" class="logo" src="~/static/img/logo.png" alt="Logo sklepu" @click="logoClick">        
        <picture v-if="footer" @click="logoClick">
            <source  class="logo" media="(max-width: 750px)" srcset="~/static/img/logo-small.png"> 
            <source class="logo" media="(min-width: 751px)" srcset="~/static/img/logo.png"> 
            <img class="logo" src="~/static/img/logo-small.png" alt="logo"> 
        </picture>
    </div>
</template>

<script>
    export default {
        props: {
            footer: {
                type: Boolean,
                default: false
            }
        },
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
    .logo {
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }

</style>