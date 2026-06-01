import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,

    // ✅ stable for Vercel + Node 24
    minify: 'esbuild'
  }
});