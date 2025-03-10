class LandingPage {

    //CREATE RECOMMENDATION:
    createRecommendation = ".button-container > .mat-focus-indicator > .mat-button-wrapper";
    createRecommandtionPlan = ":nth-child(3) > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon";
    deleteRecommendationIcon = ":nth-child(3) > .cdk-column-actions > :nth-child(2)";
    deleteRecommandtionBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-warn'] span[class='mat-button-wrapper']";//CelectorHub code
    cancelRecommendation = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']";//SelectorHub code

    clickCreateRecommendation() {
        cy.get(this.createRecommendation).click();
    }
    clickCreateRecommandtionPlan() {
        cy.get(this.createRecommandtionPlan).wait(2000).click();
    }
    clickDeleteRecommendationIcon() {
        cy.get(this.deleteRecommendationIcon).wait(2000).click();
    }
    clickDeleteRecommandtionBut() {
        cy.get(this.deleteRecommandtionBut).wait(2000).click()
    }
    clickCancelRecommendation() {
        cy.get(this.cancelRecommendation).wait(2000).click();
    }
    //EDITING PLAN:
    recommendationRadioBut = "#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
    filterByEmail = "#mat-input-2";    //Filter by recommendation email or name
    expandPlan=":nth-child(1) > .cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    collapsesPlan = ".example-expanded-row > .cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    //editRecommandtion=":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    editRecommandtion=":nth-child(2) > .inner-table-wrap > .example-element-detail > .inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(1)";
    backBut = ".button-wrapper > .mat-focus-indicator";
    editHealthProfile = "#mat-select-value-3";
    editHealthProfile1 = "#mat-option-4 > .mat-option-text";
    editHealthProfile2 = "#mat-option-5 > .mat-option-text";
    editHealthProfile3 = "#mat-option-6 > .mat-option-text";
    editHealthProfile4 = "#mat-option-7 > .mat-option-text";
    editHealthProfile5 = "#mat-option-8 > .mat-option-text";
    editRecommendationName = "#mat-input-4";
    editLifeExpectancy = "#mat-input-5";
    editGender = "#mat-select-value-5";
    editGenderMale = "#mat-option-10 > .mat-option-text";
    editGenderFemale = "#mat-option-10 > .mat-option-text";
    editTabaccoNo = "#mat-radio-6 > .mat-radio-label";
    editTabaccoYes = "#mat-radio-7 > .mat-radio-label";
    editTaxFilingJoin = "#mat-radio-8 > .mat-radio-label";//Tax filing jointly
    editTaxFilingIndiv = "#mat-radio-9 > .mat-radio-label";//Tax filing individual
    editStreet = "#mat-input-7";
    editZipcode = "#mat-input-8";
    zipcodeSearchBut = ".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    editMagiTier = "#mat-select-value-11";
    editMagiTier1 = "#mat-option-11 > .mat-option-text";//Magitier 1
    editMagiTier2 = "#mat-option-12 > .mat-option-text";//Magitier 2
    editMagiTier3 = "#mat-option-13 > .mat-option-text";//Magitier 3
    editMagiTier4 = "#mat-option-14 > .mat-option-text";//Magitier 4
    editMagiTier5 = "#mat-option-15 > .mat-option-text";//Magitier 5
    editCommunicationEmail="#mat-input-9";
    editContact = "#mat-input-10";
    editNextBut = ".form-wrapper > .mat-raised-button > .mat-button-wrapper";
    searchPrefNo = "#mat-radio-27 > .mat-radio-label";
    searchPrefYes = "#mat-radio-11 > .mat-radio-label";
    searchPrefNo = "#mat-radio-12 > .mat-radio-label";
    searchPrefNextbut = ".preference-wrapper > .button-wrapper > .mat-focus-indicator";
    editDrug="body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-prescriptions:nth-child(3) > div:nth-child(2) > app-selected-drug:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > nz-card:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > a:nth-child(1) > u:nth-child(1)";
    //editDrug ="body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-prescriptions:nth-child(3) > div:nth-child(2) > app-selected-drug:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > nz-card:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > a:nth-child(1) > u:nth-child(1)";
    editQuanty = "input[placeholder='Quantity']";
    editFrequency = "nz-select-item[title='30 Days']";
    enterFrequency60="nz-option-item[title='60 Days'] div[class='ant-select-item-option-content']"
    enterFrequency90 = "[title='90 Days'] > .ant-select-item-option-content"
    updateDrug = ".floatLeft > .ng-star-inserted";
    cancelUpdateDrug = ".floatRight > .ng-star-inserted";
    doneAddingdrugs = ".ng-star-inserted > .mat-focus-indicator";
    editAddPharmacy = "#mat-checkbox-2 > .mat-checkbox-layout >";
    pharmacyNextButt = ".selected-pharmacy > .button-wrapper";
    editMAButt = ":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";//MA buttn
    editPlan="#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
    selectMAPlan = "label[for='mat-checkbox-41-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";

    clickRecommendationRadioBut() {
        cy.get(this.recommendationRadioBut).click();
    }

    enterByEmail(filterByEmail) {
        cy.get(this.filterByEmail).type(filterByEmail);
    }

    clickExpandPlan() {
        cy.get(this.expandPlan).click();
    }
    clickCollapsesPlan() {
        cy.get(this.collapsesPlan).click();
    }
    clickEditRecommandtion() {
        cy.get(this.editRecommandtion).click();
    }
    clikBackBut() {
        cy.get(this.backBut).wait(2000).click();
    }
    clickEditHealthProfile() {
        cy.get(this.editHealthProfile).click();
    }
    clickEditHealthProfile1() {
        cy.get(this.editHealthProfile1).click();
    }
    clickEditHealthProfile2() {
        cy.get(this.editHealthProfile2).click();
    }
    clickEditHealthProfile3() {
        cy.get(this.editHealthProfile3).click();
    }
    clickEditHealthProfile4() {
        cy.get(this.editHealthProfile4).click();
    }
    clickEditHealthProfile5() {
        cy.get(this.editHealthProfile5).click();
    }
    enterEditRecommendationName(editRecommendationName) {
        cy.get(this.editRecommendationName).clear().type(editRecommendationName);
    }
    enterEditLifeExpectancy(editLifeExpectancy) {
        cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy);
    }
    clickEditGender() {
        cy.get(this.editGender).click();
    }
    clickEditGenderMale() {
        cy.get(this.editGenderMale).click();
    }
    clickEditGenderFemale() {
        cy.get(this.editGenderFemale).click();
    }
    clickEditTabaccoNo() {
        cy.get(this.editTabaccoNo).click();
    }
    clickEditTabaccoYes() {
        cy.get(this.editTabaccoYes).click();
    }
    clickEditTaxFilingIndiv() {
        cy.get(this.editTaxFilingIndiv).click();
    }
    clickEditTaxFilingJoin() {
        cy.get(this.editTaxFilingJoin).click();
    }
    enterStreet(editStreet) {
        cy.get(this.editStreet).clear().type(editStreet);
    }
    enterEditZipcode(editZipcode) {
        cy.get(this.editZipcode).clear().type(editZipcode);
    }
    clickZipcodeSearchBut() {
        cy.get(this.zipcodeSearchBut).click();
    }
    clickEditMagiTier() {
        cy.get(this.editMagiTier).click();
    }
    clickEditMagiTier1() {
        cy.get(this.editMagiTier1).click();
    }
    clickEditMagiTier2() {
        cy.get(this.editMagiTier2).click();
    }
    clickEditMagiTier3() {
        cy.get(this.editMagiTier3).click();
    }
    clickEditMagiTier4() {
        cy.get(this.editMagiTier4).click();
    }
    clickEditMagiTier5() {
        cy.get(this.editMagiTier5).click();
    }
