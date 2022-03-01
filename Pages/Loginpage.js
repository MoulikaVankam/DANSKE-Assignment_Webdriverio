class Loginpage{
    get userName() {return $('#user-name')};
    get password() {return $('#password')};
    get loginButton() {return $('#login-button')};

    enterUsername(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    };
    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    };
    clickOnLogin(){
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    };
};

module.exports = new Loginpage();