const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const testomatioReporter = require("@testomatio/reporter/lib/adapter/cypress-plugin");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  testomatioReporter(on, config);
  return config;
}

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  browser: "chrome",
  env: {
    run_viewport: "desktop",
    language: "es",
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1440,
    retries: {
      runMode: 1,
    },
    experimentalStudio: true,
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    setupNodeEvents,
    baseUrl: "https://example.cypress.io",
  },
});
