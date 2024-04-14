import {pages, cloudPageActions, calculatorPageActions, emailEstimateActions,setEmailValue,sentEmail } from './../po/pages/index.js';

describe("Google Cloud Calculator - Smoke Tests", async () => {
  let totalCost;

  it("Should Search Google Cloud Pricing Calculator", async () => {
    await pages("cloudPage").open();
    await expect(browser).toHaveTitle("Cloud Computing Services | Google Cloud");
    await cloudPageActions();
  });
  
  it("Should Fill Calculator Inputs", async () => {
    await calculatorPageActions();
    totalCost = await pages("calculatorPage").calculatorEl.getTotalCost().getText();
    await emailEstimateActions();
  })

  it("Should Generate Email", async () => {
    await pages("emailPage").open();
    const copyMail = await pages("emailPage").emailPageGenerator.getElement("generatedEmail").getText();
    await setEmailValue();
    await pages("calculatorPage").calculatorEl.elements("emailInput").setValue(copyMail);
    await sentEmail();
    await pages("emailPage").switchWindow();
    const total = await pages("emailPage").emailPageGenerator.getElement("priceFromEmail").getText();
    //Compare prices
    const price = total.slice(24);
    const resultOfPrice = totalCost.includes(price);
    console.log(resultOfPrice);
    await browser.switchToFrame(null);
  })
});
