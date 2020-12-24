export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cowlytics - The open-source analytics dashboard for Stripe based SaaS businesses',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cowlytics is the simple & easy-to-use analytics dashboard for your Stripe based SaaS. Import your Stripe account, invite your team, and get going in seconds.' },
      { name: 'og:image', content: 'https://cowlytics.neturon.so/Open Graph Image.png' },
      { name: 'og:title', content: 'Cowlytics - The open-source analytics dashboard for Stripe based SaaS businesses' },
      { name: 'og:description', content: 'Cowlytics is the simple & easy-to-use analytics dashboard for your Stripe based SaaS. Import your Stripe account, invite your team, and get going in seconds.'},
      { name: 'twitter:image', content: 'https://cowlytics.neturon.so/Open Graph Image.png' },
      { name: 'twitter:title', content: 'Cowlytics - The open-source analytics dashboard for Stripe based SaaS businesses' },
      { name: 'twitter:description', content: 'Cowlytics is the simple & easy-to-use analytics dashboard for your Stripe based SaaS. Import your Stripe account, invite your team, and get going in seconds.'},
      { name: 'twitter:card', content: 'summary_large_image'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
