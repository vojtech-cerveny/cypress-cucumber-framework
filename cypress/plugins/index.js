/// <reference types="cypress" />

/**
 *  @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');
const fs_extra = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
    on('file:preprocessor', cucumber());

    const envKey = config.env.envKey || 'default';
    let fileName = ( envKey === 'default') ? 'cypress.json' : `cypress_${envKey}.json`
    let filePath = (envKey === 'default') ? '' : 'cypress/config'

    cleanReports();
    //Commented on remote repo as it overwrites ENV variables passed on by GitHub Actions
    //return getConfigByFile(fileName, filePath);
    let cypressEnv = {}
    cypressEnv["ACTION_TEST"] = config.env.ACTION_TEST
    fs.writeFileSync('./cypress/fixtures/cypressEnv.json', JSON.stringify(cypressEnv))
    //config.env.ACTION_TEST = "SI JALATION!!!"
    //config.env.ACTION_TEST = process.env.ACTION_TEST
    return config
    
}

function cleanReports() {
    fs.rmdirSync('./cypress/results', { recursive: true });
};

function getConfigByFile(file, filePath) {
    const pathToConfig = path.resolve('././', filePath, file);
    console.log("Config file: " + file);
    return fs_extra.readJson(pathToConfig);
};