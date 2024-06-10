import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/.*'],
    }),
  ],
  resolve: {
    alias: {
      '~': `${__dirname}/app/`,
      'styled-system': `${__dirname}/styled-system/`,
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
