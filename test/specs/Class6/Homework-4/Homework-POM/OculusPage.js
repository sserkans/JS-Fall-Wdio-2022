const Commands = require("../../POM/Commands");

class OculusPage {

    commands = new Commands();


    //Locators

    supportLocator = '//span[text()="Support"]';

    // Functions

    async isSupportTabDisplayed(){
       return await $(this.supportLocator).isDisplayed();

    }

   async connectWithOculusWindow(){
    const fbLoginHandle = await browser.getWindowHandle();
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            if (handle !== fbLoginHandle) {
                browser.switchToWindow(handle);
                break;
            }
        }
   }

}
module.exports = OculusPage;