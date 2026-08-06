import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import babel from "@rolldown/plugin-babel";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
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
