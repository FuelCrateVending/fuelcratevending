import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fuelcratevending/', // <-- THIS is critical
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
