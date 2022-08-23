/// <reference types="cypress" />

/**
 *  @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
    on('file:preprocessor', cucumber());

    const envKey = config.env.envKey || 'default';
    const testTrigger = config.env.TEST_TRIGGER || 'local';

    let fileName = ( envKey === 'default') ? 'cypress.json' : `cypress_${envKey}.json`
    let filePath = (envKey === 'default') ? '' : 'cypress/config'

    cleanReports();
    readGitHubSecrets(config);

    if (testTrigger === 'local') {
        return getConfigByFile(fileName, filePath);
    }
}

function cleanReports() {
    fs.rmdirSync('./cypress/results', { recursive: true });
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
    fs.writeFileSync('./cypress/fixtures/cypressEnv.json', JSON.stringify(cypressEnv))
    fs.writeFileSync('./cypress/fixtures/cypressConfig.json', JSON.stringify(config))
}