import { createApp } from 'vue'
import './style.css'
import { useAmap } from '@dabu/vue3-amap'
import '@dabu/vue3-amap/dist/style.css'
import App from './App.vue'

// 引入组件库全局样式资源
const { initAMapApiLoader } = useAmap()
async function setup() {
  await initAMapApiLoader({
    key: 'dbf3f6a5dafa9bd013fab9098a5df12f',
    version: '2.0',
  })
  const app = createApp(App)
  app.mount('#app')
}

setup()
