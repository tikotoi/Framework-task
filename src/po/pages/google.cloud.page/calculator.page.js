import { CalculatorComponent } from "../../components/cloud.component/calculator.component.js";
export class CalculatorPage {
  constructor() {
    this.calculatorEl = new CalculatorComponent();
  }
  async switchToFrame() {
    const iframe = await browser.findElements("css selector", "iframe");
    await browser.switchToFrame(iframe[0]);
    const iframe1 = await browser.findElements("css selector", "iframe");
    return await browser.switchToFrame(iframe1[0]);
  }

  async open(){
    return await browser.switchWindow('cloud.google.com/products/calculator-legacy');
  }
}
