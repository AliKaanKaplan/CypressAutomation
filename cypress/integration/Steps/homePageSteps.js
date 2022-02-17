/// <reference types="Cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import homePage, {selectorLoginPage} from "../../pages/homePage";

Given('I open home page', () => {
  homePage.goToHomePage()
})

Then('I should see login buttons', () => {
homePage.verifyButtonsAttr()
})

Then('Get attr and verify',()=>{
homePage.getAttrAndVerifyText()
})