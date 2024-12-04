import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  base: "/<Movie-clone>/",
  plugins: [react()],
    css: {
    postcss: {
      plugins: [
        tailwindcss(),  
        autoprefixer(),  
      ],
    },
  },
})
