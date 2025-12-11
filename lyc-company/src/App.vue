<template>
  <div class="layout-container">
    <!-- 左侧导航菜单 -->
    <!-- <header class="menu-wrapper">
      <MyMenu
        :collapsed="isMenuCollapsed"
        @toggle-collapse="isMenuCollapsed = !isMenuCollapsed"
      />
    </header> -->

    <!-- 右侧内容区 -->
    <main
      class="content-wrapper"
      @scroll.passive="handleScroll"
      ref="contentWrapper"
    >
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <KeepAlive :include="cachedViews">
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
// 菜单折叠状态
const isMenuCollapsed = ref(false);

// 需要缓存的路由页面
const cachedViews = ref<string[]>(["home"]);

const contentWrapper = ref<HTMLElement | null>(null);

// 添加透明度响应式变量
const headerOpacity = ref(1);
// 新增缩放比例响应式变量
const bannerScale = ref(1);
const lastScroll = ref(0);

const handleScroll = (e: Event) => {
  const scrollContainer = e.target as HTMLElement;
  const scrollTop = scrollContainer.scrollTop;
  // 优化缩放计算逻辑
  const scale = Math.max(1 - scrollTop * 0.001, 0.8); // 每100px缩小20%
  bannerScale.value = Math.min(Math.max(scale, 0.8), 1);
  // 计算透明度（示例：200px滚动距离完成渐变）
  const opacity = 1 - Math.min(scrollTop / 200, 1);
  headerOpacity.value = Math.max(opacity, 0.4);
  // console.log(headerOpacity);
};

// 向子组件提供数据
provide("headerOpacity", headerOpacity);
provide("bannerScale", bannerScale);

// 修改滚动处理函数
import { useRoute } from 'vue-router'
const route = useRoute()
// 根据当前路由生成规范网址
const canonicalUrl = computed(() => {
  const domain = 'https://ecological-paradise.vercel.app/' // ⚠️ 改成您的域名
  return domain + route.path
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ]
})
// 添加 Google Analytics

useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-01F5TTHY3H',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-01F5TTHY3H');
      `
    }
  ]
})

// ...您原来的代码...

// 添加 Schema.org 结构化数据
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 根据当前语言动态生成网站名称和描述
const siteName = computed(() => 
  locale.value === 'zh' ? 'Verrit Haven 公司官网' : 'Verrit Haven Company Official Website'
)
const siteDescription = computed(() => 
  locale.value === 'zh' 
    ? '专业的景观设计与建筑公司，提供高品质服务' 
    : 'Professional Landscaping and Architecture Company, Providing High-Quality Services'
)

// 注入 JSON-LD 到网页头部
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Verrit Haven Company',
        'alternateName': siteName.value,
        'url': 'https://ecological-paradise.vercel.app/',  // ⚠️ 老爷子，记得改成您自己的域名！
        'logo': 'https://ecological-paradise.vercel.app/assets/logo-BN7G2kuy.png', // ⚠️ 改成完整网址
        'description': siteDescription.value,
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Customer Service',
          'availableLanguage': ['en', 'zh']
        },
        'sameAs': [ // 如果您有社交媒体账号，把链接填这里
          // 'https://www.facebook.com/yourcompany',
          // 'https://twitter.com/yourcompany'
        ]
      }))
    }
  ]
})
</script>
<style lang="scss" scoped>
.layout-container {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  background: #f5f6fa;

  .menu-wrapper {
    transition: width 0.3s ease;

    &.collapsed {
      width: 64px;
    }
  }

  .content-wrapper {
    width: 100vw;
    // padding: 5vh;
    overflow: auto;
    height: 100vh;
    /* 隐藏滚动条但保留功能 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
      display: none; /* Chrome/Safari/Edge */
    }
    // 路由过渡动画
    :deep(.fade-enter-active),
    :deep(.fade-leave-active) {
      transition: opacity 0.2s ease;
    }

    :deep(.fade-enter-from),
    :deep(.fade-leave-to) {
      opacity: 0;
    }
  }
}
</style>
