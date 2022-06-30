export class favouritePage{
    elements = {
        ProdName:() => cy.get('[class="result__link j-ga_track"]'),
        deleteFromFavButton:() => cy.contains('.g-pseudo_href','Удалить из списка')
    }

    getProdName(){
        this.elements.ProdName().invoke('text').as('prodFavName')
    }

}
export const favList = new favouritePage()