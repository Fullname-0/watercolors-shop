import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            data: '',
            drawerExtended: false
        },
        mutations: {
            setData(state, data) {
                state.data = data;
            },
            changeDrawerState(state) {
                state.drawerExtended = !state.drawerExtended;
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                await context.$axios.$get('catalogue/paintings/page/1')
                    .then(res => {
                        vuexContext.commit('setData', res);
                    })
                    .catch( e => context.error(e));
            },
            setData(vuexContext, data) {
                vuexContext.commit('setData', data);
            }
        },
        getters: {
            paintings(state) {
                return state.data.paintings;
            },
            isDrawerExpanded(state) {
                return state.drawerExtended;
            }
        }
    })
}

export default createStore