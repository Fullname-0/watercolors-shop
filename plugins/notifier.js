export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage ({ content = '' }) {
      store.commit('showMessage', { content })
    }
  })
}