class PlanSelectionPage{
selectMA=":nth-child(5) > .mat-focus-indicator > .mat-button-wrapper";
selectPlan=".mat-checkbox-layout > .mat-checkbox-inner-container.first().click({force:true})";
//selectPlan="#mat-checkbox-14 > .mat-checkbox-layout > .mat-checkbox-inner-container";
doneButt=".button-container > .mat-focus-indicator";
planCheckbox=".mat-checkbox-inner-container";
medicareBut=".button-container > :nth-child(1) > .mat-button-wrapper";
//backBut=".button-wrapper > :nth-child(1)"; 
//longTermBut=".button-container > :nth-child(2) > .mat-button-wrapper";
aivanteLogo="img[src='assets/images/Aivante-logo.png']"; //Captured from cssSelector



clickMA(){
    cy.get(this.selectMA).wait(2000).click();
}
/*clickPlan(){
        cy.get(this.selectPlan).first().click();
}*/
clickPlan(){
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').first().wait(3000).click({force:true});
}
clickDone(){
    cy.get(this.doneButt).wait(3000).click();
}
clickPlanCheckbox(){
    cy.get(this.planCheckbox).wait(3000).click();
}
    
clickMedicareBut(){
    cy.get(this.medicareBut).wait(3000).click();
}
/*clickBackBut(){
    cy.get(this.backBut).wait(3000).click();
}
/*clicklongTermBut(){
    cy.get(this.longTermBut).wait(2000).click();
}*/
clickAivanteLogo(){
    cy.get(this.aivanteLogo).wait(6000).click();
}






    /*cy.get(this.selectPlan).then(($el) => {
        cy.log('Number of elements found: ${$el.length}');
        console.log($el.length, $el);
      });
      cy.get(this.selectPlan).last().click();*/
      
}
  
      





export default PlanSelectionPage;