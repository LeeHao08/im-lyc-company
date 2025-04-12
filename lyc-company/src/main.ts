import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import "amfe-flexible";
import { createI18n } from "vue-i18n";
import enMessages from "./locales/lang/en";
import zhMessages from "./locales/lang/zh";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "zh",
  fallbackLocale: "en",
  messages: {
    en: { ...enMessages, el: en },
    zh: { ...zhMessages, el: zhCn },
  },
});
const pinia = createPinia()
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(ElementPlus);
app.use(i18n);
app.use(router);
app.use(pinia)
app.mount("#app");
