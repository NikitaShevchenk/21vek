export class productListPage {
    elements = {
        getListOfProducts:() => cy.get('[class="result__name"]'),
               
    }

    

    getRandomProduct(){
        this.elements.getListOfProducts()
            .should('have.length.greaterThan',0)
            .its('length')
            .then((y) => Cypress._.random(0, y - 1))
            .then((p) => {
                this.elements.getListOfProducts().eq(p).click() 
               })

    }

    getFirstProduct(){
        this.elements.getListOfProducts().first().click()
    }
}




export const productList = new productListPage()