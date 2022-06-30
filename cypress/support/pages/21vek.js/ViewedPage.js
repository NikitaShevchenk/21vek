export class ViewedPage{
    elements = {
        ProdName:() => cy.get('[class="result__link j-ga_track"]'),
        
    }

    getProdName(){
        this.elements.ProdName().invoke('text').as('prodViewedName')
    }
}
export const viewedProducts = new ViewedPage()