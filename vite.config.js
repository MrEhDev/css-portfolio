import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: '/css-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    watch: { usePolling: true, interval: 200 }
  }
})