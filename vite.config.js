import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  build: {
    rollupOptions: {
      input: '/src/main.jsx'
    }
  }
};