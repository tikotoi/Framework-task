import {CloudPage} from "./../po/pages/google.cloud.page/cloud.page.js";
import {CalculatorPage} from "./../po/pages/google.cloud.page/calculator.page.js";
import {EmailPage} from "./../po/pages/email.page/emailgenerator.page.js";
const cloudPage = new CloudPage();
const calculatorPage = new CalculatorPage();
const emailPage = new EmailPage();

describe("Test suite 3", async () => {

  beforeEach(async () => {
    await cloudPage.open();
  });

  it("Google Cloud Pricing Calculator", async () => {
    //Search "Google Cloud Platform Pricing Calculator"
    await cloudPage.cloudPageSearch.item("searchIcon").click();
    await cloudPage.cloudPageSearch.item("searchInput").setValue("Google Cloud Platform Pricing Calculator");
    await cloudPage.cloudPageSearch.item("seachBtn").click();
    await cloudPage.cloudPageSearch.item("searchResult").waitForDisplayed();
    await cloudPage.cloudPageSearch.item("searchResult").click();

    //Switch to iframe
    await calculatorPage.switchToFrame();

    //Fill the form
    await calculatorPage.calculatorEl.elements("numberOfInstances").setValue(4);
    await calculatorPage.calculatorEl.dropdownIn("softwareIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("softwareOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("softwareOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("modelIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("modelOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("machineIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("machineOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("seriesIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("seriesOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("seriesOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("typeIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("typeOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("typeOpt").click();

    // Add GPUs 
    await calculatorPage.calculatorEl.addGpuBtn().click();
    await calculatorPage.calculatorEl.dropdownIn("gputypeIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("gputypeOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("gputypeOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("gpuNumberIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("gpuNumberOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("gpuNumberOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("localSsdIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("localSsdOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("localSsdOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("locationIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("locationOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("locationOpt").click();
    await calculatorPage.calculatorEl.dropdownIn("usageIn").click();
    await calculatorPage.calculatorEl.dropdownOpt("usageOpt").waitForDisplayed();
    await calculatorPage.calculatorEl.dropdownOpt("usageOpt").click();
    await calculatorPage.calculatorEl.addToEstimateBtn().waitForDisplayed();
    await calculatorPage.calculatorEl.addToEstimateBtn().click();
    await calculatorPage.calculatorEl.getTotalCost().waitForDisplayed();
    const totalCost = await calculatorPage.calculatorEl.getTotalCost().getText();
    console.log(totalCost);

    // Email Estimate
    await calculatorPage.calculatorEl.emailModal().waitForDisplayed();
    await calculatorPage.calculatorEl.emailModal().click();

    //Generate Email
    await emailPage.open();
    const  copyMail = await emailPage.emailPageGenerator.getElement("generatedEmail").getText();

    // Add Email to Calculator page 
    await calculatorPage.open();
    await calculatorPage.switchToFrame();
    await calculatorPage.calculatorEl.elements("emailInput").waitForDisplayed();
    await calculatorPage.calculatorEl.elements("emailInput").click();
    await calculatorPage.calculatorEl.elements("emailInput").setValue(copyMail);
    await calculatorPage.calculatorEl.sendEmail().waitForDisplayed();
    await calculatorPage.calculatorEl.sendEmail().click();

    // Get prices from email
    await emailPage.switchWindow();
    await browser.pause(5000);
    const total = await emailPage.emailPageGenerator.getElement("priceFromEmail").getText();

    //Compare prices
    const price = total.slice(24);
    const resultOfPrice = totalCost.includes(price);
    console.log(resultOfPrice);
    
    await browser.switchToFrame(null);
  });

});
