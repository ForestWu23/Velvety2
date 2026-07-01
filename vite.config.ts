import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Dev: root URL (http://localhost:5173/). Production: GitHub Pages subpath.
  base: command === 'serve' ? '/' : '/Velvety2/',
}))
