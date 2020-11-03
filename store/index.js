import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            titlesPaintings: []
        },
        mutations: {
            setPaintings(state, images) {
                state.titlesPaintings = images;
                // return state.titlesPaintings.splice(0, 2);
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://mojeakwarele.pl/api/v1/catalogue/paintings/page/1')
                .then(res => {
                    const titles = res.data
                    vuexContext.commit('setPaintings', titles)
                })
                .catch( e => context.error(e));
            },
            setPaintings(vuexContext, images) {
                vuexContext.commit('setPaintings', images);
            }
        },
        getters: {
            titlesPaintings(state) {
                return state.titlesPaintings
            }
        }
    })
}

export default createStore
