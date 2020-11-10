export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'watercolors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;600;700&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Cormorant:wght@300;600;700&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;600;700&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

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
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 2000, easing: [0.16, 1, 0.3, 1] }],
  ],

  // Active class and routers
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-link',
  },

  axios: {
    baseURL: process.env.API_URL || 'https://mojeakwarele.pl/api/v1', // Used as fallback if no runtime config is provided
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      scss: [
        './assets/scss/mixins.scss',
        './assets/scss/variables.scss',
        './assets/scss/media.scss',
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
