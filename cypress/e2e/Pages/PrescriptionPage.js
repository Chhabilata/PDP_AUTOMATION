class PrescriptionPage{
//GoBackPreferLink="span[class='back-btn ng-star-inserted'] span[class='ng-star-inserted']";
txtDrugName=".ng-tns-c108-29 > .ant-select-selection-search >";
brandDrug=(".marginLeft20pxImp > .ng-star-inserted");
addToMyDrugList="button.ng-star-inserted > span";
//saveDrug=".ant-checkbox-input";  //SAVE DRUG LIST
//enterPrescListname="input[placeholder='Enter Prescription List Name']"; //Enter Prescription List Name
//addAnotherDrug=".floatLeft > .ng-star-inserted";
doneAddingDrug=".ng-star-inserted > .mat-focus-indicator";
//clearSearch=".floatRight > u"
//cantFindDrug=":nth-child(2) > .login-form-forgot > u";
//existingDrugList=".ng-tns-c108-34 > .ant-select-selection-search > .ant-select-selection-search-input";//Select Prescription Drug from your Existing List field
//selectdrugFromlist="[title='Save'] > .ant-select-item-option-content";  //select save drug list name
//removeDrug=".floatRight > a > u"; //Remove drug
//editDrug="[style='bottom: -10px; position: relative;'] > :nth-child(1) > u";//Edit the drug
//cancelUpdate=".floatRight > .ng-star-inserted";
//updateThisDrug=".floatLeft > .ng-star-inserted";  //Update this drug



/*
SetGoBackPreferLink (){
  cy.get(this.GoBackPreferLink).click()}
*/

enterDrug(drugName){
    cy.get(this.txtDrugName).type(drugName).wait(2000)
    cy.get(".ant-select-item-option-active > .ant-select-item-option-content").click();}
clickBrand(){cy.get(this.brandDrug).click().wait(3000); }
clickAddDrug(){cy.get(this.addToMyDrugList).first().click().wait(3000); }
//clickSaveDrugList(){cy.get(this.saveDrug).wait(2000).click();  }
//clickEnterPrescListname(enterPrescListname){cy.get(this.enterPrescListname).type(enterPrescListname);  } //Enter Prescription List Name
//clickAddAnotherDrug(){cy.get(this.addAnotherDrug).wait(2000).click(); }
clickDoneAddingDrug(){cy.get(this.doneAddingDrug).wait(3000).click();}
//clickClearSearch(){cy.get(this.clearSearch).wait(2000).click(); }
//clickCantFindDrug(){cy.get(this.cantFindDrug).click(); }
//clickExistingDrigList(){cy.get(this.existingDrugList).wait(2000).click(); }
//clickDrugExistingList(){cy.get(this.selectdrugFromlist).wait(2000).click(); }
//clickRemoveDrug(){cy.get(this.removeDrug).wait(2000).click();  }
//clickEditDrug(){cy.get(this.editDrug).wait(2000).click(); }
//clickcancelUpdate(){cy.get(this.cancelUpdate).wait(2000).click();  }
//clickUpdateThisDrug(){cy.get(this.updateThisDrug).wait(2000).click();  }

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




