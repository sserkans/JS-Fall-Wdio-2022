const Commands = require("../Commands")

class messengerPage {

    commands = new Commands();

    // Locator for web-Elements for Messenger

    messengerLinkLocator = '=Messenger';
    keepMeSignedInLocator = 'input[type=checkbox]';
    loginButtonLocator = 'button[name=login]';
    errorLinkLocator = '=Find your account and log in.';
    continueButtonLocator = 'button=Continue';
    keepMeSignedInLocator2 = 'span[class=""]';

     // functions to interact with the web-Elements on the Messenger

     async clickMessengerLink(){
        await this.commands.clickWebElement(this.messengerLinkLocator);

     }

     async isKeepMeSignedInSelected(){
        return await $(this.keepMeSignedInLocator).isSelected();
     }

     async clickLoginButton(){
        await this.commands.clickWebElement(this.loginButtonLocator);
     }

     async isErrorLinkDisplayed(){
        return await $(this.errorLinkLocator).isDisplayed();
     }
    
     async isContinueButtonEnable(){
        return await $(this.continueButtonLocator).isEnabled();
     }

     async clickKeepMeSignedInCheckbox(){
        await this.commands.clickWebElement(this.keepMeSignedInLocator2);
     }

}

module.exports = messengerPage;