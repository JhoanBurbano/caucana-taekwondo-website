import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/7d88a0ddc9fa339c7172cbd46a9c8d728aead3c2.png': path.resolve(
        __dirname,
        './src/assets/7d88a0ddc9fa339c7172cbd46a9c8d728aead3c2.png'
      ),
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