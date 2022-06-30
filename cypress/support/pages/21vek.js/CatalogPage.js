export class catalogPage {

    elements = {
        prodCategories:() => cy.get('.styles_listContainer__2wnOr').find('.styles_categoryName__ZUtLQ'),
        prodSubCategories:() => cy.get('.cloud-sub__item')
    }

    getRandomCategory(){
        this.elements.prodCategories()
            .should('have.length.greaterThan',0)
            .its('length')
            .then((n) => Cypress._.random(0, n - 1))
            .then((k) => {
                this.elements.prodCategories().eq(k).click() 
               })
    }

    getRandomSubCategory(){
        this.elements.prodSubCategories()
            .should('have.length.greaterThan',0)
            .its('length')
            .then((e) => Cypress._.random(0, e - 1))
            .then((z) => {
                this.elements.prodSubCategories().eq(z).click() 
       })
    }
    
}
export const catalog = new catalogPage()