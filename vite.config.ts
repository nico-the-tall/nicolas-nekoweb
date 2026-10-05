import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import babel from "@rolldown/plugin-babel";
import mdx from "@mdx-js/rollup";
import { webringDevProxy } from "./plugins/webringDevProxy";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [
    webringDevProxy(),
    { enforce: "pre", ...mdx() },
    react({ include: /\.(mdx|tsx|ts)$/ }),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  resolve: {
    alias: {
      "@": fromRoot("./src"),
      "~": fromRoot("./"),
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
