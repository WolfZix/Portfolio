import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
const defaultBase = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [react()],
  base: defaultBase,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});