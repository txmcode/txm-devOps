const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q9gtmm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
