/// <reference types="cypress"/>

const { cart } = require("../../support/pages/21vek.js/CartPage");
const { catalog } = require("../../support/pages/21vek.js/CatalogPage");
const { favList } = require("../../support/pages/21vek.js/FavouritePage");
const { mainPage } = require("../../support/pages/21vek.js/HomePage");
const { productList } = require("../../support/pages/21vek.js/ProductListPage");
const { productProfile } = require("../../support/pages/21vek.js/ProductPage");


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
 
   describe('AddToFavourite/Viewed feautres', () => {
    beforeEach(function () {
      cy.openHomePage();
      })


    it('AddToFavourite',() => { 
        mainPage.elements.catalogButton().click()

        catalog.getRandomCategory()
        catalog.getRandomSubCategory()
        
        productList.getFirstProduct()
        productProfile.getProdName()
        productProfile.elements.addToFavourite()
          .should('have.text','Добавить в избранное')
          .click()
        productProfile.elements.deleteFromFav()
          .should('have.text','Удалить из избранного')

        mainPage.elements.getAccount().click()
        mainPage.elements.unloggedUserToolbar()
          .find('span')
          .first()
          .invoke('text')
          .should('eq','1')
        mainPage.elements.getFavourite().click()

        favList.getProdName()
        cy.get('@prodFavName').then((prodFavName) => {
          cy.get('@productName').then((productName) => {
            expect(prodFavName.trim()).to.eq(productName.trim())
          })
        })
    })


    it.only('DeleteFromFavourite',() =>{
      mainPage.elements.catalogButton().click()

      catalog.getRandomCategory()
      catalog.getRandomSubCategory()

      productList.getFirstProduct()
      productProfile.elements.addToFavourite().click()

      mainPage.elements.getAccount().click()
      mainPage.elements.getFavourite().click()
      
      favList.elements.deleteFromFavButton().click()
      cy.get('.b-content').find('[class="b-result"]').invoke('text').then((text) =>{
        expect(text.trim()).equal('Нет избранных товаров')
      })
      
    })
})