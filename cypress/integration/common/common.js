/// <reference types="cypress" />

import { defineStep } from 'cypress-cucumber-preprocessor/steps';
import Selectors from '../../support/Selectors'
import TestData from '../../fixtures/TestData'

defineStep('I open the {string} demo page', (pageName) => {
    let baseURL = TestData.constants(pageName)
    cy.visit(baseURL)
    Selectors.query('homePromptClose').click()
})