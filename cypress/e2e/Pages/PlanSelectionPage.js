class PlanSelectionPage{
selectMA=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
selectPlan="label[for='mat-checkbox-53-input'] span[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"
//selectPlan=".mat-checkbox-layout > .mat-checkbox-inner-container.first().click({force:true})";
doneButt=".button-container > .mat-focus-indicator";
planCheckbox=".mat-checkbox-inner-container";
medicareBut=".button-container > :nth-child(1) > .mat-button-wrapper";
backBut=".button-wrapper > :nth-child(1)"; //.button-wrapper > :nth-child(1) > .mat-button-wrapper
//longTermBut=".button-container > :nth-child(2) > .mat-button-wrapper";
aivanteLogo="img[src='assets/images/Aivante-logo.png']"; //Captured from cssSelector
editRecommandtion=".inner-table > .mat-table > tbody > .highlight > .cdk-column-actions > :nth-child(1) > .mat-button-wrapper > .mat-icon";
editLifeExpectancy="#mat-input-17";



clickMA(){
    cy.get(this.selectMA).wait(2000).click();
}
/*clickPlan(){
        cy.get(this.selectPlan).first().click();
}*/
clickPlan(){
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').first().wait(2000).click({force:true});
}
clickDone(){
    cy.get(this.doneButt).wait(2000).click();
}
clickPlanCheckbox(){
    cy.get(this.planCheckbox).wait(2000).click();
}
    
clickMedicareBut(){
    cy.get(this.medicareBut).wait(2000).click();
}
clickBackBut(){
    cy.get(this.backBut).wait(2000).click()
}
/*clicklongTermBut(){
    cy.get(this.longTermBut).wait(2000).click();
}*/
clickAivanteLogo(){
    cy.get(this.aivanteLogo).click();
}

clickEditButt(){
    cy.get(this.editRecommandtion).click();
}
enterEditLifeExpectancy(editLifeExpectancy){
    cy.get(this.editLifeExpectancy).clear().type(editLifeExpectancy).wait(2000);
}

    /*cy.get(this.selectPlan).then(($el) => {
        cy.log('Number of elements found: ${$el.length}');
        console.log($el.length, $el);
      });
      cy.get(this.selectPlan).last().click();*/
      
}
  
      





export default PlanSelectionPage;