
const SignUp = require("../../POM/Facebook/SignUp");
const Dates = require("../../../Class5/Utils/Dates");
const { expect } = require("chai");

describe('SignUp Test Suite ', () => {


    it.only('Verify current date is displayed on Sign-Up form', async () => {
        
        const signUp = new SignUp();

        const dates = new Dates();
        

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        await browser.pause(3000);

        // 2. Click Create New Account button

        await signUp.clickCreateNewAccount();

        await browser.pause(3000);

        //3. To get Day Value from Birthday

        expect(await signUp.getDayValue(this.signUpDayLocator), 'error message').to.equal(dates.getCurrentDate());

        //4. to get Month Value from Birthday

        expect(await signUp.getMonthValue(this.signUpMonthLocator), 'error message').to.equal(dates.getCurrentMonthNameInShort());

        //5. to get year value from Birthday

        expect(await signUp.getYearValue(this.signUpYearLocator), 'error message').to.equal((dates.getCurrentYear()));
        
    });
    
});