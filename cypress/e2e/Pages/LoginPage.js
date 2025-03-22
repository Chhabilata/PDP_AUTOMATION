class LoginPage {

    userNameEle = "#mat-input-0";
    passwordEle = "#mat-input-1";
    loginButtonEle = ".mat-button-wrapper";

    setUserName(username) {
        cy.get(this.userNameEle).type(username);
    }
    setPassword(password) {
        cy.get(this.passwordEle).type(password);
    }
    clickLoginBtn() {
        cy.get(this.loginButtonEle).click();
    }


}
export default LoginPage;
