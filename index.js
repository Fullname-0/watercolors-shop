import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            paintings: [],
            tags:[],
            menu: [
                {
                    icon: 'mdi-email-outline',
                    title: 'Newsletter',
                    to: '/newsletter'
                },
                {
                    icon: 'mdi-image-outline',
                    title: 'Obrazy',
                    to: '/obrazy'
                },
                {
                    icon: 'mdi-account-multiple',
                    title: 'Subskrybenci',
                    to: '/subskrypcja'
                },
                {
                    icon: 'mdi-email-newsletter',
                    title: 'Templatki',
                    to: '/formy'
                },
            ]
        },
        mutations: {
            setPaintings(state, paintings) {
                state.paintings = paintings;
            },
            setTags(state, paintings) {
                paintings.forEach(image => {
                    image.tags.forEach(tag => {
                        if(!state.tags.includes(tag)) {
                            state.tags.push(tag);
                        }
                    });
                });
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                await context.$axios.$get('/catalogue/paintings')
                    .then(res => {
                        vuexContext.commit('setPaintings', res);
                        vuexContext.commit('setTags', res);
                    })
                    .catch( e => console.log(e));

            },
            async getImages(vuexContext, context) {
                await this.$axios.$get('/catalogue/paintings')
                    .then(res => {
                        vuexContext.commit('setPaintings', res);
                        vuexContext.commit('setTags', res);
                    })
                    .catch( e => console.log(e));
            }
        },
        getters: {
            paintings(state) {
                return state.paintings;
            },
            paintingById: (state) => (id) => {
                return state.paintings.find(p => p.id == id);
            },
            tags(state) {
                return state.tags;
            },
            menu(state) {
                return state.menu;
            }
        }
    })
}

export default createStore