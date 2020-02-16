const { description } = require('../../package')

module.exports = {
  title: 'Lee WonHo World',
  description: 'Lee WonHo World',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: 'https://redocly.github.io/redoc/petstore-logo.png',
    lastUpdated: false,
    nav: [
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    apiSpecsURL: 'https://gist.githubusercontent.com/z3by/2fd8a224ba41438c686d845d16c86610/raw/b8da8fd5be29a5b9f56d41fec2e427aacc4af5f7/petstore-full.yaml', // pet store example api specs
    apiPath: '/api/'
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
