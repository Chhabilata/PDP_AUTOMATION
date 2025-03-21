import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage";
import PrescriptionPage from "../Pages/PrescriptionPage";

describe('PrescriptionPage Test', () => {
beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });
        

        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();

        const homepage = new HomePage();  
        homepage.enterRecommendationEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterRecommName('Lata');
        homepage.enterLifeexpectancy('80');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
        homepage.clickGender();
        homepage.clickMale();
        homepage.enterZip("80108");
       homepage.clickSearch();
       homepage.clickMagiTier();
       homepage.clickMagiTier1();
       homepage.clickNext();
       const preferencespage = new PreferencePage();
       preferencespage.clickyesRadioDrugCost(); 
       preferencespage.clickNextPrefPage(); 
});

it('should test BEGIN TYPING TO FIND & SELECT YOUR DRUG', () => {
    const prescriptionpage = new PrescriptionPage();
    prescriptionpage.clickBrowseAtoZlink();
   prescriptionpage.enterLetter('C');
   prescriptionpage.clickSelectDrug();//Captopril
     prescriptionpage.clickAddDrug();
   prescriptionpage.clickAddToDrugList();
    prescriptionpage.doneAddDrugClick();

 });




});




