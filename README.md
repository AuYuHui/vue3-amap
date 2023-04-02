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

## 示例
<p align="center">
  <img alt="vue3 amap" width="100%" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76a681dec03d4e64b257efba5325d5cc~tplv-k3u1fbpfcp-watermark.image?">
</p>
<p align="center">
  <img alt="vue3 amap" width="100%" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a101ba49f5a417c94eea8f1fa7dfc2f~tplv-k3u1fbpfcp-watermark.image?">
</p>
<p align="center">
  <img alt="vue3 amap" width="100%" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5fc109b15c249ddafc13f489a7e3de2~tplv-k3u1fbpfcp-watermark.image?">
</p>
<p align="center">
  <img alt="vue3 amap" width="100%" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55991f63841f47d383b36163a04d44b9~tplv-k3u1fbpfcp-watermark.image?">
</p>

