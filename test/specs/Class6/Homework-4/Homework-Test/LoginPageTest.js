const LoginPage = require("../Homework-POM/LoginPage");
const OculusPage = require("../Homework-POM/OculusPage");
const { expect } = require('chai');
const MetaPay = require("../Homework-POM/MetaPay");
const Commands = require("../../POM/Commands");



describe('Homework Test Cases', () => {

    it('TC-1: Oculus', async () => {

        const loginPage = new LoginPage();
        const oculusPage = new OculusPage();
        const command = new Commands();

        /**
         * TC-1
         * 1. Launch facebook.com
         * 2. Click on Oculus
         * 3. Verify Support tab is displayed
         * 4. Verify the Oculus page is launched in new window
         * 
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click on Oculus

        await loginPage.clickOculusLink();

        // connect browser with Oculus window

        await oculusPage.connectWithOculusWindow();

        await browser.pause(7000);

        // 3. Verify Support tab is displayed

        expect(await oculusPage.isSupportTabDisplayed(), 'Support Tab is NOT displayed').to.be.true;
        
        // 4. Verify the Oculus page is launched in new window
        const allHandles = await command.getHandles();
        expect(allHandles.length, '').to.equal(2);
        
    });

    it.only('TC-2 ', async () => {

        const loginPage = new LoginPage();
        const metaPay = new MetaPay();
        

        /**
         * TC-2
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Meta Pay
         * 6. Close all windows except 'Meta Pay' window
         * 7. Verify 'Using Meta Pay' is displayed
         * 8. Move mouse on 'Using Meta Pay'
         * 9. Verify 'Online Checkout' option is displayed
         */
        
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click on Instagram

        await loginPage.clickInstagramLink();
        await browser.pause(3000);

        // 3. Click on Portal

        await loginPage.clickPortalLocator();
        await browser.pause(3000);

        // 4. Click on Oculus

        await loginPage.clickOculusLink();
        await browser.pause(3000);

        // 5. Click on Meta Pay

        await loginPage.clickMetaPayLocator();
        await browser.pause(3000);

        // 6. Close all windows except 'Meta Pay' window

        await metaPay.closeWindowsExceptMetaPay();
        

        // 7. Verify 'Using Meta Pay' is displayed

        await metaPay.switchToMetaPay();
        expect(await metaPay.isMetaPayIsDisplayed(), 'Using Meta Pay is NOT displayed').to.be.true;
        await browser.pause(3000);

        // 8. Move mouse on 'Using Meta Pay'

        await metaPay.moveMouseOnMetaPay();
        await browser.pause(3000);

        // 9. Verify 'Online Checkout' option is displayed
        
        expect(await metaPay.isOnlineCheckoutIsDisplayed(), 'Online Checkout is NOT displayed').to.be.true;

        await browser.pause(3000);
    });


});