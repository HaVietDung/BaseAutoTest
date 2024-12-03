const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require('dotenv');
dotenv.config();
const environment = process.env.ENVIRONMENT || 'staging'; 
dotenv.config({ path: environment === 'prod' ? './.env.prod' : './.env.staging' });

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    viewportHeight: 1080,
    viewportWidth: 1900,
    defaultCommandTimeout: 120000,
    pageLoadTimeout: 120000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    experimentalSkipDomainInjection: [
      '*.stripe.com',
      '*.stripe.network',
      'js.stripe.com',
      'hooks.stripe.com',
      'api.stripe.com',
      'm.stripe.com'
    ],
  },
});

