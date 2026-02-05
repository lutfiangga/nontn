// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import "dotenv/config"
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://nontn.web.id',
    output: 'server',
    adapter: cloudflare(),
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()]
    }
});
