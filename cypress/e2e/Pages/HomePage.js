class HomePage{
    email="#mat-input-3";
    healthGrade=".mat-select-arrow.ng-tns-c216-10";
    sickHealth="#mat-option-7 > .mat-option-text";
    recommendationName="#mat-input-4";
    lifeExpectancy="#mat-input-5";
    dateOfBirth="#mat-input-6";
    gender="#mat-select-value-5";
    genderM="#mat-option-9 > .mat-option-text";
    tabaccoYes="#mat-radio-7 > .mat-radio-label";
    taxFiling="#mat-radio-9 > .mat-radio-label";
    street="#mat-input-7";
    zipCode="#mat-input-8"; 
    search=".mat-form-field-suffix > .mat-focus-indicator";
    magiTier="#mat-select-value-13";
    magiT16="#mat-option-19 > .mat-option-text";
    emailCom="#mat-input-9";
    contact="#mat-input-10";
    nextButt=".form-wrapper > .mat-raised-button";

    
         
    enterEmail(email){
        cy.get(this.email).type(email);
    }
    clickHealthgrade(){
        cy.get(this.healthGrade).click();
    }
        clickSick(){
        cy.get(this.sickHealth).wait(1000).click();
        }
    
    enterName(recommendationName){
        cy.get(this.recommendationName).type(recommendationName);
    }
    enterLifeexpectancy(lifeExpectancy){
        cy.get(this.lifeExpectancy).clear().type(lifeExpectancy).wait(1000);
    }
    clickDobB(){
        cy.get(this.dateOfBirth).click();
    }
    clickGender(){
        cy.get(this.gender).click();
    }
   clickMale(){
    cy.get(this.genderM).click();
   }
    clickTabacco(){
        cy.get(this.tabaccoYes).click();
    }
    clickTax(){
        cy.get(this.taxFiling).click();
    }
    enterStreet(street){
        cy.get(this.street).type(street);
    }
    enterZip(zipCode){
        cy.get(this.zipCode).type(zipCode).wait(1000);
    }
    clickSearch(){
        cy.get(this.search).click();
    }
    clickMagitier(){
        cy.get(this.magiTier).click();
    }
    clickmagi16(){
        cy.get(this.magiT16).click().wait(1000);
    } 
enterCommEmail(emailCom){
    cy.get(this.emailCom).type(emailCom);
}

enterContact(contact){
    cy.get(this.contact).type(contact).wait(1000);
}
   clickNext() {
    cy.get(this.nextButt).click();
   }



    }
    export default HomePage;