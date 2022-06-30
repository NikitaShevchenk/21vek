const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'mochawesome',
  //retries: 1,
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
   viewportHeight: 1080,
  viewportWidth: 1980,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '2-advanced-examples/*']
  },
});
