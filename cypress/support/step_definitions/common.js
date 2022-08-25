/// <reference types="cypress" />

import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import HeroAppQuery from '../Selectors/HeroAppQuery'

defineStep('I open the {string} demo page', (pageName) => {
    cy.login(pageName)
})

defineStep('I can say Hi to Github Actions', () => {
    cy.task('getGithubKeys').then((githubKeys) => {
        cy.log("Github Secret for ACTION_TEST is" + githubKeys.process_env_CYPRESS_ACTION_TEST)
        cy.log("Cypress Env Var for ACTION_TEST is" + githubKeys.config_ACTION_TEST)
        cy.task('logMsg', "Github Secret for ACTION_TEST is" + githubKeys.process_env_CYPRESS_ACTION_TEST)
        cy.task('logMsg', "Cypress Env Var for ACTION_TEST is" + githubKeys.config_ACTION_TEST)
    })
})