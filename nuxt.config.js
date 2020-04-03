export default {
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  css: [
    '~/assets/main.css'
  ],
  transition: 'test',
  plugins: [
    {src: '~/plugins/vue-notification.js', mode: 'client'},
    '~/plugins/injection.js'
  ]
}
