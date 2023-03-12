import path from 'path'
import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import { resolve } from 'pathe'
import fg from 'fast-glob'
export default withPwa(defineConfig({
  base: '/',
  title: 'Vue3-Amap',
  description: 'Vue3-Amap',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],

  markdown: {
    headers: false,
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
    },

    editLink: {
      pattern: 'https://github.com/AuYuHui/vue3-amap/packages/docs/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AuYuHui/vue3-amap' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 AuYuHui',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },
  pwa: {
    base: '/',
    scope: '/',
    outDir: '.vitepress/dist',
    registerType: 'autoUpdate',
    includeAssets: fg.sync('**/*.{png,svg,ico,txt}', {
      cwd: resolve(__dirname, 'public'),
    }),
    manifest: {
      name: 'vue3-amap',
      short_name: 'vue3-amap',
      theme_color: '#ffffff',
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
    },
  },
}))

function nav() {
  return [
    { text: '文档', link: '/guide/', activeMatch: '/guide/' },
    {
      text: '源码',
      items: [
        { text: 'GitHub', link: 'https://github.com/AuYuHui/vue3-amap' },
        { text: 'Gitee', link: 'https://gitee.com/AuYuHui/vue3-amap' },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '开始',
      collapsed: false,
      items: [
        { text: '初始化', link: '/guide/' },
      ],
    },
    {
      text: '地图',
      collapsed: false,
      items: [
        { text: '地图', link: '/guide/map' },
      ],
    },
    {
      text: '点标记',
      collapsed: false,
      items: [
        { text: '点标记', link: '/guide/marker' },
      ],
    },
  ]
}
