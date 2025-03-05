
import LoginPage from "../Pages/LoginPage.js"
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage.js";
import PrescriptionPage from "../Pages/PrescriptionPage.js";
import PharmacyPage from "../Pages/PharmacyPage.js";
import PlanSelectionPage from "../Pages/PlanSelectionPage.js";
//import EditRecommPage from "../Pages/EditRecommPage.js";


describe ('Automation testing', ()=>{
    it('test',()=>{

cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

const loginpage=new LoginPage();
loginpage.enterUsername("testuser@gmail.com");
loginpage.enterPassword("user123");
loginpage.clickLoginBut();

const landingpage=new LandingPage();
//CREAT RECOMMENDATION:
landingpage.clickRecommendation();

//EDIT RECOMMENDATION:
/*
landingpage.clickRecomRadio();
landingpage.enterByEmail('chhab');
landingpage.clickCheckMark();
landingpage.clickEditButt();
landingpage.enterEditLifeExpectancy('85');
landingpage.enterEditZipcode('80112');
landingpage.clickZipSearch();
landingpage.enterEditContact('0123456789');
landingpage.clickEditNextBut();
landingpage.clickSearchPrefYes();
landingpage.clickSearchprefNextbut();
landingpage.clickEditDrug();
landingpage.enterQuanty('60');
landingpage.clickFrequency();
landingpage.clickQuanty90();
landingpage.clickUpdateDrug();
//landingpage.clickCancelUpdateDrug();
landingpage.clickdoneAdding();
landingpage.clickPharmacyEdit();
landingpage.clickNextEdit();
landingpage.clickEdMA();
landingpage.clickSelectMA3();
*/

//VIEW PLAN
/*
landingpage.clickRecomRadio();
landingpage.enterByEmail('chhab');
landingpage.clickCheckMark();
landingpage.clickView();
landingpage.clickViewBackBut();
*/


//DELETE PLAN
/*
landingpage.clickRecomRadio();
landingpage.enterByEmail('chhab');
landingpage.clickCheckMark();
landingpage.clickDeletePlan();
landingpage.clickDeleteBut();
//landingpage.clickCancelDeleteBut();
*/
//PRESCRIPTION RADIO BUTTON
//landingpage.clickPresRadioBut();


const homepage=new HomePage();
homepage.enterEmail('chhabi@gmail.com');
homepage.clickHealthgrade();
homepage.clickSick();
homepage.enterName('Chhabi');
homepage.enterLifeexpectancy('80');

homepage.clickDateOfBirth();
homepage.clickYear();
homepage.clickYearSelect();
homepage.clickMonth();


homepage.clickDobB();
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
homepage.clickMagitier();
homepage.clickmagi16();
homepage.enterCommEmail('lata@gmail.com');
homepage.enterContact('0123456788');
homepage.clickNext();

const preferencespage=new PreferencePage();
//preferencespage.clickBackBut();
preferencespage.clickPreferencesYes();
//preferencespage.clickPreferencesNo();
preferencespage.clickNext();

const prescriptionpage=new PrescriptionPage();
//prescriptionpage.SetGoBackPreferLink();
prescriptionpage.enterDrug("eliq");
prescriptionpage.clickBrand();
prescriptionpage.clickAddDrug();
prescriptionpage.clickDoneAddingDrug();


/*prescriptionpage.clickDrugBrowse();
cy.wait(1000)
prescriptionpage.enterLetter("B");
prescriptionpage.clickDrugFound();
prescriptionpage.clickSelectDrug();
prescriptionpage.clickAddDrug();
prescriptionpage.clickAddToDrugList();
prescriptionpage.clickDoneAddDrug();*/


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
//planMA.clickBackBut();
//planMA.clicklongTermBut();
planMA.clickAivanteLogo();




//const editrecommpage=new EditRecommPage();

/*
editrecommpage.clickEditButt();
editrecommpage.enterEditLifeExpectancy('85');
editrecommpage.enterEditZipcode('80112');
editrecommpage.clickZipSearch();
editrecommpage.enterEditContact('0123456789');
editrecommpage.clickEditNextBut();
editrecommpage.clickSearchPrefYes();
editrecommpage.clickSearchprefNextbut();
editrecommpage.clickEditDrug();
editrecommpage.enterQuanty('60');
editrecommpage.clickFrequency();
editrecommpage.clickQuanty90();
editrecommpage.clickUpdateDrug();
//editrecommpage.clickCancelUpdateDrug();
editrecommpage.clickdoneAdding();
editrecommpage.clickPharmacyEdit();
editrecommpage.clickNextEdit();
editrecommpage.clickEdMA();
editrecommpage.clickSelectMA3();
*/

    })
})