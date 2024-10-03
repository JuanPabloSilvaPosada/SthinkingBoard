import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0', // Cambia a 'localhost' o '0.0.0.0' para permitir conexiones externas
    port: 3000, // Cambia al puerto que desees
  },
})
