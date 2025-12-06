// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pxtorem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 路径别名
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 100,
          unitPrecision: 3,
          propList: ['*'],
        }),
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})