import {pages, cloudPageActions, calculatorPageActions, emailEstimateActions,setEmailValue,sentEmail } from './../po/pages/index.js';

describe("Test suite 3", async () => {

  beforeEach(async () => {
    await pages("cloudPage").open();
  });

  it("Google Cloud Pricing Calculator", async () => {
    await cloudPageActions();
    await calculatorPageActions();
    const totalCost = await pages("calculatorPage").calculatorEl.getTotalCost().getText();
    await emailEstimateActions();
    await pages("emailPage").open();
    const  copyMail = await pages("emailPage").emailPageGenerator.getElement("generatedEmail").getText();
    await setEmailValue();
    await pages("calculatorPage").calculatorEl.elements("emailInput").setValue(copyMail);
    await sentEmail();
    await pages("emailPage").switchWindow();
    await browser.pause(5000);
    const total = await pages("emailPage").emailPageGenerator.getElement("priceFromEmail").getText();
    //Compare prices
    const price = total.slice(24);
    const resultOfPrice = totalCost.includes(price);
    console.log(resultOfPrice);
    await browser.switchToFrame(null);
  });
});
