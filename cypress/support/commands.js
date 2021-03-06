// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectlistAndClick", (selector, productName) => {
    cy.get(selector).each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }

    })
})

Cypress.Commands.add("clicks", (selector) => {
    cy.get(selector).click();
})

Cypress.Commands.add("forceClicks", (selector) => {
    cy.get(selector).click({ force: true });
})

Cypress.Commands.add("clickContains", (selector, value) => {
    cy.get(selector).contains(new String(value)).click();
})

Cypress.Commands.add("types", (selector, text) => {
    cy.get(selector).type(text);
})

Cypress.Commands.add("getText", (selector, value) => {
    return cy.get(selector).invoke(value).then(text => { return text; })
})

Cypress.Commands.add("shouldVisible", (selector) => {
    cy.get(selector).should('be.visible')  
})

Cypress.Commands.add("shouldNotVisible", (selector) => {
    cy.get(selector).should('not.be.visible')  
})
 