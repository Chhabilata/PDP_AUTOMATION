import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import PreferencePage from "../Pages/PreferencesPage";


describe('PreferencePage Test', () => {

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
});

it.skip('Test1 should test search preference with Back button,navigate to the home Page', () => {
    const preferencespage = new PreferencePage();
    preferencespage.clickbackBut();  
 });
it('test2,should test search preference with YES,navigate to the manage-prescriptions page', () => {
    const preferencespage = new PreferencePage();
    preferencespage.clickyesRadioDrugCost();  
    preferencespage.clickNextPrefPage();  
 });

 it('test3,should test search preference with No,navigate directly to the plan-selections page', () => {
    const preferencespage = new PreferencePage();
    preferencespage.clicknoRadioDrugCost();  
    preferencespage.clickNextPrefPage();  
 });
 it('Test4 should test next button in the search preference page', () => {
    const preferencespage = new PreferencePage();
    preferencespage.clickNextPrefPage();  
 });


})
