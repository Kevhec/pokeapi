import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../public'
  },

  plugins: [
    copy({
     targets: [
      {src: './src/assets/types/*.png', dest: 'public/assets'}
     ]
    }),
  ],
});