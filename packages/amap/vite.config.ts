import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
    }),
    dts({
      rollupTypes: true,
      exclude: [
        'node_modules',
        'src/components/amap/amap.module.css.d.ts',
      ],
    }),
    Unocss()
  ],
  server: {
    open: true,
    port: 8788
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'src/index.ts'),
      name: '@dabu/vue3-amap',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
