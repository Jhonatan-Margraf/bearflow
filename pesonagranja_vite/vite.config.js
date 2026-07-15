import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Demo estatica: base relativa para funcionar em qualquer subpasta do site.
export default defineConfig({
  plugins: [react()],
  base: './',
})
