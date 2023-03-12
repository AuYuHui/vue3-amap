# 开始

本文会帮助你从头启动项目

## 环境准备

本地环境需要安装 [pnpm 7.x+](https://pnpm.io/) 、[Node.js 14.18+](http://nodejs.org/) 和 [Git](https://git-scm.com/)



## 安装

```shell
推荐使用 pnpm 安装

# with npm
npm install @dabu/vue3-amap --save

# or with yarn
yarn add @dabu/vue3-amap

# or with pnpm
pnpm add @dabu/vue3-amap

```

## 快速上手

```typescript
import { useAmap } from '@dabu/vue3-amap'
import '@dabu/vue3-amap/dist/style.css'
const { initAMapApiLoader } = useAmap()

async function setupApp() {
 await initAMapApiLoader({
  key: '', // 高德地图 Key
  version: '2.0'
 })
 const app = createApp(App)
 app.mount('#app')

}
setupApp()
```

