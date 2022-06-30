export class cartPage{
    elements = {
        prodName:() => cy.get('[class="g-table-cell basket__item cr-basket__name"]'),
        prodPrice:() => cy.get('[class="g-price basket_total__price cr-price__in"]'),
        deleteButton:() => cy.get('tbody').find('[class="g-pseudo_href cr-from_basket j-from_basket"]'),
        backToCatalogBttn:() => cy.get('[class="b-go_back"]'),
        amountForm:() => cy.get('.g-form__inputwrap '),
        plusQuanitityButton: () => cy.get('[class="basket-counter__act cr-basket-counter__plus j-basket__plus"]'),
        minusQuantityButton: () => cy.get('[class="basket-counter__act cr-basket-counter__minus j-basket__minus"]')
        }


    getProdNameInCart(){
        this.elements.prodName().find('a').first().invoke('text').as('prodCartName')
        }
    
    getProdPriceInCart(){
        this.elements.prodPrice().find('#j-total_cost').first().invoke('text').invoke('replace', /\u00a0/g, '').as('prodCartPrice')
    } // If there is more than one item in the cart, the locators must be replaced
     
    getInitialProdAmount(){
        this.elements.amountForm().find('[value]').first().invoke('val').as('InitialValue')
    }
    
    getIncreasedAmount(){
        this.elements.amountForm().find('[value]').first().invoke('val').as('IncreasedValue')
    }

    getDecreasedAmount(){
        this.elements.amountForm().find('[value]').first().invoke('val').as('DecreasedValue')
    }

}   




export const cart = new cartPage()