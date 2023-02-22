import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
import { useAmap } from '@/hooks'
const { initAMapApiLoader } = useAmap()
async function setup() {
  await initAMapApiLoader({
    key: 'dbf3f6a5dafa9bd013fab9098a5df12f', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0',
  })
  createApp(App).mount('#app')
}
setup()
