/// <reference types="cypress"/>

const { catalog } = require("../../support/pages/21vek.js/CatalogPage");
const { favList } = require("../../support/pages/21vek.js/FavouritePage");
const { mainPage } = require("../../support/pages/21vek.js/HomePage");
const { productList } = require("../../support/pages/21vek.js/ProductListPage");
const { productProfile } = require("../../support/pages/21vek.js/ProductPage");
const { viewedProducts } = require("../../support/pages/21vek.js/ViewedPage");


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  
  
  describe('AddToFavourite/Viewed feautres', () => {
    beforeEach(function () {
      cy.openHomePage();
      })
   

    it('Viewed Pages',() => { 
        mainPage.elements.catalogButton().click()

        catalog.getRandomCategory()
        catalog.getRandomSubCategory()

        productList.getFirstProduct() 
        productProfile.getProdName() 
        
        mainPage.elements.getAccount().click()  

        mainPage.elements.unloggedUserToolbar()
          .find('span')
          .first()
          .invoke('text')
          .should('eq','1')

        mainPage.elements.getViewed().click()

        viewedProducts.getProdName()

        cy.get('@prodViewedName').then((prodViewedName) => {
            cy.get('@productName').then((productName) => {
              expect(prodViewedName.trim()).to.eq(productName.trim())
            })
          })
    })
 })