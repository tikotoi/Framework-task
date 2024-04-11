import { CloudPage } from "./google.cloud.page/cloud.page.js";
import { CalculatorPage } from "./google.cloud.page/calculator.page.js";
import { EmailPage } from "./email.page/emailgenerator.page.js";
import {cloudPageActions} from './../actions/cloudPage.action.js';
import {calculatorPageActions, emailEstimateActions, setEmailValue, sentEmail} from './../actions/calculatorPage.actions.js';
/**
 * @param {'cloudPage' | 'calculatorPage' | 'emailPage'} name
 * @returns {CloudPage | CalculatorPage | EmailPage }
 */

function pages(name) {
  const items = {
    cloudPage: new CloudPage(),
    calculatorPage: new CalculatorPage(),
    emailPage: new EmailPage(),
  };
  return items[name];
}

export {pages, cloudPageActions, calculatorPageActions, emailEstimateActions, setEmailValue, sentEmail};
