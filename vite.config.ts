import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
  server : {
    port : parseInt(process.env.npm_package_config_capacitor_live_server_port,10)
  }
});


