<template>
  <footer class="footer">
    <div>
      <div>
        <!-- 企业信息模块 -->
        <div class="footer-section">
          <div>{{ t("foot.title") }}</div>
          <div class="contact">
            <p><span>{{ t("foot.text1") }}</span>{{ t("foot.text2") }}</p>
            <p><span>{{ t("foot.text3") }} </span>400-888-8888</p>
            <p><span>Email:</span>YCLee08131017@gmail.com</p>
          </div>
        </div>

        <!-- 版权信息 -->
        <div class="info">
          <div>
            <el-divider />
          </div>
          <div>
            <p class="text-sm">© 2025 Tomson Riviera.</p>
            <p class="text-sm">All rights reserved.</p>
            <p class="text-sm">{{ t("foot.text4") }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<style lang="scss" scoped>
.footer {
  font-family: "Helvetica Neue", sans-serif;
  margin-top: 5vw;
  font-size: 4vw;
}
.footer-section {
  padding: 5vw;
  padding-bottom: 2vw;
  background: #333;
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact {
    margin-top: 3vw;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-size: small;
      color: #fff;
      span {
        color: #999;
      }
    }
  }
}
.info {
  background: #333;
  :deep(.el-divider--horizontal) {
    margin: 0;
    padding-top: 0.24rem;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    p {
      font-size: small;
    }
    padding-bottom: 2vw;
  }
}
</style>
