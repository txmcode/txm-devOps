const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q9gtmm',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //reporter: 'mochawesome',
    reporterOptions: {
      //reportDir: 'cypress/reports/html',
      //overwrite: false,
      //html: true,
      //json: false,
      inlineAssets: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

