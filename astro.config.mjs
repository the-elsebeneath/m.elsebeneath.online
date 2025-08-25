import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
export default defineConfig({
  site: "https://m.elsebeneath.online",
  trailingSlash: "never",
  integrations: [sitemap(), react()],
  vite: {
    assetsInclude: ["**/*.avif"],
  },

  image: {
    domains: ["m.elsebeneath.online"],
    formats: ["avif", "webp", "jpeg"],
  },
});
