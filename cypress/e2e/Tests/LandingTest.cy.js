import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage";
import PrescriptionPage from "../Pages/PrescriptionPage";
import PharmacyPage from "../Pages/PharmacyPage";
import PlanSelectionPage from "../Pages/PlanSelectionPage";


describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        })

        //CREATE RECOMMENDATION:   
             
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
        
            /*//landingpage.clickCreateRecommandtionPlan();
            //landingpage.clickDeleteRecommendationIcon();
            //landingpage.clickDeleteRecommandtionBut();
            //landingpage.clickCancelRecommendation();*/
        
const homepage = new HomePage();
         //homepage.clickbackBut();
         homepage.enterRecommendationEmail('chhabi@gmail.com');
         homepage.clickHealthProfile();
         homepage.clickSick();
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
         homepage.clickmagiTier3();
         homepage.entercommunicationEmail('lata@gmail.com');
         homepage.enterContact('0123456788');
         homepage.clickNext();
 
const preferencespage = new PreferencePage();
         preferencespage.clickPreferencesYes();
         cy.wait(2000);
         preferencespage.clickNext();
         cy.wait(2000);
 
         const prescriptionpage = new PrescriptionPage();
         prescriptionpage.enterDrug("eliq");  //BEGIN TYPING TO FIND & SELECT YOUR DRUG
         cy.wait(2000);
         prescriptionpage.clickBrand();
         cy.wait(2000);
         prescriptionpage.clickAddDrug();
         cy.wait(2000);
         prescriptionpage.clickSaveDrugList();  //SAVE DRUG LIST
         cy.wait(2000);
         prescriptionpage.clickEnterPrescListname('Drug');  //Enter Prescription List Name
         cy.wait(2000);
         prescriptionpage.clickDoneAddingDrug();
 
         const pharmacypage = new PharmacyPage();
         pharmacypage.clickPharmacy();
         cy.wait(2000);
         pharmacypage.clickNext();
         cy.wait(2000);

         const planMA = new PlanSelectionPage();
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
         cy.wait(2000);
         planMA.clicklongTermBut();
         cy.wait(2000);
         planMA.clickAivanteLogo();
         cy.wait(2000);
 
        //EDIT PLAN:
/*
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Chha');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000)
        //landingpage.clickCollapsesPlan();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        //landingpage.clikBackBut();
        //cy.wait(2000);
        //landingpage.clickEditHealthProfile();
        //landingpage.clickEditHealthProfile1();
        //landingpage.clickEditHealthProfile2();
        //landingpage.clickEditHealthProfile3();
        //cy.wait(2000);
        //landingpage.clickEditHealthProfile4();
        //cy.wait(2000);
        //landingpage.clickEditHealthProfile5();
        //cy.wait(2000);
        landingpage.enterEditRecommendationName('Lata');
        cy.wait(2000);
        landingpage.enterEditLifeExpectancy('85');
        cy.wait(2000);
        //landingpage.clickEditGender();
        //cy.wait(2000);
        //landingpage.clickEditGenderMale();
        //cy.wait(2000);
        //landingpage.clickEditGenderFemale();
        //cy.wait(2000);
        //landingpage.clickEditTabaccoNo();
        //cy.wait(2000);
        //landingpage.clickEditTabaccoYes();
        //cy.wait(2000);
        //landingpage.clickEditTaxFilingJoin();
        //cy.wait(2000);
        //landingpage.clickEditTaxFilingIndiv();
        //cy.wait(2000);
        //landingpage.enterStreet('Street');
        //cy.wait(2000);
        //landingpage.enterEditZipcode('80112');
        //cy.wait(2000);
        //landingpage.clickZipcodeSearchBut();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier1();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier2();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier3();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier4();
        //cy.wait(2000);
        //landingpage.clickEditMagiTier5();
        //cy.wait(2000);
        //landingpage.clickEditCommunicationEmail("xyz@gmail.com")
        //cy.wait(2000);
        landingpage.enterEditContact('0123456790');
        cy.wait(2000);
        landingpage.clickEditNextBut();
        cy.wait(2000);
        landingpage.clickSearchPrefYes();
        cy.wait(2000);
        //landingpage.clickSearchPrefNo();
        //cy.wait(2000);
        landingpage.clickSearchPrefNextbut();
        cy.wait(2000);
        landingpage.clickEditDrug();
        cy.wait(2000);
        landingpage.enterQuanty('60')
        cy.wait(2000);
        landingpage.clickFrequencyBut();
        cy.wait(2000);
        landingpage.clickFrequency60();
        cy.wait(2000);
        //landingpage.clickFrequency90();
        //cy.wait(2000);
        landingpage.clickUpdateDrug();
        cy.wait(2000);
        //landingpage.clickCancelUpdateDrug();
        //cy.wait(2000);
        landingpage.clickdoneAdding();
        cy.wait(2000);
        landingpage.clickPharmacyEdit();
        cy.wait(2000);
        landingpage.clickPharmacyNextButt();
        cy.wait(2000);
        landingpage.clickeditMABut();
        cy.wait(2000);
        landingpage.clickEditPlan();
        cy.wait(2000);
        landingpage.clickMADoneBut();
        cy.wait(2000);
        landingpage.clickSelectMAPlan();
        cy.wait(2000);
*/

//VIEW PLAN:
 /*
        landingpage.clickRecomRadio();
        landingpage.enterByEmail('Chha');
        landingpage.clickCheckMark();
        landingpage.clickviewRecom();
        cy.wait(2000);
        landingpage.clickviewBackbut();
        cy.wait(2000);
       //landingpage.clickviewProvider();
        //landingpage.clickviewMedicare();
        //landingpage.clickviewLongTerm();
        //landingpage.clickViewBackBut();
*/


    })
})     