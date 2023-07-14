import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
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
    dts(),
  ],
  server: {
    open: true,
    port: 8788,
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
    sourcemap: true,
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
