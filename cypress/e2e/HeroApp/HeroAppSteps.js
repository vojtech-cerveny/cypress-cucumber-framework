/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import HeroAppQuery from '../../support/Selectors/HeroAppQuery';

// I click on the "Basic Auth" demo option

When('I click on the {string} demo option', (option) => {
    HeroAppQuery.selectors(option).click()
})

And('I can say Hi to GitHubActions', () => {
    let msg = Cypress.env('gitHubMsg')
    let environment = Cypress.env('envKey')
    cy.logMsg(msg)
    expect(msg).to.include(environment)
})

Given('I Debugg', () => {
    cy.visit('www.google.com')
    cy.logMsg(Cypress.env('gitHubMsg'))
    cy.logMsg(Cypress.env('ACTION_TEST'))

    cy.logMsg("READING FILE!!!!!!!!!!!!!")
    cy.readFile('cypress/fixtures/cypressEnv.json').then((cypressEnv) => {
        cy.logMsg(cypressEnv['ACTION_TEST'])
        cy.logMsg(cypressEnv["process_env_ACTION_TEST"])
        cy.logMsg(cypressEnv["process_env_CYPRESS_ACTION_TEST"])
        cy.logMsg(cypressEnv["config_ACTION_TEST"])
        cy.logMsg(cypressEnv["config_CYPRESS_ACTION_TEST"])
    })

    cy.readFile('cypress/fixtures/cypressConfig.json').then((cypressEnv) => {
        cy.logMsg(cypressEnv.env['ACTION_TEST'])
        cy.logMsg(cypressEnv.env["process_env_ACTION_TEST"])
        cy.logMsg(cypressEnv.env["process_env_CYPRESS_ACTION_TEST"])
        cy.logMsg(cypressEnv.env["config_ACTION_TEST"])
        cy.logMsg(cypressEnv.env["config_CYPRESS_ACTION_TEST"])
    })

    cy.wait(2500)
})