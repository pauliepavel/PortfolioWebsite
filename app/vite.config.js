import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"  // Vite default is "dist", matches your gh-pages deploy
  }
});
