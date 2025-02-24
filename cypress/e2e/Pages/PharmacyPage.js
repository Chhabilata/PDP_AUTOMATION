class PharmacyPage{
//backButPharmacy=".button-wrapper > .mat-focus-indicator";
selectPharmacy="#mat-checkbox-3 > .mat-checkbox-layout >";
nextButt=".selected-pharmacy > .button-wrapper";



/*clickBackBut(){
    cy.get(this.backButPharmacy).click();
}*/
clickPharmacy(){
    cy.get(this.selectPharmacy).first().wait(2000).click();
}
clickNext(){
    cy.get(this.nextButt).wait(2000).click();
}

}
export default PharmacyPage;