import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Fichier d'entrée de ta lib
      name: "atelier-storybook", // Nom global de ta lib (utile pour UMD)
      fileName: (format) => `index.${format}.js`, // Générera index.es.js et index.cjs.js
      formats: ["es", "cjs"], // Génère un build ES Module + CommonJS
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Empêche d'inclure React dans le build
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