clickEditCommunicationEmail(editCommunicationEmail){
        cy.get(this.editCommunicationEmail).clear().type(editCommunicationEmail);
    }
    enterEditContact(editContact) {
        cy.get(this.editContact).clear().type(editContact);
    }
    clickEditNextBut() {
        cy.get(this.editNextBut).click();
    }
clickSearchPrefYes() {
        cy.get(this.searchPrefYes).click();
    }
    clickSearchPrefNo() {
        cy.get(this.searchPrefNo).click();
    }
 clickSearchPrefNextbut() {
        cy.get(this.searchPrefNextbut).click();
    }
clickEditDrug() {
        cy.get(this.editDrug).click();
    }
enterQuanty(editQuanty) {
        cy.get(this.editQuanty).clear().type(editQuanty);
    }
    clickFrequencyBut(){
        cy.get(this.editFrequency).click();
    }
    clickFrequency60(){
        cy.get(this.enterFrequency60).click()
    }
clickFrequency90() {
        cy.get(this.enterFrequency90).click();
    }
 clickUpdateDrug() {
        cy.get(this.updateDrug).click();
    }
clickdoneAdding() {
        cy.get(this.doneAddingdrugs).click();
    }
    clickPharmacyEdit() {
        cy.get(this.editAddPharmacy).first().click();
    }
    clickPharmacyNextButt() {
        cy.get(this.pharmacyNextButt).click();
    }
    clickEditMAButt() {
        cy.get(this.editMAButt).click();
    }
    clickEditPlan(){
        cy.get(this.editPlan).click();
    }
    clickSelectMAPlan() {
        cy.get(this.selectMAPlan).click();
    }
    //VIEW PLAN:
    recommRadioBut = "#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
    filterByEmail = "#mat-input-2";    //Email text field 
    checkMark = ".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";//Drop down arrow sign
    viewRecom = ".inner-table > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > :nth-child(2) > .mat-button-wrapper > .mat-icon"; //View plan
    viewLowCost = ".view-button-container > :nth-child(1) > .mat-button-wrapper";
    viewProvider = ".view-button-container > :nth-child(2)";
    viewMedicare = ".view-button-container > :nth-child(3)";
    viewLongTerm = ".view-button-container > :nth-child(4)";
    backBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']";//".button-container > :nth-child(1) > .mat-button-wrapper";

    clickRecomRadio() { cy.get(this.recommRadioBut).wait(3000).click(); }
    enterByEmail(filterByEmail) { cy.get(this.filterByEmail).type(filterByEmail).wait(3000); }
    clickCheckMark() { cy.get(this.checkMark).wait(2000).click(); }
    clickviewRecom() { cy.get(this.viewRecom).wait(2000).click() }
    clickviewLowCost() { cy.get(this.viewLowCost).wait(2000).click(); }
    clickviewProvider() { cy.get(this.viewProvider).wait(2000).click() }
    clickviewMedicare() { cy.get(this.viewMedicare).wait(2000).click(); }
    clickviewLongTerm() { cy.get(this.viewLongTerm).wait(2000).click(); }
    clickViewBackBut() { cy.get(this.backBut).wait(3000).click(); }

    //DELETE PLAN:

    recommRadioBut = "#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
    filterByEmail = "#mat-input-2";    //Email text field       
    checkMark = ".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
    deletePlanIcon = ":nth-child(2) > .cdk-column-actions > :nth-child(3) > .mat-button-wrapper > .mat-icon";
    deleteBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-warn'] span[class='mat-button-wrapper']";
    cancelDeleteBut = "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']";


    clickRecomRadio() {
        cy.get(this.recommRadioBut).wait(2000).click();
    }
    enterByEmail(filterByEmail) {
        cy.get(this.filterByEmail).type(filterByEmail);
    }
    clickCheckMark() {
        cy.get(this.checkMark).click();
    }
    clickDeletePlanIcon() {
        cy.get(this.deletePlanIcon).wait(3000).click();
    }
    clickDeleteBut() {
        cy.get(this.deleteBut).wait(2000).click();
    }
    clickCancelDeleteBut() {
        cy.get(this.cancelDeleteBut).wait(2000).click();
    }


    presRadioBut = "#mat-radio-3 > .mat-radio-label";//Prescription Radio Button
    clickPresRadioBut() {
        cy.get(this.presRadioBut).wait(2000).click();
    }


}
export default LandingPage;














