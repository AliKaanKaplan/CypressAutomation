/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage, {selectorLoginPage} from "../../pages/loginPage";
import homePage, {selectorLoginPage} from "../../pages/homePage";

Given('I open login page',()=>{
   homePage.goToLoginPage()
}) 

When('I fill and submit login', () => {
    loginPage.loginOnDirectly()
})

When('I fill with table and submit login', function (dataTable) {
    loginPage.loginWithTable(dataTable.rawTable[1][0],dataTable.rawTable[1][1])
})


Then('I should see error', () => {
loginPage.shouldSeeError() 
})