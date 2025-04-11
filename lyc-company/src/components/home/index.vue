<template>
  <!-- 轮播图 -->
  <el-carousel
    :interval="4000"
    type="card"
    height="20vw"
    @change="handleChange"
  >
    <el-carousel-item
      v-for="(item, index) in lists"
      :key="index"
      :class="{ 'active-item': activeIndex === index }"
    >
      <img :src="item.src" alt="" />
      <h1 class="animated-title">{{ $t(item.alt) }}</h1>
    </el-carousel-item>
  </el-carousel>
  <!-- 企业介绍卡片 -->
  <div class="cardbox">
    <div class="textbox">
      <span>{{ t("home.page.home.introduct.title") }}</span>
      <span>{{ t("home.page.home.introduct.title2") }}</span>
      <p>
        {{ t("home.page.home.introduct.text") }}
      </p>
    </div>
    <div class="imgbox">
      <img src="@/assets/company.jpg" alt="" />
    </div>
  </div>
  <!-- 一品画语 -->
  <div class="productbox">
    <div class="titlebox">
      <el-divider> {{t("home.page.home.product.title")}} </el-divider>
    </div>
    <div class="picbox">
      <div class="item" v-for="(i, k) in productlists" :key="k">
        <!-- <img :src="i.src" alt="" /> -->
        <el-image
          :src="i.src"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="fill"
          :preview-src-list="[i.src]"
          show-progress
        />
        <div>{{ $t(i.alt) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const activeIndex = ref(0);
const lists = ref([
  { src: "/src/assets/lbt1.jpg", alt: "home.page.home.lbt.text1" },
  { src: "/src/assets/lbt2.jpg", alt: "home.page.home.lbt.text1" },
  { src: "/src/assets/lbt3.jpg", alt: "home.page.home.lbt.text1" },
]);

const productlists = ref([
  { src: "/src/assets/pro1.jpeg", alt: "home.page.home.product.item1" },
  { src: "/src/assets/pro2.jpeg", alt: "home.page.home.product.item2" },
  { src: "/src/assets/pro3.jpeg", alt: "home.page.home.product.item3" },
  { src: "/src/assets/pro4.jpeg", alt: "home.page.home.product.item4" },
  { src: "/src/assets/pro5.jpeg", alt: "home.page.home.product.item5" },
]);

// 轮播切换处理
const handleChange = (current) => {
  activeIndex.value = current;
};
</script>

<style lang="scss" scoped>
.productbox {
  margin-top: 5vw;
  .titlebox {
    :deep(.el-divider__text) {
      background-color: transparent;
      font-size: 4vw;
    }
  }
  .picbox {
    display: flex;
    padding-top: 3vw;
    height: 30vw; // 固定容器高度
    justify-content: space-between; // 均匀分布
    .item {
      width: 18vw !important; // 强制等宽
      height: 100%; // 继承容器高度
      flex: 1;
      margin-inline: 1vw;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden; // 隐藏溢出部分
      :deep(.el-image) {
        width: 100%;
        height: 80%; // 图片区域占80%
        transition: transform 0.3s;
      }
      :deep(.el-image__inner) {
        border-top-left-radius: 1vw;
        border-top-right-radius: 1vw;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover; // 关键属性
        object-position: center center;
      }
      div:nth-child(2) {
        width: 100%;
        padding-block: 1vw;
        background: #c5a544;
        text-align: center;
        font-family: Lora;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.cardbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 5vw;
  .textbox {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span:nth-child(1) {
      color: #000;
      font-weight: 600;
    }
    span:nth-child(2) {
      color: #c3c3c3;
      font-size: small;
      font-weight: 500;
    }
    p:nth-child(3) {
      color: #595959;

      padding-right: 2vw;
    }
  }
  .imgbox {
    flex: 1;
    img {
      height: 30vw;
      border-radius: 3vw;
    }
  }
}
.animated-title {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 2.5vw;
  z-index: 2;
}

.el-carousel__item.active-item .animated-title {
  opacity: 1;
  animation: textGlow 2s infinite alternate;
}

@keyframes textGlow {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  to {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
      2px 2px 4px rgba(0, 0, 0, 0.7);
  }
}

.el-carousel__item {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s ease;
}

.el-carousel__item:hover img {
  transform: scale(1.05);
}
</style>
