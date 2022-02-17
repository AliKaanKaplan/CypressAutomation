import {selectorLoginPage} from "../selector/loginPageCSS";

class LoginPage {

   loginOnDirectly(){
      cy.types(selectorLoginPage.idInput,'aaaa');
      cy.types(selectorLoginPage.passwordInput,'aa1234')
      cy.clicks(selectorLoginPage.loginButton);
    }

    loginWithTable(username,pass){
      cy.types(selectorLoginPage.idInput,username);
      cy.types(selectorLoginPage.passwordInput,pass);
      cy.clicks(selectorLoginPage.loginButton);
  }

  shouldSeeError()
  {
    cy.shouldVisible(selectorLoginPage.loginErrorBox)
  }
}

export default new LoginPage();