import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@config": path.resolve(__dirname, "./src/app/config"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@store": path.resolve(__dirname, "./src/app/store"),
      "@services": path.resolve(__dirname, "./src/app/services"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
    },
  },
  plugins: [react()],
});
