<template>
  <div class="common-layout">
    <el-container>
      <!-- 导航栏 -->
      <el-header>
        <!-- Logo区 - 独立banner区域 -->
        <div class="logo-banner" role="banner">
          <img
            loading="lazy"
            src="/src/assets/logo.webp"
            alt="Verrit Haven Company Logo"
            width="60"
            height="60"
            sizes="4vw"
            srcset="/src/assets/logo-232w.webp 300w, /src/assets/logo-464w.webp 500w, /src/assets/logo-696w.webp 700w, /src/assets/logo-928w.webp 1080w"
            class="logo-image"
          />
          <div class="company-name" aria-hidden="true">Verrit Haven Company</div>
        </div>
        
        <!-- 纯菜单结构 - 显式添加底部边框 -->
        <el-menu
          role="menubar"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="home" role="menuitem">{{ t("home.menu.home") }}</el-menu-item>
          <el-menu-item index="location" role="menuitem">{{ t("home.menu.location") }}</el-menu-item>
          <el-menu-item index="landscaping" role="menuitem">{{ t("home.menu.landscaping") }}</el-menu-item>
          <el-menu-item index="architecture" role="menuitem">{{ t("home.menu.architecture") }}</el-menu-item>
          <el-menu-item index="quality" role="menuitem">{{ t("home.menu.quality") }}</el-menu-item>

          <!-- 语言切换按钮 -->
          <el-button
            class="langchange"
            type="primary"
            round
            @click="toggleLanguage"
            :aria-label="currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'"
            :title="currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'"
          >
            <span class="flag" aria-hidden="true">{{ currentLang === "zh" ? "🇨🇳" : "🇺🇸" }}</span>
            <span v-show="!isCollapse" class="lang-text">{{ currentLang.toUpperCase() }}</span>
          </el-button>
        </el-menu>
      </el-header>
      
      <!-- 主内容区 -->
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

      <!-- 3D地图容器 -->
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
            title="3D Digital City Map"
            :style="{ width: '95vw', height: '100vh' }"
          ></iframe>
        </el-main>
      </el-container>
      
      <!-- 页脚 -->
      <MyFooter />
    </el-container>
    
    <!-- 访问量统计按钮 -->
    <el-badge :value="formattedCount" class="item" color="green">
      <el-button
        type="primary"
        :icon="View"
        circle
        aria-label="访问量统计"
        title="访问量统计"
      />
    </el-badge>
  </div>
</template>

<script lang="ts" setup>
import { View } from "@element-plus/icons-vue";
import { ref, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCounterStore } from "@/stores/counter";
import { useHead } from "@vueuse/head";

const counterStore = useCounterStore();
const { t, locale } = useI18n();

const loading = ref(true);
const isCollapse = ref(true);
const currentLang = ref(locale.value);
const activeIndex = ref("home");

const componentsMap = {
  home: defineAsyncComponent(() => import("@/components/home/index.vue")),
  location: defineAsyncComponent(() => import("@/components/location/index.vue")),
  landscaping: defineAsyncComponent(() => import("@/components/landscaping/index.vue")),
  architecture: defineAsyncComponent(() => import("@/components/architecture/index.vue")),
  quality: defineAsyncComponent(() => import("@/components/quality/index.vue")),
};

const handleSelect = (key: string, keyPath: string[]) => {
  console.log("菜单激活", key, keyPath);
  activeIndex.value = key;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 4000);
};

const isLoading = computed(() => loading.value && activeIndex.value === "location");

const toggleLanguage = () => {
  currentLang.value = currentLang.value === "en" ? "zh" : "en";
  locale.value = currentLang.value;
  localStorage.setItem("lang", currentLang.value);
};

const currentComponent = computed(() => componentsMap[activeIndex.value as keyof typeof componentsMap]);

counterStore.fetch();

const formattedCount = computed(() =>
  counterStore.count === -1 ? "N/A" : counterStore.count.toLocaleString()
);

// SEO结构化数据
const pageTitle = computed(() =>
  locale.value === "zh" ? "首页 - Verrit Haven 公司" : "Home - Verrit Haven Company"
);

useHead({
  title: pageTitle,
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Verrit Haven Company",
            url: "https://ecological-paradise.vercel.app",
            logo: "https://ecological-paradise.vercel.app/src/assets/logo.webp",
          },
        ])
      ),
    },
  ],
});
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;  /* ✅ 给header加底边，保险！ */
}

.logo-banner {
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 10px;
  
  .logo-image {
    margin-right: 10px;
    height: 5vw;
    width: 4vw;
  }
  
  .company-name {
    font-size: 2vw;
    color: #5e5602;
    font-weight: bold;
    white-space: nowrap;
  }
}

.el-menu-demo {
  flex: 1;
  justify-content: flex-end;
  border-bottom: none;  /* ✅ 去掉menu自带的底边，避免双线条 */
}

.langchange {
  margin-right: 1vw;
  margin-top: 1vw;
  
  .flag {
    margin-right: 4px;
  }
  
  .lang-text {
    margin-left: 4px;
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