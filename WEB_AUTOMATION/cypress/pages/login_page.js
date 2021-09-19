export class LoginPage{

    signin_button = '.login'
    fill_email    = '#email'
    fill_password = '#passwd'
    signin_click  = '#SubmitLogin > span'

    navigate(url){
        cy.visit(url)
    }

    buttonSignIn(){
        cy.get(this.signin_button).click()
    }

    enterEmail(email){
        cy.get(this.fill_email).type(email)
    }

    enterPassword(password){
        cy.get(this.fill_password).type(password)
    }

    clickSignIn(){
        cy.get(this.signin_click).click()
    }
}