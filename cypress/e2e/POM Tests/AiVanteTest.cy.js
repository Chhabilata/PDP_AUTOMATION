
import LoginPage from "../Pages/LoginPage.js"
import LandingPage from "../Pages/LandingPage.js";
import HomePage from "../Pages/HomePage.js";
import PreferencePage from "../Pages/PreferencesPage.js";
import PrescriptionPage from "../Pages/PrescriptionPage.js";
import PharmacyPage from "../Pages/PharmacyPage.js";
import PlanSelectionPage from "../Pages/PlanSelectionPage.js";



describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

        const loginpage = new LoginPage();
        loginpage.setUserName("testuser@gmail.com");
        loginpage.setPassword("user123");
        loginpage.clickLoginBtn();


        //CREAT RECOMMENDATION:
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
    /*
               //landingpage.clickCreateRecommandtionPlan();
               //landingpage.clickDeleteRecommendationIcon();
               //landingpage.clickDeleteRecommandtionBut();
               //landingpage.clickCancelRecommendation();
               */
        //EDIT RECOMMENDATION:
        /*
                landingpage.clickRecommendationRadioBut();
                landingpage.enterByEmail('chha');//Filter by recommendation email or name
                landingpage.clickExpandPlan();
                //landingpage.clickCollapsesPlan();
                cy.wait(2000);
                landingpage.clickEditRecommandtion();
                cy.wait(2000);
                //landingpage.clikBackBut();
                //landingpage.clickEditHealthProfile();
                //landingpage.clickEditHealthProfile1();
                //landingpage.clickEditHealthProfile2();
                //landingpage.clickEditHealthProfile3();
                //landingpage.clickEditHealthProfile4();
                //landingpage.clickEditHealthProfile5();
                //landingpage.enterEditRecommendationName('Lata');
                //landingpage.enterEditLifeExpectancy('85');
                //landingpage.clickEditGender();
                //landingpage.clickEditGenderMale();
                //landingpage.clickEditGenderFemale();
                //landingpage.clickEditTabaccoNo();
                //landingpage.clickEditTabaccoYes();
                //landingpage.clickEditTaxFilingJoin();
                //landingpage.clickEditTaxFilingIndiv();
                //landingpage.enterStreet('Street');
                //landingpage.enterEditZipcode('80112');
                //landingpage.clickZipcodeSearchBut();
                //landingpage.clickEditMagiTier();
                //landingpage.clickEditMagiTier1();
                //landingpage.clickEditMagiTier2();
                //landingpage.clickEditMagiTier3();
                //landingpage.clickEditMagiTier4();
                //landingpage.clickEditMagiTier5();
                //landingpage.clickEditCommunicationEmail("xyz@gmail.com")
                landingpage.enterEditContact('0123456790');
                landingpage.clickEditNextBut();
                landingpage.clickSearchPrefYes();
                //landingpage.clickSearchPrefNo();
                landingpage.clickSearchPrefNextbut();
                cy.wait(2000);
                landingpage.clickEditDrug();
                cy.wait(2000);
                landingpage.enterQuanty('60')
                cy.wait(2000);
                landingpage.clickFrequencyBut();
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
                landingpage.clickEditMAButt();
                cy.wait(2000);
                landingpage.clickEditPlan();
                cy.wait(2000);
                landingpage.clickSelectMAPlan();
                cy.wait(2000);
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
        landingpage.clickDeletePlanIcon();
        landingpage.clickDeleteBut();
        //landingpage.clickCancelDeleteBut();
        */
        //PRESCRIPTION RADIO BUTTON
        //landingpage.clickPresRadioBut();

        //HOME PAGE
        /*
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
        
        */
        //PREFRENCES PAGE
        /*
        const preferencespage=new PreferencePage();
        //preferencespage.clickBackBut();
        preferencespage.clickPreferencesYes();
        //preferencespage.clickPreferencesNo();
        cy.wait(2000);
        preferencespage.clickNext();
        cy.wait(2000);

        
        //PRESCRIPTIION PAGE
        const prescriptionpage=new PrescriptionPage();
        //prescriptionpage.SetGoBackPreferLink();
        prescriptionpage.enterDrug("eliq");  //BEGIN TYPING TO FIND & SELECT YOUR DRUG
        prescriptionpage.clickBrand();
        prescriptionpage.clickAddDrug();
        prescriptionpage.clickSaveDrugList();  //SAVE DRUG LIST
        //prescriptionpage.enterPrescListname('Drug');//Enter Prescription List Name
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
        cy.wait(2000);
        pharmacypage.clickNext();
        cy.wait(2000);

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


        //MA PLAN
        /*
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
//planMA.clickBackBut();
        //planMA.clicklongTermBut();
        planMA.clickAivanteLogo();
        cy.wait(2000);
*/
    })
})