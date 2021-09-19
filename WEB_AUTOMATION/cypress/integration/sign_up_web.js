// Test case negatif: user buat akun dengan email invalid
it('sign up web : akun invalid', function(){
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email_create').type('h@ll0@gmailcom')
    cy.get('#SubmitCreate > span').click()
})


import {SignupPage} from "../pages/create_account_page"

const signupPage = new SignupPage()

// Test case negatif: user buat akun dengan email valid kemudian mengosongkan form data akun
it('sign up web : akun valid_form kosong', function(){

    signupPage.navigate('http://automationpractice.com/index.php');
    signupPage.buttonSignIn();
    signupPage.enterEmail('hallo@gmail.com');
    signupPage.clickSignUp();
    signupPage.clickRegister();
})

// Test case positif: user buat akun dengan email valid dan mengisi field mandatory pada form data akun
it('sign up web : akun valid_form isi mandatory', function(){

    signupPage.navigate('http://automationpractice.com/index.php');
    signupPage.buttonSignIn();
    signupPage.enterEmail('hallo@gmail.com');
    signupPage.clickSignUp();
    signupPage.enterFirstName('rina');
    signupPage.enterLastName('aaa');
    signupPage.enterPassword('hallo123');
    signupPage.enterAddress('Gang 3A');
    signupPage.enterCity('Surabaya');
    signupPage.enterState('Alabama');
    signupPage.enterZip('60213');
    signupPage.enterCountry('United States');
    signupPage.enterPhone('08122000001');
    signupPage.clickRegister();

})