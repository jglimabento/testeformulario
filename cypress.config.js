const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Esta é a linha crucial. Ela define a URL base para todos os seus testes.
    baseUrl: 'https://qa-training.sbx.devsquad.app', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // Se você tiver a seção de component testing, ela ficaria assim (opcional):
  // component: {
  //   devServer: {
  //     framework: 'react', // ou 'vue', 'angular', etc.
  //     bundler: 'webpack', // ou 'vite'
  //   },
  // },
});