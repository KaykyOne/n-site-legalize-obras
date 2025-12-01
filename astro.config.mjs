// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://legalizeobras.com.br',
  output: 'server', // SSR completo
  adapter: node({
    mode: "standalone" // Bundle todas as dependências
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Força bundling das dependências
      noExternal: ['react', 'react-dom', 'react-share']
    }
  },
  integrations: [react()],
});