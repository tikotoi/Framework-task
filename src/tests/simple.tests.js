import {pages} from './../po/pages/index.js';

describe("Test suite 3", async () => {

  beforeEach(async () => {
    await pages("cloudPage").open();
  });

  it("Google Cloud Pricing Calculator", async () => {
    //Search "Google Cloud Platform Pricing Calculator"
    await pages("cloudPage").cloudPageSearch.item("searchIcon").click();
    await pages("cloudPage").cloudPageSearch.item("searchInput").setValue("Google Cloud Platform Pricing Calculator");
    await pages("cloudPage").cloudPageSearch.item("seachBtn").click();
    await pages("cloudPage").cloudPageSearch.item("searchResult").waitForDisplayed();
    await pages("cloudPage").cloudPageSearch.item("searchResult").click();

    //Switch to iframe
    await pages("calculatorPage").switchToFrame();

    //Fill the form
    await pages("calculatorPage").calculatorEl.elements("numberOfInstances").setValue(4);
    await pages("calculatorPage").calculatorEl.dropdownIn("softwareIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("softwareOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("softwareOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("modelIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("modelOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("machineIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("machineOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("seriesIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("seriesOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("seriesOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("typeIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("typeOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("typeOpt").click();

    // Add GPUs 
    await pages("calculatorPage").calculatorEl.addGpuBtn().click();
    await pages("calculatorPage").calculatorEl.dropdownIn("gputypeIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("gputypeOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("gputypeOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("gpuNumberIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("gpuNumberOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("gpuNumberOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("localSsdIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("localSsdOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("localSsdOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("locationIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("locationOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("locationOpt").click();
    await pages("calculatorPage").calculatorEl.dropdownIn("usageIn").click();
    await pages("calculatorPage").calculatorEl.dropdownOpt("usageOpt").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.dropdownOpt("usageOpt").click();
    await pages("calculatorPage").calculatorEl.addToEstimateBtn().waitForDisplayed();
    await pages("calculatorPage").calculatorEl.addToEstimateBtn().click();
    await pages("calculatorPage").calculatorEl.getTotalCost().waitForDisplayed();
    const totalCost = await pages("calculatorPage").calculatorEl.getTotalCost().getText();
    console.log(totalCost);

    // Email Estimate
    await pages("calculatorPage").calculatorEl.emailModal().waitForDisplayed();
    await pages("calculatorPage").calculatorEl.emailModal().click();

    //Generate Email
    await pages("emailPage").open();
    const  copyMail = await pages("emailPage").emailPageGenerator.getElement("generatedEmail").getText();

    // Add Email to Calculator page 
    await pages("calculatorPage").open();
    await pages("calculatorPage").switchToFrame();
    await pages("calculatorPage").calculatorEl.elements("emailInput").waitForDisplayed();
    await pages("calculatorPage").calculatorEl.elements("emailInput").click();
    await pages("calculatorPage").calculatorEl.elements("emailInput").setValue(copyMail);
    await pages("calculatorPage").calculatorEl.sendEmail().waitForDisplayed();
    await pages("calculatorPage").calculatorEl.sendEmail().click();

    // Get prices from email
    await pages("emailPage").switchWindow();
    await browser.pause(5000);
    const total = await pages("emailPage").emailPageGenerator.getElement("priceFromEmail").getText();

    //Compare prices
    const price = total.slice(24);
    const resultOfPrice = totalCost.includes(price);
    
    await browser.switchToFrame(null);
  });

});
