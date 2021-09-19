export class SignupPage{

    signin_button  = '.login'
    fill_email     = '#email_create'
    signup_click   = '#SubmitCreate > span'
    register_click = '#submitAccount > span'
    fill_title     = ':nth-child(4) > .top'
    fill_firstname = '#customer_firstname'
    fill_lastname  = '#customer_lastname'
    fill_password  = '#passwd'
    fill_address   = '#address1'
    fill_city      = '#city'
    fill_state     = '#id_state'
    fill_zip       = '#postcode'
    fill_country   = '#id_country'
    fill_phone     = '#phone_mobile'

    navigate(url){
        cy.visit(url)
    }

    buttonSignIn(){
        cy.get(this.signin_button).click()
    }

    enterEmail(email){
        cy.get(this.fill_email).type(email)
    }

    clickSignUp(){
        cy.get(this.signup_click).click()
    }

    clickRegister(){
        cy.get(this.register_click).click()
    }

    clickTitle(){
        cy.get(this.fill_title).click()
    }

    enterFirstName(firstName){
        cy.get(this.fill_firstname).type(firstName)
    }

    enterLastName(lastName){
        cy.get(this.fill_lastname).type(lastName)
    }

    enterPassword(password){
        cy.get(this.fill_password).type(password)
    }

    enterAddress(address){
        cy.get(this.fill_address).type(address)
    }

    enterCity(city){
        cy.get(this.fill_city).type(city)
    }

    enterState(state){
        cy.get(this.fill_state).select(state)
    }

    enterZip(zip){
        cy.get(this.fill_zip).type(zip)
    }

    enterCountry(country){
        cy.get(this.fill_country).select(country)
    }

    enterPhone(phone){
        cy.get(this.fill_phone).type(phone)
    }


}