import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "translation-html-standard",
  description: "Welcome to my site!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Translations', link: '/translations/' },
    ],

    sidebar: {
      '/translations/': [
        {
          text: '1 前言',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: './' },
            { text: 'Runtime API Examples', link: './test' }
          ]
        }
      ]
    },
      // {
      //   text: 'Home',
      //   collapsed: false,
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You1</a>'
    },
  }
})
