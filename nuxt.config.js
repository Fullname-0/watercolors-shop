export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'watercolors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;600;700&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/base.scss',
    '~/assets/scss/menu.scss',
    '~/assets/scss/firstPageGallery.scss',
    '~/assets/scss/mainPage.scss',
    '~/assets/scss/subscribe.scss',
    '~/assets/scss/footer.scss',
  ],

  layout: 'default',
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Active class and routers
  router: {
    linkActiveClass: 'active-link',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      scss: [
        './assets/scss/mixins.scss',
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
