import { defineConfig, type Plugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import babel from "@rolldown/plugin-babel";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

/* Intercept webring code in devmode so they render */
const SITE_URL = "https://nicolas.nekoweb.org";
const WEBRING_HOSTS = ["aviatorlaw.neocities.org", "euroring.neocities.org"];

function webringDevProxy(): Plugin {
  return {
    name: "webring-dev-proxy",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__webring", async (req, res) => {
        const target = new URL(`https:/${req.url}`);

        if (!WEBRING_HOSTS.includes(target.host)) {
          res.statusCode = 403;
          res.end();
          return;
        }

        const upstream = await fetch(target);
        const script = await upstream.text();
        res.statusCode = upstream.status;
        res.setHeader("Content-Type", "text/javascript");
        res.end(script.replaceAll(SITE_URL, `http://${req.headers.host}`));
      });
    },
  };
}

export default defineConfig({
  plugins: [
    webringDevProxy(),
    react(),
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
