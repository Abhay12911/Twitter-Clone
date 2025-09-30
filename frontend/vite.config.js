import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Serve assets from the domain root in production
  base: "./",
  plugins: [react()],
  server: {
    port: 3000,
  },
});

