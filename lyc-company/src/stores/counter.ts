// stores/counter.ts
import { defineStore } from "pinia";
const url = "https://counterapi.com/api/ec2-18-175-160-186.eu-west-2.compute.amazonaws.com:5173/homepage/increment";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    lastUpdated: null as Date | null,
    isLoading: false,
    error: null as Error | null,
  }),
  actions: {
    async fetch() {
      this.isLoading = true;
      this.error = null; // 清除之前的错误
      try {
        const response = await fetch(url, {
          method: "GET",
          cache: "no-cache",
          signal: AbortSignal.timeout(10000), // 10秒超时
        });

        if (!response.ok) throw new Error("请求失败");
        const data = await response.json();
        this.count = data.value;
        this.lastUpdated = new Date();
      } catch (err) {
        this.error = err as Error | null;
        this.count = -1; // 设置为 -1 以便在组件中显示 "N/A"
      } finally {
        this.isLoading = false;
      }
    },
    retry() {
      this.fetch(); // 重新获取数据
    },
  },
});
