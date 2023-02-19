/// <reference types="vitest" />

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // 模拟dom环境
    environment: "happy-dom",
    coverage: {
      // 覆盖率提供者
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      // 设置覆盖文件夹
      reportsDirectory: "./coverage",
      // 检查每个文件的阈值
      perFile: true,
      // 设置代码覆盖率阈值
      lines: 75,
      functions: 75,
      branches: 75,
      statements: 75,
    },
    open: true,
    include: ["./src/**/*.{test,spec}.ts"],
  },
});