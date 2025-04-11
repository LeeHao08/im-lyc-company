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
import MyMenu from "@/components/my-menu/index.vue"; // 确保正确导入路径

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
