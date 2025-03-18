
import LoginPage from "../Pages/LoginPage";


describe('Automation testing', () => {
    it('login Test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data)=>{
        const loginpage = new LoginPage();
        loginpage.setUserName(data.username);
        loginpage.setPassword(data.password);
        loginpage.clickLoginBtn();
        });
              
 } )
})