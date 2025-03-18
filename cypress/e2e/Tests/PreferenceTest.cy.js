import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage";


describe('HomePage test', () => {
beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data)=>{
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
            });
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
    });

const preferencespage=new PreferencePage();
        //preferencespage.clickBackBut();
        preferencespage.clickPreferencesYes();
        //preferencespage.clickPreferencesNo();
        cy.wait(2000);
        preferencespage.clickNext();
        cy.wait(2000);
    })

   