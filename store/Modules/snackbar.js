const snackbar = {
    state: {
        content: '',
    },
    mutations: {
        showMessage (state, payload) {
            state.content = payload.content;
        }
    }
}

export default snackbar;