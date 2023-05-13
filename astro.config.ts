import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
    }),
    // svelte(),
  ],
});
