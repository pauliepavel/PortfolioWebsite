import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PortfolioWebsite/',  // <-- replace this with your GitHub repo name
  plugins: [react()],
})