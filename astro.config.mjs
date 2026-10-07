import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { webringDevProxy } from "./plugins/webringDevProxy";

export default defineConfig({
  site: "https://nicolas.nekoweb.org",
  integrations: [react({ compiler: true }), mdx()],
  build: { format: "preserve" },
  vite: { plugins: [webringDevProxy()] },
});
