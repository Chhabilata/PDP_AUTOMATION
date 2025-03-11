import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";

describe('Automation testing', () => {

    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        })
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        //homepage.clickbackBut();
        homepage.enterRecommendationEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        //homepage.clickGoodHealth();
        //homepage.clickModerateHealth();
        //homepage.clickPoorHealth();
        //homepage.clickSickHealth();
        homepage.enterName('Chhabi');
        homepage.enterLifeexpectancy('80');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
        homepage.clickGender();
        homepage.clickMale();
        //homepage.clickFemale();
        homepage.clickTabaccoNo();
        //homepage.clickTabaccoYes();
        homepage.clickTaxJoin();
        //homepage.clickTaxIndiv();
        homepage.enterStreet("Holi");
        homepage.enterZip("80108");
        homepage.clickSearch();
        homepage.clickMagiTier();
        //homepage.clickMagiTier1();
        //homepage.clickMagiTier2();
        homepage.clickMagiTier3();
        //homepage.clickMagiTier4();
        //homepage.clickMagiTier5();
        homepage.entercommunicationEmail('lata@gmail.com');
        homepage.enterContact('0123456788');
        //homepage.clickNext();



    }
    )
})