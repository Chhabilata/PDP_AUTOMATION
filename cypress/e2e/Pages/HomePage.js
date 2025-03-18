class HomePage {
AiVanteLogo="img[src='assets/images/Aivante-logo.png']";

    backBut = ".button-wrapper > .mat-focus-indicator > .mat-button-wrapper";

    recommendationEmail = "#mat-input-3";
    healthProfile = ".mat-select-arrow.ng-tns-c216-10";
    healthProfileMSG=":nth-child(2) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    bestHealth = "#mat-option-4 > .mat-option-text";
    goodHealth = "#mat-option-5 > .mat-option-text";
    moderateHealth = "#mat-option-6 > .mat-option-text";
    poorHealth = "#mat-option-7 > .mat-option-text"
    sickHealth = "#mat-option-8 > .mat-option-text";
    recommendationName = "#mat-input-4";
    lifeExpectancy = "#mat-input-5";
    lifeExpectancyMSG=":nth-child(4) > app-help-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    dateOfBirth="//input[@id='mat-input-4']"  //#mat-input-6 (Cypress locator)
    calenderEle = ".mat-datepicker-toggle > .mat-focus-indicator"; //':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex';
    year = ":nth-child(6) > [data-mat-col='2']";
    month="//div[normalize-space()='APR']";
    gender = "#mat-select-value-5";
    genderM = "#mat-option-9 > .mat-option-text";//Gender Male   //#mat-option-10 > .mat-option-text (Female)
    genderF="//span[@class='mat-option-text'][normalize-space()='Female']";  
    tabaccoNo = "#mat-radio-6 > .mat-radio-label"
    tabaccoYes = "#mat-radio-7 > .mat-radio-label";
    taxFilingJoin = "#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    taxFilingIndiv = "#mat-radio-9 > .mat-radio-label";//Tax filing individual
    street = "#mat-input-7";
    zipCode = "#mat-input-8";
    search = ".mat-form-field-suffix > .mat-focus-indicator";
    countyState ="//span[@class='mat-select-placeholder mat-select-min-line ng-tns-c216-35 ng-star-inserted']";
    // countyState="#mat-select-value-7";
    city="#mat-select-value-9";
    city1="//span[@class='mat-option-text'][normalize-space()='CASTLE PINES']"
    city2 ="(//span[normalize-space()='CASTLE ROCK'])[1]";
    //city2="//span[normalize-space()='CASTLE ROCK']";
    //city2="#mat-option-19 > .mat-option-text";  //Castle Rock
    magiTier = "#mat-select-value-11";
    magiTier1 = "#mat-option-11 > .mat-option-text";
    magiTier2 = "#mat-option-12 > .mat-option-text";
    magiTier3 = "#mat-option-13 > .mat-option-text";
    magiTier4 = "#mat-option-14 > .mat-option-text";
    magiTier5 = "#mat-option-15 > .mat-option-text";
    communicationEmail = "#mat-input-9";
    contact = "#mat-input-10";
    nextButt = ".form-wrapper > .mat-raised-button";



    clickbackBut() { 
        cy.get(this.backBut).click(); 
    }
clickAiVanteLogo(){
        cy.get(this.AiVanteLogo).click();
    }
enterRecommendationEmail(recommendationEmail) {
        cy.get(this.recommendationEmail).type(recommendationEmail);
    }
    clickHealthProfile() {
        cy.get(this.healthProfile).click();
    }
    clickBestHealth() {
        cy.get(this.bestHealth).click();
    }
    clickHealthProfileMSG(){
        cy.get(this.healthProfileMSG).click();
    }
    clickGoodHealth() {
        cy.get(this.goodHealth).click();
    }
    clickModerateHealth() {
        cy.get(this.moderateHealth).click();
    }
    clickPoorHealth() {
        cy.get(this.poorHealth).click();
    }
    clickSickHealth() {
        cy.get(this.sickHealth).click();
    }
    enterRecommName(name) {
        cy.get(this.recommendationName).type(name);
    }
    enterLifeexpectancy(lifeExpectancy) {
        cy.get(this.lifeExpectancy).clear().type(lifeExpectancy);
    }
    clicklifeExpectancyMSG(){
        cy.get(this.lifeExpectancyMSG).click();
    }
    clickDateOfBirth() {
        cy.xpath(this.dateOfBirth).wait(2000).click();
    }
    clickCalenderEle() {
        cy.get(this.calenderEle).wait(2000).click();
    }
    clickYear() {
        cy.get(this.year).wait(2000).click();
    }
    clickMonth() {
        cy.xpath(this.month).wait(2000).click();
    }
    clickGender() {
        cy.get(this.gender).click();
    }
    clickMale() {
        cy.get(this.genderM).click();
    }
    clickFemale() {
        cy.xpath(this.genderF).click();
    }
    clickTabaccoNo() {
        cy.get(this.tabaccoNo).click();
    }
    clickTabaccoYes() {
        cy.get(this.tabaccoYes).click();
    }
    clickTaxJoin() {
        cy.get(this.taxFilingJoin).click();
    }
    clickTaxIndiv() {
        cy.get(this.taxFilingIndiv).click();
    }
    enterStreet(street) {
        cy.get(this.street).type(street);
    }
    enterZip(zipCode) {
        cy.get(this.zipCode).type(zipCode).wait(1000);
    }
    clickSearch() {
        cy.get(this.search).click();
    }
    clickCountyState(){
        cy.get(this.countyState).click();
    }
    /*clickCity(){
        cy.get('.mat-select-trigger').click();  // Open dropdown
        cy.get('#mat-select-value-9')
          .should('be.visible')
          .click();
        }*/
       clickCity(){
        cy.get(this.city).click();
       }
        clickCity1(){
            cy.xpath(this.city1).click();
        }
    clickCity2(){
        cy.xpath(this.city2).click();
    }
    clickMagiTier() {
        cy.get(this.magiTier).click();
    }
    clickMagiTier1() {
        cy.get(this.magiTier3).click().wait(1000);
    }
    clickMagiTier2() {
        cy.get(this.magiTier3).click().wait(1000);
    }
    clickMagiTier3() {
        cy.get(this.magiTier3).click().wait(1000);
    }
    clickMagiTier4() {
        cy.get(this.magiTier3).click().wait(1000);
    }
    clickMagiTier5() {
        cy.get(this.magiTier3).click().wait(1000);
    }
 entercommunicationEmail(communicationEmail) {
        cy.get(this.communicationEmail).type(communicationEmail);
    }
    enterContact(contact) {
        cy.get(this.contact).type(contact).wait(1000);
    }
    clickNext() {
        cy.get(this.nextButt).click();
    }

    

}
export default HomePage;