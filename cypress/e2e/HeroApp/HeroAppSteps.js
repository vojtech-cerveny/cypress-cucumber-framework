/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import HeroAppQuery from '../../support/Selectors/HeroAppQuery';

// I click on the "Basic Auth" demo option

When('I click on the {string} demo option', (option) => {
    HeroAppQuery.selectors(option).click()
})

Given('I Debugg', () => {
    
})