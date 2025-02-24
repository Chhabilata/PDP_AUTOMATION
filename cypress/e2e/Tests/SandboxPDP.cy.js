
import LoginPage from "../Pages/LoginPage.js"
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage.js";
import PrescriptionPage from "../Pages/PrescriptionPage.js";
import PharmacyPage from "../Pages/PharmacyPage.js";
import PlanSelectionPage from "../Pages/PlanSelectionPage.js";


describe ('Automation testing', ()=>{
    it('test',()=>{

cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

const loginpage=new LoginPage();
loginpage.enterUsername("testuser@gmail.com");
loginpage.enterPassword("user123");
loginpage.clickLoginBut();

const landingpage=new LandingPage();
landingpage.clickRecommendation();


const homepage=new HomePage();
homepage.enterEmail('chhabi@gmail.com');
homepage.clickHealthgrade();
homepage.clickSick();
homepage.enterName('Chhabi');
homepage.enterLifeexpectancy('80');
homepage.clickDobB();
homepage.clickGender();
homepage.clickMale();
homepage.clickTabacco();
homepage.clickTax();
homepage.enterStreet("Holi");
homepage.enterZip("80108");
homepage.clickSearch();
homepage.clickMagitier();
homepage.clickmagi16();
homepage.enterCommEmail('lata@gmail.com');
homepage.enterContact('0123456788');
homepage.clickNext();

const Preferencespage=new PreferencePage();
Preferencespage.clickPreferences();
Preferencespage.clickNext();

const prescriptionpage=new PrescriptionPage();
//prescriptionpage.SetGoBackPreferLink();
prescriptionpage.enterDrug("eliq");
prescriptionpage.clickBrand();
prescriptionpage.clickAddDrug();
prescriptionpage.clickDoneAddingDrug();

const pharmacypage=new PharmacyPage();
//pharmacypage.clickBackBut();
pharmacypage.clickPharmacy();
pharmacypage.clickNext();

const planMA=new PlanSelectionPage();
planMA.clickMA();
planMA.clickPlan();
planMA.clickDone();
planMA.clickPlanCheckbox();
planMA.clickMedicareBut();
planMA.clickBackBut();
//planMA.clicklongTermBut();
planMA.clickAivanteLogo();
planMA.clickEditButt();
planMA.enterEditLifeExpectancy('85');


    })
})