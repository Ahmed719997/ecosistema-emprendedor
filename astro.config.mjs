import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sixtovaldese.github.io",

  base: "/ecosistema-emprendedor/",

  output: "static",

  build: {
    inlineStylesheets: "auto",
  },
});
