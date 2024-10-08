const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/smoke/**/*.spec.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
