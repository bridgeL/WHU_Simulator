import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./", // 设置构建后的资源使用相对路径
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    build: {
        outDir: "docs", // 将输出目录从 dist 改为 docs
    },
});
