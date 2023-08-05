import { defineConfig } from 'astro/config';
// import image from '@astrojs/image';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://codeology.net",
  integrations: [tailwind(), sitemap(), 
  //   image({
  //   serviceEntryPoint: '@astrojs/image/sharp'
  // })  
  ] 
});