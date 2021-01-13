import Vuex from 'vuex';
import snackbar from './Modules/snackbar';
import modal from './Modules/modal';
import drawer from './Modules/drawer';

const createStore = () => {
    return new Vuex.Store({
        state: {
            paintings: []
        },
        mutations: {
            setPaintings(state, paintings) {
                state.paintings = paintings;
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                await context.$axios.$get('/catalogue/paintings/')
                    .then(res => {
                        vuexContext.commit('setPaintings', res);
                    })
                    .catch( e => console.log(e));
            },
        },
        getters: {
            paintings(state) {
                return state.paintings.filter(painting => painting.mainImage && painting.mainImage.small);
            },
            tags(state) {
                return state.tags;
            },
            paintingByTitle: (state) => (title) => {
                return state.paintings.find(element => element.title === title); 
            }
        },
        modules: {
            snackbar,
            modal,
            drawer
        }
    })
}

export default createStore