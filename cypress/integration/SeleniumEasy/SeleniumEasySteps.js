/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import Selectors from '../../support/Selectors';
import TestData from '../../fixtures/TestData'

//When I expand the 'Alerts & Modals' menu
//Then I click on the 'JavaScript Alerts' option
When('I expand the {string} menu', (menuOption) => {
    Selectors.query(menuOption).should('be.visible').scrollIntoView()
    Selectors.query(menuOption).click()
})

Then('I click on the {string} option', (optionName) => {
    Selectors.query(optionName).should('be.visible').scrollIntoView()
    Selectors.query(optionName).click()
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