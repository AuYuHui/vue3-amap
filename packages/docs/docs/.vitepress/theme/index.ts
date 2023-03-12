import DefaultTheme from 'vitepress/theme'
import '@dabu/vue3-amap/dist/style.css'
import { useAmap } from '@dabu/vue3-amap'
const { initAMapApiLoader } = useAmap()
export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    await initAMapApiLoader({
      key: 'dbf3f6a5dafa9bd013fab9098a5df12f',
      version: '2.0',
    })
  },
}
