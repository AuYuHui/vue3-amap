<h1 align="center">@dabu/vue3-amap</h1>

## 文档

    @dabu/vue3-amap  基于高德地图2.0 API 封装设计的 Vue3 组件/hooks 库，开箱即用。
  [文档地址](https://vue3-amap-docs.netlify.app/) https://vue3-amap-docs.netlify.app

如果您觉得还不错，点亮 🌟star🌟 是支持更新的最大动力 ✌🏻


##  安装

推荐使用 pnpm 安装

```shell
# with npm
npm install @dabu/vue3-amap --save

# or with yarn
yarn add @dabu/vue3-amap

# or with pnpm
pnpm add @dabu/vue3-amap
```


## 快速上手
```ts
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


