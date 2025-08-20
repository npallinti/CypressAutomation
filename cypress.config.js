const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries:{
      runMode: 2,
      openMode: 2
    },
    baseUrl: 'http://localhost:8000',
    projectId: "7bwde8",
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
