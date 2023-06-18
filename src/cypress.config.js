const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseURL: 'http://127.0.0.1:3000',
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})
