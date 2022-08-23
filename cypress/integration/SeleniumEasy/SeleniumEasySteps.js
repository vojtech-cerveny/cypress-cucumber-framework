/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SeleniumEasyQuery from '../../support/Selectors/SeleniumEasyQuery';

When('I expand the {string} menu', (menuOption) => {
    SeleniumEasyQuery.selectors(menuOption).should('be.visible').scrollIntoView()
    SeleniumEasyQuery.selectors(menuOption).click()
})

And('I click on the {string} option', (optionName) => {
    SeleniumEasyQuery.selectors(optionName).should('be.visible').scrollIntoView()
    SeleniumEasyQuery.selectors(optionName).click()
})
// And I open a "Promt" box
And('I open a {string} box', (boxType) => {
    SeleniumEasyQuery.selectors(boxType).should('be.visible').scrollIntoView()
    SeleniumEasyQuery.selectors(boxType).click()
})