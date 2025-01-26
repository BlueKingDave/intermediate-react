import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test APIs like `describe`, `it`, etc.
    environment: 'jsdom', // Simulates a browser-like environment for React components
    setupFiles: './src/test/setup.js', // Optional: setup file for configurations
  },
});
