import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ Important for Vercel, GitHub Pages, or cPanel
  plugins: [react()],
});
