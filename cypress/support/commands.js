/// <reference types="cypress" />

import HeroAppQuery from './Selectors/HeroAppQuery'
import SeleniumEasyQuery from './Selectors/SeleniumEasyQuery';

const dayjs = require('dayjs');

Cypress.Commands.add('login', (pageName) => {
    let baseURL = Cypress.env(pageName)
    cy.visit(baseURL)
    if (pageName === "SeleniumEasy") {
        SeleniumEasyQuery.selectors('homePromptClose').click()
    }
});

Cypress.Commands.add('logMsg', (logMsg) => {
    console.log(logMsg);
    cy.log(logMsg);
});

Cypress.Commands.add('getTimeStamp', timeFormat => {
    //Ex: cy.getTimeStamp('M/DD/YYYY, h:mm:ss A')
    return new Cypress.Promise((resolve, reject) => {
        let timeStamp = dayjs().format(timeFormat);
        resolve(timeStamp);
    });
});