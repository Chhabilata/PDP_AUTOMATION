import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage";
import PrescriptionPage from "../Pages/PrescriptionPage";
import PharmacyPage from "../Pages/PharmacyPage";
import PlanSelectionPage from "../Pages/PlanSelectionPage";

describe('HomePage test', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });
    });


    it('test1 Verify Tsign', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickTsign();
        cy.wait(2000);
    });

    it('test2 Verify logout', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickTsign();
        cy.wait(2000);
        landingpage.clickLogOut();
        cy.wait(2000);
    });
    it('test3 Verify  Recommendation radio button', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('test4 Verify create Recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickCreateRecommandtionPlan();
        cy.wait(2000);
    });
    /*it('test5 Verify delete Recommendation plan', () => { 
                   const landingpage = new LandingPage();
                   cy.wait(2000);
                   landingpage.clickDeleteRecommendationIcon();
                   cy.wait(2000);
                   landingpage.clickDeleteRecommandtionBut();
                   cy.wait(2000);
                  });*/
    it('test6 Verify cancel Recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickDeleteRecommendationIcon();
        cy.wait(2000);
        landingpage.clickCancelRecommendation();
        cy.wait(2000);
    });

    it('test7 Verify the Expand Plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Chha');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test8 Verify the Collapses Plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Chha');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test9 Verify Prescription Radio button', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPresRadioBut();
        cy.wait(2000);
    });

    it('test10 Verify +Recommendation button', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        cy.wait(2000);
        homepage.enterRecommendationEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterName('Lata');
        homepage.enterLifeexpectancy('80');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
        homepage.clickGender();
        homepage.clickMale();
        homepage.enterZip("80108");
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickMagiTier();
        homepage.clickMagiTier1();
        homepage.clickNext();
        const preferencespage=new PreferencePage();
        preferencespage.clickPreferencesYes();
        cy.wait(2000);
        preferencespage.clickNext();
        cy.wait(2000);

        const prescriptionpage=new PrescriptionPage();
        prescriptionpage.clickDrugBrowse(); //Browse drugs A-Z
        cy.wait(1000)
        prescriptionpage.enterLetter("B");
        prescriptionpage.clickDrugFound();
        prescriptionpage.clickSelectDrug();
        prescriptionpage.clickAddDrug();
        prescriptionpage.clickAddToDrugList();
        prescriptionpage.clickDoneAddDrug();

        const pharmacypage=new PharmacyPage();
        pharmacypage.clickPharmacy();
        cy.wait(2000);
        pharmacypage.clickNext();
        cy.wait(2000);

        const planMA=new PlanSelectionPage();
        planMA.clickMA();
        cy.wait(2000);
        planMA.clickPlan();
        cy.wait(2000);
        planMA.clickDone();
        cy.wait(2000);
        planMA.clickPlanCheckbox();
        cy.wait(2000);
        planMA.clickMedicareBut();
        cy.wait(2000);
        planMA.clickBackBut();
        planMA.clicklongTermBut();
        planMA.clickAivanteLogo();
        cy.wait(2000);







    });







});




