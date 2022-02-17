/// <reference types="Cypress" />

import { should } from "chai"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open home page', () => {
    cy.visit("https://www.linkedin.com")
})

Then('I should see login buttons', () => {
    cy.get('.nav__cta-container>a').should(($p) => {

        const classes = $p.map((i, el) => {
            return Cypress.$(el).attr('class')
          })
      
          expect(classes.get()).to.deep.eq([
            'Join now',
            'Sign in'
          ])

    })
})