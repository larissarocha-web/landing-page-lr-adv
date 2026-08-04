import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pensao: resolve(__dirname, 'pensao/index.html'),
        admin: resolve(__dirname, 'admin/index.html'),
      },
    },
  },
})
