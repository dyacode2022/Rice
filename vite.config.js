import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/rice': {
        target: 'https://rice-backend.herokuapp.com/',
        changeOrigin: true,
        secure: false,
      },
      '/info': {
        target: 'https://rice-backend.herokuapp.com/',
        changeOrigin: true,
        secure: false,
      },
      cors:false
    },
  },
})