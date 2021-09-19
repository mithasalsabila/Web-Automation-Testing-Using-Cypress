import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()

// Test case: user login dengan akun invalid
it('sign in web : akun invalid', function(){

    loginPage.navigate('http://automationpractice.com/index.php');
    loginPage.buttonSignIn();
    loginPage.enterEmail('sign_in@gmail.com');
    loginPage.enterPassword('cobalogin');
    loginPage.clickSignIn();
})

//Test case: user login dengan akun valid
it('sign in web : akun valid', function(){
    loginPage.navigate('http://automationpractice.com/index.php');
    loginPage.buttonSignIn();
    loginPage.enterEmail('padiumk@gmail.com');
    loginPage.enterPassword('@padi123');
    loginPage.clickSignIn();
})