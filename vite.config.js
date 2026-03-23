import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Set via environment variable or default to '/' for local dev
  base: process.env.VITE_BASE_PATH || '/',
});
