export default {
  router: {
    base: '/absolute-school-nuxt/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'absolute-school',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   { src: '~/plugins/forward-set-cookie.js', mode: 'server' },
  // ],

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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
  ],
  toast: {
    position: 'bottom-right',
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
    baseURL: 'https://viessmann-otoplenie.ru/local/api/site/',
    withCredentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Школа АБСОЛЮТ',
      background_color: '#fff4ce',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
