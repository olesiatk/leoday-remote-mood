import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// Only prefix asset paths when building for the standalone GitHub Pages
// deploy; the federation build consumed by host-shell stays at '/'.
const base = process.env.GH_PAGES === 'true' ? '/leoday-remote-mood/' : '/';

export default defineConfig({
  base,
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
