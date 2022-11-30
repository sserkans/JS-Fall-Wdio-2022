const Commands = require("../../POM/Commands");

class LoginPage {
    commands = new Commands();

    //Locators 

    oculusLocator = '=Oculus';
    instagramLocator = '=Instagram';
    portalLocator = '=Portal';
    metaPayLocator = '=Meta Pay';


    //Functions

    async clickOculusLink(){
        await this.commands.clickWebElement(this.oculusLocator);
    }

    async clickInstagramLink(){
        await this.commands.clickWebElement(this.instagramLocator);
    }

    async clickPortalLocator(){
        await this.commands.clickWebElement(this.portalLocator);
    }

    async clickMetaPayLocator(){
        await this.commands.clickWebElement(this.metaPayLocator);
    }
}

module.exports = LoginPage;