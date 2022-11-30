
const { expect } = require('chai');
const messengerPage = require('../../POM/Messenger/Messenger');

describe('Messenger Test Suite', () => {

    it('Verify user gets error when submit empty login on messenger screen', async () => {

        const msgrPage = new messengerPage();

        // 1. Launch https://www.facebook.com/
        await browser.url('https://www.facebook.com/');

        // 2. Click Messenger
        await msgrPage.clickMessengerLink();

        // 3. Verify "Keep me signed in" is NOT selected
        expect(await msgrPage.isKeepMeSignedInSelected(), 'Keep me signed in is already selected').to.be.false;

        //4. Click "Log in" button

        await msgrPage.clickLoginButton();

        //5. Verify link (Find your account and log in.) is displayed
        expect( await msgrPage.isErrorLinkDisplayed(), 'Find your account and log in is NOT displayed').to.be.true;

        //6. Verify "Continue" button is enabled
        expect(await msgrPage.isContinueButtonEnable(), 'Continue Button is NOT enabled').to.be.true;

        //7. Click "Keep me signed in" checkbox

        await msgrPage.clickKeepMeSignedInCheckbox();

        //8. Verify "Keep me signed in" is selected

        expect(await msgrPage.isKeepMeSignedInSelected(), 'Keep me signed in is NOT selected').to.be.true;
        
    });
    
});