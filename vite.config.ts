import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteMood',
      filename: 'remoteEntry.js',
      exposes: {
        // Exposing the MoodMeter component to Host
        './MoodMeter': './src/MoodMeter.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    cors: true
  },
    preview: {
    host: true,
    port: 3001,
    strictPort: true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
