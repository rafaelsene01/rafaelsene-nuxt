import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rafael Sene',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/nuxt-ace-editor-plugin.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'pt',
        file: 'pt-BR.js',
      },
    ],
    lazy: true,
    langDir: 'languages/',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  //  Customize the progress-bar color

  loading: { color: '#1B76E8' },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
      },
    },
    // extend(config) {
    //   config.resolve.alias['@images'] = path.join(__dirname, './assets/images')
    // },
  },

  alias: {
    '@images': resolve(__dirname, './assets/images'),
  },
}
