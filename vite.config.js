import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
<<<<<<< HEAD
export default {
  build: {
    rollupOptions: {
      input: '/src/main.jsx'
    }
  }
};
=======
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 67ff116ac0dd547a970971dabd59ad2a8a45f33b
