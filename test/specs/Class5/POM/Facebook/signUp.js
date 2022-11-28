const Commands = require('../Commands');

class signUp {

    commands = new Commands();

    //Locators for web-Elements on the LoginPage for SignUp form

     createNewAccountLocator = '=Create new account';
     signUpDayLocator = '//select[@id="day"]/option[@selected]';
     signUpMonthLocator = '//select[@id="month"]/option[@selected]';
     signUpYearLocator = '//select[@id="year"]/option[@selected]';

    // functions to interact with the web-Elements on the Sign Up form

    async clickCreateNewAccount() {
        await this.commands.clickWebElement(this.createNewAccountLocator);
    }

    async getDayValue() {
        await this.commands.getTextOfWebElement(this.signUpDayLocator);
    }

    async getMonthValue() {
        await this.commands.getTextOfWebElement(this.signUpMonthLocator);
    }

    async getYearValue() {
        await this.commands.getTextOfWebElement(this.signUpYearLocator);
    }

}
module.exports = signUp;