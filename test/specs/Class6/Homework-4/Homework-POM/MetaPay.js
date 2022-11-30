const Commands = require("../../POM/Commands");

class MetaPay {
    commands = new Commands();

    // locators

    usingMetaPayLocator = '//div[@class="_9jpi"]//a[text()="Using Meta Pay"]';

    onlineCheckoutLocator = '//div[@class="_9jpl _9jp3"]//a[text()="Online Checkout"]';

    // functions

    async isMetaPayIsDisplayed() {
       return await $(this.usingMetaPayLocator).isDisplayed();
    }

    async isOnlineCheckoutIsDisplayed() {
        return await $(this.onlineCheckoutLocator).isDisplayed();
     }

    async closeWindowsExceptMetaPay(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (!title.startsWith('Meta Pay')) {
                await browser.closeWindow();
            }
        }
    }

    async switchToMetaPay(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Meta Pay:')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }


    async moveMouseOnMetaPay() {
       await this.commands.moveMouseOn(this.usingMetaPayLocator);
    }
}
module.exports = MetaPay;