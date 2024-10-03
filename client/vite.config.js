import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  server: {
    host: "localhost",
    port: 5173, // Specify your preferred port
    proxy: {
      "/api": {
        target: "http://localhost:5000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist", // Specify output directory for production
    sourcemap: true, // Enable sourcemaps in production
  },
});
