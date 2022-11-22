const { expect } = require("chai");

describe('Practice', () => {

    it('Verify temperature from DarkSky', async() => {
        
        
        /* 
        Manual testing steps:
        1. Launch https://www.darksky.net/
        2. Enter a zip code in the search box
        3. Click on search button
        4. Verify the 'feels like temp' value (without degree sign)
        */

        // Automation:
        // 1. Launch website
        await browser.url('https://www.darksky.net/');

        // 2. Find required webElement
        const searchBarField = await $('//input[@type="text"]');
        searchBarField.click();
        if(searchBarField.getText() !== ' ') {
            searchBarField == '';
            searchBarField.setValue("11214");
            const searchButtonClick = await $('//img[@alt="Search Button"]');
            searchButtonClick.click();
        }

        await browser.pause(2000);

        
        
    }); 

    it('Click on Search Button', async() => {

        /* 
            Manual testing steps:
            1. Launch https://www.darksky.net/
            2. Enter a zip code in the search box
            3. Click on search button
            4. Verify the 'feels like temp' value (without degree sign)
        */

        await browser.url('https://www.darksky.net/')
        const inputBox = await $('input[type=text]')
        await inputBox.setValue('07512')
        const searchButton = await $('//img[@alt="Search Button"]')
        await searchButton.click();

        const feelsLikeTempElement = await $('.feels-like-text');
        let feelsLikeTempValue = await feelsLikeTempElement.getText();
        console.log(`\n feelsLikeTempValue -> ${feelsLikeTempValue}\n`);

        /*
            26˚
            106˚
            6˚
            -6˚
            -26˚
            -100˚

            slice, substring, substr
        */
        const len = feelsLikeTempValue.length;
        feelsLikeTempValue = feelsLikeTempValue.substring(0, len-1);   // len=4 (lastIndex=3) (0,1,2)

        console.log(`\n feelsLikeTempValue -> ${feelsLikeTempValue}\n`);

    });

    it('Verify no gender error on Facebook SignUp', async () => {
        
        /**
         * 1. Launch facebook.com
         * 2. Click Create New Account button
         * 3. Enter Data (except the gender)
         * 4. Click Sign Up button
         * 5. Verify error is displayed -> Please choose a gender. You can change who can see this later.
         */
        // 1. Launch
        await browser.url('/');

        // 2. Click Create New Account
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // Enter data
        await $('//input[@aria-label="First name"]').setValue('FIRST');

        await $('//input[contains(@name , "last")]').setValue('LAST');

        await $('//input[@name="reg_email__"]').setValue('9898989898');

        await $('//input[contains(@id , "word_")]').setValue('abcd@1234');

        await $('//select[@title="Day"]').selectByVisibleText('20');

        await $('//select[contains(@name , "ay_m")]').selectByVisibleText('Mar');

        await $('//select[contains(@id , "ear")]').selectByVisibleText('1990'); 

        // Click Sign Up button
        // add code

        // 5. Verify error is displayed -> Please choose a gender. You can change who can see this later.
        const genderError = await $('div=Please choose a gender. You can change who can see this later.');
        const isGenderErrorDisplayed = await genderError.isDisplayed();
        expect(isGenderErrorDisplayed, '').to.be.true;


        const genderError2 = await $('div*=change who can');
        const genderErrorText = await genderError2.getText();
        expect(genderErrorText, 'Please choose a gender. You can change who can see this later.').to.equal();


    });
});

