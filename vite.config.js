const fs = require('fs');
const path = require('path');

export default {
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    }
  },
  optimizeDeps: {
    includes: [
      '@tailwindConfig'
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}
