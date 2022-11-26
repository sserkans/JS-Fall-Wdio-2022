const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)

    feelsLikeTempElement = '.feels-like-text';
    lowTempElement = '.low-temp-text';
    highTempElement = '.high-temp-text';

    // functions to interact with the web-Elements on the HomePage

    async getTempValue(locator){
        await this.commands.getTextOfWebElement(locator);
    }

}
module.exports = HomePage;