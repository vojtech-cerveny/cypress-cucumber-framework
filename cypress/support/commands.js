/// <reference types="cypress" />

import Selectors from './Selectors'
const dayjs = require('dayjs');

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