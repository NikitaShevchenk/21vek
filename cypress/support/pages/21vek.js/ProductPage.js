export class productPage {
    elements ={
        prodName:() => cy.get('[itemprop="name"]'),
        prodPrice:() =>  cy.get('.item-price'),
        addToCartButton:() => cy.get('.item-buy'),
        addToFavourite:() => cy.get('[class="putaside__link j-putaside"]'),
        deleteFromFav:() => cy.get ('[class="putaside__link j-putaside j-putaside__in"]')
    }

    getProdName(){
        this.elements.prodName().invoke('text').as('productName')
    }
    getProdPrice(){
        this.elements.prodPrice().find('[class=" g-price item__price cr-price__in"]').invoke('text').as('productPrice')
    }
}

export const productProfile = new productPage()