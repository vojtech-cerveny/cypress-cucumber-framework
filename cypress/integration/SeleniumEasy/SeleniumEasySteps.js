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