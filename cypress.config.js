const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const fs = require('fs-extra');
const path = require('path');

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
    on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      })
    );
    
    const envKey = config.env.envKey || 'default';
    const testTrigger = config.env.TEST_TRIGGER || 'local';

    let fileName = ( envKey === 'default') ? 'cypress.json' : `cypress_${envKey}.json`
    let filePath = (envKey === 'default') ? '' : 'cypress/config'

    cleanReports();
    readGitHubSecrets(config);

    if (testTrigger === 'local') {
        return getConfigByFile(fileName, filePath);
    }
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
  }
  
module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    pageLoadTimeout: 60000,
    responseTimeout: 45000,
    defaultCommandTimeout: 6000,
    video: false,
    chromeWebSecurity: false,
    screenshotsFolder: "cypress/results/screenshots",
    videosFolder: "cypress/results/videos",
    downloadsFolder: "cypress/results/downloads",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        "configFile": "cypress/config/reporter-configs.json"
    },
    env: {
        "envKey": "dev",
        "TAGS": "not @skip",
        "expandCollapseTime": 1500,
        "gitHubMsg": "Si o queeeeeeeeeeeeee dev!!!!",
        "ACTION_TEST": "[SHOULD BE OVERWRITTEN]",
        "SeleniumEasy": "https://demo.seleniumeasy.com/",
        "HeroApp": "https://the-internet.herokuapp.com/"
    },
    setupNodeEvents,
    supportFile: 'cypress/support/e2e.js'
  }
})

function cleanReports() {
    const reportPath = './cypress/results/reports';
    if (fs.existsSync(reportPath)) {
        fs.rmdirSync('./cypress/results/reports', { recursive: true });
    }
};

function getConfigByFile(file, filePath) {
    const pathToConfig = path.resolve('././', filePath, file);
    console.log("Config file: " + file);
    return fs.readJson(pathToConfig);
};

function readGitHubSecrets(config) {
    let cypressEnv = {}
    cypressEnv["process_env_CYPRESS_ACTION_TEST"] = process.env.CYPRESS_ACTION_TEST
    cypressEnv["config_ACTION_TEST"] = config.env.ACTION_TEST
    console.log(process.env.CYPRESS_ACTION_TEST)
    console.log(config.env.ACTION_TEST)
    fs.writeFileSync('./cypress/fixtures/cypressEnv.json', JSON.stringify(cypressEnv))
    fs.writeFileSync('./cypress/fixtures/cypressConfig.json', JSON.stringify(config))
}