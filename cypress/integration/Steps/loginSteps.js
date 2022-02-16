/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open login page',()=>{
    cy.visit('https://www.linkedin.com/')
    cy.get("[class='nav__button-secondary']").click()
}) 

When('I submit login', () => {
    cy.get('#username').type('aaaa')
    cy.get('#password').type('aaaa')
    cy.get('[type="submit"]').click()
})

Then('I should see error', () => {
cy.get('#error-for-username').should('be.visible')   
})