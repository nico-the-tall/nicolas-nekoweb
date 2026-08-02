import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fromRoot("./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: fromRoot("./index.html"),
        privacy: fromRoot("./privacy.html"),
        notFound: fromRoot("./not_found.html"),
      },
    },
  },
});
