/// <reference types="cypress"/>

const { mainPage } = require("../../support/pages/21vek.js/HomePage");


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
   
  
  describe('First TestSuite', () => {
    beforeEach(function () {
      cy.openHomePage();
      cy.fixture('example').then(credentials => {
        this.credentials = credentials;
      })
    })

    it ('Log In', function () {
        mainPage.elements.getAccount().click()
        mainPage.elements.getLoginForm().click()

        mainPage.SignIn(this.credentials.userLogin,this.credentials.userPassword)

        mainPage.elements.getAccount().click()
        mainPage.elements.userTools().each((listItem, i) =>{
            expect(listItem).to.have.text(this.credentials.dropdownValues[i])
            })
      
        cy.get('.userToolsSubtitle').should('have.text',this.credentials.userLogin)
     })
})