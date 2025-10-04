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
          react: ["react", "react-dom", "react-router-dom"],
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-popover",
            // add other Radix packages you use heavily
          ],
          stripe: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
        },
      },
    },
    outDir: "./dist", // or './dist' if you prefer
    chunkSizeWarningLimit: 1000, // optional, increases the warning limit to 1 MB
  },
});
