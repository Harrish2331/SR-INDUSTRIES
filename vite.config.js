import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // NOTE: This proxy only applies to `npm run dev` (local development).
    // In production (Vercel), all API calls use the full VITE_API_URL env variable.
    proxy: {
      '/api': {
        target: 'https://sr-industries-backend-4809.onrender.com',
        changeOrigin: true
      },
      '/uploads': {
        target: 'https://sr-industries-backend-4809.onrender.com',
        changeOrigin: true
      }
    }
  }
})
