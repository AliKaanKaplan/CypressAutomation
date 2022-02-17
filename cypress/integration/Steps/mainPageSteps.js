/// <reference types="Cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"

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

Then('Get attr and verify',()=>{
  cy.get('.nav__button-secondary').invoke('attr','data-tracking-control-name').should('have.text', 'guest_homepage-basic_nav-header-signin')
})