class LandingPage{
    recommendationBut=".button-container > .mat-focus-indicator > .mat-button-wrapper";
    
    clickRecommendation(){
        cy.get(this.recommendationBut).click();
    }
    
    }
    export default LandingPage;