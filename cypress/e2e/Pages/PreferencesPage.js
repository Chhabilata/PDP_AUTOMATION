class PreferencePage{
    Preferences="#mat-radio-11 > .mat-radio-label";
    nextBut=".preference-wrapper > .button-wrapper > .mat-focus-indicator";

clickPreferences(){
    cy.get(this.Preferences).click();
}
clickNext(){
    cy.get(this.nextBut).click();
}
}
export default PreferencePage;

