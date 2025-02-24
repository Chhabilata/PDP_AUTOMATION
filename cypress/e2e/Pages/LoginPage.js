class LoginPage{

    username = "#mat-input-0";
    password = "#mat-input-1";
    loginbutton = ".mat-button-wrapper";
    
    enterUsername(username){
        cy.get(this.username).type(username);
    }
    enterPassword(password){
        cy.get(this.password).type(password);
    }
    clickLoginBut(){
        cy.get(this.loginbutton).click();
    
    }
    
    
    }
    export default LoginPage;
    