const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-training.sbx.devsquad.app', 
    setupNodeEvents(on, config) {

    },
  },
});