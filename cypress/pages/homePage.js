import {selectorHomePage} from "../selector/homePageCSS";

class MainPage {

    goToHomePage(){
        cy.visit('https://www.linkedin.com/')
    }

    goToLoginPage(){
        cy.visit('https://www.linkedin.com/')
        cy.get(selectorHomePage.signInButton).click()
    }

    verifyButtonsAttr(){
        cy.get(selectorHomePage.loginnerButtons).should(($p) => {

            const classes = $p.map((i, el) => {
                return Cypress.$(el).attr('class')
              })
          
              expect(classes.get()).to.deep.eq([
                'Join now',
                'Sign in'
              ])
    
        })
    }


    getAttrAndVerifyText(){
         cy.get(selectorHomePage.signInButton).invoke('attr','data-tracking-control-name').should('have.text', 'guest_homepage-basic_nav-header-signin')
    }
  

}

export default new MainPage();