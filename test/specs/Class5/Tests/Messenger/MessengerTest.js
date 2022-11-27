const messenger = require("../../POM/Messenger/Messenger");
const { expect } = require('chai');

describe('Messenger Test Suite', () => {

    it('Verify user gets error when submit empty login on messenger screen', async () => {

        const messenger = new messenger();

        // 1. Launch https://www.facebook.com/
        await browser.url('https://www.facebook.com/');

        // 2. Click Messenger
        await messenger.clickMessengerLink();

        // 3. Verify "Keep me signed in" is NOT selected
        expect(await messenger.isKeepMeSignedInSelected(), 'Keep me signed in is already selected').to.be.false;

        //4. Click "Log in" button

        await messenger.clickLoginButton();

        //5. Verify link (Find your account and log in.) is displayed
        expect( await messenger.isErrorLinkDisplayed(), 'Find your account and log in is NOT displayed').to.be.true;

        //6. Verify "Continue" button is enabled
        expect(await messenger.isContinueButtonEnable(), 'Continue Button is NOT enabled').to.be.true;

        //7. Click "Keep me signed in" checkbox

        await messenger.clickKeepMeSignedInCheckbox();

        //8. Verify "Keep me signed in" is selected

        expect(await messenger.isKeepMeSignedInSelected(), 'Keep me signed in is NOT selected').to.be.true;
        
    });
    
});