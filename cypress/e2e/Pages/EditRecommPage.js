class EditRecommPage{
editRecommandtion=".inner-table > .mat-table > tbody > .highlight > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon";
editLifeExpectancy="#mat-input-17";
editZipcode="#mat-input-20";
zipcodeSearchBut=".mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
editContact="#mat-input-22";
nextButEdit=".form-wrapper > .mat-raised-button > .mat-button-wrapper";
//searchPrefNo="#mat-radio-27 > .mat-radio-label";Chhabi test
searchPrefYes="#mat-radio-26 > .mat-radio-label";
searchPrefNextbut=".preference-wrapper > .button-wrapper > .mat-focus-indicator";
editDrug="body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > mat-sidenav-container:nth-child(1) > mat-sidenav-content:nth-child(5) > app-prescriptions:nth-child(3) > div:nth-child(2) > app-selected-drug:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > nz-card:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > a:nth-child(1) > u:nth-child(1)";
editQuanty="input[placeholder='Quantity']";
editFrequency="nz-select-item[title='30 Days']";
editQuanty90="[title='90 Days'] > .ant-select-item-option-content"
updateDrug=".floatLeft > .ng-star-inserted";
//cancelUpdateDrug=".floatRight > .ng-star-inserted";
doneAddingdrugs=".ng-star-inserted > .mat-focus-indicator";
editAddPharmacy="#mat-checkbox-29 > .mat-checkbox-layout >";
editNextButt=".selected-pharmacy > .button-wrapper";
edMA=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
//edSelectMA="#mat-checkbox-40 > .mat-checkbox-layout >"
edSelectMA="label[for='mat-checkbox-41-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']";


    clickEditButt(){
        cy.get(this.editRecommandtion).wait(3000).click();
    }
    enterEditLifeExpectancy(editLifeExpectancy){
        cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy).wait(2000);
    }
    enterEditZipcode(editZipcode){
        cy.get(this.editZipcode).clear().type(editZipcode).wait(3000);
    }
    clickZipSearch(){
        cy.get(this.zipcodeSearchBut).click();
    }
    clickEditNextBut(){
        cy.get(this.nextButEdit).wait(3000).click();
    }
    clickSearchPrefYes(){
        cy.get(this.searchPrefYes).wait(3000).click();
    }
    enterEditContact(editContact){
        cy.get(this.editContact).clear().type(editContact).wait(3000);
    }
clickSearchprefNextbut(){
    cy.get(this.searchPrefNextbut).wait(3000).click();
}
clickEditDrug(){
    cy.get(this.editDrug).wait(3000).click();
}
enterQuanty(editQuanty){
    cy.get(this.editQuanty).wait(3000).clear().type(editQuanty);
}
clickFrequency(){
    cy.get(this.editFrequency).wait(3000).click();
}
clickQuanty90(){
    cy.get(this.editQuanty90).wait(3000).click();
}
clickUpdateDrug(){
    cy.get(this.updateDrug).click();
}
/*clickCancelUpdateDrug(){
    cy.get(this.cancelUpdateDrug).wait(2000).click();
}*/
clickdoneAdding(){
    cy.get(this.doneAddingdrugs).wait(2000).click();
}
clickPharmacyEdit(){
    cy.get(this.editAddPharmacy).first().wait(3000).click();
}
clickNextEdit(){
    cy.get(this.editNextButt).wait(3000).click();
}
clickEdMA(){
    cy.get(this.edMA).wait(2000).click();
}
clickSelectMA3(){
    cy.get(this.edSelectMA).wait(2000).click();
}



}
export default EditRecommPage;