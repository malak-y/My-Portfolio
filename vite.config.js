// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/', // Replace 'your-repository-name' with the actual name of your GitHub repository
});
