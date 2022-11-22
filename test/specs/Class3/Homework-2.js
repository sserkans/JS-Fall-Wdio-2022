const { expect } = require("chai");
const { it } = require("mocha");
const  moment  = require("moment")

// Due date: Nov 21 (Mon)

/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
*/

it.only('Verify current date is displayed on Sign-Up form', async () => {

    // 1. Launch https://www.facebook.com/
    await browser.url('/');

    // 2. Click Create New Account button

    const createNewAccountButton = await $('=Create new account')
    await createNewAccountButton.click()

    //3. To get Day Value from Birthday

    const dayDropdown = await $('//select[@id="day"]/option[@selected]');
    const dayValue = await dayDropdown.getText();
    console.log(dayValue);

    //4. to get Month Value from Birthday

    const monthDropdown = await $('//select[@id="month"]/option[@selected]');
    const monthValue = await monthDropdown.getText();
    console.log(monthValue);

    //5. to get year value from Birthday

    const yearDropdown = await $('//select[@id="year"]/option[@selected]');
    const yearValue = await yearDropdown.getText();
    console.log(yearValue);

    //6. to get day / month / year value from using moment library

    const now = moment();
    const day = now.date();
    const month = now.format('MMM');
    const year = now.year();

    expect(yearValue,`Year value is NOT ${year}`).to.equal(`${year}`);
    expect(monthValue,`Month value is NOT ${month}`).to.equal(`${month}`);
    expect(dayValue,`Day value is NOT ${day}`).to.equal(`${day}`);

    await browser.pause(3000);
    
    
});


/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */

 it('Facebook Empty Login Form Error Message', async () => {

    // 1. Launch https://www.facebook.com/
    await browser.url('/');

    // 2. Click Log In button

    const logInButton = await $('button[data-testid=royal_login_button]')
    await logInButton.click()

    await browser.pause(3000);

    // 3. Verify error message

    const errorMessageWebElement = await $('._9ay7');
    const errorMessage = await errorMessageWebElement.getText();
    expect(errorMessage, '').to.equal('The email or mobile number you entered isn’t connected to an account. Find your account and log in.');

    await browser.pause(3000);
});


/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 * 
 */

it('Messenger screen error', async() => {

    // 1. Launch https://www.facebook.com/
    await browser.url('/');

    // 2. Click Messenger
    const messengerElement = await $('=Messenger')
    messengerElement.click();

    // 3. Verify "Keep me signed in" is NOT selected
    const keepMeSignedInButton = await $('input[name=persistent]');
    const keepMeSignedInButtonSelected = await keepMeSignedInButton.isSelected();
    expect(keepMeSignedInButtonSelected, 'Keep me signed in is already selected').to.be.false;

    //4. Click "Log in" button
    const logInButton = await $('button[name=login]');
    logInButton.click();

    //5. Verify link (Find your account and log in.) is displayed
    const linkText = await $('=Find your account and log in.')
    const linkIsDisplayed = await linkText.isDisplayed();
    expect(linkIsDisplayed,'(Find your account and log in.) is NOT displayed ').to.be.true;

    //6. Verify "Continue" button is enabled

    const continueButton = await $('button=Continue')
    const continueButtonIsEnabled = await continueButton.isEnabled();
    expect(continueButtonIsEnabled,'Continue Button is NOT enabled').to.be.true;
    await browser.pause(3000);


    //7. Click "Keep me signed in" checkbox

    const keepMeSignedInCheckBox = await $('span[class=""]');
    const keepMeSignedInClicked = await keepMeSignedInCheckBox.click();
    await browser.pause(3000);


    //8. Verify "Keep me signed in" is selected

    const keepMeSignedInCheckBox1 = await $('input[type=checkbox]')
    const keepMeSignedInSelected = await keepMeSignedInCheckBox1.isSelected();
    console.log(keepMeSignedInSelected);

    expect(keepMeSignedInSelected,'Keep me signed in is NOT selected').to.be.true;

    await browser.pause(10000);
    
});


/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 * 
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 * 
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 * 
 */

it('Darksky Test Case', async () => {

    // 1. Launch https://www.darksky.net/
    await browser.url('https://www.darksky.net/');


    const feelsLikeTempElement = await $('.feels-like-text');
    const feelsLike = await feelsLikeTempElement.getText();
    const feelsLikeValue = feelsLike.substring(0, (feelsLike.length-1));
    

    const lowTempElement = await $('.low-temp-text');
    const lowTemp = await lowTempElement.getText();
    const lowTempValue = lowTemp.substring(0, (lowTemp.length-1));
   

    const highTempElement = await $('.high-temp-text');
    const highTemp = await highTempElement.getText();
    const highTempValue = highTemp.substring(0, (highTemp.length-1));
    
    if (lowTempValue*1  <= feelsLikeValue*1 && feelsLikeValue*1 <= highTempValue*1 ){
        result = ''
        //console.log('Feels like value is in between Low and High Temp Value');
        result = true
    } else {
        //console.log('Feels like value is not in between Low and High Temp Value');
        result = false
    }

    expect(result,'Feels like value is not in between Low and High Temp Value').to.be.true

    //console.log(result);
  
    await browser.pause(3000);



    
});