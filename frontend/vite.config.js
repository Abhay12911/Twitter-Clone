// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		port: 3000,
// 		// proxy: {
// 		// 	"/api": {
// 		// 		target: "http://localhost:5000",
// 		// 		changeOrigin: true,
// 		// 	},
// 		},
// 	},
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative asset paths in the built files so CSS/JS work under subpaths
  // (e.g., when the site isn't served from domain root)
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

