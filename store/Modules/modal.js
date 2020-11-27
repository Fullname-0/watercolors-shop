const modal = {
    state: {
        showModal: false,
    },
    mutations: {
        openModal (state) {
            state.showModal = true;
        },
        closeModal (state) {
            state.showModal = false;
        }
    },
    getters: {
        isModalOpen (state) {
            return state.showModal;
        }
    }
}

export default modal;