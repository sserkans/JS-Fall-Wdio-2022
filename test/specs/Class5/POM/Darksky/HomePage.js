const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)

    feelsLikeTempElement = '.feels-like-text';
    lowTempElement = '.low-temp-text';
    highTempElement = '.high-temp-text';

    // functions to interact with the web-Elements on the HomePage

    async getFeelsLikeTempValue(){
       return await this.commands.getTextOfWebElement('.feels-like-text');
    }

    async getLowTempValue(){
       return  await this.commands.getTextOfWebElement('.low-temp-text');
    }

    async getHighTempValue(){
       return await this.commands.getTextOfWebElement('.high-temp-text');
    }

    
    
    
}
module.exports = HomePage;