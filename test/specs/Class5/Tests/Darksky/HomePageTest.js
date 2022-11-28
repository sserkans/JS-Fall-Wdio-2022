const HomePage = require("../../POM/Darksky/HomePage");
const strToNum = require("../../Utils/strToNum");
const { expect } = require('chai')


describe('HomePage Test Suite', () => {

    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
    
    const HomePage = new HomePage();
    const strToNum = new strToNum();

    // 1. Launch https://www.darksky.net/
    await browser.url('https://www.darksky.net/');

    // 2. Get Temp Values 

   const feelsLikeTemp =  await strToNum(HomePage.getTempValue(feelsLikeTempElement));
   const lowTemp = await strToNum(HomePage.getTempValue(lowTempElement));
   const highTemp = await strToNum(HomePage.getTempValue(highTempElement));

   // 3. Verify feelsLikeTempValue is in between lowTempValue and highTempValue
   if (lowTemp  <= feelsLikeTemp && feelsLikeTemp <= highTemp ){
        result = ''
        result = true
    } else {
        result = false
    }

    expect(result,'Feels like value is not in between Low and High Temp Value').to.be.true

    });
    
});