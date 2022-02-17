/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open login page',()=>{
    cy.visit('https://www.linkedin.com/')
    cy.get("[class='nav__button-secondary']").click()
}) 

When('I fill and submit login', () => {
    cy.get('#username').type('aaaa')
    cy.get('#password').type('aaaa')
    cy.get('[type="submit"]').click()
})

When('I fill with table and submit login', function (dataTable) {
    cy.get('#username').type(dataTable.rawTable[1][0])
    cy.get('#password').type(dataTable.rawTable[1][1])
    cy.get('[type="submit"]').click()
})


Then('I should see error', () => {
cy.get('#error-for-username').should('be.visible')   
})