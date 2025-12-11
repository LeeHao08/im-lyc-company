<template>
  <div class="common-layout">
    <el-container>
      <!-- 导航栏 -->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="logo-container">
            <el-menu-item>
              <img
                loading="lazy"
                style="width: 6vw"
                src="/src/assets/logo.png"
                alt="Element logo"
              />
            </el-menu-item>
            <div class="company-name">Verrit Haven Company</div>
          </div>

          <el-menu-item index="home">{{ t("home.menu.home") }}</el-menu-item>
          <el-menu-item index="location">{{
            t("home.menu.location")
          }}</el-menu-item>
          <el-menu-item index="landscaping">{{
            t("home.menu.landscaping")
          }}</el-menu-item>
          <el-menu-item index="architecture">{{
            t("home.menu.architecture")
          }}</el-menu-item>
          <el-menu-item index="quality">{{
            t("home.menu.quality")
          }}</el-menu-item>

          <el-button
            class="langchange"
            type="primary"
            round
            @click="toggleLanguage"
          >
            <span class="flag">{{ currentLang === "zh" ? "🇨🇳" : "🇺🇸" }}</span>
            <span v-show="!isCollapse">{{ currentLang.toUpperCase() }}</span>
          </el-button>
        </el-menu>
      </el-header>
      <!-- 界面--可以动态切换的 -->
      <el-main>
        <Suspense>
          <component
            :is="currentComponent"
            :key="activeIndex"
            class="content-section"
          />

          <template #fallback>
            <div class="loading-container">
              <el-icon class="is-loading"><Loading /></el-icon>
            </div>
          </template>
        </Suspense>
      </el-main>
      <el-container
        v-loading="isLoading"
        :style="{
          visibility: activeIndex != 'location' ? 'hidden' : 'visible',
          display: activeIndex != 'location' ? 'none' : 'flex',
        }"
      >
        <el-main>
          <iframe
            src="https://opensource.icegl.cn/#/plugins/digitalCity/city2"
            frameborder="0"
            loading="lazy"
            :style="{ width: '95vw', height: '100vh' }"
          ></iframe
        ></el-main>
      </el-container>
      <!-- 联系我们 -->

      <MyFooter />
    </el-container>
  </div>
  <!-- 访问量 -->
  <el-badge :value="formattedCount" class="item" color="green">
    <el-button type="primary" :icon="View" circle />
  </el-badge>
</template>

<script lang="ts" setup>
import { View } from "@element-plus/icons-vue";
import { ref, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCounterStore } from "@/stores/counter"; // 引入计数器存储

const counterStore = useCounterStore(); // 使用计数器存储
const { t, locale } = useI18n();

const loading = ref(true);
const isCollapse = ref(true);
const currentLang = ref(locale.value);
const activeIndex = ref("home"); //菜单默认home
//所有的组件的一个映射
const componentsMap = {
  home: defineAsyncComponent(() => import("@/components/home/index.vue")),
  location: defineAsyncComponent(
    () => import("@/components/location/index.vue")
  ),
  landscaping: defineAsyncComponent(
    () => import("@/components/landscaping/index.vue")
  ),
  architecture: defineAsyncComponent(
    () => import("@/components/architecture/index.vue")
  ),
  quality: defineAsyncComponent(() => import("@/components/quality/index.vue")),
};

const handleSelect = (key: string, keyPath: string[]) => {
  console.log("菜单激活", key, keyPath);
  activeIndex.value = key;
  loading.value = true; // 在切换选项卡时设置 loading 为 true
  // 模拟加载过程
  setTimeout(() => {
    loading.value = false; // 2秒后将 loading 设置为 false
  }, 4000);
};
// 使用computed来根据activeTab的值动态计算loading状态
const isLoading = computed(
  () => loading.value && activeIndex.value == "location"
);

const toggleLanguage = () => {
  currentLang.value = currentLang.value === "en" ? "zh" : "en";
  locale.value = currentLang.value;
  localStorage.setItem("lang", currentLang.value);
};

// 使用handleSelect选择的key来找到映射中的组件
const currentComponent = computed(() => componentsMap[activeIndex.value as keyof typeof componentsMap]);
// 自动获取访问人数
counterStore.fetch();

// 格式化访问人数
const formattedCount = computed(() =>
  counterStore.count === -1 ? "N/A" : counterStore.count.toLocaleString()
);


import { useHead } from '@vueuse/head' // 引入 useHead


// ...您原来的代码...

// 添加首页结构化数据
const pageTitle = computed(() => 
  locale.value === 'zh' ? '首页 - Verrit Haven 公司' : 'Home - Verrit Haven Company'
)

useHead({
  title: pageTitle.value,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': pageTitle.value,
          'description': t('home.page.home.introduct.text'),
          'url': 'https://ecological-paradise.vercel.app/', // ⚠️ 改成您的域名
          'inLanguage': locale.value === 'zh' ? 'zh-CN' : 'en-US',
          'isPartOf': {
            '@type': 'WebSite',
            'name': 'Verrit Haven Company',
            'url': 'https://ecological-paradise.vercel.app/' // ⚠️ 改成您的域名
          }
        },
        // 为每个轮播图片添加 ImageObject 标记
        {
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          'url': 'https://ecological-paradise.vercel.app/src/assets/lbt1.jpg',
          'name': t('home.page.home.lbt.text1'),
          'description': t('home.page.home.lbt.text1'),
          'uploadDate': '2025-12-11' // ⚠️ 改成您实际上传日期
        },
        // 为每个产品图片添加 ImageObject 标记（示例）
        {
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          'url': 'https://ecological-paradise.vercel.app/src/assets/pro1.jpeg',
          'name': t('home.page.home.product.item1'),
          'description': t('home.page.home.product.item1'),
          'uploadDate': '2025-12-11'
        }
      ]))
    }
  ]
})
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  .langchange {
    margin-right: 1vw;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  margin-right: auto;

  .el-menu-item {
    height: auto;
    padding: 0 10px;
  }

  .company-name {
    font-size: 1.5em;
    color: #5e5602;
    font-weight: bold;
    white-space: nowrap;
    margin-left: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vw;
  }
}

.el-menu--horizontal {
  align-items: center;
  .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
.content-section {
  animation: donghua 0.5s ease-in-out;
  @keyframes donghua {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.item {
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  z-index: 2;
}
</style>
