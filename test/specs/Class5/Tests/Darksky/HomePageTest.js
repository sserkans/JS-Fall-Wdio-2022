const HomePage = require("../../POM/Darksky/HomePage");

describe('HomePage Test Suite', () => {

    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {
    
    const HomePage = new HomePage();

    // 1. Launch https://www.darksky.net/
    await browser.url('https://www.darksky.net/');

    // 2. Get Temp Values 

   const feelsLikeTemp =  await HomePage.getTempValue(feelsLikeTempElement);
   const lowTemp = await HomePage.getTempValue(lowTempElement);
   const highTemp = await HomePage.getTempValue(highTempElement);

   

    });
    
});