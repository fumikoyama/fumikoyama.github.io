const DESC = 'Takafumi Koyama is a engineer from Hokkaido, Japan'
const TITLE = 'I am Takafumi Koyama.'
const URL = 'https://fumikoyama.github.io'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    headAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: DESC
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: TITLE
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: URL
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: TITLE
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: DESC
      }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.10.1/js/all.js',
        defer: true
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/clipscroll.js',
    '~/plugins/vue-scrollto',
    '~/plugins/particleSystem'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
