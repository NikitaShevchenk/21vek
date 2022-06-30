export class homePage {

    elements = {
       getAccount: () => cy.contains('.styles_userTools__2J7cp','Аккаунт'),
       getLoginForm: () => cy.get('[title="Вход"]'), // клик в тесте
       emailInpute: () => cy.get('form').find('[id="login-email"]'),
       passInpute: () => cy.get('form').find('[id="login-password"]'),    // клик в тесте
       signInButton:() => cy.contains('[type="submit"]','Войти'),
       unloggedUserToolbar: () => cy.get('[class="ProfileScreen_content__27rOh"]'),
        userTools:() => cy.get('.ProfileItem_item__7XkAH'),
        catalogButton:() => cy.get('.styles_catalogButton__1K6kI'),
        cartButton:() => cy.get('.headerCart'),
        getFavourite:() => cy.contains('.ProfileItem_itemText__Qz7I0','Избранные товары'),
        getViewed:() => cy.contains('.ProfileItem_itemText__Qz7I0','Просмотренные')
   }

    SignIn(Login,Password){
        this.elements.emailInpute().type(Login)
        this.elements.passInpute().type(Password)
        this.elements.signInButton().click().wait(5000)
    }

  


}

export const mainPage = new homePage()