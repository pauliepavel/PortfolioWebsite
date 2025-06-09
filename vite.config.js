import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/pauliepavel/PortfolioWebsite.git',  // <-- replace this with your GitHub repo name
  plugins: [react()],
})