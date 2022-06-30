/// <reference types="cypress"/>

const { cart } = require("../../support/pages/21vek.js/CartPage")
const { catalog } = require("../../support/pages/21vek.js/CatalogPage")
const { mainPage } = require("../../support/pages/21vek.js/HomePage")
const { productList } = require("../../support/pages/21vek.js/ProductListPage")
const { productProfile } = require("../../support/pages/21vek.js/ProductPage")



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('Cart testcases', () => {
    beforeEach(function () {
      cy.openHomePage();
      cy.fixture('example').then(credentials => {
        this.credentials = credentials;
      })
      mainPage.elements.catalogButton().click()
      catalog.getRandomCategory()
      catalog.getRandomSubCategory()
      productList.getRandomProduct()
      productProfile.elements.addToCartButton().click()
      mainPage.elements.cartButton().find('.headerCartCount').should('have.text','1')
      mainPage.elements.cartButton().click()
    })

    it('Delete from cart', () =>{

        cart.elements.deleteButton().click()
        cy.get('#b-empty-basket-container').should('include.text', 'Ваша корзина пуста')
        cart.elements.backToCatalogBttn().should('include.text','← Вернуться к покупкам')
    })

    it.only('changes in amount', () => {
        cart.getInitialProdAmount()
        cy.get('@InitialValue').should('eq',"1")

        cart.elements.plusQuanitityButton().click()
        cart.getIncreasedAmount()
        cy.get('@IncreasedValue').should('eq','2')
        
        cart.elements.minusQuantityButton().click()
        cart.getDecreasedAmount()
        cy.get('@DecreasedValue').should('eq','1')
    })





  })