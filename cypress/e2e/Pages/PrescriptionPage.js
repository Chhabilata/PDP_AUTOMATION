class PrescriptionPage{
    //GoBackPreferLink="span[class='back-btn ng-star-inserted'] span[class='ng-star-inserted']";
txtDrugName=".ng-tns-c108-30 > .ant-select-selection-search >";
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


}

  export default PrescriptionPage;