// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/abhileshreact/', // 👈 This is crucial for correct asset linking
  plugins: [react()],
})
