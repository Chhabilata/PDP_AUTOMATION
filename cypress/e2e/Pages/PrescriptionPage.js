class PrescriptionPage{
//GoBackPreferLink="span[class='back-btn ng-star-inserted'] span[class='ng-star-inserted']";
txtDrugName=".ng-tns-c108-29 > .ant-select-selection-search >";
brandDrug=(".marginLeft20pxImp > .ng-star-inserted");
addToMyDrugList="button.ng-star-inserted > span";
doneAddingDrug=".ng-star-inserted > .mat-focus-indicator";


    /*SetGoBackPreferLink ()
    {
  cy.get(this.GoBackPreferLink).click()
    }*/
enterDrug(drugName){
    cy.get(this.txtDrugName).type(drugName).wait(2000)
    cy.get(".ant-select-item-option-active > .ant-select-item-option-content").click();
 }
clickBrand(){
    cy.get(this.brandDrug).click().wait(3000);
}
clickAddDrug(){
    cy.get(this.addToMyDrugList).first().click().wait(3000);
}
clickDoneAddingDrug(){
    cy.get(this.doneAddingDrug).wait(3000).click();
}

/*drugbrowseEle = (':nth-child(1) > .login-form-forgot > u');
lettertEle =('.ant-select-selection-item');
drugfoundEle = ('.ant-select-item-option-content');
selectdrugEle = ('.ant-drawer-body > :nth-child(8)');
adddrugEle = ('.ant-drawer-footer > div.ng-star-inserted > :nth-child(2) > .ng-star-inserted');
addtodruglistEle =('.marginTop2Percent > .ng-star-inserted');
doneadddruglEle = ('.ng-star-inserted > .mat-focus-indicator');
// browsedrugEle= (':nth-child(1) > login-form-forgot > u');
clickDrugBrowse(){
 cy.get(this.drugbrowseEle).click();
}
enterLetter(letter){
 cy.get(this.lettertEle).type(letter);
}
clickDrugFound(){
 cy.get(this.drugfoundEle).click();
}
clickSelectDrug(){
 cy.get(this.selectdrugEle).click();
}
clickAddDrug(){
 cy.get(this.adddrugEle).click();
}
clickAddToDrugList(){
 cy.get(this.addtodruglistEle).click();
}
clickDoneAddDrug(){
 cy.get(this.doneadddruglEle).click();
}*/


 



}

export default PrescriptionPage;




