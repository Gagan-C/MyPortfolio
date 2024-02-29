import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://gagan-c.github.io/GitHubPages_test.github.io/',
  plugins: [react()],
  build:{
    outDir:'./build'
  }
})
