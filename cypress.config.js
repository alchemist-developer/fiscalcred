const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fiscalcred.vercel.app',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    video: false
  }
});
