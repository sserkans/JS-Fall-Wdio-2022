const { expect } = require("chai");
const { it } = require("mocha");

describe('Homework-1', () => {

    it('Verify default no gender button is selected on Sign up page', async() => {
        /**
         * Steps:
         * 1. Launch facebook.com
         * 2. Click Create New Account
         * 3. Verify female-gender button is not selected
         * 4. Verify male-gender button is not selected
         * 5. Verify custom-gender button is not selected
         * 6. If female gender is NOT selected, then click on female gender radio button
         * 7. Verify female-gender button is selected
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Create New Account button
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // 3. Verify female-gender button is not selected
        const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

        // 4. Verify male-gender button is not selected
        const maleRadioButton = await $('input[value="2"]');
        const isMaleGenderSelected = await maleRadioButton.isSelected();
        expect(isMaleGenderSelected, 'Male gender is already selected').to.be.false;

        // 5. Verify custom-gender button is not selected
        const noGenderRadioButton = await $('input[value="-1"]');
        const noGenderSelected = await noGenderRadioButton.isSelected();
        expect(noGenderSelected, 'No gender is already selected').to.be.false;

        // 6. If female gender is NOT selected, then click on female gender radio button
            const femaleRadioButtonIsSelected = await $('input[value="1"]');
            if (femaleRadioButtonIsSelected.isSelected()){
                femaleRadioButtonIsSelected.click()
            };

            await browser.pause(7000);

        // 7. Verify female-gender button is selected
            const femaleRadioButtonSelected = await $('input[value="1"]');
            const femaleButtonSelected = await femaleRadioButtonSelected.isSelected();
            expect(femaleButtonSelected, 'Female gender is NOT selected').to.be.true;
    
    });

})