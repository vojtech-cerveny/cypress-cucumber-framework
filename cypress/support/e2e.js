
import './commands';
import '@bahmutov/cy-api/support';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});