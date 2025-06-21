import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fuelcratevending/', // 👈 this line is critical for GitHub Pages!
  plugins: [react()],
})
