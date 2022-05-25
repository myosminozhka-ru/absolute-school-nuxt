export default {
  server: {
    host: '0', // default: localhost
    port: process.env.NODE_ENV === 'dev' ? 3000 : 80 // default: 3000
  },
  router: {
    // base: '/absolute-school-nuxt/',
    middleware: ['auth'],
  },
  generate: {
    fallback: true,
    dir: 'dist'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Школа Абсолют - интернет-магазин для учащихся',
    description: 'Интернет-магазин школы Абсолют в городе Серпухов',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Интернет-магазин школы Абсолют в городе Серпухов' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/absolute-school-nuxt/main_icon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/introjs.js', mode: 'client' },
    '~/plugins/axios.js'
    // { src: '~/plugins/tour.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    [
      '@nuxtjs/stylelint-module',
      {
        fix: true,
      },
    ],
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
        refreshOnResize: true,
      },
    ],
    'nuxt-vuex-localstorage',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],
  toast: {
    position: 'top-left',
    duration: 6000,
    keepOnHover: true,
    theme: 'outlined',
    className: 'osm-toast',
    action: {
      text: 'Закрыть',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },
  styleResources: {
    scss: ['./assets/scss/helpers/*.scss'],
  },

  axios: {
    baseURL: process.env.NODE_ENV === 'dev' ? 'https://one.kutuzovv.ru/local/api/site/' : 'https://api.absolute-shop.ru/api/site/',
    withCredentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Школа Абсолют - интернет-магазин для учащихся',
      short_name: 'Школа АБСОЛЮТ',
      background_color: '#fff9e4',
      theme_color: '#fff9e4',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
