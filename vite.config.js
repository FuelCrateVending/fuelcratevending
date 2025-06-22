import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fuelcratevending/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
