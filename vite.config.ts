import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Scan/',
  build: {
    emptyOutDir: true,
  },
  plugins: [react()],
});
