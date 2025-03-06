
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
landingpage.clickviewRecom();
//landingpage.clickviewRecom();
//landingpage.clickviewLowCost();
//landingpage.clickviewProvider();
//landingpage.clickviewMedicare();
//landingpage.clickviewLongTerm();
//landingpage.clickViewBackBut();
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

//HOME PAGE
/*
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
*/

//PREFRENCES PAGE
/*
const preferencespage=new PreferencePage();
//preferencespage.clickBackBut();
preferencespage.clickPreferencesYes();
//preferencespage.clickPreferencesNo();
preferencespage.clickNext();


//PRESCRIPTIION PAGE
const prescriptionpage=new PrescriptionPage();
//prescriptionpage.SetGoBackPreferLink();
prescriptionpage.enterDrug("eliq");  //BEGIN TYPING TO FIND & SELECT YOUR DRUG
prescriptionpage.clickBrand();
prescriptionpage.clickAddDrug();
//prescriptionpage.clickSaveDrugList();  //SAVE DRUG LIST
//prescriptionpage.clickEnterPrescListname('Drug');////Enter Prescription List Name
//prescriptionpage.clickAddAnotherDrug(); //ADD ANOTHER DRUG
prescriptionpage.clickDoneAddingDrug();
//prescriptionpage.clickClearSearch();
//prescriptionpage.clickCantFindDrug();
//prescriptionpage.clickExistingDrigList();  //Select Prescription Drug from your Existing List field
//prescriptionpage.clickDrugExistingList();  //select save drug list name
//prescriptionpage.clickRemoveDrug();        //Remove drug
//prescriptionpage.clickEditDrug();          //Edit drug
//prescriptionpage.clickcancelUpdate();       //Cancel update drug
//prescriptionpage.clickUpdateThisDrug();     //Update this drug

/*
prescriptionpage.clickDrugBrowse(); //Browse drugs A-Z
cy.wait(1000)
prescriptionpage.enterLetter("B");
prescriptionpage.clickDrugFound();
prescriptionpage.clickSelectDrug();
prescriptionpage.clickAddDrug();
prescriptionpage.clickAddToDrugList();
prescriptionpage.clickDoneAddDrug();
*/

//PHARMACY PAGE
/*
const pharmacypage=new PharmacyPage();
//pharmacypage.clickBackBut();
pharmacypage.clickPharmacy();
pharmacypage.clickNext();

/*
pharmacypage.clickZipcoderadio() 
    cy.wait(1000)
    pharmacypage.enterZipcode('80922') 
    cy.wait(1000)
    pharmacypage.clickFindPahramcyinzipcode()
    cy.wait(1000)
    pharmacypage.enterZipcode('80924') 
    cy.wait(1000)
    pharmacypage.clickZiphistoryarrow()
    cy.wait(3000)
    pharmacypage.selectZiphistoryZipcode()
    cy.wait(3000)
    pharmacypage.clickFindPahramcyinzipcode()
    cy.wait(1000)
    pharmacypage.enterDistance('15')
    cy.wait(1000)
    pharmacypage.clickFindPahramcyinzipcode()
    cy.wait(2000)
    pharmacypage.clickNextpageBtn()
    cy.wait(1000)
    pharmacypage.clickLastPageBtn()
    cy.wait(1000)
    pharmacypage.clickPerivousPageBtn()
    cy.wait(1000)
    pharmacypg.clickFirstPageBtn()
    cy.wait(1000)
    pharmacypage.selectPharmacy()
    cy.wait(1000)
    pharmacypage.selectSecondPharmacy()
    cy.wait(1000)
    pharmacypage.itemPerPage()
    cy.wait(1000)
    pharmacypage.selectPharmacy()
    cy.wait(2000)
    pharmacypage.selectSecondPharmacy()
    cy.wait(2000)
    pharmacypage.clickAddressradio()
    cy.wait(1000)
    pharmacypage.enterAddress('6391 rollick drive,Colorado springs,CO,80924')
    cy.wait(6000)
    pharmacypage.clickAddressFindPhramacy()
    cy.wait(3000)
    pharmacypg.pickPharmacyfromAddress()
    cy.wait(2000)
    pharmacypage.pickPharmacyfromAddress()
    cy.wait(2000)
    pharmacypage.enterPharmacyname('WALGREENS')
    cy.wait(6000)
    pharmacypage.clickAddressFindPhramacy()
    cy.wait(1000)
    pharmacypg. choosePharmacyaddress()
    cy.wait(2000)
    pharmacypage.clickBackBtn()
    cy.wait(3000)
    //drugselect.clickDoneaddingdrug()
    //cy.wait(3000)
    pharmacypage.clickAddressFindPhramacy()
    cy.wait(1000)
    pharmacypage.checkPharmacyagaininaddress()
    cy.wait(1000)
    pharmacypage.clickGoogleBtn()
    cy.wait(1000)
    pharmacypage.clickNextBtn()
*/

/*
//MA PLAN
const planMA=new PlanSelectionPage();
planMA.clickMA();
planMA.clickPlan();
planMA.clickDone();
planMA.clickPlanCheckbox();
planMA.clickMedicareBut();
//planMA.clickBackBut();
//planMA.clicklongTermBut();
planMA.clickAivanteLogo();
*/
})
})