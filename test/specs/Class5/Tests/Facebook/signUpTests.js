
const signUp = require("../../POM/Facebook/SignUp");
const Dates = require("../../../Class5/Utils/Dates");
const { expect } = require("chai");

describe('SignUp Test Suite ', () => {


    it.only('Verify current date is displayed on Sign-Up form', async () => {
        
        const signUp = new signUp();

        const Dates = new Dates();

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        await browser.pause(3000);

        // 2. Click Create New Account button

        await signUp.clickCreateNewAccount();

        //3. To get Day Value from Birthday

        expect(await signUp.getDayValue(signUpDayLocator), 'error message').to.equal(getCurrentDate());

        //4. to get Month Value from Birthday

        expect(await signUp.getMonthValue(signUpMonthLocator), 'error message').to.equal(getCurrentMonthNameInShort());

        //5. to get year value from Birthday

        expect(await signUp.getYearValue(signUpYearLocator), 'error message').to.equal(getCurrentYear());
        
    });
    
});