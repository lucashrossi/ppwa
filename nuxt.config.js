import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  // title: 'Buck Semillas',
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    titleTemplate: '%s || ' + 'Buck Semillas',
    title: 'Buck Semillas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: 'Criadero Buck - Venta de semillas de trigo, girasol, avena y candeal' },
      { name: 'keywords', content: 'buck, semillas, buck semillas, trigo, girasol, avena, candeal, trigo fideo, variedades de trigo, genetica de trigo, mejoramiento genetico de trigo, calidad de trigo, Necochea, sudeste bonaerense, rendimiento y calidad de trigo' },
      { name: 'robots', content: 'index, follow' },
      // { name: 'google-site-verification', content: '5q_M_ijYYxl-4_GHUysw0L11887-TTQpdP3RLU74kdg' }
      { name: 'google-site-verification', content: 'w47SZLtmhQC2bdhKvEuRSZEdd5Yokbax3Wui5NZbyXs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'canonical', href: 'https://buck-semillas.appspot.com/' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { id: 'UA-154200983-2' }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KZ6F66F' }],
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', { /* module options */ }]
  ],
  pwa: {
    manifest: {
      name: 'Buck Semillas',
      short_name: 'Buck'
      // lang: 'es'
    }
    // icon: {
    //   /* icon options */
    // }
    // workbox: {
    // offlineAssets: [
    //   '/static/Logo.png'
    // ]
    // runtimeCaching: [
    //   {
    // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
    // urlPattern: 'https://firebasestorage.googleapis.com/.*'
    // Defaults to `networkFirst` if omitted
    // handler: 'networkFirst',
    // handler: 'stalewhilerevalidate'
    // Defaults to `GET` if omitted
    // method: 'GET'
    // handler: 'cacheFirst',
    // method: 'GET',
    // strategyOptions: {
    //   cacheName: 'images',
    //   cacheableResponse: { statuses: [0, 200] }
    // }
    // strategyOptions: {
    //   cacheName: 'our-cache',
    //   cacheExpiration: {
    //     maxEntries: 10,
    //     maxAgeSeconds: 300
    //   }
    // }
    // }
    // {
    //   urlPattern: '/layouts/.*'
    // }
    //   ],
    //   cleanupOutdatedCaches: true
    // }
  },
  sitemap: {
    'hostname': 'https://buck-semillas.appspot.com/',
    'path': '/sitemap.xml',
    'exclude': [],
    'routes': [],
    'cacheTime': 900000,
    'gzip': false,
    'trailingSlash': false,
    'defaults': {},
    'pathGzip': '/sitemap.xml'
  },
  robots: {
    Useragent: '*',
    Allow: '/'
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        }
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      }
    },
    defaultAssets: {
      font: true,
      icons: 'md'
    },
    icons: {
      iconfont: 'md'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
