import Vuex from 'vuex';
import snackbar from './Modules/snackbar';
import modal from './Modules/modal';
import drawer from './Modules/drawer';

const createStore = () => {
    return new Vuex.Store({
        state: {
            data: '',
        },
        mutations: {
            setData(state, data) {
                state.data = data;
            },
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                await context.$axios.$get('/catalogue/page/1')
                    .then(res => {
                        vuexContext.commit('setData', res);
                    })
                    .catch( e => console.log(e));
            },
            setData(vuexContext, data) {
                vuexContext.commit('setData', data);
            }
        },
        getters: {
            paintings(state) {
                return state.data.paintings;
            },

        },
        modules: {
            snackbar,
            modal,
            drawer
        }
    })
}

export default createStore