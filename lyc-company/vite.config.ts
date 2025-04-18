import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import pxtorem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
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
      //定义路径别名
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 100,
          unitPrecision: 3, //px转rem精确到小数点多少位
          propList: ["*"], //哪些需要转换
        }),
      ],
    },
  },
  server:{
    host:"0.0.0.0",
    port:5173,allowedHosts: true,
  }
});
