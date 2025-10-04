import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
//uncommand bellow line before  git push
// import proxyOptions from "./proxyOptions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8080,
    host: "0.0.0.0",
    // proxy: proxyOptions,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["framer-motion", "lodash"], // add heavy libs here
        },
      },
    },
    chunkSizeWarningLimit: 2000, // optional: silence warnings
  },
});
