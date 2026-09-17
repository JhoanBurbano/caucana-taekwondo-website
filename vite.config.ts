import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { writeFileSync } from 'fs';
import path from 'path';

const SITE_URL = 'https://www.caucanadetaekwondo.com/';

/**
 * Reescribe el sitemap al compilar con la fecha del build.
 * A mano, el `lastmod` se queda viejo y le dice a Google que no vale la pena
 * volver a rastrear; así acompaña a cada despliegue sin que nadie se acuerde.
 */
function sitemap(outDir: string): Plugin {
  return {
    name: 'sitemap-lastmod',
    apply: 'build',
    closeBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
      writeFileSync(path.resolve(__dirname, outDir, 'sitemap.xml'), xml);
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap('build')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});