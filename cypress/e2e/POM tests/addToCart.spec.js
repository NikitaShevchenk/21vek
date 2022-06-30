/// <reference types="cypress"/>

const { cart } = require("../../support/pages/21vek.js/CartPage");
const { catalog } = require("../../support/pages/21vek.js/CatalogPage");
const { mainPage } = require("../../support/pages/21vek.js/HomePage");
const { productList } = require("../../support/pages/21vek.js/ProductListPage");
const { productProfile } = require("../../support/pages/21vek.js/ProductPage");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  
  describe('Cart testcases', () => {
    beforeEach(function () {
      cy.openHomePage();
      cy.fixture('example').then(credentials => {
        this.credentials = credentials;
      })
    })


    it('AddToCart',() =>{ 
        mainPage.elements.catalogButton().click()
        
        catalog.getRandomCategory()
        catalog.getRandomSubCategory()

        productList.getFirstProduct()
        productProfile.getProdName()
        productProfile.getProdPrice()
        productProfile.elements.addToCartButton().click()

        mainPage.elements.cartButton().find('.headerCartCount').should('have.text','1')
        mainPage.elements.cartButton().click()

        cart.getProdNameInCart()
        cart.getProdPriceInCart()
        cy.get('@prodCartName').then((prodCartName) => {
          cy.get('@productName').then((productName) => {
            expect(productName.trim()).to.eq(prodCartName.trim())
          })
        })
       
        cy.get('@productPrice').then((productPrice) => {
          cy.get('@prodCartPrice').then((prodCartPrice) => {
            expect(prodCartPrice).to.include(productPrice.replace('p.',' p.'))
          }) 
        })
      })

})