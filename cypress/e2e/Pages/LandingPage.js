class LandingPage{

//recommRadioBut="#mat-radio-3 > .mat-radio-label";//Prescription Radio Button
//recommRadioBut="#mat-radio-2 > .mat-radio-label";//Recommendation Radio Button
//filterByEmail="#mat-input-2";           
//checkMark=".cdk-column-expand > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";
recommendationBut=".button-container > .mat-focus-indicator > .mat-button-wrapper";
    
/*clickRecomRadio(){
    cy.get(this.recommRadioBut).wait(2000).click();
}
enterByEmail(filterByEmail){
    cy.get(this.filterByEmail).type(filterByEmail);
}
clickCheckMark(){
    cy.get(this.checkMark).click();
}*/

clickRecommendation(){
cy.get(this.recommendationBut).click();
}
    
}
export default LandingPage;