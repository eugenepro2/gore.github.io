module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  route: {
    mode : 'hash'
  },
  head: {
    title: 'gore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'gore' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'},
      { rel: 'stylesheet', href: '/css/fonts.css'},
      { rel: 'stylesheet', href: '/css/modal.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#d9e506' },
  /*
  ** Build configuration
  */
  // transition: {
  //   name: 'test',
  //   mode: 'out-in',
  //   leaveClass: 'leave',
  //   leaveToClass: 'leave-to',
  //   enterClass: 'enter',
  //   enterToClass: 'enter-to'
  // },
  build: {
    /*
    ** Run ESLint on save
    */
    publicPath : '/nuxt/',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

