const HomePage = require("../../POM/Darksky/HomePage");
const { expect } = require('chai');
const StrToNum = require("../../Utils/strToNum");


describe('HomePage Test Suite', () => {

    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
    
    const homePage = new HomePage();
    const strToNum = new StrToNum();

    // 1. Launch https://www.darksky.net/
    await browser.url('https://www.darksky.net/');

    // 2. Get Temp Values 

    const feelsLike = await homePage.getFeelsLikeTempValue();
    const lowTemp = await homePage.getLowTempValue();
    const highTemp = await homePage.getHighTempValue();

   // 3. Verify feelsLikeTempValue is in between lowTempValue and highTempValue
   if (lowTemp  <= feelsLike && feelsLike <= highTemp ){
        result = ''
        result = true
    } else {
        result = false
    }

    

    expect(result,'Feels like value is not in between Low and High Temp Value').to.be.true

    });
    
});