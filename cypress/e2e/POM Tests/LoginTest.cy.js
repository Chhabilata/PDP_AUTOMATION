
import LoginPage from "../Pages/LoginPage";


describe('login Test', () => {
    it(() => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data)=>{
        const loginpage = new LoginPage();
        loginpage.setUserName(data.username);
        loginpage.setPassword(data.password);
        loginpage.clickLoginBtn();
        });
    })
    
})