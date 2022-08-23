/// <reference types="cypress" />

import { defineStep } from 'cypress-cucumber-preprocessor/steps';
import HeroAppQuery from '../../support/Selectors/HeroAppQuery'

defineStep('I open the {string} demo page', (pageName) => {
    cy.login(pageName)
})