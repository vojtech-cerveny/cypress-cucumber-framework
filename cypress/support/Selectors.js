/// <reference types="cypress" />

class Selectors {
    static query(webElement) {
        switch (webElement) {
            case 'homePromptClose': return cy.get('#at-cv-lightbox-close')
            case 'Alerts & Modals': return cy.get('.tree-branch ul .tree-branch').contains(webElement)
            case 'Javascript Alerts': return cy.get(".tree-branch ul .tree-branch li[style='display: list-item;']").contains(webElement)
        }
    }
}

export default Selectors;
