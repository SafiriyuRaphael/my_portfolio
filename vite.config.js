import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.cjs", // Update this to reflect the new .cjs extension
  },

  optimizeDeps: {
    include: ["react-simple-typewriter", "react-scroll-parallax"], // Force Vite to optimize this package
  },
  server: {
    host: '0.0.0.0',
    port: 5173, 
  },
});
