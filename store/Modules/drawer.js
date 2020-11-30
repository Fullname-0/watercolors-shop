const drawer = {
    state: {
        drawerExpanded: false
    },
    mutations: {
        changeDrawerState(state) {
            state.drawerExpanded = !state.drawerExpanded;
        }
    },
    getters: {
        isDrawerExpanded(state) {
            return state.drawerExpanded;
        }
    }
}

export default drawer;