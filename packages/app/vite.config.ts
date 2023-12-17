import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
 

  return {
    build: {
      emptyOutDir: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        fileName: "index",
        formats: ['es'],
        name: "MonorepoApp"
      },
    },
  }
});
