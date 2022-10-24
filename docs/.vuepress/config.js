const { searchPlugin } = require('@vuepress/plugin-search')
const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  // site config
  lang: 'en-US',
  title: "Dobby's Docs",
  description: 'detailed information about Dobby',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],

  // theme and its config
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/Dobbycord/docs',
    docsBranch: 'master',
    docsDir: '/docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLink: true,
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Cogs',
        children: [
          { text: 'Admin', link: '/cogs/admin.md' },
          { text: 'Emojis', link: '/cogs/emojis.md' },
          { text: 'Hogwarts', link: '/cogs/hogwarts.md' },
        ],
      },
      {
        text: 'Infos',
        children: [
          { text: 'Links', link: '/infos/links.md' },
          { text: 'Privacy', link: '/infos/privacy.md' },
        ],
      },
    ],
  },
  ),
  plugins: [
    shikiPlugin({ theme: 'github-dark' }),
    searchPlugin({
      // exclude homepage
      isSearchable: (page) => page.path !== '/',
      searchMaxSuggestions: 10
    }
    ),
    docsearchPlugin({
      // options
    }),
  ],
}
