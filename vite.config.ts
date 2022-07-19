/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        exportAsDefault: true
      })
    ],
    server: {
      open: false,
      host: true,
      proxy: {
        '/api': {
          target: 'http://czytgc.com:8771',
          rewrite: (path) => path.replace(/\/api/, '')
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html']
      }
    }
  }
})
