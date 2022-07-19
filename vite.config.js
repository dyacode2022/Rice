import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
    '/rice': {
      target: 'http://localhost:3001/',
      changeOrigin: true,
      secure: false,
    },
    cors:false
    },
  },
})