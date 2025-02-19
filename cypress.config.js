const { defineConfig } = require('cypress');
require('dotenv').config({ path: './.env' }); // Explicitly load the .env file in your project root

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Assign our custom environment variables to Cypress's config
      config.env.username = process.env.APP_USERNAME;
      config.env.password = process.env.APP_PASSWORD;
      return config;
    },
    baseUrl: 'https://buggy.justtestit.org'
  }
});
