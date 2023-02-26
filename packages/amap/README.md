<h1 align="center">@dabu/vue3-amap</h1>

## 文档
    @dabu/vue3-amap  基于高德地图2.0 API 封装设计的 Vue3 组件/hooks 库，开箱即用。

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

## 组件

```vue
<el-amap :zoom="zoom" :center="center"></el-amap>
```


## hooks 方法

| 方法名称          | 描述                                                  |
| ----------------- | ----------------------------------------------------- |
| initAMapApiLoader | 初始化方法                                            |
| getInstance       | 返回实例对象                                          |
| useParent         | 在子组件中使用 `useParent` 获取父组件提供的数据和方法 |

## 自定义组件

示例代码，可以在   [仓库地址](https://github.com/AuYuHui/vue3-amap) 上看我写的 demo 

```vue
<script lang="ts">
import { defineComponent, nextTick } from 'vue'

import { ElAmap_KEY, useParent } from '@dabu/vue3-amap'
export default defineComponent({
  name: 'CustomAmap',
  setup() {
    const { parent } = useParent(ElAmap_KEY)
    if (!parent)
      return
    nextTick(() => {
      const map = parent.getInstance()
      const marker = new AMap.Marker({
        position: map?.getCenter(),
      })
      map?.add(marker)
    })
    return {}
  },
})
</script>

```

